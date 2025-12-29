import { useNavigate } from "react-router-dom"

function Navbar(){
  const navigate = useNavigate();
  const gotohom = ()=> navigate("/")
  const gotoabout = ()=> navigate("About")
    return <>
    <nav className="bg-white/95 backdrop-blur-md px-8 py-4 flex justify-between items-center border-b border-black/10 sticky top-0 z-[100]">
  {/* Logo */}
  <div className="text-[1.8rem] font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
    Logo
  </div>

  {/* Nav Links */}
 <ul className="flex list-none gap-6 items-center">
  < li onClick={gotohom}>
    <a
      href="#"
      className="relative px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-indigo-600 hover:shadow-lg hover:scale-105"
      
    >
      Home
    </a>
  </li>
  <li onClick={gotoabout}>
    <a
      href="#"
      className="relative px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-indigo-600 hover:shadow-lg hover:scale-105"
    >
      About Us
    </a>
  </li>
</ul>

  {/* Profile Pic */}
  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:scale-110">
    P
  </div>
</nav>

    </>
}
export default Navbar