import CartTable from '@/pages/Cart/components/contents/CartTable';
import styles from '../../styles.module.scss';
import CartSummary from '@/pages/Cart/components/contents/CartSummary';
import Button from '@components/Button/Button';

function Contents() {
    const { containerContents, boxFooter, boxBtnDelete, boxCoupon } = styles;

    return (
        <div className={containerContents}>
            <div
                style={{
                    width: '58%'
                }}
            >
                <CartTable />

                <div className={boxFooter}>
                    <div className={boxCoupon}>
                        <input type='text' placeholder='Coupon code' />
                        <Button content={'OK'} isPriamry={false} />
                    </div>

                    <div className={boxBtnDelete}>
                        <Button
                            content={<div>&#128465; CLEAR SHOPPING CART</div>}
                            isPriamry={false}
                        />
                    </div>
                </div>
            </div>

            <CartSummary />
        </div>
    );
}

export default Contents;
