

const SectionTitles = ({heading, subHeading}) => {
    return (
        <div className="w-6/12 mx-auto text-center my-8">
            <p className="text-yellow-500 mb-3">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitles;