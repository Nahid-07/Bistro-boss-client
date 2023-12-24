

const Menu = ({item}) => {
    const {name,recipe,image,price} = item;
    return (
        <div className="flex items-center">
            <div className="">
                <img src={image} alt="" className="md:w-40 md:rounded-tr-full md:rounded-br-full md:rounded-bl-full"/>
            </div>
            <div className="mx-5"> 
                <h3 className="text-xl font-semibold">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500 text-xl">${price}</p>
        </div>
    );
};

export default Menu;