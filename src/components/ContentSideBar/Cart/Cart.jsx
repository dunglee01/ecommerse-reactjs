import HeaderSideBar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import { PiShoppingCartLight } from 'react-icons/pi';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import cls from 'classnames';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const {
        container,
        total,
        boxBtn,
        price,
        containerListProductCart,
        overlayLoading,
        isEmpty,
        boxEmpty,
        boxBtnEmpty,
        containerListItem
    } = styles;
    const navigate = useNavigate();

    const { listProductCart, isLoading, setIsOpen } =
        useContext(SideBarContext);

    const handleNavigateToShop = () => {
        navigate('/shop');
        setIsOpen(false);
    };

    const subTotal = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    return (
        <div
            className={cls(container, {
                [isEmpty]: !listProductCart.length
            })}
        >
            <HeaderSideBar
                icon={<PiShoppingCartLight style={{ fontSize: '30px' }} />}
                title='CART'
            />

            {listProductCart.length ? (
                <div className={containerListItem}>
                    <div>
                        {isLoading ? (
                            <LoadingTextCommon />
                        ) : (
                            listProductCart.map((item, index) => {
                                return (
                                    <ItemProduct
                                        key={index}
                                        src={item.images[0]}
                                        nameProduct={item.name}
                                        priceProduct={item.price}
                                        skuProduct={item.sku}
                                        sizeProduct={item.size}
                                        quantity={item.quantity}
                                        productId={item.productId}
                                        userId={item.userId}
                                    />
                                );
                            })
                        )}
                    </div>

                    <div>
                        <div className={total}>
                            <p>SUBTOTAL:</p>
                            <p className={price}>${subTotal}</p>
                        </div>

                        <div className={boxBtn}>
                            <Button content={'VIEW CART'} />
                            <Button content={'CHECKOUT'} isPriamry={false} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={boxEmpty}>
                    <div>No products in the cart.</div>
                    <div className={boxBtnEmpty}>
                        <Button
                            content={'RETURN TO SHOP'}
                            onClick={handleNavigateToShop}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
