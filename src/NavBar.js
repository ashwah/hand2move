import { useState } from 'react';
import { Link, link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [ linkData, setLinkData ] = useState([
    { id: 1, label: "Home", to: "/"},
    { id: 2, label: "My Jobs", to: "/my-jobs"},
    { id: 3, label: "New Job", to: "/new-job"},
    { id: 4, label: "Drivers", to: "/drivers"},
    { id: 5, label: "About", to: "/about"},
  ]);

  const location = useLocation();

  return (
    <nav className="navbar">
      <h1>Hand2Move</h1>
      {linkData.map((link) => (
        location.pathname == link.to
          ? <Link key={ link.id } to={ link.to } className="current">{ link.label }</Link>
          : <Link key={ link.id } to={ link.to }>{ link.label }</Link>
        ))}
    </nav>
  );
}
 
export default NavBar;