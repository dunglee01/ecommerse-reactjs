import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProducts from '@components/HeadingListProduct/HeadingListProducts';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import { useState } from 'react';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';
import MyFooter from '@components/Footer/Footer';

function HomePage() {
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        const query = {
            sortType: 0,
            page: 1,
            limit: 10
        };

        getProducts(query).then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts data={listProducts.slice(0, 2)} />
            <PopularProduct data={listProducts.slice(2, listProducts.length)} />
            <SaleHomepage />
            <MyFooter />
        </>
    );
}

export default HomePage;
