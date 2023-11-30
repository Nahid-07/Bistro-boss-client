

const ChefRecommendCart = ({salad}) => {
    const {name,recipe,image, category} = salad;
    return (
        <div className="card bg-gray-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p>category: {category}</p>
          <div className="card-actions">
            <button className="bg-gray-300 font-semibold text-xl px-6 py-3 rounded hover:bg-black text-yellow-600">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ChefRecommendCart;