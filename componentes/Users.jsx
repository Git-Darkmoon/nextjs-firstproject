import Link from "next/link"

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => {
        const { id, email, first_name, last_name, avatar } = user

        return (
          <Link key={id} href={`/users/${id}`}>
            <li className="bg-slate-400 flex justify-between gap-4 mb-2 p-4 rounded-md cursor-pointer">
              <div>
                <h5 className="text-gray-900 font-bold">
                  {id} - {first_name} {last_name}
                </h5>
                <p className="text-slate-100">Email: {email}</p>
              </div>
              <img
                className="rounded-full w-20"
                src={avatar}
                alt={first_name}
              />
            </li>
          </Link>
        )
      })}
    </ul>
  )
}
export default Users
