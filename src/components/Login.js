import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { magic } from '../magic';

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
