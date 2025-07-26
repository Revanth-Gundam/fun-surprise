import React, { useState, useEffect } from 'react';
import { submitDate } from '../api';

export default function DateFormPage({ onSubmit }) {
  const [form, setForm] = useState({ name: '', date: '', idea: '', insta: '' });
  const [pickForMe, setPickForMe] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  // 🔍 Robust screen size check
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const isMobile = /iPhone|Android|webOS|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || width < 768;
      setIsPhone(isMobile);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // 🎨 Styling
  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #ffe5ec 0%, #f9f6e7 100%)';
    document.body.style.fontFamily = "'Pacifico', cursive";
    return () => {
      document.body.style.background = '';
      document.body.style.fontFamily = '';
    };
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await submitDate({ ...form, idea: pickForMe ? 'Let Revanth pick!' : form.idea });
    onSubmit(form);
  };

  const s = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: isPhone ? '4vh 4vw' : '10vh 8vw',
      minHeight: '100vh',
      boxSizing: 'border-box',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'rgba(255,255,255,0.85)',
      borderRadius: 20,
      padding: isPhone ? 20 : 32,
      boxShadow: '0 4px 24px #e7548033',
      width: '100%',
      maxWidth: isPhone ? 360 : 500,
      marginBottom: isPhone ? 32 : 0,
    },
    title: {
      color: '#e75480',
      fontSize: isPhone ? '1.8rem' : '2.4rem',
      marginBottom: isPhone ? 20 : 30,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      lineHeight: 1.4,
    },
    emoji: {
      width: isPhone ? 48 : 80,
      margin: isPhone ? '12px 12px' : '0 28px',
    },
    input: {
      margin: 12,
      padding: isPhone ? 12 : 18,
      borderRadius: 20,
      border: '1.5px solid #e75480',
      width: '100%',
      fontSize: isPhone ? '1rem' : '1.2rem',
      fontFamily: 'inherit',
      boxSizing: 'border-box',
    },
    checkbox: {
      fontSize: isPhone ? '0.95rem' : '1.1rem',
      marginBottom: 14,
      alignSelf: 'flex-start',
    },
    button: {
      background: '#e75480',
      color: 'white',
      fontSize: isPhone ? '1.1rem' : '1.3rem',
      padding: isPhone ? '12px 26px' : '16px 36px',
      border: 'none',
      borderRadius: 30,
      marginTop: 24,
      cursor: 'pointer',
      fontFamily: 'inherit',
    },
    coffee: {
      width: isPhone ? 260 : 440,
      maxWidth: '90vw',
      borderRadius: 24,
      boxShadow: '0 2px 18px #e7548033',
      marginTop: isPhone ? 10 : 0,
      alignSelf: 'center',
    },
  };

  return (
    <div style={s.container}>
      <form style={s.form} onSubmit={handleSubmit}>
        <h2 style={s.title}>
          <span>Yay!</span>
          <img src={process.env.PUBLIC_URL + '/images/love_in_eyes.png'} alt="love" style={s.emoji} />
          Let's plan your date with Revanth 💌
        </h2>

        <input style={s.input} name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} />
        <input style={s.input} name="date" type="date" required value={form.date} onChange={handleChange} />
        <textarea style={s.input} name="idea" placeholder="Your date idea" value={form.idea} onChange={handleChange} disabled={pickForMe} />
        <div style={s.checkbox}>
          <label>
            <input type="checkbox" checked={pickForMe} onChange={e => setPickForMe(e.target.checked)} />
            Let Revanth pick the date idea!
          </label>
        </div>
        <input style={s.input} name="insta" placeholder="Your Instagram ID" required value={form.insta} onChange={handleChange} />
        <button style={s.button} type="submit">Submit 💌</button>
      </form>

      {/* Image always at the bottom */}
      <img src={process.env.PUBLIC_URL + '/images/coffee.png'} alt="coffee" style={s.coffee} />
    </div>
  );
}
