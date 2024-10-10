import HeaderSideBar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSideBar';
import { CiHeart } from 'react-icons/ci';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function WishList() {
    const { container, boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={
                        <CiHeart
                            style={{
                                fontSize: '30px'
                            }}
                        />
                    }
                    title='WISHLIST'
                />

                <ItemProduct />
            </div>

            <div className={boxBtn}>
                <Button content={'VIEW WISHLIST'} />
                <Button content={'ADD ALL TO CART'} isPriamry={false} />
            </div>
        </div>
    );
}

export default WishList;
