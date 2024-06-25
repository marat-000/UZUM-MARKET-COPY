import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const PostData = async (data) => {
    try {
      const response = await axios.post(
        "https://9303851354d5e8f0.mokky.dev/auth",
        data
      );
      console.log(response);
      if (response.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(response.data.data));
        localStorage.setItem("token", response.data.token);
        setIsAuth(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const HandleData = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };
    PostData(data);
  };

  return (
    <div className="w-[100%] h-[950px] flex items-center justify-center p-[20px]">
      <form
        onSubmit={HandleData}
        className="w-[430px] h-[450px] bg-white rounded-[15px]  p-[20px] flex flex-col gap-[30px] pt-[50px] shadow-lg"
      >
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[32px]">Авторизация</h1>
          <Link
            to={"/register"}
            className="font-600 text-[20px] justify-center flex text-white bg-[#8b00ff] hover:bg-[#ab35ff] transition-all  w-[20%]  rounded-[6px]  py-[2px]"
          >
            Назад
          </Link>
        </div>
        <input
          placeholder="Введите ваш email-адрес:"
          type="email"
          name="email"
          className="max-w-full h-[50px] border-gray-200 bg-gray-200 rounded-[10px] text-black font-600 px-[10px] text-[20px] outline-none"
        />
        <input
          type="password"
          name="pass"
          placeholder="Введите ваш пароль:"
          className="max-w-full h-[50px] bg-gray-200 rounded-[10px] text-black font-600 px-[10px] text-[20px] outline-none"
        />

        <button className="font-600 text-[20px] text-white bg-[#8b00ff] hover:bg-[#ab35ff] transition-all  w-[100%]  rounded-[6px]  py-[5px]">
          Авторизироваться
        </button>

        <p className="text-center">
          Авторизуясь, вы соглашаетесь c{" "}
          <a
            href="https://legal.uzum.uz/privacy-policy.html"
            className="text-blue-500"
          >
            политикой обработки персональных данных
          </a>
        </p>
      </form>
    </div>
  );
};
