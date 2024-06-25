import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const Profile = () => {
  const { setIsAuth, info } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({ display: "none" });

  const HandleMenu = () => {
    setIsOpen((prev) => !prev);
    setHideOrShow((prev) => ({
      display: prev.display === "none" ? "flex" : "none",
    }));
  };

  const [city, setCity] = useState("");
  return (
    <div className="max-w-[1300px] m-auto flex items-center justify-center h-[700px] p-[20px]">
      <div
        style={hideOrShow}
        className="w-[300px] h-[600px] bg-white shadow-lg absolute sm:left-[300px] z-10 "
      >
        <div className="grid grid-cols-3 gap-[20px] grid-rows-10 p-[20px]">
          <p
            onClick={() => setCity("Хоразм")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Хоразм
          </p>
          <p
            onClick={() => setCity("Ташкент")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Ташкент
          </p>
          <p
            onClick={() => setCity("Самарканд")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Самарканд
          </p>
          <p
            onClick={() => setCity("Бухара")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Бухара
          </p>
          <p
            onClick={() => setCity("Термез")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Термез
          </p>
          <p
            onClick={() => setCity("Андижан")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Андижан
          </p>
          <p
            onClick={() => setCity("Гулистан")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Гулистан
          </p>

          <p
            onClick={() => setCity("Нурата")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Нурата
          </p>
          <p
            onClick={() => setCity("Турткуль")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Турткуль
          </p>
          <p
            onClick={() => setCity("Ангрен")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Ангрен
          </p>
          <p
            onClick={() => setCity("Асака")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Асака
          </p>
          <p
            onClick={() => setCity("Алмалык")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Алмалык
          </p>
          <p
            onClick={() => setCity("Джизак")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Джизак
          </p>
          <p
            onClick={() => setCity("Карши")}
            className="py-[5px] px-[10px] text-[14px] border w-[80px] h-[40px] flex justify-center cursor-pointer"
          >
            Карши
          </p>
        </div>
      </div>

      <div className="w-[500px] h-[550px] sm:h-[400px] shadow-lg flex flex-col items-center gap-[20px] rounded-[15px] p-[20px]">
        <h1 className="font-bold text-[24px]">Информация о вас</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[100px] gap-y-[20px]">
          <div className="flex flex-col gap-[3px]">
            <p className="text-[14px]">Ваше имя:</p>
            <p className="py-[5px] px-[10px] border w-[80px] flex justify-center cursor-pointer">
              {info.fullname}
            </p>
          </div>
          <div className="flex flex-col gap-[3px]">
            <p className="text-[14px]">Ваш пароль:</p>

            <p className="py-[5px] px-[10px] border w-[120px] flex justify-center font-bold text-[20px] cursor-pointer">
              *********
            </p>
          </div>

          <div className="flex flex-col gap-[3px]">
            <p className="text-[14px]">Ваш эмейл:</p>

            <p className="py-[5px] px-[10px] border w-[270px] flex justify-center cursor-pointer">
              {info.email}
            </p>
          </div>

          <div
            className="flex flex-col gap-[3px] cursor-pointer"
            onClick={HandleMenu}
          >
            <p className="text-[14px]">Ваш город: </p>

            <p className="py-[5px] px-[10px] h-[30px] border w-[80px] flex justify-center cursor-pointer">
              {city}
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          className="bg-[#8b00ff] px-[8px] py-[5px] text-white rounded w-[180px] h-[40px] self-end"
        >
          выйти c аккаунта
        </button>
      </div>
    </div>
  );
};
