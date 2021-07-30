import { useState, useContext } from "react";
import Drawer from "../../Drawer";
import Link from "next/link";
import { MouseContext } from "../../../context/mouseContext";

function Header() {
  const [drawer, setDrawer] = useState(false);
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);

  return (
    <div className="lg:container lg:mx-auto xs:pt-4 lg:pt-20 px-4 " id="header">
      <div className="flex items-center justify-between">
        <div className="text-16 text-primary font-medium letterspacing">
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
                <button
                  onMouseEnter={setHoverCursor}
                  onMouseLeave={setNormalCursor}
                  className="bg-primary text-white px-9 py-3 letterspacing cursor-none"
                >
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="xs:block lg:hidden flex items-center py-1 px-2 shadow-xl"
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
