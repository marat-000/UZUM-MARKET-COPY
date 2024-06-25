import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "./context/BasketPage";
import { LikeContext } from "./context/likeContext";
import { SearchSort } from "./Sorter/SearchSorter";

export const Navbar = () => {
  const scrollContainerRef = useRef(null);
  const { basket } = useContext(BasketContext);
  const { like } = useContext(LikeContext);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        scrollContainer.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    scrollContainer.addEventListener("wheel", handleWheel);
    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({ display: "none" });

  const HandleMenu = () => {
    setIsOpen((prev) => !prev);
    setHideOrShow((prev) => ({
      display: prev.display === "none" ? "flex" : "none",
    }));
  };

  return (
    <div className="max-w-[1300px] m-auto p-[20px]">
      <div
        className="transition-all max-w-[1300px] m-auto h-[900px] bg-white absolute top-[70px] right-0 left-0 bottom-0 z-10 hidden flex flex-col gap-[10px] p-[20px]"
        style={hideOrShow}
      >
        <div className="flex flex-col gap-[10px] border-r w-[200px]">
          <Link
            to={"/technology"}
            className="text-[18px] whitespace-nowrap"
            onClick={HandleMenu}
          >
            Техника
          </Link>
          <Link
            to={"/clothes"}
            className="text-[18px] whitespace-nowrap"
            onClick={HandleMenu}
          >
            Одежда
          </Link>
          <Link
            to={"/health"}
            className="text-[18px] whitespace-nowrap"
            onClick={HandleMenu}
          >
            Здоровье
          </Link>
          <Link
            to={"/sport"}
            className="text-[18px] whitespace-nowrap"
            onClick={HandleMenu}
          >
            Спорт и отдых
          </Link>
          <Link
            to={"/shoes"}
            className="text-[18px] whitespace-nowrap"
            onClick={HandleMenu}
          >
            Обувь
          </Link>
          <Link className="text-[18px] whitespace-nowrap">Аксессуары</Link>
          <Link className="text-[18px] whitespace-nowrap">Красота и уход</Link>
          <Link className="text-[18px] whitespace-nowrap">Детские товары</Link>
          <Link className="text-[18px] whitespace-nowrap">Книги</Link>
          <Link className="text-[18px] whitespace-nowrap">Канцтовары</Link>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link
          to={"/"}
          className="cursor-pointer flex items-center gap-[10px] hidden md:flex"
        >
          <img
            className="w-[30px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jybTGUSvxWxihbZMxwinqDCquA6PkMiC1Q&s"
          />
          <p className="text-[18px] font-bold text-[#8b00ff] xl:text-[24px]">
            uzum market
          </p>
        </Link>
        {isOpen ? (
          <button
            onClick={HandleMenu}
            className="h-[35px] w-[100px] flex items-center justify-center bg-[#ebe5ff] rounded-[3px] text-[#7916ff] font-[500] flex items-center gap-[10px] hidden md:flex"
          >
            <i className="fa fa-bars"></i>
            Закрыть
          </button>
        ) : (
          <button
            onClick={HandleMenu}
            className="h-[35px] w-[100px] flex items-center justify-center bg-[#ebe5ff] rounded-[3px] text-[#7916ff] font-[500] flex items-center gap-[10px] hidden md:flex"
          >
            <i className="fa fa-bars"></i>
            Каталог
          </button>
        )}
        <SearchSort />
        <nav className="flex items-center gap-[20px] text-[20px]">
          <Link
            to={"/profile"}
            className="flex items-center gap-[10px] md:flex cursor-pointer"
          >
            <img
              className="w-[20px] hidden md:flex"
              src="/public/user-regular.svg"
            />
            <p className="hidden xl:flex">Кабинет</p>
          </Link>

          <Link to={"/favorites"}>
            <div className="flex items-center gap-[10px] md:flex">
              <img
                className="w-[25px] hidden md:flex"
                src="/public/heart.png"
              />
              <p className="hidden xl:flex xl:gap-[5px]">
                Избранное
                <span className="text-[14px] flex items-center justify-center mt-[5px] bg-[#8b00ff] text-white w-[20px] h-[20px]">
                  {like.length}
                </span>
              </p>
            </div>
          </Link>
          <Link to={"/korzina"}>
            <div className="flex items-center gap-[10px] md:flex">
              <img
                className="w-[30px] hidden md:flex"
                src="/public/shopping-bag.png"
              />
              <p className="hidden xl:flex xl:gap-[2px]">
                Корзина
                <span className="text-[14px] flex items-center justify-center mt-[5px] bg-[#8b00ff] text-white w-[20px] h-[20px]">
                  {basket.length}
                </span>
              </p>
            </div>
          </Link>
        </nav>
      </div>

      <div className="md:hidden ml-[-10px] fixed bottom-[0px] z-10 flex bg-[white] h-[70px] w-[100%] items-center pt-[5px] border-t-[1px] justify-between ml-[-20px] px-[20px]">
        <Link to={"/"} className="cursor-pointer flex items-center gap-[10px]">
          <div className="flex items-center gap-[10px] ">
            <div className="flex flex-col justify-center items-center gap-[5px]">
              <img className="w-[30px]" src="/public/home.png" />
              <p className="text-[14px] text-grey-500">Главная</p>
            </div>
          </div>
        </Link>

        <div className="cursor-pointer flex items-center gap-[10px]">
          <div className="flex items-center gap-[10px] ">
            <button
              onClick={HandleMenu}
              className="flex flex-col justify-center items-center gap-[5px]"
            >
              <i class="fa fa-search text-[30px]"></i>
              <p className="text-[14px] text-grey-500">Каталог</p>
            </button>
          </div>
        </div>

        <Link to={"/favorites"}>
          <div className="flex items-center gap-[10px]">
            <div className="flex flex-col justify-center items-center gap-[5px]">
              <img className="w-[25px]" src="/public/heart.png" />
              <p className="text-[14px] text-grey-500">Избранное</p>
            </div>
          </div>
        </Link>
        <Link to={"/korzina"}>
          <div className="flex items-center gap-[10px]">
            <div className="flex flex-col justify-center items-center gap-[5px]">
              <img className="w-[30px]" src="/public/shopping-bag.png" />
              <p className="text-[14px] text-grey-500">Корзина</p>
            </div>
          </div>
        </Link>

        <Link to={"/profile"}>
          <div className="flex items-center gap-[10px]">
            <div className="flex flex-col justify-center items-center gap-[5px]">
              <img className="w-[25px]" src="/public/user-regular.svg" />
              <p className="text-[14px] text-grey-500">Кабинет</p>
            </div>
          </div>
        </Link>
      </div>
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scroll-container"
      >
        <div className="flex items-center gap-[20px] relative justify-between h-[40px]">
          <Link to={"/technology"} className="text-[18px] whitespace-nowrap">
            Техника
          </Link>
          <Link to={"/clothes"} className="text-[18px] whitespace-nowrap">
            Одежда
          </Link>
          <Link to={"/health"} className="text-[18px] whitespace-nowrap">
            Здоровье
          </Link>
          <Link to={"/sport"} className="text-[18px] whitespace-nowrap">
            Спорт и отдых
          </Link>
          <Link to={"/shoes"} className="text-[18px] whitespace-nowrap">
            Обувь
          </Link>
          <Link className="text-[18px] whitespace-nowrap">Аксессуары</Link>
          <Link className="text-[18px] whitespace-nowrap">Красота и уход</Link>
          <Link className="text-[18px] whitespace-nowrap">Детские товары</Link>
          <Link className="text-[18px] whitespace-nowrap">Книги</Link>
          <Link className="text-[18px] whitespace-nowrap">Канцтовары</Link>
        </div>
      </div>
    </div>
  );
};
