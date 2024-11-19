import React from 'react';
import styles from '../../styles.module.scss';
import SelectBox from '@/pages/OurShop/components/SelectBox';

const CartTable = () => {
    const { cartTable } = styles;

    const cartItems = [
        {
            id: 1,
            name: 'Amet faucibus nunc',
            price: 1879.99,
            sku: 87654,
            size: 'M',
            quantity: 1,
            image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min-285x340.jpg'
        },
        {
            id: 2,
            name: '10K Yellow Gold',
            price: 99.99,
            sku: 12345,
            size: 'S',
            quantity: 1,
            image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min-285x340.jpg'
        },
        {
            id: 3,
            name: 'Consectetur nibh at',
            price: 119.99,
            sku: 12349,
            size: 'M',
            quantity: 1,
            image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min-285x340.jpg'
        }
    ];

    const handleDelete = (id) => {
        console.log('Delete item with id:', id);
    };

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

    const getValueSelect = (value, type) => {
        console.log(value, type);
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
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td className={styles.product}>
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>Size: {item.size}</p>
                                </div>
                            </td>
                            <td>
                                <div onClick={() => handleDelete(item.id)}>
                                    &#128465;
                                </div>
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.sku}</td>
                            <td>
                                <SelectBox
                                    options={showOptions}
                                    getValue={getValueSelect}
                                    type='show'
                                />
                            </td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;
