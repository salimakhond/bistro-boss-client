import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const CategoryMenu = ({ items, title, img, }) => {
    return (
        <div className="pt-10">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16 mb-8">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="mt-10 btn btn-outline border-0 border-b-4 flex justify-center mb-10 text-center mx-auto">View Full Menu</button></Link>
        </div>
    );
};

export default CategoryMenu;