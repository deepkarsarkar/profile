import './App.css';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import AboutContainer from './molecules/AboutContainer';
import FooterContainer from './molecules/FooterContainer';
import TopContainer from './molecules/TopContainer';
import AppBarHeader from './components/AppBarHeader';

function App() {
  return (
    <div className="App">
      <AppBarHeader />
      <div className="mainContainer">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
