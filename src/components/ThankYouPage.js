import React, { useEffect } from 'react';

export default function ThankYouPage() {
  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #ffe5ec 0%, #f6e7fa 100%)';
    document.body.style.fontFamily = "'Pacifico', cursive";
    return () => {
      document.body.style.background = '';
      document.body.style.fontFamily = '';
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>💖 Thank you! 💖</h1>
      <p style={styles.text}>
        Your date request has been sent to Revanth!<br />
        Get ready for a magical time ✨<br />
        <span style={{ fontSize: 60 }}>🥰</span>
      </p>
      <p style={styles.footer}>P.S. Revanth will DM you on Insta soon! <img src={process.env.PUBLIC_URL + '/images/fire_in_eyes.png'} alt="fire" style={{ width: 60, verticalAlign: 'middle', marginLeft: 12 }} /></p>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', marginTop: '15vh', fontFamily: 'inherit' },
  title: { color: '#e75480', fontSize: '4rem', fontFamily: 'inherit' },
  text: { fontSize: '2.2rem', margin: '40px 0' },
  footer: { color: '#e75480', fontSize: '1.7rem', marginTop: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }
};