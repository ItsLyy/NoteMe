import { showFormattedDate } from "../utils/data";
import NoteItem from "./NoteItem";
import { useOutletContext, useParams } from "react-router-dom";
import NotFound from "./NotFound";

// eslint-disable-next-line
function NoteList({ notes, archieveEvent }) {
  const { filterNote } = useParams();
  const { searchValue } = useOutletContext();
  const noteCategory = getNoteWithCategory(notes, filterNote);

  return (
    <div className="content__container">
      { 
        noteCategory.length > 0 ? noteCategory.filter((note) => {
          return searchValue === '' ? note : note.title.toLowerCase().includes(searchValue.toLowerCase()); 
        }).map((note) => {
          return (<NoteItem key={note.id} id={note.id} title={note.title} date={showFormattedDate(note.createdAt)} description={note.body} archieved={note.archived} archieveEvent={archieveEvent} />)
        }) : <NotFound reason='There is no note here' />
      }
    </div>
  )
}

function getNoteWithCategory(notes, filterNote) {
  return notes.filter((note) => {
    if (!filterNote) {
      return note; 
    } else if (filterNote === 'active' && !note.archived) {
      return note;
    } else if (filterNote === 'archieve' && note.archived) {
      return note;
    } 
  })
}

export default NoteList;