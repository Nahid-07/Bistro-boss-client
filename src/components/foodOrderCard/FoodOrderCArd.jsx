const FoodOrderCArd = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="food"
          className="rounded-xl"
        />
      </figure>
      <p className="bg-black text-white absolute right-0 m-5 px-3 py-2 opacity-70 rounded-md">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodOrderCArd;
