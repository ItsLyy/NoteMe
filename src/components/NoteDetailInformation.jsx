import { showFormattedDate } from "../utils/data";

// eslint-disable-next-line
function NoteDetailInformation({ note }) {
  // eslint-disable-next-line
  const { title, createdAt, body } = note;
  return (
    <>
      <h1 className="note-detail__title">{title}</h1>
      <span className="note-detail-date">{showFormattedDate(createdAt)}</span>
      <p className="note-detail-description">{body}</p>
    </>
  )
}

export default NoteDetailInformation;