import React from "react";

class NavbarAction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    }

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  render() {
    return(
      <div className="navbar__action">
        <div className="search">
          <input type="text" placeholder="Search for a note" className="search__input" value={this.state.searchValue} onChange={this.onSearchEventHandler} />
          <svg className="search__icon" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
        </div>
        <button className="navbar__add-note">Add Note</button>
      </div>
    )
  }

  onSearchEventHandler(event) {
    this.setState(() => {
      return {
        searchValue: event.target.value,
      }
    })
  }
}

export default NavbarAction;