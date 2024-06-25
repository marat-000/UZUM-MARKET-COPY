import { useContext, useState, useEffect } from "react";
import { BasketContext } from "../context/BasketPage";
import { Link } from "react-router-dom";

export const Korzina = () => {
  const { basket, onDelete } = useContext(BasketContext);
  const [counts, setCounts] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);

  useEffect(() => {
    const total = basket.reduce((sum, item) => {
      const count = counts[item.id] || 1;
      return sum + item.price * count;
    }, 0);
    setTotalPrice(total);

    const savings =
      basket.reduce((sum, item) => {
        const count = counts[item.id] || 1;
        return sum + item.price * count;
      }, 0) *
        2 -
      total;
    setTotalSavings(savings);
  }, [basket, counts]);

  const handleMinus = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 1) - 1, 1),
    }));
  };

  const handlePlus = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 1) + 1,
    }));
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === basket.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(basket.map((item) => item.id));
    }
  };

  const handleDeleteSelected = () => {
    selectedItems.forEach((id) => onDelete(id));
    setSelectedItems([]);
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      {basket.length > 0 ? (
        <>
          <h1 className="text-[24px] font-bold pb-[20px]">
            Ваша корзина,{" "}
            <span className="text-[grey]">{basket.length} товар</span>
          </h1>
          <div className="max-w-[100%] flex flex-col 2xl:flex-row gap-[20px]">
            <div className="flex flex-col gap-[20px] p-[20px] border max-w-[100%] 2xl:w-[950px]">
              <div className="px-[20px]">
                <div className="flex items-center gap-[10px] justify-between">
                  <div className="flex gap-[10px]">
                    <input
                      type="checkbox"
                      className="w-[20px]"
                      checked={selectedItems.length === basket.length}
                      onChange={handleSelectAll}
                    />
                    <p>Снять все</p>
                  </div>
                  <button
                    onClick={handleDeleteSelected}
                    className="w-[140px] h-[30px] rounded-[10px] bg-white text-black border text-[20px]"
                  >
                    Удалить все
                  </button>
                </div>
              </div>

              {basket.map((item) => {
                const count = counts[item.id] || 1;
                return (
                  <div
                    className="flex flex-col sm:flex-row items-center justify-between max-w-[100%] border-t p-[20px]"
                    key={item.id}
                  >
                    <div className="flex items-center gap-[20px]">
                      <input
                        type="checkbox"
                        className="w-[20px]"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                      />
                      <img
                        className="w-[120px] h-[120px]"
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="flex flex-col gap-[10px] self-start">
                        <span className="pb-2 block text-md">{item.title}</span>
                        <p className="text-[grey] font-[600]">
                          продавец:{" "}
                          <span className="text-black">Muhammadjon</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-[40px]">
                      <div className="flex border items-center w-[100px] h-[40px] justify-between p-[5px]">
                        <button
                          className="text-[30px]"
                          onClick={() => handleMinus(item.id)}
                        >
                          -
                        </button>
                        <p className="font-bold text-[16px]">{count}</p>
                        <button
                          className="text-[30px]"
                          onClick={() => handlePlus(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="flex flex-col items-end w-[120px]">
                        <button
                          onClick={() => onDelete(item.id)}
                          className="px-[5px] py-[2px] border-2 rounded-[10px] mb-[20px]"
                        >
                          удалить
                        </button>
                        <b className="rounded-lg">{item.price * count} сум</b>
                        <b className="rounded-lg line-through text-[grey] font-[400]">
                          {item.price * 2 * count} сум
                        </b>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="2xl:max-w-[350px] w-[100%] h-[300px] border p-[10px] flex flex-col gap-[20px] font-[600] rounded">
              <h1>Ваш заказ</h1>
              <div className="flex items-center justify-between font-[600]">
                <p>Товары({basket.length})</p>
                <p>{totalPrice} сум</p>
              </div>
              <div className="border border-[#8b00ff] text-[#8b00ff] flex justify-center font-[600]">
                Доставка за 1 день, (завтра)
              </div>
              <div className="flex justify-between font-[600]">
                <p>итого:</p>
                <p className="flex flex-col items-end text-[18px] font-[600]">
                  {totalPrice} сум
                  <span className="text-[14px] text-green-500">
                    вы экономите: {totalSavings / 2} сум
                  </span>
                </p>
              </div>

              <button className="w-[100%] h-[35px] rounded-[10px] bg-[#8b00ff] text-white text-[20px] mt-[30px]">
                перейти к оформлению
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center flex flex-col justify-center items-center pt-[60px] gap-[10px] mb-[300px]">
          <img
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            alt="image"
            className="w-[140px]"
          />
          <p className="font-bold text-[24px]">В корзине пока нет товаров</p>
          <p>
            Начните с подборок на главной странице или найдите нужный товар
            через поиск
          </p>
          <Link to={"/"}>
            <button className="px-[7px] py-[5px] rounded border bg-[#8b00ff] text-white">
              На главную
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
