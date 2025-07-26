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
      <h1 style={styles.title}>
        🌟 Will you go on a date with <span style={styles.highlight}>Revanth</span>? 🌟
      </h1>
      <p style={styles.subtitle}>Swipe right, choose wisely 😏</p>

      <div style={styles.buttonContainer}>
        <button style={styles.yes} onClick={onYes}>Yes, let's do it! 💖</button>
        <button style={styles.no} onClick={handleNo}>No, sorry 😅</button>
      </div>

      <img
        src={process.env.PUBLIC_URL + '/images/flowers.png'}
        alt="flowers"
        style={styles.flowers}
      />
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '5vh 5vw',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: 'clamp(1.5rem, 6vw, 2.6rem)',
    marginBottom: '1.5rem',
    lineHeight: 1.3,
  },
  highlight: {
    color: '#e75480',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 4vw, 1.4rem)',
    marginBottom: '2.5rem',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2.5rem',
  },
  yes: {
    background: '#e75480',
    color: 'white',
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    padding: '12px 28px',
    border: 'none',
    borderRadius: '36px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  no: {
    background: '#eee',
    color: '#e75480',
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    padding: '12px 28px',
    border: 'none',
    borderRadius: '36px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  flowers: {
    width: '100%',
    maxWidth: '320px',
    height: 'auto',
    margin: '0 auto',
    display: 'block',
    opacity: 0.97,
  },
};
