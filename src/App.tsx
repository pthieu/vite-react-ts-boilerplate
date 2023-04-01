import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import MainLayout from 'layouts/Main';
import Home from 'src/pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
