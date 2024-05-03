import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Memos from './pages/Memos';
import CreateMemo from './pages/CreateMemo';
import EditMemo from './pages/EditMemo';
import dummyNotes from './dummy_notes';

import { useState } from 'react';

const App = () => {
    const [notes, setNotes] = useState(dummyNotes);

     return (
        <main id='app'>
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Memos notes={notes} />} />
              <Route path="/create-memo" element={<CreateMemo />} />
              <Route path="/edit-memo/:id" element={<EditMemo />} />
            </Routes>
            </BrowserRouter>
        </main> 
    );
}


export default App;