import featured from '../../../../assets/home/featured.jpg'
import SectionTitles from '../../../../comonents/SectionTitles/SectionTitles';
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white py-[70px] my-20'>
            <SectionTitles
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </SectionTitles>

            <div className='md:flex justify-center items-center pt-4 px-20'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10 space-y-4'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem iure nesciunt ad tenetur non inventore excepturi quam asperiores pariatur, deleniti ducimus a magni dicta nulla totam eos laudantium porro obcaecati explicabo quaerat adipisci sapiente consequuntur natus voluptatem! Fugiat minus quos culpa rerum quisquam in itaque architecto deserunt minima! Mollitia, labore.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;