import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateTask from "./pages/Tasks/CreateTask";
import Lists from "./pages/Tasks/Lists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="task" element={<Outlet />}>
            <Route index element={<Lists />} />
            <Route path="create" element={<CreateTask />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
