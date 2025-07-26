import React, { useState, useEffect } from 'react';
import { submitDate } from '../api';

export default function DateFormPage({ onSubmit }) {
  const [form, setForm] = useState({ name: '', date: '', idea: '', insta: '' });
  const [pickForMe, setPickForMe] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set background and font
    document.body.style.background = 'linear-gradient(135deg, #ffe5ec 0%, #f9f6e7 100%)';
    document.body.style.fontFamily = "'Pacifico', cursive";

    // Detect if phone
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      document.body.style.background = '';
      document.body.style.fontFamily = '';
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await submitDate({ ...form, idea: pickForMe ? 'Let Revanth pick!' : form.idea });
    onSubmit(form);
  };

  const laptopStyles = {
    flexWrap: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', minHeight: '80vh' },
    form: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh', fontFamily: 'inherit', background: 'rgba(255,255,255,0.8)', borderRadius: 24, padding: 32, boxShadow: '0 4px 24px #e7548033', zIndex: 1 },
    title: { color: '#e75480', marginBottom: 30, fontFamily: 'inherit', fontSize: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    input: { margin: 14, padding: 18, borderRadius: 24, border: '1.5px solid #e75480', width: 340, fontSize: 22, fontFamily: 'inherit' },
    button: { background: '#e75480', color: 'white', fontSize: 28, padding: '16px 40px', border: 'none', borderRadius: 40, marginTop: 28, cursor: 'pointer', fontFamily: 'inherit' },
    coffee: { width: 440, maxWidth: '95vw', marginLeft: 80, marginTop: 0, borderRadius: 30, boxShadow: '0 2px 18px #e7548033', alignSelf: 'center' },
    emoji: { width: 80, verticalAlign: 'middle', marginLeft: 28, marginRight: 28 },
  };

  const mobileStyles = {
    flexWrap: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '6vh 4vw', minHeight: '90vh' },
    form: { display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.85)', borderRadius: 20, padding: 24, boxShadow: '0 4px 20px #e7548033', width: '100%', maxWidth: 400 },
    title: { color: '#e75480', marginBottom: 24, fontSize: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' },
    input: { margin: 12, padding: 14, borderRadius: 20, border: '1.5px solid #e75480', width: '100%', fontSize: '1.1rem', fontFamily: 'inherit' },
    button: { background: '#e75480', color: 'white', fontSize: '1.2rem', padding: '14px 30px', border: 'none', borderRadius: 30, marginTop: 24, cursor: 'pointer', fontFamily: 'inherit' },
    coffee: { width: 320, maxWidth: '90vw', marginTop: 32, borderRadius: 24, boxShadow: '0 2px 18px #e7548033' },
    emoji: { width: 60, marginTop: 12, marginBottom: 12 },
  };

  const s = isMobile ? mobileStyles : laptopStyles;

  return (
    <div style={s.flexWrap}>
      <form style={s.form} onSubmit={handleSubmit}>
        <h2 style={s.title}>
          <span>Yay!</span>
          <img src={process.env.PUBLIC_URL + '/images/love_in_eyes.png'} alt="love" style={s.emoji} />
          Let's plan your date with Revanth 💌
        </h2>
        <input style={s.input} name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} />
        <input style={s.input} name="date" type="date" required value={form.date} onChange={handleChange} />
        <textarea style={s.input} name="idea" placeholder="Your date idea" value={form.idea} onChange={handleChange} disabled={pickForMe} />
        <div style={{ fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: 14 }}>
          <label>
            <input type="checkbox" checked={pickForMe} onChange={e => setPickForMe(e.target.checked)} />
            Let Revanth pick the date idea!
          </label>
        </div>
        <input style={s.input} name="insta" placeholder="Your Instagram ID" required value={form.insta} onChange={handleChange} />
        <button style={s.button} type="submit">Submit 💌</button>
      </form>

      <img src={process.env.PUBLIC_URL + '/images/coffee.png'} alt="coffee" style={s.coffee} />
    </div>
  );
}
