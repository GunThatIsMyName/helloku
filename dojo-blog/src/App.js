import Navbar from './Navbar';
import Home from './Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Create from './components/Create';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
