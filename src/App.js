import './App.css';
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Content from './components/Content';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Content/>
      <Navbar/>
    </div>
  );
};

export default App;
