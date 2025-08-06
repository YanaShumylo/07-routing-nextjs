// import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";

type Note = {
  id: string;
  title: string;
  content: string;
};

export default function NotePreview({ note }: { note: Note }) {
    return (
    <div className={css.container}>
      <h2 className={css.header}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
    </div>
  );
}