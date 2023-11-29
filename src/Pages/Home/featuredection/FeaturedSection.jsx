import featuresBackground from "../../../assets/home/chef-service.jpg";
const FeaturedSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${featuresBackground})` }}
      className="my-20 w-full h-[572px] bg-center flex items-center justify-center"
    >
      <div className=" bg-white w-10/12 p-10 text-center">
        <h2 className="text-2xl font-semibold">Bistro Boss</h2>
        <p className="text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default FeaturedSection;
