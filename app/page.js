import Users from "@/componentes/Users"
import Image from "next/image"

const REQRES_API = "https://reqres.in/api/users"

async function fetchUsers() {
  const resp = await fetch(REQRES_API)
  const users = await resp.json()
  return users.data
}

async function HomePage() {
  const users = await fetchUsers()
  return <Users users={users} />
}
export default HomePage
