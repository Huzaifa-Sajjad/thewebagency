import { useContext } from "react";
import Link from "next/link";
import { MouseContext } from "@/context/mouseContext";
import { DrawerContext } from "@/context/drawerContext";

function Header() {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);
  const { openDrawer } = useContext(DrawerContext);

  return (
    <div
      className="lg:container lg:mx-auto xs:pt-7 lg:pt-20 spacing"
      id="header"
    >
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
          onClick={openDrawer}
        >
          <i className="fi-rr-menu-burger text-2xl"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
