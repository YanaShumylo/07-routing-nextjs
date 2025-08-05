'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Tag } from '../../lib/api';
import css from './TagsMenu.module.css';

type Props = { tags: Tag[]; };

const TagsMenu = ({ tags }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={css.menuContainer}>
            <button onClick={toggle} className={css.menuButton}>
                Notes ▾
            </button>
            {isOpen && (
                <ul className={css.menuList}>
                    {/* список тегів */}
                    <li className={css.menuItem}>
                        <Link href={`/notes/filter/all`} onClick={toggle} className={css.menuLink}>
                            All notes
                        </Link>
                    </li>
                    {tags.map((tag) => (
                        <li key={tag.id} className={css.menuItem}>
                            <Link href={`/notes/filter/${tag.id}`} > <a className={css.menuLink} onClick={toggle}>
                                {tag.title}</a>
                            </Link>
                        </li>
                    )
                    )
                    }
                </ul>
            )
            }
        </div>
    );
};

export default TagsMenu;