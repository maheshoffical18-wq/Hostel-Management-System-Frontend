import { useEffect, useState } from "react"
import { getRooms } from "../api/rooms"


export default function Rooms() {

  const [rooms, setRooms] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")


  // =====================================================
  // LOAD ROOMS
  // =====================================================

useEffect(() => {

  async function loadRooms() {

    try {

      setLoading(true)

      const data = await getRooms()

      setRooms(data)

    } catch (error) {

      console.error(error)

      setError(error.message)

    } finally {

      setLoading(false)

    }

  }


  loadRooms()

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
        text-sm
        text-gray-500
      ">
        Loading rooms...
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
        text-sm
        text-red-700
      ">
        {error}
      </div>

    )

  }


  // =====================================================
  // CALCULATIONS
  // =====================================================

  const totalCapacity = rooms.reduce(
    (total, room) =>
      total + room.capacity,
    0
  )


  const totalOccupied = rooms.reduce(
    (total, room) =>
      total + room.occupied,
    0
  )


  const totalAvailable =
    totalCapacity - totalOccupied


  const fullRooms = rooms.filter(
    (room) =>
      room.occupied >= room.capacity
  ).length


  return (

    <div className="space-y-6">


      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <div>

        <h2 className="
          text-xl
          font-semibold
          text-gray-900
        ">
          Rooms & Capacity
        </h2>

        <p className="
          mt-1
          text-sm
          text-gray-500
        ">
          Monitor hostel room availability and occupancy.
        </p>

      </div>


      {/* =================================================
          SUMMARY CARDS
      ================================================= */}

      <div className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      ">


        {/* Total Rooms */}

        <div className="
          rounded-xl
          border
          border-gray-200
          bg-white
          p-5
          shadow-sm
        ">

          <p className="
            text-sm
            text-gray-500
          ">
            Total Rooms
          </p>

          <p className="
            mt-2
            text-2xl
            font-bold
            text-gray-900
          ">
            {rooms.length}
          </p>

        </div>


        {/* Total Capacity */}

        <div className="
          rounded-xl
          border
          border-gray-200
          bg-white
          p-5
          shadow-sm
        ">

          <p className="
            text-sm
            text-gray-500
          ">
            Total Capacity
          </p>

          <p className="
            mt-2
            text-2xl
            font-bold
            text-gray-900
          ">
            {totalCapacity}
          </p>

        </div>


        {/* Occupied */}

        <div className="
          rounded-xl
          border
          border-gray-200
          bg-white
          p-5
          shadow-sm
        ">

          <p className="
            text-sm
            text-gray-500
          ">
            Occupied Beds
          </p>

          <p className="
            mt-2
            text-2xl
            font-bold
            text-blue-600
          ">
            {totalOccupied}
          </p>

        </div>


        {/* Available */}

        <div className="
          rounded-xl
          border
          border-gray-200
          bg-white
          p-5
          shadow-sm
        ">

          <p className="
            text-sm
            text-gray-500
          ">
            Available Beds
          </p>

          <p className="
            mt-2
            text-2xl
            font-bold
            text-emerald-600
          ">
            {totalAvailable}
          </p>

        </div>

      </div>


      {/* =================================================
          ROOM TABLE
      ================================================= */}

      <div className="
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
      ">


        <div className="
          flex
          items-center
          justify-between
          border-b
          border-gray-100
          px-6
          py-5
        ">

          <div>

            <h3 className="
              font-semibold
              text-gray-900
            ">
              Room Availability
            </h3>

            <p className="
              mt-1
              text-xs
              text-gray-500
            ">
              Total Rooms: {rooms.length}
            </p>

          </div>


          <div className="
            rounded-full
            bg-gray-100
            px-3
            py-1
            text-xs
            text-gray-600
          ">
            {fullRooms} Full
          </div>

        </div>


        <div className="overflow-x-auto">

          <table className="
            w-full
            min-w-[700px]
            text-left
          ">


            {/* =================================================
                TABLE HEADER
            ================================================= */}

            <thead className="
              bg-gray-50
            ">

              <tr>

                <th className="
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                ">
                  Room
                </th>


                <th className="
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                ">
                  Capacity
                </th>


                <th className="
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                ">
                  Occupied
                </th>


                <th className="
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                ">
                  Available Beds
                </th>


                <th className="
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                ">
                  Occupancy
                </th>


                <th className="
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                ">
                  Status
                </th>

              </tr>

            </thead>


            {/* =================================================
                TABLE BODY
            ================================================= */}

            <tbody className="
              divide-y
              divide-gray-100
            ">

              {rooms.map((room) => {

                const available =
                  room.capacity - room.occupied


                const percentage =
                  room.capacity > 0
                    ? Math.round(
                        (room.occupied /
                          room.capacity) *
                        100
                      )
                    : 0


                const isFull =
                  room.occupied >=
                  room.capacity


                return (

                  <tr
                    key={room.id}
                    className="hover:bg-gray-50"
                  >


                    {/* Room */}

                    <td className="
                      px-6
                      py-4
                      text-sm
                      font-semibold
                      text-gray-900
                    ">

                      Room {room.room}

                    </td>


                    {/* Capacity */}

                    <td className="
                      px-6
                      py-4
                      text-sm
                      text-gray-600
                    ">

                      {room.capacity}

                    </td>


                    {/* Occupied */}

                    <td className="
                      px-6
                      py-4
                      text-sm
                      text-gray-600
                    ">

                      {room.occupied}

                    </td>


                    {/* Available */}

                    <td className="
                      px-6
                      py-4
                      text-sm
                      font-medium
                      text-gray-900
                    ">

                      {available}

                    </td>


                    {/* Occupancy */}

                    <td className="
                      px-6
                      py-4
                    ">

                      <div className="
                        flex
                        items-center
                        gap-3
                      ">

                        <div className="
                          h-2
                          w-24
                          overflow-hidden
                          rounded-full
                          bg-gray-200
                        ">

                          <div
                            className={`
                              h-full
                              rounded-full
                              ${
                                isFull
                                  ? "bg-red-500"
                                  : "bg-blue-500"
                              }
                            `}
                            style={{
                              width:
                                `${percentage}%`,
                            }}
                          />

                        </div>


                        <span className="
                          text-xs
                          text-gray-500
                        ">
                          {percentage}%
                        </span>

                      </div>

                    </td>


                    {/* Status */}

                    <td className="
                      px-6
                      py-4
                    ">

                      {isFull ? (

                        <span className="
                          rounded-full
                          bg-red-100
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-red-700
                        ">
                          Full
                        </span>

                      ) : (

                        <span className="
                          rounded-full
                          bg-emerald-100
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-emerald-700
                        ">
                          Available
                        </span>

                      )}

                    </td>

                  </tr>

                )

              })}


              {rooms.length === 0 && (

                <tr>

                  <td
                    colSpan="6"
                    className="
                      px-6
                      py-10
                      text-center
                      text-sm
                      text-gray-500
                    "
                  >
                    No rooms found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )

}
