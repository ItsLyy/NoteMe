import NoteItem from "./NoteItem";
import { useParams } from "react-router-dom";

// eslint-disable-next-line
function NoteList({ notes }) {
  const { filterNote } = useParams();
  return (
    <div className="content__container">
      { 
        // eslint-disable-next-line
        notes.map((note) => {
          if (!filterNote) {
            return (<NoteItem key={note.id} id={note.id} title={note.title} date={note.date} description={note.description} />)
          } else if (filterNote === 'active' && !note.archived) {
            return (<NoteItem key={note.id} id={note.id} title={note.title} date={note.date} description={note.description} />)
          } else if (filterNote === 'archieve' && note.archived) {
            return (<NoteItem key={note.id} id={note.id} title={note.title} date={note.date} description={note.description} />)
          }
        })
      }
    </div>
  )
}

export default NoteList;