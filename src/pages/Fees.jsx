import { useEffect, useState } from "react"
import { getFees } from "../api/fees"


export default function Fees() {

  const [fees, setFees] = useState(null)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")


useEffect(() => {

  async function loadFees() {

    try {

      setLoading(true)

      const data = await getFees()

      setFees(data)

    } catch (error) {

      console.error(error)

      setError(error.message)

    } finally {

      setLoading(false)

    }

  }


  loadFees()

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
        Loading fee information...
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


  return (

    <div className="space-y-6">


      {/* =================================================
          HEADER
      ================================================= */}

      <div>

        <h2 className="
          text-xl
          font-semibold
          text-gray-900
        ">
          Fee Payments
        </h2>

        <p className="
          mt-1
          text-sm
          text-gray-500
        ">
          Monitor fee collection and pending payments.
        </p>

      </div>


      {/* =================================================
          SUMMARY CARDS
      ================================================= */}

      <div className="
        grid
        grid-cols-1
        gap-5
        md:grid-cols-3
      ">


        {/* Collected */}

        <div className="
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-6
          shadow-sm
        ">

          <div className="
            flex
            items-center
            gap-4
          ">

            <div className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-blue-50
              text-xl
              text-blue-600
            ">
              ₹
            </div>


            <div>

              <p className="
                text-sm
                text-gray-500
              ">
                Fees Collected
              </p>

              <p className="
                mt-1
                text-2xl
                font-bold
                text-emerald-600
              ">
                ₹{fees.fees_collected.toLocaleString("en-IN")}
              </p>

            </div>

          </div>

        </div>


        {/* Pending */}

        <div className="
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-6
          shadow-sm
        ">

          <div className="
            flex
            items-center
            gap-4
          ">

            <div className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-red-50
              text-xl
              text-red-600
            ">
              ⚠
            </div>


            <div>

              <p className="
                text-sm
                text-gray-500
              ">
                Pending Fees
              </p>

              <p className="
                mt-1
                text-2xl
                font-bold
                text-red-600
              ">
                ₹{fees.pending_fees.toLocaleString("en-IN")}
              </p>

            </div>

          </div>

        </div>


        {/* Expected */}

        <div className="
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-6
          shadow-sm
        ">

          <div className="
            flex
            items-center
            gap-4
          ">

            <div className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-emerald-50
              text-xl
              text-emerald-600
            ">
              💰
            </div>


            <div>

              <p className="
                text-sm
                text-gray-500
              ">
                Total Expected
              </p>

              <p className="
                mt-1
                text-2xl
                font-bold
                text-gray-900
              ">
                ₹{fees.total_expected.toLocaleString("en-IN")}
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          COLLECTION PROGRESS
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
          flex
          items-center
          justify-between
        ">

          <div>

            <h3 className="
              font-semibold
              text-gray-900
            ">
              Fee Collection Progress
            </h3>

            <p className="
              mt-1
              text-sm
              text-gray-500
            ">
              Current collection rate
            </p>

          </div>


          <span className="
            text-2xl
            font-bold
            text-emerald-600
          ">
            {fees.collection_rate}%
          </span>

        </div>


        {/* Progress */}

        <div className="
          mt-6
          h-3
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
              duration-500
            "
            style={{
              width: `${fees.collection_rate}%`,
            }}
          />

        </div>


        {/* Details */}

        <div className="
          mt-5
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-3
        ">


          <div className="
            rounded-lg
            bg-gray-50
            p-4
          ">

            <p className="
              text-xs
              text-gray-500
            ">
              Expected
            </p>

            <p className="
              mt-1
              font-semibold
              text-gray-900
            ">
              ₹{fees.total_expected.toLocaleString("en-IN")}
            </p>

          </div>


          <div className="
            rounded-lg
            bg-emerald-50
            p-4
          ">

            <p className="
              text-xs
              text-emerald-700
            ">
              Collected
            </p>

            <p className="
              mt-1
              font-semibold
              text-emerald-700
            ">
              ₹{fees.fees_collected.toLocaleString("en-IN")}
            </p>

          </div>


          <div className="
            rounded-lg
            bg-red-50
            p-4
          ">

            <p className="
              text-xs
              text-red-700
            ">
              Pending
            </p>

            <p className="
              mt-1
              font-semibold
              text-red-700
            ">
              ₹{fees.pending_fees.toLocaleString("en-IN")}
            </p>

          </div>

        </div>

      </div>

    </div>

  )

}
