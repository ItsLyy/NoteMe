// eslint-disable-next-line
function NavbarAction({ searchEvent, addNoteEvent, searchValue, addNoteFormOpened }) {
  return(
    <div className="navbar__action">
      <div className="search">
        <input type="text" placeholder="Search for a note" className="search__input" value={searchValue} onChange={searchEvent} />
        <svg className="search__icon" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
      </div>
      <button onClick={() => addNoteFormOpened ? addNoteEvent(false) : addNoteEvent(true)} className={addNoteFormOpened ? "navbar__add-note navbar__add-note--open" : "navbar__add-note"}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg></button>
    </div>
  )
}

export default NavbarAction;