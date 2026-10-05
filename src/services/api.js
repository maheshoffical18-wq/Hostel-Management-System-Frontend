const API_URL = "http://localhost:8000/api"


async function request(endpoint, options = {}) {

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      ...options,

      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    }
  )


  if (!response.ok) {

    const error = await response.json()

    throw new Error(
      error.detail || "Something went wrong"
    )
  }


  return response.json()
}


export const api = {

  getDashboard() {
    return request("/dashboard/")
  },


  getStudents() {
    return request("/students/")
  },


  getRooms() {
    return request("/rooms/")
  },


  createStudent(data) {

    return request(
      "/students/",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )

  },

}
