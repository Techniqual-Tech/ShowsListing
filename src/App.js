import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Showlist from "./pages/showslist";
import Summary from "./pages/summary";
import Book from './pages/bookingform';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Showlist/>}/>
        <Route path='/summary/:showId' element={<Summary/>}/>
        <Route path='/book' element={<Book/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
