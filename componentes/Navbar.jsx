import Link from "next/link"

function Navbar() {
  return (
    <nav className="bg-slate-500 mb-4 flex justify-between items-center px-20 p-4 font-bold text-slate-800">
      <Link href={"/"}>Home</Link>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
