import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingCart } from 'react-icons/pi';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader,
        boxCart,
        quantity
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const { setIsOpen, setType, listProductCart } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>

                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '20px'
                            }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <BsHeart
                            style={{
                                fontSize: '20px'
                            }}
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <div className={boxCart}>
                            <PiShoppingCart
                                style={{
                                    fontSize: '25px'
                                }}
                                onClick={() => handleOpenSideBar('cart')}
                            />

                            <div className={quantity}>
                                {listProductCart.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
