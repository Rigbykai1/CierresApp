import MoneyCounter from "./MoneyCounter";

const MonedasCounter = () => {
  const monedas = {
    5: {
      monto: 5,
      color: "text-gray-500",
    },
    10: {
      monto: 10,
      color: "text-gray-500",
    },
    25: {
      monto: 25,
      color: "text-orange-300",
    },
    50: {
      monto: 50,
      color: "text-orange-300",
    },
    100: {
      monto: 100,
      color: "text-orange-300",
    },
    500: {
      monto: 500,
      color: "text-orange-300",
    },
  };
  return (
    <>
      <h1 className="text-4xl sm:text-7xl text-center font-extrabold">
        Monedas
      </h1>
      <div className="flex flex-wrap gap-3 justify-evenly">
        {Object.values(monedas).map((moneda, index) => (
          <MoneyCounter moneda={moneda} key={index} index={index} />
        ))}
      </div>
    </>
  );
};

export default MonedasCounter;
