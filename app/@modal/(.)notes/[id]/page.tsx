import NoteClient from './NoteClient';
import { fetchNoteById } from "../../../../lib/api";

// interface Props {
//   params: { id: string };
// };

// const NoteModalPage = async ({ params }: Props) => {
//   const note = await fetchNoteById(params.id);
//   return <NoteClient note={note} />;
// }

// export default NoteModalPage;

export default async function NoteModalPage({
  params,
}: {
  params: { id: string };
}) {
  const note = await fetchNoteById(params.id);
  return <NoteClient note={note} />;
}