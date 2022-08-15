import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Table from './Pages/Table';
import Info from './Pages/AddInfo';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar> </Navbar>
        <Routes>
          <Route path='/Home' exact element={<Home></Home>} />
          <Route path='/Table' element={<Table></Table>} />
          <Route path='/Info' element={<Info></Info>} />
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
