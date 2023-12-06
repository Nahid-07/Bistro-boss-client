import feturedImage from "../../../assets/home/featured.jpg";
import SectionHeader from "../../../components/sectionHeader/sectionHeader";

const FeaturedBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${feturedImage})` }}
      className="my-20 w-full bg-center bg-fixed"
    >
      <div className="bg-black opacity-60 py-20 flex justify-center">
        <div className="lg:w-6/12 px-10 lg:px-0">
          <SectionHeader
            subHeader={"----Check it out----"}
            mainHeader={"FROM OUR MENU"}
          ></SectionHeader>
          <div className="lg:flex justify-center items-center gap-10">
            <div className="mb-6 lg:mb-0">
              <img src={feturedImage} alt="" />
            </div>
            <div className="text-white">
              <h3 className="text-xl">March 20,</h3>
              <p className="text-xl">2023 WHERE CAN I GET SOME?</p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="border-b-2 px-5 hover:border-2 mt-5 py-2 rounded ease-in duration-100">Read more?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
