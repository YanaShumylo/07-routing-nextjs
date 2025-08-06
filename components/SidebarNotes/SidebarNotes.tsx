import Link from "next/link";
import {getNotesTags} from "../../lib/api";
import css from "./SidebarNotes.module.css";

const SidebarNotes = async () => {
    const tags = await getNotesTags();

    return (
     <ul className={css.menuList}>
            {/* список тегів */}
            <li className={css.menuItem}>
        <Link href="/notes/filter/all" className={css.menuLink}>
          All notes
                </Link>
                </li>
            {tags.map((tag) => (
                <li key={tag.id} className={css.menuItem}>
                    <Link href={`/notes/filter/${tag.id}`} className={css.menuLink}>
                        {tag.title}
                    </Link>
                </li>
            )
            )
            }
    </ul>
    );
};
export default SidebarNotes;