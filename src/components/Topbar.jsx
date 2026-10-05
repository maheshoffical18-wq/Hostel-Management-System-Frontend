import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

const pageTitles = {
  "/": "Hostel Management System",
  "/students": "Student Management",
  "/students/add": "Add Student",
  "/rooms": "Rooms & Capacity",
  "/fees": "Fee Payments",
  "/complaints": "Complaints",
  "/visitors": "Visitors Log",
}

export default function Topbar() {

  const [currentDate, setCurrentDate] = useState(new Date())


  useEffect(() => {

    // Update the date every minute
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 60 * 1000)


    return () => clearInterval(interval)

  }, [])


  const formattedDate = currentDate.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  )

  const location = useLocation()

  const title =
    pageTitles[location.pathname] ||
    "Hostel Management System"

  return (
    <header className="
      flex
      min-h-16
      items-center
      justify-between
      border-b
      border-gray-200
      bg-white
      px-8
    ">

      <h1 className="
        text-xl
        font-bold
        text-gray-900
      ">
        {title}
      </h1>


      <div className="
        flex
        items-center
        gap-4
      ">

        <div className="
          hidden
          rounded-lg
          border
          border-gray-200
          bg-gray-50
          px-4
          py-2
          text-sm
          text-gray-600
          sm:block
        ">
          📅 {formattedDate}
        </div>


        <div className="
          flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-gray-700
        ">

          <span>👤</span>

          <span className="hidden sm:block">
            Admin Portal
          </span>

        </div>

      </div>

    </header>
  )
}
