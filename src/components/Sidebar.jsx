import { NavLink } from "react-router-dom"

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: "▦",
  },
  {
    name: "Students",
    path: "/students",
    icon: "👥",
  },
  {
    name: "Rooms & Capacity",
    path: "/rooms",
    icon: "🛏",
  },
  {
    name: "Fee Payments",
    path: "/fees",
    icon: "💳",
  },
  {
    name: "Complaints",
    path: "/complaints",
    icon: "ⓘ",
  },
  {
    name: "Visitors Log",
    path: "/visitors",
    icon: "👤",
  },
]

export default function Sidebar() {
  return (
    <aside className="
      fixed
      left-0
      top-0
      z-40
      h-screen
      w-60
      bg-gray-900
      text-white
      px-4
      py-6
    ">

      {/* Logo */}

      <div className="
        flex
        items-center
        gap-3
        px-2
        mb-8
      ">

        <div className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-blue-600
          text-xl
        ">
          🏢
        </div>

        <div>

          <h2 className="
            text-sm
            font-bold
            leading-tight
          ">
            Hostel Management
          </h2>

          <p className="
            mt-1
            text-xs
            text-gray-400
          ">
            Admin Portal
          </p>

        </div>

      </div>


      {/* Navigation */}

      <nav className="space-y-2">

        {links.map((link) => (

          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) => `
              flex
              items-center
              gap-3
              rounded-lg
              px-4
              py-3
              text-sm
              transition-colors

              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }
            `}
          >

            <span className="w-5 text-center">
              {link.icon}
            </span>

            <span>
              {link.name}
            </span>

          </NavLink>

        ))}

      </nav>

    </aside>
  )
}
