import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import ReadSubject from '../pages/readSubject';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/readsubject/:id" element={<ReadSubject />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
