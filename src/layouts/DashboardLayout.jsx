import { Outlet } from "react-router-dom"

import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

export default function DashboardLayout() {

  return (
    <div className="
      min-h-screen
      bg-gray-100
    ">

      <Sidebar />


      <div className="
        min-h-screen
        pl-0
        md:pl-60
      ">

        <Topbar />

        <main className="p-5 md:p-8">

          <Outlet />

        </main>

      </div>

    </div>
  )
}
