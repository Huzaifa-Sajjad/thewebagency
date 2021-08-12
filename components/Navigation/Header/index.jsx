import { useContext } from "react";
import { useRouter } from "next/router";
import { DrawerContext } from "@/context/drawerContext";
import { HeaderButton } from "@/components/Button";
import NavLink from "@/components/NavLink";

function Header() {
  const router = useRouter();
  const { openDrawer } = useContext(DrawerContext);

  const handleLinkClick = () => {
    router.push("/contact");
  };

  return (
    <div
      className="lg:container lg:mx-auto xs:pt-7 lg:pt-20 spacing"
      id="header"
    >
      <div className="flex items-center justify-between">
        <div className="text-16 text-primary font-medium letterspacing">
          <NavLink target="/">The Web Agency</NavLink>
        </div>
        <div className="xs:hidden lg:block">
          <ul className="flex items-center navList">
            <li>
              <NavLink target="/about">About</NavLink>
            </li>
            <li>
              <NavLink target="/work">Work</NavLink>
            </li>
            <li>
              <HeaderButton handleClick={handleLinkClick}>Contact</HeaderButton>
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
