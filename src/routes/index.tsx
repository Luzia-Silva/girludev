import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import ReadPost from '../pages/readPost';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/readpost/:id" element={<ReadPost />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
