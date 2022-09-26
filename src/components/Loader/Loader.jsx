import "./Loader.css";

const Loader = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-4">
        <div class="lds-dual-ring"></div>
        <span className="text-xl text-indigo-700">Loading...</span>
      </div>
    </>
  );
};

export default Loader;
