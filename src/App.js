// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/protectedroute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
