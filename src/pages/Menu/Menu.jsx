import { Helmet } from 'react-helmet-async';
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitles from "../../comonents/SectionTitles/SectionTitles";
import CategoryMenu from "./CategoryMenu/CategoryMenu";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our Menu'></Cover>
            <SectionTitles
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            >
            </SectionTitles>
            <CategoryMenu items={offered}></CategoryMenu>
            <CategoryMenu items={desserts} img={dessertImg} title='dessert'></CategoryMenu>
            <CategoryMenu items={pizzas} img={pizzaImg} title='pizza'></CategoryMenu>
            <CategoryMenu items={salads} img={saladImg} title='salad'></CategoryMenu>
            <CategoryMenu items={soups} img={soupImg} title='soups'></CategoryMenu>
        </div>
    );
};

export default Menu;