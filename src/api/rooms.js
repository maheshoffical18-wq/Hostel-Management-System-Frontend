import { api } from "./client"


export async function getRooms() {
  return api.get("/rooms")
}
