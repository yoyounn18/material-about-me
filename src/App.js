import React from 'react';
import './App.css';
import Main from './components/Main';
import TechStack from './components/TechStack';
import Profile from './components/Profile';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <Main />
      <Profile />
      <TechStack />
      <Project />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
