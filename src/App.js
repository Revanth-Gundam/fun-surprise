import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ReconsiderPage from './components/ReconsiderPage';
import DateFormPage from './components/DateFormPage';
import ThankYouPage from './components/ThankYouPage';

function App() {
  const [page, setPage] = useState('landing');
  const [formData, setFormData] = useState(null);

  return (
    <>
      {page === 'landing' && <LandingPage onYes={() => setPage('dateform')} onNo={() => setPage('reconsider')} />}
      {page === 'reconsider' && <ReconsiderPage onBack={() => setPage('landing')} onYes={() => setPage('dateform')} />}
      {page === 'dateform' && <DateFormPage onSubmit={data => { setFormData(data); setPage('thankyou'); }} />}
      {page === 'thankyou' && <ThankYouPage />}
    </>
  );
}

export default App;