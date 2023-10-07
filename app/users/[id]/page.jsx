const REQRES_API = "https://reqres.in/api/users/"

async function getUser(id) {
  const resp = await fetch(`${REQRES_API}${id}`)
  const user = await resp.json()
  return user.data
}

async function UserPage({ params }) {
  const user = await getUser(params.id)
  return (
    <div className="bg-slate-400 p-10 rounded-md">
      <img src={user.avatar} alt="" />
      <h3>
        {user.id} - {user.first_name}
      </h3>
      <p>{user.email}</p>
    </div>
  )
}
export default UserPage
