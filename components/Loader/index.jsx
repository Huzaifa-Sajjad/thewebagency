function Loader() {
  return (
    <div
      className="fixed bg-primary h-screen h-full w-screen w-full z-50 text-white flex justify-center items-center overflow-hidden"
      id="app-loader"
    >
      <img
        src="https://images.prismic.io/thewebagency/362e3982-9d63-40ae-9a97-5c52addfbdd3_TWA+logo1.png?auto=compress,format"
        alt="The Web Agency Logo"
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  );
}

export default Loader;
