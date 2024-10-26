import NavbarMenu from "./NavbarMenu";
import NavbarAction from "./NavbarAction";

// eslint-disable-next-line
function NavbarApp({ searchEvent, addNoteEvent, searchValue, addNoteFormOpened, archievedFilter, allFilterEvent, nonArchievedFilterEvent, archievedFilterEvent }) {
  return (
    <nav className="navbar">
      <NavbarMenu archievedFilter={archievedFilter} allFilterEvent={allFilterEvent} nonArchievedFilterEvent={nonArchievedFilterEvent} archievedFilterEvent = {archievedFilterEvent} />
      <NavbarAction searchEvent={ searchEvent } searchValue={searchValue} addNoteEvent={addNoteEvent} addNoteFormOpened={addNoteFormOpened}/>
    </nav>
  )
}

export default NavbarApp;