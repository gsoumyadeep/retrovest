// frontend/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ScenarioSelect from './pages/ScenarioSelect';
import SimulationPage from './pages/SimulationPage';
import SummaryPage from './pages/SummaryPage';
import SignupPage from './pages/SignupPage';
import MarketAnalysis from './components/MarketAnalysis';
import SIPCalculator from './components/SIPCalculator';
import EducationPage from './components/EducationPage';
import Login from './pages/Login';
import RiskProfiler from './components/RiskProfiler';
import About from './pages/about';
<<<<<<< HEAD
import Footer from './components/Footer';
=======
import TimeMachine from './components/TimeMachine';
import AdvancedBenchmark from './components/Challenge';
>>>>>>> 95e656cc26953bd39b2cfe53272e3f9b38e3f19c

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/footer" element={<Footer />} />

        <Route path="/" element={<LandingPage />} />
=======
>>>>>>> 95e656cc26953bd39b2cfe53272e3f9b38e3f19c
        <Route path="/risk" element={<RiskProfiler />} />
        <Route path="/about" element={<About />} />
        <Route path="/time-machine" element={<ScenarioSelect />} />
        <Route path="/simulate/:scenarioId" element={<SimulationPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/market-analysis" element={<MarketAnalysis />} />
        <Route path="/sip-calculator" element={<SIPCalculator />} />
        <Route path="/education" element={<EducationPage />} />
<<<<<<< HEAD

=======
        <Route path="/time-machine-2" element={<TimeMachine />} />
        <Route path="/challenge" element={<AdvancedBenchmark />} />
>>>>>>> 95e656cc26953bd39b2cfe53272e3f9b38e3f19c
      </Routes>
      <Footer />

    </>
  );
}
