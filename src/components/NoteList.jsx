import { showFormattedDate } from "../utils/data";
import NoteItem from "./NoteItem";
import NotFound from "./NotFound";

// eslint-disable-next-line
function NoteList({ archieveEvent, notes, searchValue, archievedFilter, isDetail, detailButtonEvent, selectedNoteDetail, deleteEvent }) {
  const notesArchieveFiltered = notesArchievedFilter(notes, archievedFilter);
  return (
    <div className="inbox__area">
      { 
        // eslint-disable-next-line
        notesArchieveFiltered.length > 0 ? notesArchieveFiltered.filter(note => searchValue === '' ? note : note.title.toLowerCase().includes(searchValue.toLowerCase())).map((note) => {
          return (<NoteItem key={note.id} id={note.id} title={note.title} date={showFormattedDate(note.createdAt)} description={note.body} archieved={note.archived} archieveEvent={archieveEvent} isDetail={isDetail} detailButtonEvent={detailButtonEvent} selectedNoteDetail={selectedNoteDetail} deleteEvent={ deleteEvent } />)
        }) : <NotFound reason='There is no note here' />
      }
    </div>
  )
}

function notesArchievedFilter(notes, archievedFilter) {
  return notes.filter((note) => {
    if (archievedFilter === 'all') {
      return note; 
    } else if (archievedFilter === 'activated' && !note.archived) {
      return note;
    } else if (archievedFilter === 'archieved' && note.archived) {
      return note;
    } 
  })
}

export default NoteList;