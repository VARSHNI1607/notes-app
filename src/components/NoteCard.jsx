import { useState } from "react";

function NoteCard({ note, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  function handleSave() {
    if (!title.trim() || !content.trim()) return;

    editNote(note.id, title, content);
    setIsEditing(false);
  }

  return (
    <div className="note-card">
      {isEditing ? (
        <>
          <input
            className="edit-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="edit-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="buttons">
            <button onClick={handleSave}>Save</button>

            <button
              className="cancel"
              onClick={() => {
                setTitle(note.title);
                setContent(note.content);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2>{note.title}</h2>
          <p>{note.content}</p>

          <div className="buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>

            <button
              className="delete"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteCard;