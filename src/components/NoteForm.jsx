import React from "react";
import NoteFormInput from "./NoteFormInput";
import NoteFormOutput from "./NoteFormOutput";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {
        title: '',
        body: '',
        archived: false,
      },
      detailOpened: false,
    }

    this.onArchiveButtonEventHandler = this.onArchiveButtonEventHandler.bind(this);
    this.onDetailButtonEventHandler = this.onDetailButtonEventHandler.bind(this);
    this.titleInputEvent = this.titleInputEvent.bind(this);
    this.descriptionInputEvent = this.descriptionInputEvent.bind(this);
    this.onSubmitEvent = this.onSubmitEvent.bind(this);
  }

  render() {
    return(
      <div className="add-note">
        <h2>Preview</h2>
        <NoteFormOutput title={this.state.notes.title} description={this.state.notes.body} archieved={this.state.notes.archived} detailOpened={this.state.notes.detailOpened} archieveEvent={this.onArchiveButtonEventHandler} detailButtonEvent={this.onDetailButtonEventHandler} />
        <h2>Add Note</h2>
        <NoteFormInput titleInputEvent={this.titleInputEvent} descriptionInputEvent={this.descriptionInputEvent} title={this.state.notes.title} description={this.state.notes.body} submitEvent={this.onSubmitEvent} />
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

  onSubmitEvent(e) {
    e.preventDefault();
    // eslint-disable-next-line
    this.props.submitNoteEvent(this.state.notes);
  }
}

export default NoteForm;