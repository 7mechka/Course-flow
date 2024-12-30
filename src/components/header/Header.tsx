import Image from 'next/image';
import style from './header.module.scss'
import Link from 'next/link';
import Input from '../customs/input/Input';
import SocialBlock from '../socialBlock/SocialBlock';


function Header() {
    return ( 
    <header className={style.root}>
        <div className={style.logo}>
            <Link href={'/'}>
                <p>Course Flow</p>
            </Link>
        </div>
        <div className={style.search}>
            <Input/>
        </div>
        <SocialBlock/>
    </header>
    );
}

export default Header;