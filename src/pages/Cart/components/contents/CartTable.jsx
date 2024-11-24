import React from 'react';
import styles from '../../styles.module.scss';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import LoadingCart from '@/pages/Cart/components/Loading';

const CartTable = ({ listProductCart, getData, isLoading, getDataDelete }) => {
    const { cartTable } = styles;

    const handleQuantityChange = (id, newQuantity) => {
        console.log('Update item:', id, 'to quantity:', newQuantity);
    };

    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const getValueSelect = (userId, productId, quantity, size) => {
        const data = {
            userId,
            productId,
            quantity,
            size,
            isMultiple: true
        };

        getData(data);
    };

    return (
        <div className={cartTable}>
            <table>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th />
                        <th>PRICE</th>
                        <th>SKU</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {listProductCart.map((item) => (
                        <tr key={item.id}>
                            <td className={styles.product}>
                                <img src={item.images[0]} alt={item.name} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>Size: {item.size}</p>
                                </div>
                            </td>
                            <td>
                                <div
                                    onClick={() =>
                                        getDataDelete({
                                            userId: item.userId,
                                            productId: item.productId
                                        })
                                    }
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    &#128465;
                                </div>
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.sku}</td>
                            <td>
                                <SelectBox
                                    options={showOptions}
                                    getValue={(e) =>
                                        getValueSelect(
                                            item.userId,
                                            item.productId,
                                            e,
                                            item.size
                                        )
                                    }
                                    type='show'
                                    defaultValue={item.quantity}
                                />
                            </td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isLoading && <LoadingCart />}
        </div>
    );
};

export default CartTable;
