import NavbarMenu from "./NavbarMenu";
import NavbarAction from "./NavbarAction";

// eslint-disable-next-line
function NavbarApp({ searchEvent }) {
  return (
    <nav className="navbar">
      <NavbarMenu />
      <NavbarAction searchEvent={ searchEvent }/>
    </nav>
  )
}

export default NavbarApp;