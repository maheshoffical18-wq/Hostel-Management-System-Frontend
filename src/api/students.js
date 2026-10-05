import { api } from "./client"


export async function getStudents() {
  return api.get("/students")
}


export async function addStudent(student) {
  return api.post("/students", student)
}


export async function updateStudent(id, student) {
  return api.put(`/students/${id}`, student)
}


export async function deleteStudent(id) {
  return api.delete(`/students/${id}`)
}
