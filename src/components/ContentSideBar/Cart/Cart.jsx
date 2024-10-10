import HeaderSideBar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import { PiShoppingCartLight } from 'react-icons/pi';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function Cart() {
    const { container, total, boxBtn, price } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<PiShoppingCartLight style={{ fontSize: '30px' }} />}
                    title='CART'
                />

                <ItemProduct />
            </div>

            <div>
                <div className={total}>
                    <p>SUBTOTAL:</p>
                    <p className={price}>$199.99</p>
                </div>

                <div className={boxBtn}>
                    <Button content={'VIEW CART'} />
                    <Button content={'CHECKOUT'} isPriamry={false} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
