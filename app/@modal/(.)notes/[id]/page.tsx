import NoteClient from './NoteClient';

type Props = {
  params: { id: string };
};

export default function NoteModalPage({ params }: Props) {
  return <NoteClient id={params.id} />;
}