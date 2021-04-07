# Quick Start Instructions

```txt
$ git clone https://github.com/magiclabs/example-chrome-extension.git
$ cd example-chrome-extension
$ mv .env.example .env // enter your Magic Publishable API key
$ yarn install
$ yarn build
```

Scroll down to "Running the App Locally" for instructions on how to upload your extension to your browser.

# Resources

View the example code [**here**](https://github.com/magiclabs/example-chrome-extension).

Try out the browser extension [**here**](https://chrome.google.com/webstore/detail/magic-chrome-extension/ealdjejebmabnecpgbahojanllhpjlef).

# Introduction

Maybe you want to allow users of your extension to have profiles, or maybe you want to charge for premuim features. This tutorial shows how you can integrate Magic passwordless authentication into a Chrome browser extension using React.

After clicking the browser extension icon and then the "login" button, the user will be directed to a full-page tab to complete the auth flow. After that, clicking the browser extension will show the user authenticated!

_Note: The new tab is required because if we had the login form inside the browser extension popup, as soon as the user navigated away to check their email for the link, the popup page would close and the auth flow would break._

## File Structure

Our application's file structure will look like this.

```txt
├── .env
├── build
├── README.md
├── package.json
├── public
│   ├── icon-purple.png
│   ├── index.html
│   └── manifest.json
├── src
│   ├── components
│   │   ├── App.js
│   │   ├── Loading.js
│   │   ├── Login.js
│   │   └── Profile.js
│   ├── index.js
│   ├── magic.js
│   └── styles.css
└── yarn.lock
```

The folder that we will be uploading to Chrome will be `build`, which after you run `yarn build` will look something like this.

```txt
├── build
│   ├── asset-manifest.json
│   ├── icon-purple.png
│   ├── index.html
│   ├── manifest.json
│   └── static
│       ├── css
│       │   ├── main.ee12e5fd.chunk.css
│       │   └── main.ee12e5fd.chunk.css.map
│       └── js
│           ├── 2.c16f79f9.chunk.js
│           ├── 2.c16f79f9.chunk.js.LICENSE.txt
│           ├── 2.c16f79f9.chunk.js.map
│           ├── main.bae666a1.chunk.js
│           ├── main.bae666a1.chunk.js.map
│           ├── runtime-main.33ea36a3.js
│           └── runtime-main.33ea36a3.js.map
```

# Building the App

The Magic React app boilerplate will be taken from the `Hello World (React)` template using the `npx make-magic` command.

```txt
$ npx make-magic
npx: installed 1 in 1.472s


 █▀▀ █▀█ █▀▀ ▄▀█ ▀█▀ █▀▀
 █▄▄ █▀▄ ██▄ █▀█  █  ██▄

 █▀▄▀█ ▄▀█ █▀▀ █ █▀▀
 █ ▀ █ █▀█ █▄█ █ █▄▄

 ▄▀█ █▀█ █▀█
 █▀█ █▀▀ █▀▀


Running scaffold create-magic-app

✔ What is your project named? · example-electron
✔ Choose a template: · hello-world-react
✔ Enter your Magic publishable API key: · pk_test_...
✔ Choose an NPM client: yarn
```

Since there's no redirect back to the chrome extension, go ahead and delete

1. the `redirectURI` parameter given to `loginWithMagicLink()`
2. the `/components/Callback.js` component
3. the `/callback` route in `App.js`

## Manifest.json

Every browser extension needs a [`manifest.json`](https://developer.chrome.com/docs/extensions/mv3/manifest/) file, which tells Chrome important information about your extension, such as your icons, permissions (tab controls, storage access, etc), which scripts should be loaded into users browser windows, and much more.

```json
{
  "name": "Magic Chrome Extension",
  "description": "Build a Chrome extension with Magic auth!",
  "version": "0.1.0",
  "manifest_version": 3,
  "action": {
    "default_popup": "index.html",
    "default_icon": {
      "16": "/icon-purple.png",
      "48": "/icon-purple.png",
      "128": "/icon-purple.png"
    }
  },
  "icons": {
    "16": "/icon-purple.png",
    "48": "/icon-purple.png",
    "128": "/icon-purple.png"
  }
}
```

## Login.js

A few changes need to be made to the `Login.js` component which was generated for us with the `npx make-magic` command. If the window is > 400 pixels wide, it's safe to assume the user is on the full page view, and if so, we'll display the full login form. Otherwise we are assuming the user is viewing in the actual extension popup, so we'll display a button to login, which will create a new full page tab with the login form.

```js
export default function Login() {
  const [email, setEmail] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isFullPage, setIsFullPage] = useState(false);
  const history = useHistory();

  /* Relying on the page width to tell if the user is viewing in the popup or full page */
  useEffect(() => {
    if (window.innerWidth > 400) setIsFullPage(true);
  }, []);

  /**
   * Perform login action via Magic's passwordless flow. Upon successuful
   * completion of the login flow, a user is redirected to the homepage.
   */
  const login = useCallback(async () => {
    setIsLoggingIn(true);

    try {
      await magic.auth.loginWithMagicLink({ email });
      history.push('/');
    } catch {
      setIsLoggingIn(false);
    }
  }, [email]);

  /**
   * Saves the value of our email input into component state.
   */
  const handleInputOnChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  return (
    <div className='container'>
      {!isFullPage ? (
        <button onClick={() => chrome.tabs.create({ url: 'index.html' })}>Login</button>
      ) : (
        <>
          <h1>Please sign up or login</h1>
          <input
            type='email'
            name='email'
            required='required'
            placeholder='Enter your email'
            onChange={handleInputOnChange}
            disabled={isLoggingIn}
          />
          <button onClick={login} disabled={isLoggingIn}>
            Send
          </button>
        </>
      )}
    </div>
  );
}
```

# Running the App Locally

You need to upload your `build` folder to Chrome to test your extension locally. Run the following command in your terminal to create the `build` folder.

```txt
yarn build
```

Next, visit `chrome://extensions` in your Chrome URL bar. Then toggle `Developer Mode` on in the top right.

Click "Load unpacked" and select your `build` folder. You should now see your Chrome extension in your browser! Test it out by clicking through and logging in.

## Potential Errors

You may run into an error such as

```
Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self'"...
```

Chrome has CSP settings to block certain scripts from being run. If you notice yourself running into this, make sure to include `INLINE_RUNTIME_CHUNK=false` in your `.env` file when running `yarn build`.

# Done

Your browser extension app is now secured with Magic! You can follow this link for instructions on how to publish your new extension to the Chrome Web Store https://developer.chrome.com/docs/webstore/publish/
