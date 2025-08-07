'use client';

import { useRouter } from "next/navigation";
import Modal from "../../../../components/Modal/Modal";
import NotePreview from "./NotePreview.client";

type Props = {
  note: {
  id: string;
  title: string;
    content: string;
};
};

export default function NoteClient({ note}: Props) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };
if (!note) {
    return (
      <Modal onClose={handleClose}>
        <p>Note not found.</p>
      </Modal>
    );
  }
  return (
    <Modal onClose={handleClose}>
      <NotePreview note={note} onClose={handleClose}  />
    </Modal>
  );
}