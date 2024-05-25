import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border border-[#cccbcb]">
      <div className="flex py-3 mx-auto max-w-6xl justify-between items-center">
        <div className="text-lg font-bold">Book Data Listings </div>
        <div className="text-sm flex items-center gap-4">
          <div className="flex flex-col space-y-2">
            <div className="text-sm flex items-center gap-4">
              <div className="flex flex-col space-y-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  <Link to="/Signup" className="flex items-center gap-2">
                    <BiUser />
                    Signup
                  </Link>
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  <Link to="/Login" className="flex items-center gap-2">
                    <BiUser />
                    Login
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
