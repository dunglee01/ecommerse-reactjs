import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';

function ProductItemLine({ details }) {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl,
        boxSize,
        size,
        boxBtn,
        containerProductLine,
        content
    } = styles;

    const { size: sizes, images, name, price } = details;

    return (
        <div className={containerProductLine}>
            <div className={boxImg}>
                <img src={images[0]} alt='' />
                <img src={images[1]} alt='' className={showImgWhenHover} />

                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reLoadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>

            <div className={content}>
                <div className={boxSize}>
                    {sizes.map((item, index) => {
                        return (
                            <div className={size} key={index}>
                                {item.name}
                            </div>
                        );
                    })}
                </div>

                <div className={cls(title)}>{name}</div>
                <div>Brand 01</div>
                <div className={cls(priceCl)}>${price}</div>
                <div className={boxBtn}>
                    <Button content={'ADD TO CART'} />
                </div>
            </div>
        </div>
    );
}

export default ProductItemLine;
