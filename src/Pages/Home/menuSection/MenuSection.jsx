import SectionHeader from "../../../components/sectionHeader/sectionHeader";
import Menu from "../../../components/menu/Menu";
import useMenu from "../../hooks/useMenu";

const MenuSection = () => {
  const [menu] = useMenu();
  const recomendedMenu = menu.filter((menu) => menu.category === "popular");
  return (
    <div>
      <SectionHeader
        subHeader={"----Check it out----"}
        mainHeader={"From our menu"}
      ></SectionHeader>
      <div className="grid mx-5 lg:mx-0 md:grid-cols-2 gap-5 mb-20">
        {recomendedMenu.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-lg px-3 font-semibold border-b-4 border-black m-10">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
