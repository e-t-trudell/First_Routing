import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        {/* each component below must have its own path */}
        <Route path='/' element={<Home />}/>
        <Route path='/number/:thing' element={<Number />}/>
        <Route path='/hello/:word/:display/:back' element={<Hello />}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
