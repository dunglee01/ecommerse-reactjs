import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Menu({ content, href }) {
    const { menu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleClickShowLogin = () => {
        if (content === 'Sign in') {
            setIsOpen(true);
            setType('login');
        }
    };

    return (
        <div className={menu} onClick={handleClickShowLogin}>
            {content}
        </div>
    );
}

export default Menu;
