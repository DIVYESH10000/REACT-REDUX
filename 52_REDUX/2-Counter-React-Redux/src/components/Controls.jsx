import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  const handlePrivacyToggle = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    });
  };

  return (
    <>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            onClick={handleDecrement}
          >
            -1
          </button>
          <button
            type="button"
            className="btn btn-success btn-lg px-4 gap-3"
            onClick={handleIncrement}
          >
            +1
          </button>
          <button
            type="button"
            className="btn btn-warning btn-lg px-4 gap-3"
            onClick={handlePrivacyToggle}
          >
            Privacy Toggle
          </button>
        </div>
      </div>
      <br />

      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <input
            ref={inputElement}
            type="number"
            className="btn btn-light btn-lg px-4 gap-3 number-input"
            placeholder="Enter a number"
          />
          <button
            type="button"
            className="btn btn-success btn-lg px-4 gap-3"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg px-4 gap-3"
            onClick={handleSubtract}
          >
            Subtract
          </button>
        </div>
      </div>
    </>
  );
};
export default Controls;
