import React from "react";
import { getInitialData } from "../utils/data";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    }
  }

  render() {
    return (
      <NoteList notes={this.state.notes}/>
    )
  }
}

export default NoteApp;