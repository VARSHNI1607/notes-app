import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(title, content) {
    const newNote = {
      id: Date.now(),
      title,
      content,
    };

    setNotes([newNote, ...notes]);
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function editNote(id, newTitle, newContent) {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, title: newTitle, content: newContent }
          : note
      )
    );
  }

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>My Notes</h1>
      <p className="subtitle">Keep your thoughts organized.</p>

      <NoteForm addNote={addNote} />

      <SearchBar search={search} setSearch={setSearch} />

      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  );
}

export default App;