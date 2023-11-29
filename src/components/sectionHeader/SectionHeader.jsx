const SectionHeader = ({ subHeader, mainHeader }) => {
    return (
      <div className="mx-auto text-center my-10 py-5 border-y-4 md:w-4/12">
        <h4 className="text-yellow-500 text-lg">{subHeader}</h4>
        <h1 className="uppercase font-semibold text-2xl lg:text-4xl">{mainHeader}</h1>
      </div>
    );
  };
  
  export default SectionHeader;
  