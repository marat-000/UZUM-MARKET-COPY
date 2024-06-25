import { useNavigate } from "react-router-dom";

export const SearchSort = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    let value = e.target.search.value.trim();
    if (value) {
      navigate(`/search?title=*${value}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-center xl:w-[500px] lg:w-[400px] md:w-[330px] w-[100%] h-[40px] border rounded-[5px] mr-[-50px] md:mr-[0px]"
    >
      <input
        type="text"
        placeholder="Искать товары и категории"
        className="w-[90%] p-[10px] outline-none"
        name="search"
      />
      <button
        type="submit"
        className="bg-[#e5e3e4] w-[10%] rounded-[5px] flex items-center justify-center"
      >
        <i className="fa fa-search text-[20px]"></i>
      </button>
    </form>
  );
};
