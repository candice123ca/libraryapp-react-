import logo from './logo.svg';
import './App.css';
import LibraryIndex from './components/LibraryIndex';
import LibrarySearch from './components/LibrarySearch';
import LibraryDelete from './components/LibraryDelete';
import LibraryView from './components/LibraryView';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LibraryIndex/>}/>
        <Route path='/d' element={<LibrarySearch/>}/>
        <Route path='/e' element={<LibraryDelete/>}/>
        <Route path='/f' element={<LibraryView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
