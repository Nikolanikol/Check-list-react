
import {BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom'
import './App.css';
import CheckList from './pages/CheckList';
import NoteList from './pages/NoteList'

function App() {
    
  return (
    <div className="App">
        <BrowserRouter> 
            <div className='navbar'>
                <ul className='navbar-list'>
                    <li><Link to='/checklist'>Checklist</Link></li>
                    <li><Link to='/notelist'>Notelist</Link></li>
                </ul>
            </div>
            <Routes>
                <Route element = {<CheckList/>} path='/checklist'/>
                <Route element = {<NoteList/>} path='/notelist'/>
            </Routes>
        
        </BrowserRouter>

    </div>
  );
}

export default App;
