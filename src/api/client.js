const API_BASE_URL = import.meta.env.VITE_API_URL


async function request(endpoint, options = {}) {

  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    }
  )


  if (!response.ok) {

    let message = "Something went wrong"

    try {
      const data = await response.json()
      message = data.detail || message
    } catch {
      // Response wasn't JSON
    }

    throw new Error(message)
  }


  return response.json()
}


export const api = {

  get: (endpoint) =>
    request(endpoint),

  post: (endpoint, data) =>
    request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  put: (endpoint, data) =>
    request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (endpoint) =>
    request(endpoint, {
      method: "DELETE",
    }),

}
