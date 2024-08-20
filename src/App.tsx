import React,{Suspense} from 'react';
import './App.css';
import OurServices from './pages/Our services/Ourservices';
import Tamacina from './pages/Temacina/Tamacina';
import TermsAndConditions from './pages/GCU/TermsAndConditions';
import Gtsc from './pages/GTSC/Gtsc';
import PrivacyPolicyViewer from './Privacypolicy/PrivacyPolicyViewer';
import CookiesPolicy from './pages/CookiesPolicy/CookiesPolicy';
import VoyageDaffaireForms from './pages/VoyageDaffaire/VoyageDaffaireForms';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <VoyageDaffaireForms />
    </Suspense>
  );
}

export default App;
