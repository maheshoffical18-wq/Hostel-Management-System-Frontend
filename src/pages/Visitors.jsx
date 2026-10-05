import { useEffect, useState } from "react"
import { getVisitors } from "../api/visitors"


export default function Visitors() {

  const [visitors, setVisitors] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")


useEffect(() => {

  async function loadVisitors() {

    try {

      setLoading(true)

      const data = await getVisitors()

      setVisitors(data)

    } catch (error) {

      console.error(error)

      setError(error.message)

    } finally {

      setLoading(false)

    }

  }


  loadVisitors()

}, [])



  if (loading) {

    return (
      <div className="text-sm text-gray-500">
        Loading visitors...
      </div>
    )

  }


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


  return (

    <div className="space-y-6">


      {/* Header */}

      <div>

        <h2 className="
          text-xl
          font-semibold
          text-gray-900
        ">
          Visitors Log
        </h2>

        <p className="
          mt-1
          text-sm
          text-gray-500
        ">
          View recent hostel visitors.
        </p>

      </div>


      {/* Visitor count */}

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
          Recent Visitors
        </p>

        <p className="
          mt-2
          text-2xl
          font-bold
          text-gray-900
        ">
          {visitors.length}
        </p>

      </div>


      {/* Table */}

      <div className="
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
      ">


        <div className="
          border-b
          border-gray-100
          px-6
          py-5
        ">

          <h3 className="
            font-semibold
            text-gray-900
          ">
            Visitors Log
          </h3>

        </div>


        <div className="overflow-x-auto">

          <table className="
            w-full
            min-w-[600px]
            text-left
          ">


            <thead className="bg-gray-50">

              <tr>

                <th className="
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  text-gray-500
                ">
                  Visitor Name
                </th>


                <th className="
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  text-gray-500
                ">
                  Student
                </th>


                <th className="
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  text-gray-500
                ">
                  Date
                </th>

              </tr>

            </thead>


            <tbody className="
              divide-y
              divide-gray-100
            ">

              {visitors.map((visitor) => (

                <tr
                  key={visitor.id}
                  className="hover:bg-gray-50"
                >

                  <td className="
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-gray-900
                  ">
                    {visitor.name}
                  </td>


                  <td className="
                    px-6
                    py-4
                    text-sm
                    text-gray-600
                  ">
                    {visitor.student}
                  </td>


                  <td className="px-6 py-4">

                    <span className="
                      rounded-full
                      bg-emerald-100
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-emerald-700
                    ">
                      {visitor.date}
                    </span>

                  </td>

                </tr>

              ))}


              {visitors.length === 0 && (

                <tr>

                  <td
                    colSpan="3"
                    className="
                      px-6
                      py-10
                      text-center
                      text-sm
                      text-gray-500
                    "
                  >
                    No visitors found.
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
