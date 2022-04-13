import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
<<<<<<< HEAD
import { BrowserRouter, Routes } from 'react-router-dom';

=======
import LocationDetailPage from './pages/LocationDetailPage';

/*
  / -> index page -> HomePage
  /hotel-detail -> LocationDetailPage
*/
>>>>>>> 1283fe7969a6f2df79f48100f2aa93bfef2b66bc

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel-detail/:hotelId" element={<LocationDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
