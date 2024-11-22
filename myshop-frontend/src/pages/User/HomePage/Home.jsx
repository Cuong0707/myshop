import React, {useEffect} from 'react';
import Header from '../../../components/User/Header/Header';
import Banner from '../../../components/User/Banner/Banner';
import Category from '../../../components/User/Category/Category';
import NewArrivals from '../../../components/User/NewArrivals/NewArrivals';
import Footer from '../../../components/User/Footer/Footer'
import './Home.css'
function HomePage() {
    return (
        <div>
            <Header />
            <Banner/>
            <div className="categories">
                <Category image="assets/images/img1.jpg" title="Editor's Pick" />
                <Category image="assets/images/img2.jpg" title="Shoes" />
                <Category image="assets/images/img3.jpg" title="Accessories" />
            </div>
            <NewArrivals/>
            <Footer/>
        </div>
    );
}

export default HomePage;
