import HeaderSideBar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import { PiShoppingCartLight } from 'react-icons/pi';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Cart() {
    const { container, total, boxBtn, price } = styles;
    const { listProductCart } = useContext(SideBarContext);

    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<PiShoppingCartLight style={{ fontSize: '30px' }} />}
                    title='CART'
                />

                {listProductCart.map((item, index) => {
                    return (
                        <ItemProduct
                            key={index}
                            src={item.images[0]}
                            nameProduct={item.name}
                            priceProduct={item.price}
                            skuProduct={item.sku}
                            sizeProduct={item.size}
                            quantity={item.quantity}
                        />
                    );
                })}
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
