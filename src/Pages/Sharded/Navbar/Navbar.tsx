const Navbar = () => {
  return (
    <div className="px-5 py-2 border-b-2 flex justify-between items-center">
      {/* Navber left Side */}
      <div className="flex items-center gap-3">
        <div className="cursor-pointer"> X</div>
        <div>
          <h3> Optimization Matrix</h3>
          <p className="text-sm"> Project ABC</p>
        </div>
      </div>
      {/* Navber Right Side */}
      <div className="space-x-3">
        <button className="text-fuchsia-800 font-semibold"> Cancel</button>
        <button className="bg-fuchsia-700 text-white px-8 py-1.5 rounded-3xl">
          Save
        </button>
      </div>
    </div>
  );
};

export default Navbar;
