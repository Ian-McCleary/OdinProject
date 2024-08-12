import './App.css';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';

function App() {

  console.log("app")
  return (
    <div className="App">
      <NavBar></NavBar>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
