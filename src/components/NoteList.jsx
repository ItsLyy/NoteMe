import { showFormattedDate } from "../utils/data";
import NoteItem from "./NoteItem";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

// eslint-disable-next-line
function NoteList({ notes }) {
  const { filterNote } = useParams();
  let isBreak = false;
  return (
    <div className="content__container">
      { 
        // eslint-disable-next-line
        notes.map((note) => {
          if (isBreak) {
            return;
          }
          if (!filterNote) {
            return (<NoteItem key={note.id} id={note.id} title={note.title} date={showFormattedDate(note.createdAt)} description={note.body} archieved={note.archived} />)
          } else if (filterNote === 'active' && !note.archived) {
            return (<NoteItem key={note.id} id={note.id} title={note.title} date={showFormattedDate(note.createdAt)} description={note.body} archieved={note.archived} />)
          } else if (filterNote === 'archieve' && note.archived) {
            return (<NoteItem key={note.id} id={note.id} title={note.title} date={showFormattedDate(note.createdAt)} description={note.body} archieved={note.archived} />)
          } else {
            isBreak = true;
            return (<NotFound key={note.id} reason='There is no note here' />)
          }
          }) 
      }
    </div>
  )
}

export default NoteList;