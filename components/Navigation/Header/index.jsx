import Drawer from "../../Drawer";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="lg:container lg:mx-auto pt-12" id="header">
      <div className="flex items-center justify-between">
        <div className="ld:text-xl md:text-lg text-black font-bold letterspacing">
          <Link href="/">thewebagency</Link>
        </div>
        <div className="xs:hidden lg:block">
          <ul className="flex items-center navList">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/contact">
                <button className="bg-primary text-white px-6 py-2 letterspacing">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="xs:block lg:hidden flex items-center"
          onClick={() => setDrawer(true)}
        >
          <i className="fi-rr-menu-burger text-2xl"></i>
        </div>
      </div>
      <Drawer isOpen={drawer} onClose={setDrawer} />
    </div>
  );
}

export default Header;
