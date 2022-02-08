import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { magic } from '../magic';
import Loading from './Loading';

export default function Callback() {
  const history = useHistory();

  useEffect(() => {
    magic.oauth.getRedirectResult().then((result) => {
      console.log(result);
      history.push('/');
    });
  }, []);

  return <Loading />;
}
