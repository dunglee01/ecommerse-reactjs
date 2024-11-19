import CartTable from '@/pages/Cart/components/contents/CartTable';
import styles from '../../styles.module.scss';
import CartSummary from '@/pages/Cart/components/contents/CartSummary';

function Contents() {
    const { containerContents } = styles;

    return (
        <div className={containerContents}>
            <div>
                <CartTable />
            </div>

            <CartSummary />
        </div>
    );
}

export default Contents;
