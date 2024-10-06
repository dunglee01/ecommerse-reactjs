import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Menu({ content, href }) {
    const { menu } = styles;
    const { setIsOpen } = useContext(SideBarContext);

    const handleClickShowLogin = () => {
        if (content === 'Sign in') {
            setIsOpen(true);
        }
    };

    return (
        <div className={menu} onClick={handleClickShowLogin}>
            {content}
        </div>
    );
}

export default Menu;
