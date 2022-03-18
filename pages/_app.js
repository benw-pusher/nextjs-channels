import '../styles/globals.css'
import Pusher from 'pusher-js';
import React, {useState, useEffect} from 'react'

function MyApp({ Component, pageProps }) {



  useEffect(() => {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher(process.env.NEXT_PUBLIC_APP_KEY, {
      authEndpoint: '/api/auth',
      cluster: process.env.NEXT_PUBLIC_APP_CLUSTER
    });




    const channel = pusher.subscribe('private-my-channel');
    channel.bind('my-event', function(data) {
      alert(JSON.stringify(data));
    });

      return () => {
        pusher.disconnect();
      };
    }, []);

    return <Component {...pageProps} />
}



export default MyApp
