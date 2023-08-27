import './App.css';
import Calculator from './components/Calculator';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <div className="margin-y-5">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
