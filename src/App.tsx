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
import TodayTasks from "./pages/Tasks/TodayTasks";
import Profile from "./pages/Profile/Profile";
import TaskList from "./pages/Tasks/TaskList";
import ProtectedRoutes from "./libs/guard/ProtectedRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="task" element={<Outlet />}>
                <Route index element={<TodayTasks />} />
                <Route path="create" element={<CreateTask />} />
                <Route path="lists" element={<TaskList />} />
              </Route>
              <Route path="Profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
