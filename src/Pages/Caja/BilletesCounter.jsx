import MoneyCounter from "./MoneyCounter";

const BilletesCounter = () => {
  const billetes = {
    1000: {
      monto: 1000,
      color: "text-red-400",
    },
    2000: {
      monto: 2000,
      color: "text-blue-400",
    },
    5000: {
      monto: 5000,
      color: "text-yellow-300",
    },
    10000: {
      monto: 10000,
      color: "text-green-500",
    },
    20000: {
      monto: 20000,
      color: "text-orange-400",
    },
  };
  return (
    <>
      <h1 className="text-4xl sm:text-7xl text-center font-extrabold">
        Billetes
      </h1>
      <div className="flex flex-wrap gap-3 justify-evenly">
        {Object.values(billetes).map((billete, index) => (
          <MoneyCounter moneda={billete} key={index} index={index} formID={"BilletesCounter"} />
        ))}
      </div>
    </>
  );
};

export default BilletesCounter;
