import NavbarMenu from "./NavbarMenu";
import NavbarAction from "./NavbarAction";

// eslint-disable-next-line
function NavbarApp({ searchEvent, archievedFilter, allFilterEvent, nonArchievedFilterEvent, archievedFilterEvent }) {
  return (
    <nav className="navbar">
      <NavbarMenu archievedFilter={archievedFilter} allFilterEvent={allFilterEvent} nonArchievedFilterEvent={nonArchievedFilterEvent} archievedFilterEvent = {archievedFilterEvent} />
      <NavbarAction searchEvent={ searchEvent }/>
    </nav>
  )
}

export default NavbarApp;