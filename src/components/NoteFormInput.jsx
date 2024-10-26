// eslint-disable-next-line
function NoteFormInput({ titleInputEvent, descriptionInputEvent, submitEvent , title, description}) {
  // eslint-disable-next-line
  const titleLength = title ? title.length : 0;
  // eslint-disable-next-line
  const descriptionLength = description ? description.length : 0;
  return (
    <div className="add-note__input" onSubmit={submitEvent}>
      <form className="note-form">
        <div className="note-form__input-field">
          <input placeholder="title" type="text" className={titleLength <= 50 ?"note-form__title-input" : "note-form__title-input note-form__title-input--invalid"} onChange={titleInputEvent} value={title} />
          <span>{ titleLength + '/50'}</span>          
        </div>
        <div className="note-form__input-field">
          <textarea placeholder="description" type="text" className={descriptionLength <= 200 ? "note-form__description-input" : "note-form__description-input note-form__description-input--invalid"} onChange={descriptionInputEvent} value={description}></textarea>
          <span>{ descriptionLength + '/200'}</span>
        </div>
        <input type="submit" className={titleLength > 0 && titleLength <= 50 && descriptionLength > 0 && descriptionLength <= 200 ? 'note-form__submit' : 'note-form__submit note-form__submit--invalid'} value="Add Note" disabled={titleLength > 0 && titleLength <= 50 && descriptionLength > 0 && descriptionLength <= 200 ? '' : 'disabled'}/>
      </form>
    </div>
  )
}

export default NoteFormInput;