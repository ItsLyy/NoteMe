import React from "react";
import NoteList from "./NoteList";
import NavbarApp from "./NavbarApp";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchInputHandler = this.onSearchInputHandler.bind(this);

    this.state = {
      searchValue: ''
    }
  }

  render() {
    return (
      <>
        <NavbarApp searchEvent={this.onSearchInputHandler}/>
        <section className="inbox" id="inbox">
          <NoteList notes={this.state.notes} archieveEvent={this.onArchiveButtonEventHandler} searchValue={this.state.searchValue} />
        </section>
      </>
    )
  }

  onSearchInputHandler(searchInputValue) {
    this.setState(() => {
      return { searchValue: searchInputValue }
    })
  }
}

export default NoteApp;