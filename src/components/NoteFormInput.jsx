// eslint-disable-next-line
function NoteFormInput({ titleInputEvent, descriptionInputEvent, submitEvent, titleValue, descriptionValue }) {
  return (
    <div className="add-note__input" onSubmit={submitEvent}>
      <form className="note-form">
        <input type="text" className="note-form__title-input" onChange={titleInputEvent} value={titleValue} />
        <textarea type="text" className="note-form__description-input" onChange={descriptionInputEvent} value={descriptionValue}></textarea>
        <input type="submit" className="note-form__submit" />
      </form>
    </div>
  )
}

export default NoteFormInput;