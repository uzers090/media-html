import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Roundup from './pages/Roundup';
import Paraquat from './pages/Paraquat';
import AFFF from './pages/AFFF';
import PersonalInjury from './pages/PersonalInjury';
import DepoProvera from './pages/DepoProvera';
import NECBabyFormula from './pages/NECBabyFormula';
import ThankYou from './pages/Thankyou';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* <Header /> Added as a default navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roundup" element={<Roundup />} />
        <Route path="/paraquat" element={<Paraquat />} />
        <Route path="/afff" element={<AFFF />} />
        <Route path="/personal-injury" element={<PersonalInjury />} />
        <Route path="/depo-provera" element={<DepoProvera />} />
        <Route path="/nec-baby-formula" element={<NECBabyFormula />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;