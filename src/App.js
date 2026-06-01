
import './App.css';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Employees from './Pages/Employees';
import Animals from './Pages/Animals';

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Router>
     <Nav/>
     <Routes>
      <Route path="/" excat Component={Home}/>
            <Route path="/anm" excat Component={Animals}/>
                  <Route path="/emp" excat Component={Employees}/>
                                   



     </Routes>
   </Router>

    </div>
  );
}

export default App;
