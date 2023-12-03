import React from 'react'
import HomePage from './pages/HomePage'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import PoliciesPage from './pages/PoliciesPage';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/ourpolicies" element={<PoliciesPage />} />
      </Routes>
    </Router>
  )
}





export default App