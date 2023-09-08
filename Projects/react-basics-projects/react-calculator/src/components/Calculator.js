import { useState } from "react";

const Calculator = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const buttonFunction = ["+", "-", "/", "*", "%"];

  const [displayValue, setDisplayValue] = useState("");
  const [lastInputEquals, setLastInputEquals] = useState(false);

  const handleButtonClick = (number) => {
    if (lastInputEquals) {
      setDisplayValue("");
      setLastInputEquals(false);
    }
    setDisplayValue((previousDisplayValue) => previousDisplayValue + number);
  };

  const equals = () => {
    try {
      setDisplayValue(eval(displayValue));
    }catch(error){
      alert(error.message);
      setDisplayValue("");
      setLastInputEquals(false);
    }
    
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="flex flex-col items-end">
          <h2 className="card-title text-2xl mx-5 h-10">{displayValue}</h2>
          <div className=" divider"></div>
          <div className="card-actions justify-end">
            <div className="card-body flex flex-row flex-wrap justify-around ">
              {numbers.map((number) => (
                <button
                  class="btn btn-primary px-8 m-1 "
                  onClick={() => handleButtonClick(number)}
                >
                  {number}
                </button>
              ))}
              <button
                className="btn btn-primary px-8 m-1 "
                onClick={() => handleButtonClick(0)}
              >
                0
              </button>

              <div className="flex flex-wrap justify-around mt-6">
                {buttonFunction.map((button) => (
                  <button
                    class="btn btn-accent px-8 m-1 "
                    onClick={() => handleButtonClick(button)}
                  >
                    {button}
                  </button>
                ))}
                <button
                  class="btn btn-secondary px-11 m-1 "
                  onClick={() => {
                    setDisplayValue("");
                    setLastInputEquals(false);
                  }}
                >
                  AC
                </button>
                <button
                  class="btn btn-secondary px-11 m-1 "
                  onClick={() => {
                    equals();
                    setLastInputEquals(true);
                  }}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
