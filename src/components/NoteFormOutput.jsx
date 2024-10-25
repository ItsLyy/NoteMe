import { showFormattedDate } from "../utils/data";

// eslint-disable-next-line
function NoteFormOutput({ title, description, archieved, detailOpened, archieveEvent, detailButtonEvent }) {
  return (
    <div className="add-note__output">
      <div className="note">
        <div className={detailOpened ? 'note__information note__information--detail' : 'note__information'}>
          <h2 className="note__title">{title}</h2>
          <span className="note__date">{showFormattedDate(new Date())}</span>
          <p className="note__description">{description}</p>
        </div>
        <div className="note__action">
          <button onClick={() => archieved ? archieveEvent(false) : archieveEvent(true)} className={ archieved ? "note__archieve-button note__archieve-button--archieved" : "note__archieve-button"}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,16V152h-28.7A15.86,15.86,0,0,0,168,156.69L148.69,176H107.31L88,156.69A15.86,15.86,0,0,0,76.69,152H48V48Zm0,160H48V168H76.69L96,187.31A15.86,15.86,0,0,0,107.31,192h41.38A15.86,15.86,0,0,0,160,187.31L179.31,168H208v40ZM90.34,125.66a8,8,0,0,1,11.32-11.32L120,132.69V72a8,8,0,0,1,16,0v60.69l18.34-18.35a8,8,0,0,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0Z"></path></svg></button>
          <button onClick={() => {detailOpened ? detailButtonEvent(false) : detailButtonEvent(true)}} className="note__detail-button">{detailOpened ? 'See Less' : 'See More'}</button>
        </div>
      </div>
    </div>
  )
}

export default NoteFormOutput;