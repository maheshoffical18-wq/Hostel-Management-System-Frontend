import { useEffect, useState } from "react"
import { getComplaints } from "../api/complaints"


export default function Complaints() {

  const [complaints, setComplaints] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")


useEffect(() => {

  async function loadComplaints() {

    try {

      setLoading(true)

      const data = await getComplaints()

      setComplaints(data)

    } catch (error) {

      console.error(error)

      setError(error.message)

    } finally {

      setLoading(false)

    }

  }


  loadComplaints()

}, [])


  if (loading) {

    return (
      <div className="text-sm text-gray-500">
        Loading complaints...
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


  const pendingCount = complaints.filter(
    (complaint) =>
      complaint.status === "Pending"
  ).length


  const resolvedCount = complaints.filter(
    (complaint) =>
      complaint.status === "Resolved"
  ).length


  return (

    <div className="space-y-6">


      {/* Header */}

      <div>

        <h2 className="
          text-xl
          font-semibold
          text-gray-900
        ">
          Complaints
        </h2>

        <p className="
          mt-1
          text-sm
          text-gray-500
        ">
          Monitor student complaints and their resolution status.
        </p>

      </div>


      {/* Summary */}

      <div className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-3
      ">


        <div className="
          rounded-xl
          border
          border-gray-200
          bg-white
          p-5
          shadow-sm
        ">

          <p className="text-sm text-gray-500">
            Total Complaints
          </p>

          <p className="
            mt-2
            text-2xl
            font-bold
            text-gray-900
          ">
            {complaints.length}
          </p>

        </div>


        <div className="
          rounded-xl
          border
          border-yellow-200
          bg-yellow-50
          p-5
        ">

          <p className="
            text-sm
            text-yellow-700
          ">
            Pending
          </p>

          <p className="
            mt-2
            text-2xl
            font-bold
            text-yellow-700
          ">
            {pendingCount}
          </p>

        </div>


        <div className="
          rounded-xl
          border
          border-emerald-200
          bg-emerald-50
          p-5
        ">

          <p className="
            text-sm
            text-emerald-700
          ">
            Resolved
          </p>

          <p className="
            mt-2
            text-2xl
            font-bold
            text-emerald-700
          ">
            {resolvedCount}
          </p>

        </div>

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
            Student Complaints
          </h3>

          <p className="
            mt-1
            text-xs
            text-gray-500
          ">
            {complaints.length} Complaints
          </p>

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
                  Issue
                </th>

                <th className="
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  text-gray-500
                ">
                  Status
                </th>

              </tr>

            </thead>


            <tbody className="
              divide-y
              divide-gray-100
            ">

              {complaints.map((complaint) => (

                <tr
                  key={complaint.id}
                  className="hover:bg-gray-50"
                >

                  <td className="
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-gray-900
                  ">
                    {complaint.student}
                  </td>


                  <td className="
                    px-6
                    py-4
                    text-sm
                    text-gray-600
                  ">
                    {complaint.issue}
                  </td>


                  <td className="px-6 py-4">

                    {complaint.status === "Resolved" ? (

                      <span className="
                        rounded-full
                        bg-emerald-100
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-emerald-700
                      ">
                        Resolved
                      </span>

                    ) : (

                      <span className="
                        rounded-full
                        bg-yellow-100
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-yellow-700
                      ">
                        Pending
                      </span>

                    )}

                  </td>

                </tr>

              ))}


              {complaints.length === 0 && (

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
                    No complaints found.
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
