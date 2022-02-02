import Bloglist from "./components/Bloglist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="" element={<Bloglist />} />
          <Route path="/edit/:id" element={<div>Editor</div>} />
          <Route path="/create" element={<div>Create</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
