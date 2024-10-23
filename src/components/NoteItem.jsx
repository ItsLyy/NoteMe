import { Link } from "react-router-dom";

// eslint-disable-next-line
function NoteItem({id, title, date, description}) {
  return (
    <div className="note">
      <h2 className="note__title">{title}</h2>
      <span className="note__date">{date}</span>
      <p className="note__description">{description}</p>
      <div className="note__action">
        <button className="note__archieve-button"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,16V152h-28.7A15.86,15.86,0,0,0,168,156.69L148.69,176H107.31L88,156.69A15.86,15.86,0,0,0,76.69,152H48V48Zm0,160H48V168H76.69L96,187.31A15.86,15.86,0,0,0,107.31,192h41.38A15.86,15.86,0,0,0,160,187.31L179.31,168H208v40ZM90.34,125.66a8,8,0,0,1,11.32-11.32L120,132.69V72a8,8,0,0,1,16,0v60.69l18.34-18.35a8,8,0,0,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0Z"></path></svg></button>
        <Link to={'note/' + id} className="note__detail-button">See More</Link>
      </div>
    </div>
  )
}

export default NoteItem;