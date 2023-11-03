import HomePage from './pages/HomePage/HomePage';
import BattlePage from './pages/BattlePage/BattlePage';
import './App.scss';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<HomePage />} />
          <Route path="/battle" element= {<BattlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
