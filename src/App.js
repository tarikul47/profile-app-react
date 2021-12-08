import './App.css';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Profile></Profile>
      <Skills></Skills>
      <Education></Education>
      <Footer></Footer>
    </div>
  );
}

export default App;
