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

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '5vh 5vw',
      minHeight: '100vh',
      boxSizing: 'border-box',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'rgba(255,255,255,0.85)',
      borderRadius: 20,
      padding: 20,
      boxShadow: '0 4px 16px #e7548033',
      width: '100%',
      maxWidth: 360,
      marginBottom: 28,
    },
    title: {
      color: '#e75480',
      fontSize: '1.6rem',
      marginBottom: 18,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      lineHeight: 1.4,
    },
    emoji: {
      width: 48,
      marginBottom: 6,
    },
    input: {
      margin: '10px 0',
      padding: '12px',
      borderRadius: 18,
      border: '1.5px solid #e75480',
      width: '100%',
      fontSize: '1rem',
      fontFamily: 'inherit',
    },
    checkbox: {
      fontSize: '0.95rem',
      margin: '12px 0',
      textAlign: 'left',
      width: '100%',
    },
    button: {
      background: '#e75480',
      color: 'white',
      fontSize: '1.1rem',
      padding: '12px 28px',
      border: 'none',
      borderRadius: 30,
      marginTop: 20,
      cursor: 'pointer',
      fontFamily: 'inherit',
    },
    coffee: {
      width: 260,
      maxWidth: '90vw',
      borderRadius: 20,
      boxShadow: '0 2px 12px #e7548033',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>
          <img src={process.env.PUBLIC_URL + '/images/love_in_eyes.png'} alt="love" style={styles.emoji} />
          Yay! Let’s plan your date with Revanth 💌
        </h2>

        <input
          style={styles.input}
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="date"
          type="date"
          required
          value={form.date}
          onChange={handleChange}
        />
        <textarea
          style={styles.input}
          name="idea"
          placeholder="Your date idea"
          value={form.idea}
          onChange={handleChange}
          disabled={pickForMe}
        />
        <div style={styles.checkbox}>
          <label>
            <input
              type="checkbox"
              checked={pickForMe}
              onChange={e => setPickForMe(e.target.checked)}
            />{' '}
            Let Revanth pick the date idea!
          </label>
        </div>
        <input
          style={styles.input}
          name="insta"
          placeholder="Your Instagram ID"
          required
          value={form.insta}
          onChange={handleChange}
        />
        <button style={styles.button} type="submit">Submit 💌</button>
      </form>

      <img
        src={process.env.PUBLIC_URL + '/images/coffee.png'}
        alt="coffee"
        style={styles.coffee}
      />
    </div>
  );
}
