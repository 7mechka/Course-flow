import { Inter } from '@next/font/google';
import style from './header.module.scss'
import Link from 'next/link';

const font = Inter({
    weight: ['600']
    })

function Header() {
    return ( 
    <header className={`${style.root} block`}>
        <div className={`${style.logo} ${font.className}`}>
            <Link href={'/'}>
                Course Flow
            </Link>
        </div>
        <nav className={style.nav}>
            <div className={style.nav_container}>
                <div>
                    <p>Каталог</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gray"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                    <input type="text" placeholder='Мені потрібен курс...'/>
                    <input type="checkbox" id={style.extend_search_button} />
                    <label htmlFor={style.extend_search_button}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
                    </label>
                    <div className={`${style.extend_search_menu} block`}>
                        <form>
                            <label className={`white_text`}>
                                Автор:
                                <input type="text" name='search_author' />
                            </label>
                            <div className={`white_text`}>
                                <p>Ціна</p>
                                <label>
                                    Від:
                                    <input type="number" />
                                </label>
                                <label>
                                    До:
                                    <input type="number" />
                                </label>
                            </div>
                            <div className={`white_text`}>
                                <p>Популярність</p>
                                <label>
                                    Від:
                                    <input type="number" max={5} />
                                </label>
                                <label>
                                    До:
                                    <input type="number" max={5} />
                                </label>
                            </div>
                            <label className={`white_text`}>
                                Складність:
                                {/* <input type="text" name='search_author' /> */}
                                <select name="" id="">
                                    <option value="easy">Початківець</option>
                                    <option value="normal">Досвідчений</option>
                                    <option value="expert">Продвинутий</option>
                                </select>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <div className={style.personal}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                </div>
            </div>
            <div className={style.burger}>
                <input type="checkbox" id={style.burger_button} />
                <label htmlFor={style.burger_button}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </label>
                <div className={`${style.burger_menu} block`}>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                            Особистий кабінет
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg>
                            Каталог
                        </li>
                        <li className={style.burger_menu_search}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gray"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg> */}
                            <input type="text" placeholder='Мені потрібен курс...'/>
                            <input type="checkbox" id={style.extend_search_button_burger} />
                            <label htmlFor={style.extend_search_button_burger}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
                            </label>
                            <div className={`${style.extend_search_menu_burger} block`}>
                                <form>
                                    <label className={`white_text`}>
                                        Автор:
                                        <input type="text" name='search_author' />
                                    </label>
                                    <div className={`white_text`}>
                                        <p>Ціна</p>
                                        <label>
                                            Від:
                                            <input type="number" />
                                        </label>
                                        <label>
                                            До:
                                            <input type="number" />
                                        </label>
                                    </div>
                                    <div className={`white_text`}>
                                        <p>Популярність</p>
                                        <label>
                                            Від:
                                            <input type="number" max={5} />
                                        </label>
                                        <label>
                                            До:
                                            <input type="number" max={5} />
                                        </label>
                                    </div>
                                    <label className={`white_text`}>
                                        Складність:
                                        {/* <input type="text" name='search_author' /> */}
                                        <select name="" id="">
                                            <option value="easy">Початківець</option>
                                            <option value="normal">Досвідчений</option>
                                            <option value="expert">Продвинутий</option>
                                        </select>
                                    </label>
                                </form>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header> 
    );
}

export default Header;