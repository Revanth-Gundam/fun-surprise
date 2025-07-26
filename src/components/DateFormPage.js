import React, { useState, useEffect } from 'react';
import { submitDate } from '../api';

export default function DateFormPage({ onSubmit }) {
  const [form, setForm] = useState({ name: '', date: '', idea: '', insta: '' });
  const [pickForMe, setPickForMe] = useState(false);

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

  return (
    <div style={styles.flexWrap}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}><span>Yay!</span> <img src={process.env.PUBLIC_URL + '/images/love_in_eyes.png'} alt="love" style={{ width: 80, verticalAlign: 'middle', marginLeft: 28, marginRight: 28 }} /> Let's plan your date with Revanth 💌</h2>
        <input style={styles.input} name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} />
        <input style={styles.input} name="date" type="date" required value={form.date} onChange={handleChange} />
        <textarea style={styles.input} name="idea" placeholder="Your date idea" value={form.idea} onChange={handleChange} disabled={pickForMe} />
        <div>
          <label>
            <input type="checkbox" checked={pickForMe} onChange={e => setPickForMe(e.target.checked)} />
            Let Revanth pick the date idea!
          </label>
        </div>
        <input style={styles.input} name="insta" placeholder="Your Instagram ID" required value={form.insta} onChange={handleChange} />
        <button style={styles.button} type="submit">Submit 💌</button>
      </form>
      <img src={process.env.PUBLIC_URL + '/images/coffee.png'} alt="coffee" style={styles.coffee} />
    </div>
  );
}

const styles = {
  flexWrap: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', minHeight: '80vh' },
  form: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh', fontFamily: 'inherit', background: 'rgba(255,255,255,0.8)', borderRadius: 24, padding: 32, boxShadow: '0 4px 24px #e7548033', zIndex: 1 },
  title: { color: '#e75480', marginBottom: 30, fontFamily: 'inherit', fontSize: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  input: { margin: 14, padding: 18, borderRadius: 24, border: '1.5px solid #e75480', width: 340, fontSize: 22, fontFamily: 'inherit' },
  button: { background: '#e75480', color: 'white', fontSize: 28, padding: '16px 40px', border: 'none', borderRadius: 40, marginTop: 28, cursor: 'pointer', fontFamily: 'inherit' },
  coffee: { width: 440, maxWidth: '95vw', marginLeft: 80, marginTop: 0, borderRadius: 30, boxShadow: '0 2px 18px #e7548033', alignSelf: 'center' }
};