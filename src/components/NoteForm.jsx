import React from "react";
import { showFormattedDate } from "../utils/data";
import NoteFormInput from "./NoteFormInput";
import NoteFormOutput from "./NoteFormOutput";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {
        id: 0,
        title: '',
        createAt: showFormattedDate(new Date()),
        body: '',
        archived: false,
      }
    }
  }

  render() {
    return(
      <div className="add-note">
        {/* <NoteFormOutput /> */}
        <NoteFormInput titleInputEvent={this.titleInputEvent} descriptionInputEvent={this.descriptionInputEvent} titleValue={this.state.notes.title} descriptionValue={this.state.notes.body} />
      </div>
    );
  }

  onArchiveButtonEventHandler(condition) {
    this.setState(() => {
      return {
        archived: condition,
      }
    })
  }

  onDetailButtonEventHandler(id) {
    this.setState(() => {
      return {
        selectedNoteDetail: id,
      }
    })
  }

  titleInputEvent(e) {
    this.setState((previousState) => {
      return previousState.notes.title = e.target.value;
    })
  }

  descriptionInputEvent(e) {
    this.setState((previousState) => {
      return previousState.notes.body = e.target.value;
    })
  }
}

export default NoteForm;