import React from "react";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // eslint-disable-next-line
    const { notes, archieveEvent, searchValue, archievedFilter, isDetail, detailButtonEvent, selectedNoteDetail } = this.props;
    return (
      <>
        <section className="inbox" id="inbox">
          <NoteList notes={ notes } archieveEvent={ archieveEvent } searchValue={searchValue} archievedFilter={archievedFilter} isDetail={isDetail} detailButtonEvent={detailButtonEvent} selectedNoteDetail={selectedNoteDetail} />
        </section>
      </>
    )
  }
}

export default NoteApp;