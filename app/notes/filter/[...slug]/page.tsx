
import css from "../../components/NotesPage/NotesPage.module.css";
import { fetchNotes } from "../../../../lib/api";
import NotesClient from "./Notes.client";

interface Props {
  params: { slug?: string[] };
}

export default async function NotesPage({ params }: Props) {
  const tagId = params.slug?.[0] === "all" ? undefined : params.slug?.[0];

  const initialData = await fetchNotes({
    tagId,
    search: "",
    page: 1,
    perPage: 12,
  });
  return (
    <main className={css.appWrapper}>
      <NotesClient initialData={initialData} tagId={tagId}/>
    </main>
  );
}
