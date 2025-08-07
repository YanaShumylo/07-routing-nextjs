import css from "../../../../components/NotePreview/NotePreview.module.css";

type Note = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  note: Note;
  onClose: () => void;
} 

export default function NotePreview({ note, onClose }: Props) {
    return (
      <div className={css.container}>
        <div className={css.header}>         
          <h2>{note.title}</h2>
          <button onClick={onClose} className={css.backBtn}>Close</button> 
      </div>
      <p className={css.content}>{note.content}</p>
    </div>
  );
}