
import SectionTitles from "../../../comonents/SectionTitles/SectionTitles";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-12">
            <SectionTitles
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </SectionTitles>


            <div className="grid md:grid-cols-2 gap-10 j">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="mt-10 btn btn-outline border-0 border-b-4 text-center mx-auto">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;