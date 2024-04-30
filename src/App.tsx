import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/List";
import Create from "./components/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/register" element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
