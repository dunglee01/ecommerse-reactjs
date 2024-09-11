import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProducts from '@components/HeadingListProduct/HeadingListProducts';

function HomePage() {
    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts />
        </>
    );
}

export default HomePage;
