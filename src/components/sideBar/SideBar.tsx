'use client'
import { useState } from 'react';
import style from './SideBar.module.scss'

function SideBar() {
    const [isBarOpen, setIsBarOpen] = useState(false)

    const openBarHandler = () => {
        setIsBarOpen(!isBarOpen)
    }

    return ( 
        <aside className={style.root}>
            <div className={`${style.open} ${isBarOpen ? '' : style.hideText}`}>
            <div>
                <p>
                    Навігація
                </p>
                <span onClick={openBarHandler}>
                    <svg className={isBarOpen ? style.rotate180deg : ''} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                        <path d="M80-240v-480h80v480H80Zm560 0-57-56 144-144H240v-80h487L584-664l56-56 240 240-240 240Z"/>
                    </svg>
                </span>
            </div>
            <ul className={style.main}>
                <li>
                    <span>
                        🏠
                    </span>
                    <p>Головна</p>
                </li>
                <li>
                    <span>
                        📁
                    </span>
                    <p>Категорії</p>
                </li>
                <li>
                    <span>
                        🔥
                    </span>
                    <p>
                        Популярні
                    </p>
                </li>
                <li>
                    <span>
                        ✨
                    </span>
                    <p>
                        Новинки
                    </p>
                </li>
            </ul>
            <ul className={style.secondary}>
                <li>
                    <span>
                        ⠀ℹ
                    </span>
                    <p>
                        Про платформу
                    </p>
                </li>
                <li>
                    <span>
                       ⠀?
                    </span>
                    <p>
                        Питання
                    </p>
                </li>
            </ul>
        </div>
        </aside>
     );
}

export default SideBar;