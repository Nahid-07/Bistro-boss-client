import { useEffect, useState } from "react";
import SectionHeader from "../../../components/sectionHeader/sectionHeader";
import Menu from "../../../components/menu/Menu";


const MenuSection = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const menuItems = data.filter( data => data.category === 'popular')
            setMenu(menuItems)
        })
    },[])
    return (
        <div>
            <SectionHeader
            subHeader={'----Check it out----'}
            mainHeader={"From our menu"}
            ></SectionHeader>
            <div className="grid grid-cols-2 gap-5 mb-20">
                {
                    menu.map(item =>
                        <Menu key={item._id} item={item}></Menu>
                    )
                }
            </div>
        </div>
    );
};

export default MenuSection;