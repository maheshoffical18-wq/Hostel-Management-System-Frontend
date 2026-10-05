import { api } from "./client"


export async function getFees() {
  return api.get("/fees")
}
