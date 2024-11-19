import React from 'react';
import styles from '../../styles.module.scss';
import Button from '@components/Button/Button';
import cls from 'classnames';

const CartSummary = () => {
    const {
        containerSummary,
        title,
        boxTotal,
        price,
        subTotal,
        totals,
        space,
        containerMethods,
        titleMethods,
        containerRight,
        boxImgMethods,
        imgMethods,
        textSecure
    } = styles;

    const srcMethods = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
    ];

    return (
        <div className={containerRight}>
            <div className={containerSummary}>
                <div className={title}>CART TOTALS</div>

                <div className={cls(boxTotal, subTotal)}>
                    <div>Subtotal</div>
                    <div className={price}>$2,099.97</div>
                </div>

                <div className={cls(boxTotal, totals)}>
                    <div>TOTAL</div>
                    <div>$2,099.97</div>
                </div>

                <Button content={'PROCEED TO CHECKOUT'} />
                <div className={space} />
                <Button content={'CONTINUE SHOPPING'} isPriamry={false} />
            </div>

            <div className={containerMethods}>
                <div className={titleMethods}>
                    Guaranteed <span>safe</span> checkout
                </div>

                <div className={boxImgMethods}>
                    {srcMethods.map((src, index) => {
                        return (
                            <img
                                src={src}
                                alt={src}
                                className={imgMethods}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>

            <div className={textSecure}>Your Payment is 100% Secure</div>
        </div>
    );
};

export default CartSummary;
