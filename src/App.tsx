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
import EditTask from "./pages/Tasks/EditTask";
import TodayTasks from "./pages/Tasks/TodayTasks";
import Profile from "./pages/Profile/Profile";
import TaskList from "./pages/Tasks/TaskList";
import Settings from "./pages/Settings/Settings";
import ProtectedRoutes from "./libs/guard/ProtectedRoutes";
import { TasksContextProvider } from "./store/tasks-context";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <TasksContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/home" element={<AppLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="task" element={<Outlet />}>
                  <Route index element={<TodayTasks />} />
                  <Route path="create" element={<CreateTask />} />
                  <Route path=":id/edit" element={<EditTask />} />
                  <Route path="lists" element={<TaskList />} />
                </Route>
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </TasksContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
