export const Footer = () => {
  return (
    <div className="max-w-[1300px] m-auto p-[10px] mt-[60px]">
      <div className="w-[100%] grid grid-cols-1 text-center gap-[30px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col gap-[10px]">
          <a href="#" className="font-bold">
            О нас
          </a>
          <a href="#" className="text-gray-500">
            Пункты выдачи
          </a>
          <a href="#" className="text-gray-500">
            Вакансии
          </a>
        </div>

        <div className="flex flex-col gap-[10px]">
          <a href="#" className="font-bold">
            Пользователи
          </a>
          <a href="#" className="text-gray-500">
            Связаться с нами
          </a>
          <a href="#" className="text-gray-500">
            Вопрос-ответ
          </a>
        </div>

        <div className="flex flex-col gap-[10px]">
          <a href="#" className="font-bold">
            Для предпринимателей
          </a>
          <a href="#" className="text-gray-500">
            Продавайте на Uzum
          </a>
          <a href="#" className="text-gray-500">
            Вход для продавцов
          </a>
        </div>

        <div className="flex flex-col gap-[30px]">
          <a href="#" className="font-bold">
            Скачать приложение
          </a>
          <div className="flex items-center gap-[10px] flex-col sm:flex-row justify-center">
            <a href="#" className="text-gray-500 flex items-center gap-[5px]">
              <img
                className="w-[20px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apple_Store_logo.svg/2048px-Apple_Store_logo.svg.png"
                alt="img"
              />
              App Store
            </a>
            <a href="#" className="text-gray-500 flex items-center gap-[5px]">
              <img
                className="w-[30px]"
                src="https://i.pinimg.com/originals/1a/49/22/1a49226d155846acb790eeb919f63c8e.jpg"
                alt="img"
              />
              App Store
            </a>
          </div>

          <div className="mt-[20px] mb-[70px] sm:mb-[0px]">
            <a href="#" className="font-bold">
              Uzum в соц.сетях
              <div className="flex justify-center items-center gap-[10px] pt-[10px]">
                <img
                  className="w-[35px]"
                  src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718928000&semt=ais_userhttps://www.transparentpng.com/thumb/logo-instagram/4u4DTk-instagram-logo-transparent-background.png"
                  alt="img"
                />

                <img
                  className="w-[30px]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png"
                  alt="img"
                />

                <img
                  className="w-[30px]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"
                  alt="img"
                />

                <img
                  className="w-[35px]"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                  alt="img"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
