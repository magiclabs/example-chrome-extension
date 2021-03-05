/* 1️⃣ Install Magic SDK */
var script = document.createElement('script');
script.src = './magic.js';
document.head.appendChild(script);

window.addEventListener('load', async () => {
  /* 2️⃣ Initialize Magic Instance */
  let magic = new Magic('pk_test_3F8F2B46C789AB90');

  /* 3️⃣ Implement Render Function */
  const render = async () => {
    const isLoggedIn = await magic.user.isLoggedIn();

    if (!isLoggedIn) {
      /* Show login form if user is not logged in */
      let html = `
            <h1>Please sign up or login</h1>
            <form id="form">
              <input id="email" type="email" name="email" value="" placeholder="Enter your email" />
              <button type="submit">Send</button>
            </form>
          `;

      document.getElementById('app').innerHTML = html;

      let form = document.getElementById('form');
      form.addEventListener('submit', (e) => {
        handleLogin(e);
      });

      /* 4️⃣ Implement Login Handler */
      const handleLogin = async (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const email = document.getElementById('email').value;
        alert(JSON.stringify(email));
        if (email) {
          /* One-liner login 🤯 */
          await magic.auth.loginWithMagicLink({ email });
          render();
        }
      };
    } else {
      /* Get user metadata including email */
      const userMetadata = await magic.user.getMetadata();
      let html = `
        <h1>Current user: ${userMetadata.email}</h1>
        <button id="logout">Logout</button>
      `;

      document.getElementById('app').innerHTML = html;

      let logout = document.getElementById('logout');
      logout.addEventListener('click', () => {
        handleLogout();
      });

      /* 5️⃣ Implement Logout Handler */
      const handleLogout = async () => {
        await magic.user.logout();
        render();
      };
    }
  };
  render();
});
