import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import Button from '@components/Button/Button';
import { PiShoppingCartThin } from 'react-icons/pi';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { useState } from 'react';
import cls from 'classnames';
import { addProductToCart } from '@/apis/cartService';

function DetailProduct() {
    const {
        container,
        title,
        price,
        des,
        boxSize,
        size,
        label,
        boxAddToCart,
        boxOr,
        line,
        or,
        boxAddOther,
        boxFooter,
        isActive
    } = styles;

    const {
        detailProduct,
        userId,
        setType,
        handleGetListProductsCart,
        setIsLoading,
        setIsOpen
    } = useContext(SideBarContext);
    const [chooseSize, setChooseSize] = useState('');
    const [quantity, setQuantity] = useState('1');

    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const handleGetSize = (value) => {
        setChooseSize(value);
    };

    const handleClearSize = () => {
        setChooseSize('');
    };

    const handleGetQuantity = (value) => {
        setQuantity(value);
    };

    const handleAddToCart = () => {
        const data = {
            userId,
            productId: detailProduct._id,
            quantity,
            size: chooseSize,
            isMultiple: true
        };

        setIsOpen(false);
        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                setIsOpen(true);
                setType('cart');
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={container}>
            <SliderCommon data={detailProduct.images} />

            <div className={title}>{detailProduct.name}</div>
            <div className={price}>${detailProduct.price}</div>
            <div className={des}>{detailProduct.description}</div>

            <div className={label}>Size {chooseSize}</div>
            <div className={boxSize}>
                {detailProduct.size.map((item, index) => (
                    <div
                        className={cls(size, {
                            [isActive]: item.name === chooseSize
                        })}
                        key={index}
                        onClick={() => handleGetSize(item.name)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            {chooseSize && (
                <div
                    style={{
                        fontSize: '12px',
                        marginTop: '3px',
                        cursor: 'pointer'
                    }}
                    onClick={handleClearSize}
                >
                    clear
                </div>
            )}

            <div className={boxAddToCart}>
                <SelectBox
                    options={showOptions}
                    type='show'
                    defaultValue={quantity}
                    getValue={handleGetQuantity}
                />

                <div>
                    <Button
                        content={
                            <div>
                                <PiShoppingCartThin /> ADD TO CART
                            </div>
                        }
                        onClick={handleAddToCart}
                    />
                </div>
            </div>

            <div className={boxOr}>
                <div className={line} />
                <div className={or}>OR</div>
                <div className={line} />
            </div>

            <Button
                content={
                    <div>
                        <PiShoppingCartThin /> SELECT OPTIONS
                    </div>
                }
            />

            <div className={boxAddOther}>
                <TfiReload style={{ fontSize: '23px' }} />
                <div>Add to compare</div>
            </div>

            <div className={boxAddOther}>
                <CiHeart style={{ fontSize: '25px' }} />
                <div>Add to wishlist</div>
            </div>

            <div className={boxFooter}>
                SKU: <span>12349</span>
            </div>
            <div className={boxFooter}>
                Category: <span>Pullovers</span>
            </div>
            <div className={boxFooter}>
                Estimated delivery: <span>3 - 5 days</span>
            </div>
            <div className={boxFooter}>
                Share:{' '}
                <span>
                    <FaXTwitter />
                    <FaFacebookF />
                </span>
            </div>
        </div>
    );
}

export default DetailProduct;
