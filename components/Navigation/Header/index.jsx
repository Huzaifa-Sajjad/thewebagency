import { useContext } from 'react';
import { useRouter } from 'next/router';
import { DrawerContext } from '@/context/drawerContext';
import { HeaderButton } from '@/components/Button';
import NavLink from '@/components/NavLink';

function Header() {
  const router = useRouter();
  const { openDrawer } = useContext(DrawerContext);

  const handleLinkClick = () => {
    router.push('/contact');
  };

  return (
    <div
      className='lg:container lg:mx-auto xs:pt-7 lg:pt-20 spacing'
      id='header'
    >
      <div className='flex items-center justify-between'>
        <div className='text-16 text-primary font-medium letterspacing'>
          <NavLink target='/'>The Web Agency</NavLink>
        </div>
        <div className='xs:hidden lg:block'>
          <ul className='flex items-center navList'>
            <li>
              <NavLink target='/about'>About</NavLink>
            </li>
            <li>
              <NavLink target='/work'>Work</NavLink>
            </li>
            <li>
              <HeaderButton handleClick={handleLinkClick}>Contact</HeaderButton>
            </li>
          </ul>
        </div>
        <div
          className='xs:block lg:hidden flex items-center py-1 px-2 shadow-xl'
          onClick={openDrawer}
        >
          <svg
            version='1.1'
            id='Capa_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384.97 384.97'
            fill='#111111'
            className='xs:h-6 w-auto'
          >
            <g>
              <g id='Menu_1_'>
                <path
                  d='M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
			c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z'
                />
                <path
                  d='M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
			S379.58,180.455,372.939,180.455z'
                />
                <path
                  d='M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
			c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z'
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
