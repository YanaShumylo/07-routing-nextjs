import NoteClient from './NoteClient';
import { fetchNoteById } from "../../../../lib/api";

type PageParams = {
  params: { id: string };
};

export default async function NoteModalPage({ params }: PageParams) {
  const note = await fetchNoteById(params.id);
  return <NoteClient note={note} />;
}