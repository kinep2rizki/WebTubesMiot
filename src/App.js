import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/protectedroute";

function App() {
  return (
    <BrowserRouter basename="/WebTubesMiot">
      <Routes>
        <Route index element={<LoginPage />} />
        <Route
          path="dashboard"
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
