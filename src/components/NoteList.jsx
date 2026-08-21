import NoteCard from "./NoteCard";

function NoteList({ notes, deleteNote, editNote }) {
  if (notes.length === 0) {
    return <p className="empty">No notes found.</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
    </div>
  );
}

export default NoteList;