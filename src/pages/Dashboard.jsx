import { useEffect, useState } from "react"

import StatCard from "../components/StatCard"
import { getDashboard } from "../api/dashboard"


export default function Dashboard() {

  const [dashboard, setDashboard] = useState(null)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(null)


useEffect(() => {

  async function loadDashboard() {

    try {

      setLoading(true)

      const data = await getDashboard()

      setDashboard(data)

    } catch (error) {

      console.error(error)

      setError(error.message)

    } finally {

      setLoading(false)

    }

  }


  loadDashboard()

}, [])



  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {

    return (

      <div className="
        flex
        min-h-80
        items-center
        justify-center
      ">

        <div className="
          text-sm
          text-gray-500
        ">
          Loading dashboard...
        </div>

      </div>

    )

  }


  // =====================================================
  // ERROR
  // =====================================================

  if (error) {

    return (

      <div className="
        rounded-xl
        border
        border-red-200
        bg-red-50
        p-5
        text-red-700
      ">

        <h2 className="
          font-semibold
        ">
          Backend Connection Error
        </h2>

        <p className="
          mt-1
          text-sm
        ">
          {error}
        </p>

        <p className="
          mt-3
          text-xs
        ">
          Make sure FastAPI is running on
          port 8000.
        </p>

      </div>

    )

  }


  return (

    <div className="space-y-6">


      {/* =================================================
          PAGE HEADING
      ================================================= */}

      <div>

        <h2 className="
          text-lg
          font-semibold
          text-gray-900
        ">
          System Analytics
        </h2>

        <p className="
          mt-1
          text-sm
          text-gray-500
        ">
          Real-time occupancy, fee collection & visitor activity
        </p>

      </div>


      {/* =================================================
          STATISTICS
      ================================================= */}

      <div className="
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-2
        xl:grid-cols-3
      ">


        <StatCard
          icon="👥"
          value={dashboard.total_students}
          label="Total Students"
        />


        <StatCard
          icon="🛏"
          value={dashboard.total_rooms}
          label="Total Rooms"
        />


        <StatCard
          icon="✓"
          value={dashboard.full_rooms}
          label="Full Rooms"
        />


        <StatCard
          icon="🚪"
          value={dashboard.available_rooms}
          label="Available Rooms"
        />


        <StatCard
          icon="₹"
          value={`₹${dashboard.fees_collected.toLocaleString("en-IN")}`}
          label="Total Fees Collected"
          color="green"
        />


        <StatCard
          icon="⚠"
          value={`₹${dashboard.pending_fees.toLocaleString("en-IN")}`}
          label="Pending Fees"
          color="red"
        />

      </div>


      {/* =================================================
          LOWER SECTION
      ================================================= */}

      <div className="
        grid
        grid-cols-1
        gap-5
        lg:grid-cols-2
      ">


        {/* =================================================
            ROOM OCCUPANCY
        ================================================= */}

        <div className="
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-6
          shadow-sm
        ">

          <div className="
            mb-6
            flex
            items-center
            justify-between
          ">

            <h2 className="
              text-base
              font-semibold
              text-gray-900
            ">
              🏢 Room Occupancy Breakdown
            </h2>

          </div>


          <div className="
            flex
            flex-col
            items-center
            gap-8
            sm:flex-row
          ">


            {/* Occupancy circle */}

            <div className="
              flex
              h-40
              w-40
              shrink-0
              items-center
              justify-center
              rounded-full
              border-[18px]
              border-blue-600
              border-r-blue-100
            ">

              <strong className="
                text-2xl
                text-gray-900
              ">
                {dashboard.occupancy_percentage}%
              </strong>

            </div>


            {/* Occupancy details */}

            <div className="
              space-y-4
              text-sm
            ">


              <p>
                🔵 Full Rooms:

                <strong className="ml-2">
                  {dashboard.full_rooms}
                </strong>

              </p>


              <p>
                🟢 Available Rooms:

                <strong className="ml-2">
                  {dashboard.available_rooms}
                </strong>

              </p>


              <p className="text-gray-500">

                Total Capacity:

                <strong className="
                  ml-2
                  text-gray-700
                ">
                  {dashboard.total_capacity}
                </strong>

              </p>


              <p className="text-gray-500">

                Occupied Beds:

                <strong className="
                  ml-2
                  text-gray-700
                ">
                  {dashboard.total_occupied}
                </strong>

              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            FEE COLLECTION
        ================================================= */}

        <div className="
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-6
          shadow-sm
        ">


          <div className="
            mb-6
            flex
            items-center
            justify-between
          ">

            <h2 className="
              text-base
              font-semibold
              text-gray-900
            ">
              💰 Fee Collection Status
            </h2>

          </div>


          <div className="
            text-3xl
            font-bold
            text-emerald-600
          ">
            {dashboard.collection_rate}%
          </div>


          <p className="
            mt-1
            text-sm
            text-gray-500
          ">
            Collection Rate
          </p>


          {/* Progress bar */}

          <div className="
            mt-5
            h-2.5
            overflow-hidden
            rounded-full
            bg-gray-200
          ">

            <div
              className="
                h-full
                rounded-full
                bg-emerald-500
                transition-all
              "
              style={{
                width: `${dashboard.collection_rate}%`,
              }}
            />

          </div>


          {/* Fee information */}

          <div className="
            mt-6
            space-y-3
            text-sm
          ">


            <div className="
              flex
              justify-between
            ">

              <span className="text-gray-500">
                Total Expected
              </span>

              <strong>
                ₹{dashboard.total_expected.toLocaleString("en-IN")}
              </strong>

            </div>


            <div className="
              flex
              justify-between
            ">

              <span className="text-gray-500">
                Collected
              </span>

              <strong className="text-emerald-600">
                ₹{dashboard.fees_collected.toLocaleString("en-IN")}
              </strong>

            </div>


            <div className="
              flex
              justify-between
            ">

              <span className="text-gray-500">
                Pending
              </span>

              <strong className="text-red-600">
                ₹{dashboard.pending_fees.toLocaleString("en-IN")}
              </strong>

            </div>


          </div>

        </div>

      </div>

    </div>

  )

}
