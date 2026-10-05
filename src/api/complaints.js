import { api } from "./client"


export async function getComplaints() {
  return api.get("/complaints")
}


export async function updateComplaint(id, data) {
  return api.put(`/complaints/${id}`, data)
}
