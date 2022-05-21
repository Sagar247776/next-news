import React from "react";
import Image from "next/image";
function NavBar() {
  return (
    <div>
      <div className="head">
        <div>
          <Image src="/logo.png" alt="Vercel Logo" width={100} height={34} />
        </div>
        <div>
          <form>
            <input
              placeholder="Search for topics & Sources"
              required
              type="text"
              name="Search"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
