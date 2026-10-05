import { api } from "./client"


export async function getVisitors() {
  return api.get("/visitors")
}
