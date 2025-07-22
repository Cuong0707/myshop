import Banner from '../../../components/User/Banner/Banner';
import Category from '../../../components/User/Category/Category';
import NewArrivals from '../../../components/User/NewArrivals/NewArrivals';

import Instagram from '../../../components/User/Instagram/Instagram'
import './Home.css'
function HomePage() {
    return (
        <div>
            <Banner />
            <div className="categories">
                <Category image="assets/images/img1.jpg" title="Editor's Pick" />
                <Category image="assets/images/img2.jpg" title="Shoes" />
                <Category image="assets/images/img3.jpg" title="Accessories" />
            </div>
            <NewArrivals />
            <Instagram />
        </div>
    );
}

export default HomePage;
