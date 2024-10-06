import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);

    useEffect(() => {
        // if (scrollPosition > 80) {
        //     setFixedPosition(true);
        // } else {
        //     setFixedPosition(false);
        // }

        // setFixedPosition(scrollPosition > 80 ? true : false);

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
                        <img
                            width={26}
                            height={26}
                            src={reLoadIcon}
                            alt='reLoadIcon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={heartIcon}
                            alt='reLoadIcon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={cartIcon}
                            alt='reLoadIcon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
