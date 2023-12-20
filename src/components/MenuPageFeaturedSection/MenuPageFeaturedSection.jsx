
const MenuPageFeaturedSection = ({ headerMenuBG,title,subDescription }) => {
  return (
    <div
      style={{ backgroundImage: `url(${headerMenuBG})` }}
      className="bg-fixed w-full bg-center h-[572px] flex items-center justify-center"
    >
      <div className=" bg-black opacity-70 text-white mx-5 lg:w-6/12 py-20 text-center px-5">
        <h2 className="text-6xl font-semibold">{title}</h2>
        <p className="text-xl">
          {subDescription}
        </p>
      </div>
    </div>
  );
};

export default MenuPageFeaturedSection;
