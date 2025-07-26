import React, { useEffect } from 'react';
import { reject } from '../api';

export default function LandingPage({ onYes, onNo }) {
  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #ffd6e0 0%, #f6e7fa 100%)';
    document.body.style.fontFamily = "'Pacifico', cursive";
    return () => {
      document.body.style.background = '';
      document.body.style.fontFamily = '';
    };
  }, []);

  const handleNo = async () => {
    if (!localStorage.getItem('rejectedOnce')) {
      await reject();
      localStorage.setItem('rejectedOnce', 'true');
    }
    onNo();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌟 Will you go on a date with <span style={{ color: '#e75480' }}>Revanth</span>? 🌟</h1>
      <p style={styles.subtitle}>Swipe right, choose wisely 😏</p>
      <div>
        <button style={styles.yes} onClick={onYes}>Yes, let's do it! 💖</button>
        <button style={styles.no} onClick={handleNo}>No, sorry 😅</button>
      </div>
      <img src={process.env.PUBLIC_URL + '/images/flowers.png'} alt="flowers" style={styles.flowers} />
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', marginTop: '8vh', fontFamily: 'inherit', position: 'relative', minHeight: '80vh', paddingBottom: '80px' },
  title: { fontSize: '2.6rem', marginBottom: 28, fontFamily: 'inherit' },
  subtitle: { fontSize: '1.4rem', marginBottom: 48 },
  yes: { background: '#e75480', color: 'white', fontSize: 26, padding: '14px 38px', border: 'none', borderRadius: 36, marginRight: 24, cursor: 'pointer', fontFamily: 'inherit' },
  no: { background: '#eee', color: '#e75480', fontSize: 26, padding: '14px 38px', border: 'none', borderRadius: 36, cursor: 'pointer', fontFamily: 'inherit' },
  flowers: { position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', width: '400px', maxWidth: '90vw', opacity: 0.98, zIndex: 0 }
};


