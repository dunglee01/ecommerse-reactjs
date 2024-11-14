import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomepage = true
}) {
    // const { isShowGrid } = useContext(OurShopContext);
    const [sizeChoose, setSizeChoose] = useState('');
    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProductsCart } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);

    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largImg,
        isActiveSize,
        btnClear
    } = styles;

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };

    const handleAddToCart = () => {
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Please login to add product to cart!');

            return;
        }

        if (!sizeChoose) {
            toast.warning('Please choose size!');
            return;
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose
        };

        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                setIsOpen(true);
                setType('cart');
                setIsLoading(false);
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                toast.error('Add Product to cart failed!');
                setIsLoading(false);
            });
    };

    useEffect(() => {
        if (isHomepage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomepage, ourShopStore?.isShowGrid]);

    return (
        <div className={isShowGrid ? '' : containerItem}>
            <div
                className={cls(boxImg, {
                    [largImg]: !isShowGrid
                })}
            >
                <img src={src} alt='' />
                <img src={prevSrc} alt='' className={showImgWhenHover} />

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

            <div className={isShowGrid ? '' : content}>
                {!isHomepage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cls(size, {
                                        [isActiveSize]: sizeChoose === item.name
                                    })}
                                    onClick={() => handleChooseSize(item.name)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                {sizeChoose && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        clear
                    </div>
                )}

                <div
                    className={cls(title, {
                        [textCenter]: !isHomepage
                    })}
                >
                    {name}
                </div>
                {!isHomepage && (
                    <div
                        className={textCenter}
                        style={{
                            color: '#888'
                        }}
                    >
                        Brand 01
                    </div>
                )}
                <div
                    className={cls(priceCl, { [textCenter]: !isHomepage })}
                    style={{
                        color: isHomepage ? '#333' : '#888'
                    }}
                >
                    ${price}
                </div>

                {!isHomepage && (
                    <div
                        className={cls(boxBtn, {
                            [leftBtn]: !isShowGrid
                        })}
                    >
                        <Button
                            content={
                                isLoading ? (
                                    <LoadingTextCommon />
                                ) : (
                                    'ADD TO CART'
                                )
                            }
                            onClick={handleAddToCart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
