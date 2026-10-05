import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import DashboardLayout from "./layouts/DashboardLayout"

import Dashboard from "./pages/Dashboard"
import Students from "./pages/Students"
import AddStudent from "./pages/AddStudent"
import Rooms from "./pages/Rooms"
import Fees from "./pages/Fees"
import Complaints from "./pages/Complaints"
import Visitors from "./pages/Visitors"


export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          element={<DashboardLayout />}
        >

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/students"
            element={<Students />}
          />

          <Route
            path="/students/add"
            element={<AddStudent />}
          />

          <Route
            path="/rooms"
            element={<Rooms />}
          />

          <Route
            path="/fees"
            element={<Fees />}
          />

          <Route
            path="/complaints"
            element={<Complaints />}
          />

          <Route
            path="/visitors"
            element={<Visitors />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  )
}
