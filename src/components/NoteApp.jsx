import React from "react";
import { getInitialData } from "../utils/data";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    }

    this.onArchiveButtonEventHandler = this.onArchiveButtonEventHandler.bind(this);
    this.onSearchInputEventHandler = this.onSearchInputEventHandler.bind(this);
  }

  render() {
    return (
      <NoteList notes={this.state.notes} archieveEvent={this.onArchiveButtonEventHandler} />
    )
  }

  onArchiveButtonEventHandler(id, condition) {
    this.setState((previousState) => {
      const stateUpdate = previousState.notes.find((note) => note.id === id).archived = condition;
      return stateUpdate;
    })
  }

  onSearchInputEventHandler(searchInputValue) {
    this.setState((previousState) => {
      return previousState.filter((note) => note.title.toLowerCase().includes(searchInputValue.toLowerCase()));
    })
  }
}

export default NoteApp;