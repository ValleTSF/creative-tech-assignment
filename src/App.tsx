import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
