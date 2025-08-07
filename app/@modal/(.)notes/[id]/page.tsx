import NoteClient from './NoteClient';
import { fetchNoteById } from "../../../../lib/api";

// interface Props {
//   params: { id: string };
// };

// export default async function NoteModalPage({ params }: Props) {
//   const note = await fetchNoteById(params.id);
//   return <NoteClient note={note} />;
// }

export default async function NoteModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = await fetchNoteById(id);
  return <NoteClient note={note} />;
}

// const NoteModalPage = async ({ params }: Props) => {
//   const note = await fetchNoteById(params.id);
//   return <NoteClient note={note} />;
// }
// export default NoteModalPage;

// export default async function NoteModalPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const note = await fetchNoteById(params.id);
//   return <NoteClient note={note} />;
// }