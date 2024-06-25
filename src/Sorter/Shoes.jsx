import { useContext, useState } from "react";
import { ProductContext } from "../context/store";
import { LikeContext } from "../context/likeContext";
import { BasketContext } from "../context/BasketPage";

export const Shoes = () => {
  const { state } = useContext(ProductContext);
  const { getLikeData } = useContext(LikeContext);
  const { getBasketData } = useContext(BasketContext);

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hideOrShow, setHideOrShow] = useState({ display: "none" });

  const HandleMenu = (product) => {
    setSelectedProduct(product);
    setHideOrShow({ display: "flex" });
  };

  const closeModal = () => {
    setHideOrShow({ display: "none" });
    setSelectedProduct(null);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="max-w-[1340px] m-auto">
      <div>
        {hideOrShow.display === "flex" && (
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
        )}
        <div
          style={hideOrShow}
          className="fixed z-20 w-[800px] h-[710px] bg-white border rounded-[20px] right-[25%] left-[28%] bottom-[50%] top-[15%]"
        >
          <div className="p-[20px] relative">
            <button
              onClick={closeModal}
              className="mt-4 w-[30px] h-[30px] text-gray-500 border  rounded-full absolute left-[755px] top-[-5px]"
            >
              X
            </button>
            {selectedProduct && (
              <div className="flex items-start">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="max-w-[300px] rounded-t-[10px]"
                  />
                </div>
                <div className="flex flex-col px-[40px]">
                  <div className="w-[400px] ">
                    <p className="text-2xl font-[600] mt-4 pb-[50px] border-b">
                      {selectedProduct.title}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px] pt-[20px]">
                    <p>
                      цвет: <span className="font-bold">{color}</span>
                    </p>
                    <div className="flex items-center gap-[20px]">
                      <button
                        onClick={() => setColor("белый")}
                        className="w-[60px] h-[30px] border rounded p-[2px] flex items-center justify-center hover:border-[2px]  font-[600]"
                      >
                        белый
                      </button>
                      <button
                        onClick={() => setColor("черный")}
                        className="w-[65px] h-[30px] border rounded p-[2px] flex items-center justify-center hover:border-[2px] font-[600]"
                      >
                        черный
                      </button>
                      <button
                        onClick={() => setColor("серый")}
                        className="w-[60px] h-[30px] border rounded p-[2px] flex items-center justify-center hover:border-[2px] font-[600]"
                      >
                        серый
                      </button>
                    </div>
                  </div>
                  <div className="pt-[20px]">
                    <p>Количество:</p>
                    <div className="flex items-center gap-[10px] mt-2">
                      <button
                        onClick={decreaseQuantity}
                        className="w-[30px] h-[30px] bg-gray-200 text-gray-700 rounded"
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={increaseQuantity}
                        className="w-[30px] h-[30px] bg-gray-200 text-gray-700 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px] font-[600]">
                    <p className="text-[18px] mt-2">
                      {selectedProduct.price * quantity} сум
                    </p>
                    <p className="text-[16px] mt-2 line-through text-gray-500">
                      {selectedProduct.price * 1.5 * quantity} сум
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      selectedProduct.quantity = quantity;
                      getBasketData(selectedProduct);
                    }}
                    className="mt-4 p-2 bg-[#8b00ff] text-white rounded"
                  >
                    Добавить в корзину
                  </button>

                  <div className="w-[400px] h-[230px] border mt-[20px] rounded-[20px] p-[10px] px-[15px]">
                    <div className="border-b pb-[10px]">
                      <p className="flex flex-col text-[15px]">
                        {" "}
                        <span className="font-[600]">
                          Быстрая доставка от 1 дня
                        </span>
                        В пункты выдачи Uzum или курьером
                      </p>
                    </div>
                    <div className="border-b pb-[10px] pt-[10px]">
                      <p className="flex flex-col text-[15px]">
                        {" "}
                        <span className="font-[600]">
                          Безопасная оплата удобным способом
                        </span>
                        Оплачивайте картой, наличными или в рассрочку
                      </p>
                    </div>
                    <div className="pb-[10px] pt-[10px]">
                      <p className="flex flex-col text-[15px]">
                        {" "}
                        <span className="font-[600]">
                          Простой и быстрый возврат
                        </span>
                        Примем товары в течение 10 дней и сразу вернём деньги
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2  p-[20px] gap-[20px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {state.map((product) => {
          if (product.filter === "shoes") {
            return (
              <div className="relative" key={product.id}>
                <button
                  onClick={() => getLikeData(product)}
                  className="absolute right-[10px] top-[10px] z-[9]"
                >
                  <i className="fa fa-heart-o text-[24px]  cursor-pointer"></i>
                </button>
                <div
                  onClick={() => HandleMenu(product)}
                  className="flex flex-col justify-between border relative rounded-[10px] sm:max-w-[300px] max-w-[300px] sm:h-[400px] h-[300px] pb-[10px] hover:shadow-lg transition-all cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[100%] h-[150px] sm:h-[250px] rounded-t-[10px]"
                  />
                  <p className="text-[13px] pl-[10px]">{product.title}</p>
                  <p className="flex justify-center ml-[10px] text-[12px] bg-[yellow] w-[100px] h-[20px] rounded-[10px]">
                    45 000 сум/мес
                  </p>
                  <div className="flex items-center justify-between px-[10px]">
                    <div className="flex flex-col pt-[10px]">
                      <p className="text-[12px] text-grey-500 line-through">
                        {product.price * 2} сум
                      </p>
                      <p className="font-bold">{product.price} сум</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => getBasketData(product)}
                  className="p-[5px] border rounded-[100%] absolute bottom-[10px] right-[10px]"
                >
                  <img
                    className="w-[25px]"
                    src="/public/shopping-bag.png"
                    alt="basket"
                  />
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
