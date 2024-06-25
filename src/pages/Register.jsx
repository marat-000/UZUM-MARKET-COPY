import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
export const Register = () => {
  const { setIsAuth } = useContext(AuthContext);
  const PostData = async (data) => {
    try {
      const response = await axios.post(
        "https://9303851354d5e8f0.mokky.dev/register",
        data
      );
      if (response.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(response.data.data));
        localStorage.setItem("token", response.data.token);
        setIsAuth(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleData = (e) => {
    e.preventDefault();
    let fullname = e.target.FullName.value;
    let email = e.target.email.value;
    let pass = e.target.pass.value;
    const data = {
      fullname,
      email,
      pass,
    };
    PostData(data);
  };
  return (
    <div className="w-[100%] h-[950px] flex items-center justify-center">
      <form
        onSubmit={HandleData}
        className="w-[430px] h-[500px] bg-white rounded-[15px]  p-[20px] flex flex-col gap-[20px] pt-[50px] shadow-lg"
      >
        <h1 className="font-bold text-[32px]">Регистрация</h1>
        <input
          placeholder="Введите ваше полное имя:"
          type="text"
          name="FullName"
          className="max-w-full h-[50px] border-gray-200 bg-gray-200 rounded-[10px] text-black font-600 px-[10px] text-[20px] outline-none"
        />
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
        <div className="flex flex-col items-center gap-[20px]">
          <button className="font-600 text-[20px] bg-[#8b00ff] hover:bg-[#ab35ff] transition-all text-[white] w-[70%] rounded-[6px] mt-[20px] py-[5px]">
            Зарегистрироваться
          </button>
          <Link to={"/login"} className="w-[70%] flex items-center">
            <button className="font-600 text-[20px] bg-gray-300 hover:bg-gray-200 transition-all text-black w-[100%]  rounded-[6px]  py-[5px]">
              Авторизироваться
            </button>
          </Link>
        </div>

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
