import Link from "next/link";
import {getNotesTags} from "../../lib/api";
import css from "./SidebarNotes.module.css";

interface SidebarProps {
  isOpen: boolean;
}

const SidebarNotes = async ({ isOpen }: SidebarProps) => {
    if (!isOpen) return null;

    const tags = await getNotesTags();    
    return (
     <ul className={css.menuList}>
                    {/* список тегів */}
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