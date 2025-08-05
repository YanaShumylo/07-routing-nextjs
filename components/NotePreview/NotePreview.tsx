import { fetchNoteById } from "@/lib/api";

type Props = {
  id: string;
};

export default async function NotePreview({ id }: Props) {
  const note = await fetchNoteById(id);

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}