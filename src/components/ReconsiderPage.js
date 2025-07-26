import React, { useState, useEffect } from 'react';

export default function ReconsiderPage({ onBack, onYes }) {
  const [noClicks, setNoClicks] = useState(0);

  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #f6e7fa 0%, #ffd6e0 100%)';
    document.body.style.fontFamily = "'Pacifico', cursive";
    return () => {
      document.body.style.background = '';
      document.body.style.fontFamily = '';
    };
  }, []);

  const handleNo = () => setNoClicks(noClicks + 1);
  const handleYes = () => onYes();

  const yesSize = 36 + noClicks * 10;
  const noSize = Math.max(36 - noClicks * 8, 16);
  const sadSize = 64 + noClicks * 4;

  return (
    <div style={styles.container}>
      <h2 style={styles.sad}>😢 Oh no, Revanth is sad now... <img src={process.env.PUBLIC_URL + '/images/sad.png'} alt="sad" style={{ width: sadSize, verticalAlign: 'middle', marginLeft: 16 }} /></h2>
      <p style={styles.subtitle}>Do you want to reconsider?</p>
      <div>
        <button style={{ ...styles.button, fontSize: yesSize }} onClick={handleYes}>Yes</button>
        <button style={{ ...styles.button, fontSize: noSize }} onClick={handleNo}>No</button>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', marginTop: '15vh', fontFamily: 'inherit' },
  sad: { color: '#e75480', fontSize: '2.5rem', fontFamily: 'inherit' },
  subtitle: { fontSize: '2rem', marginBottom: 40 },
  button: { background: '#e75480', color: 'white', padding: '16px 40px', border: 'none', borderRadius: 40, margin: 16, cursor: 'pointer', fontFamily: 'inherit', transition: 'font-size 0.2s' }
};