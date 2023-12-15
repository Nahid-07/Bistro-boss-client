
const MenuPageFeaturedSection = ({ headerMenuBG }) => {
  return (
    <div
      style={{ backgroundImage: `url(${headerMenuBG})` }}
      className="extacss w-full bg-center h-[572px] flex items-center justify-center"
    >
      <div className=" bg-black opacity-70 text-white w-6/12 py-20 text-center">
        <h2 className="text-6xl font-semibold">OUR MENU</h2>
        <p className="text-xl">
          Would you like to try a dish?
        </p>
      </div>
    </div>
  );
};

export default MenuPageFeaturedSection;
