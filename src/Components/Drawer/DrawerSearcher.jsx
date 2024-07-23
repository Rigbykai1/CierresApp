const DrawerSearcher = () => {
  return (
    <div className="form-control lg:hidden gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-32"
      />
      <button className="btn btn-outline">Buscar</button>
    </div>
  );
};

export default DrawerSearcher;
