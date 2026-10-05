import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


export default function AddStudent() {

  const navigate = useNavigate()


  const [rooms, setRooms] = useState([])

  const [loadingRooms, setLoadingRooms] = useState(true)

  const [submitting, setSubmitting] = useState(false)

  const [error, setError] = useState("")


  const [form, setForm] = useState({
    name: "",
    register: "",
    department: "",
    year: "",
    room: "",
    phone: "",
  })


  // =====================================================
  // LOAD ROOMS
  // =====================================================

  useEffect(() => {

    async function fetchRooms() {

      try {

        const response = await fetch(
          "http://127.0.0.1:8000/api/rooms"
        )


        if (!response.ok) {
          throw new Error("Failed to load rooms")
        }


        const data = await response.json()

        setRooms(data)

      } catch (err) {

        console.error(err)

        setError(
          "Unable to load available rooms."
        )

      } finally {

        setLoadingRooms(false)

      }

    }


    fetchRooms()

  }, [])


  // =====================================================
  // INPUT CHANGE
  // =====================================================

  function handleChange(event) {

    const { name, value } = event.target


    setForm({
      ...form,
      [name]: value,
    })

  }


  // =====================================================
  // SUBMIT
  // =====================================================

  async function handleSubmit(event) {

    event.preventDefault()

    setError("")

    setSubmitting(true)


    try {

      const response = await fetch(
        "http://127.0.0.1:8000/api/students",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(form),
        }
      )


      const data = await response.json()


      if (!response.ok) {

        throw new Error(
          data.detail || "Failed to add student"
        )

      }


      // Student created successfully

      navigate("/students")

    } catch (err) {

      console.error(err)

      setError(err.message)

    } finally {

      setSubmitting(false)

    }

  }


  // =====================================================
  // AVAILABLE ROOMS
  // =====================================================

  const availableRooms = rooms.filter(
    (room) =>
      room.occupied < room.capacity
  )


  return (

    <div className="max-w-3xl">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-6">

        <Link
          to="/students"
          className="
            text-sm
            text-blue-600
            hover:text-blue-700
          "
        >
          ← Back to Students
        </Link>


        <h2 className="
          mt-4
          text-xl
          font-semibold
          text-gray-900
        ">
          Add New Student
        </h2>


        <p className="
          mt-1
          text-sm
          text-gray-500
        ">
          Enter student details and assign a room.
        </p>

      </div>


      {/* =================================================
          FORM
      ================================================= */}

      <div className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        sm:p-8
      ">


        {/* Error */}

        {error && (

          <div className="
            mb-6
            rounded-lg
            border
            border-red-200
            bg-red-50
            px-4
            py-3
            text-sm
            text-red-700
          ">
            {error}
          </div>

        )}


        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          {/* =================================================
              NAME
          ================================================= */}

          <div>

            <label className="
              mb-2
              block
              text-sm
              font-medium
              text-gray-700
            ">
              Student Name
            </label>


            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter student name"
              required
              className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4
                py-2.5
                text-sm
                outline-none
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />

          </div>


          {/* =================================================
              REGISTER NUMBER
          ================================================= */}

          <div>

            <label className="
              mb-2
              block
              text-sm
              font-medium
              text-gray-700
            ">
              Register Number
            </label>


            <input
              type="text"
              name="register"
              value={form.register}
              onChange={handleChange}
              placeholder="Example: C4S22184"
              required
              className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4
                py-2.5
                text-sm
                uppercase
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />

          </div>


          {/* =================================================
              DEPARTMENT
          ================================================= */}

          <div>

            <label className="
              mb-2
              block
              text-sm
              font-medium
              text-gray-700
            ">
              Department
            </label>


            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              required
              className="
                w-full
                rounded-lg
                border
                border-gray-300
                bg-white
                px-4
                py-2.5
                text-sm
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            >

              <option value="">
                Select Department
              </option>

              <option value="BCA">
                BCA
              </option>

              <option value="BSc CS">
                BSc CS
              </option>

              <option value="BCom">
                BCom
              </option>

              <option value="BA">
                BA
              </option>

              <option value="BSc">
                BSc
              </option>

            </select>

          </div>


          {/* =================================================
              YEAR
          ================================================= */}

          <div>

            <label className="
              mb-2
              block
              text-sm
              font-medium
              text-gray-700
            ">
              Year
            </label>


            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              required
              className="
                w-full
                rounded-lg
                border
                border-gray-300
                bg-white
                px-4
                py-2.5
                text-sm
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            >

              <option value="">
                Select Year
              </option>

              <option value="1st Year">
                1st Year
              </option>

              <option value="2nd Year">
                2nd Year
              </option>

              <option value="3rd Year">
                3rd Year
              </option>

              <option value="4th Year">
                4th Year
              </option>

            </select>

          </div>


          {/* =================================================
              ROOM
          ================================================= */}

          <div>

            <label className="
              mb-2
              block
              text-sm
              font-medium
              text-gray-700
            ">
              Room
            </label>


            {loadingRooms ? (

              <div className="
                rounded-lg
                border
                border-gray-200
                bg-gray-50
                px-4
                py-3
                text-sm
                text-gray-500
              ">
                Loading rooms...
              </div>

            ) : availableRooms.length === 0 ? (

              <div className="
                rounded-lg
                border
                border-red-200
                bg-red-50
                px-4
                py-3
                text-sm
                text-red-700
              ">
                No rooms currently have available beds.
              </div>

            ) : (

              <select
                name="room"
                value={form.room}
                onChange={handleChange}
                required
                className="
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              >

                <option value="">
                  Select Available Room
                </option>


                {availableRooms.map((room) => (

                  <option
                    key={room.id}
                    value={room.room}
                  >

                    Room {room.room}
                    {" — "}
                    {room.capacity - room.occupied}
                    {" "}
                    {room.capacity - room.occupied === 1
                      ? "Bed"
                      : "Beds"}
                    {" Available"}

                  </option>

                ))}

              </select>

            )}

          </div>


          {/* =================================================
              PHONE
          ================================================= */}

          <div>

            <label className="
              mb-2
              block
              text-sm
              font-medium
              text-gray-700
            ">
              Phone Number
            </label>


            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
              className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4
                py-2.5
                text-sm
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />

          </div>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="
            flex
            items-center
            gap-3
            border-t
            border-gray-100
            pt-5
          ">

            <button
              type="submit"
              disabled={
                submitting ||
                availableRooms.length === 0
              }
              className="
                rounded-lg
                bg-blue-600
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                transition
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:bg-blue-300
              "
            >

              {submitting
                ? "Adding Student..."
                : "Add Student"}

            </button>


            <Link
              to="/students"
              className="
                rounded-lg
                border
                border-gray-300
                px-5
                py-2.5
                text-sm
                font-medium
                text-gray-700
                hover:bg-gray-50
              "
            >
              Cancel
            </Link>

          </div>

        </form>

      </div>

    </div>

  )
}
