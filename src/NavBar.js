import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [ linkData, setLinkData ] = useState([
    { id: 1, label: "My Jobs", to: "/my-jobs"},
    { id: 2, label: "New Job", to: "/new-job"},
    { id: 3, label: "Drivers", to: "/drivers"},
    { id: 4, label: "About", to: "/about"},
  ]);

  const [ toggleMobileMenu, setToggleMobileMenu ] = useState(false)

  const location = useLocation();

  return (
    <nav className="navbar bg-teal-700 font-semibold text-gray-200 text-xl">
      <div>
        <div className="max-w-5xl mx-auto ">
          <div className="flex justify-between items-center">

            <Link key="0" to="/" className="py-5">
              <div className="flex items-center pl-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                </svg>
                { location.pathname === "/" 
                  ? <span className="pl-3 text-yellow-100 hover:text-white">Hand2Move</span>
                  : <span className="pl-3 hover:text-white">Hand2Move</span>
                }
              </div>  
            </Link>

            <div className="hidden md:flex items-center space-x-5 pr-10">
              { linkData.map((link) => (
                location.pathname === link.to
                  ? <Link key={ link.id } to={ link.to } className="text-yellow-100 hover:text-white">{ link.label }</Link>
                  : <Link key={ link.id } to={ link.to } className="hover:text-white">{ link.label }</Link>
              ))}
            </div>
            <div className="md:hidden flex pr-10">
              <button onClick={() => setToggleMobileMenu(!toggleMobileMenu)} className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={ toggleMobileMenu ? 'hidden' : '' }>
        <div className="md:hidden flex flex-col items-center bg-gray-100 font-normal text-gray-500">
          { linkData.map((link) => (
            location.pathname === link.to
              ? <Link key={ link.id } to={ link.to } className="border-b-2 border-white py-1 text-gray-700 hover:text-gray-300">{ link.label }</Link>
              : <Link key={ link.id } to={ link.to } className="border-b-2 border-white py-1 hover:text-gray-300">{ link.label }</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
 
export default NavBar;