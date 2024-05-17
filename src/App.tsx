import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { Menu } from "./pages/Menu"; // Import the Menu component

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} /> {/* Redirect to Menu */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/users" element={<Users />} />
        {/* Add a route for the game later */}
      </Routes>
    </div>
  );
}
