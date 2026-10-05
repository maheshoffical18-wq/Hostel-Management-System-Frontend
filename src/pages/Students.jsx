import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import { getStudents } from "../api/students"


export default function Students() {

  const [students, setStudents] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(null)


useEffect(() => {

  async function loadStudents() {

    try {

      setLoading(true)

      const data = await getStudents()

      setStudents(data)

    } catch (error) {

      console.error(error)

      setError(error.message)

    } finally {

      setLoading(false)

    }

  }


  loadStudents()

}, [])



  if (loading) {

    return (
      <div className="text-sm text-gray-500">
        Loading students...
      </div>
    )

  }


  if (error) {

    return (
      <div className="
        rounded-xl
        bg-red-50
        p-5
        text-red-700
      ">
        {error}
      </div>
    )

  }


  return (

    <div className="space-y-6">


      {/* Heading */}

      <div className="
        flex
        items-center
        justify-between
      ">

        <div>

          <h2 className="
            text-lg
            font-semibold
            text-gray-900
          ">
            Registered Students
          </h2>

          <p className="
            mt-1
            text-sm
            text-gray-500
          ">
            Manage hostel students and room assignments
          </p>

        </div>


        <Link
          to="/students/add"
          className="
            rounded-lg
            bg-blue-600
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            hover:bg-blue-700
          "
        >
          + Add Student
        </Link>

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

        <div className="overflow-x-auto">

          <table className="
            w-full
            min-w-[800px]
            text-left
          ">

            <thead className="
              bg-gray-50
            ">

              <tr>

                <th className="
                  px-5
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                ">
                  Name
                </th>


                <th className="
                  px-5
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                ">
                  Register No
                </th>


                <th className="
                  px-5
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                ">
                  Department
                </th>


                <th className="
                  px-5
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                ">
                  Year
                </th>


                <th className="
                  px-5
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
                  px-5
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                ">
                  Phone
                </th>

              </tr>

            </thead>


            <tbody className="
              divide-y
              divide-gray-100
            ">

              {students.map((student) => (

                <tr
                  key={student.id}
                  className="hover:bg-gray-50"
                >

                  <td className="
                    px-5
                    py-4
                    text-sm
                    font-semibold
                    text-gray-900
                  ">
                    {student.name}
                  </td>


                  <td className="
                    px-5
                    py-4
                    text-sm
                    text-gray-600
                  ">
                    {student.register}
                  </td>


                  <td className="
                    px-5
                    py-4
                    text-sm
                    text-gray-600
                  ">
                    {student.department}
                  </td>


                  <td className="
                    px-5
                    py-4
                    text-sm
                    text-gray-600
                  ">
                    {student.year}
                  </td>


                  <td className="px-5 py-4">

                    <span className="
                      rounded-full
                      bg-emerald-100
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-emerald-700
                    ">
                      Room {student.room}
                    </span>

                  </td>


                  <td className="
                    px-5
                    py-4
                    text-sm
                    text-gray-600
                  ">
                    {student.phone}
                  </td>

                </tr>

              ))}


              {students.length === 0 && (

                <tr>

                  <td
                    colSpan="6"
                    className="
                      px-5
                      py-10
                      text-center
                      text-sm
                      text-gray-500
                    "
                  >
                    No students found.
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
