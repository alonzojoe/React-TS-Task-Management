import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateTask from "./pages/Tasks/CreateTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="create" element={<CreateTask />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
