import React from 'react';
import NavbarApp from '../components/NavbarApp';
import NoteApp from '../components/NoteApp';
import { getInitialData } from '../utils/data';
import NoteForm from '../components/NoteForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      notes: getInitialData(),
      archievedFilter: 'all',
      selectedNoteDetail: 0,
      addNoteFormOpened: false,
    }

    this.onSearchInputHandler = this.onSearchInputHandler.bind(this);
    this.onArchiveButtonEventHandler = this.onArchiveButtonEventHandler.bind(this);
    this.onAllFilterEventHandler = this.onAllFilterEventHandler.bind(this);
    this.onNonArchievedFilterEventHandler = this.onNonArchievedFilterEventHandler.bind(this);
    this.onArchievedFilterEventHandler = this.onArchievedFilterEventHandler.bind(this);
    this.onDetailButtonEventHandler = this.onDetailButtonEventHandler.bind(this);
    this.onSubmitNoteEventHandler = this.onSubmitNoteEventHandler.bind(this);
    this.onAddNoteNavEventHandle = this.onAddNoteNavEventHandle.bind(this);
    this.onDeleteButtonEventHnadler = this.onDeleteButtonEventHnadler.bind(this);
  }

  render() {
    return (
      <>
        <header>
          <NavbarApp 
            searchEvent={this.onSearchInputHandler} 
            searchValue={this.state.searchValue}
            allFilterEvent={this.onAllFilterEventHandler} 
            nonArchievedFilterEvent={this.onNonArchievedFilterEventHandler} 
            archievedFilterEvent={this.onArchievedFilterEventHandler} 
            archievedFilter={this.state.archievedFilter}
            addNoteEvent={this.onAddNoteNavEventHandle}
            addNoteFormOpened={this.state.addNoteFormOpened}
          />
        </header>
        <main>
          <NoteApp notes={this.state.notes} archieveEvent={this.onArchiveButtonEventHandler} deleteEvent={this.onDeleteButtonEventHnadler} searchValue={this.state.searchValue} archievedFilter={this.state.archievedFilter} isDetail={this.state.isDetail} detailButtonEvent={this.onDetailButtonEventHandler} selectedNoteDetail={this.state.selectedNoteDetail} />
        </main>
        <aside className={this.state.addNoteFormOpened ? 'active' : '' }>
           <NoteForm submitNoteEvent={this.onSubmitNoteEventHandler}/>
        </aside>
      </>
    )
  }

  onSearchInputHandler(event) {
    this.setState(() => {
      return {
        searchValue: event.target.value,
      }
    })
  }

  onAllFilterEventHandler() {
    this.setState(() => {
      return {
        archievedFilter: 'all',
      }
    })
  }

  onNonArchievedFilterEventHandler() {
    this.setState(() => {
      return {
        archievedFilter: 'activated',
      }
    })
  }

  onArchievedFilterEventHandler() {
    this.setState(() => {
      return {
        archievedFilter: 'archieved',
      }
    })
  }

  onArchiveButtonEventHandler(id, condition) {
    this.setState((previousState) => {
      return previousState.notes.find(note => note.id === id).archived = condition;
    })
  }

  onDeleteButtonEventHnadler(id) {
    this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note.id.toString() !== id.toString())
      }
    })
  }

  onDetailButtonEventHandler(id) {
    this.setState(() => {
      return {
        selectedNoteDetail: id,
      }
    })
  }

  onSubmitNoteEventHandler({ title, body, archived }) {
    this.setState((previousState) => {
      return {
        notes: [
          ...previousState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toString(),
            archived
          }
        ]
      }
    })
  }

  onAddNoteNavEventHandle(condition) {
    this.setState(() => {
      return {
        addNoteFormOpened: condition
      }
    })
  }
}

export default App

// * TODO : Menambahkan 3 titik menu di setiap note untuk membuka menu hapus dan edit
// * TODO : Menambahkan fitur tambah
// * TODO : Menambahkan fitur responsive