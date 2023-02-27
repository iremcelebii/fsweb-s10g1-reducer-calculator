import React from "react";
import { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer from "./reducers";
import { initialState } from "./reducers";
// import { addOne } from "./actions";
import { applyNumber } from "./actions";
import { changeOperation } from "./actions";
import { clearDisplay } from "./actions";
import { mArti, mr, mc } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                valueDegeri={"M+"}
                onClickFunc={() => dispatch(mArti())}
              />
              <CalcButton
                valueDegeri={"MR"}
                onClickFunc={() => dispatch(mr())}
              />
              <CalcButton
                valueDegeri={"MC"}
                onClickFunc={() => dispatch(mc())}
              />
            </div>

            <div className="row">
              <CalcButton
                onClickFunc={() => dispatch(applyNumber(1))}
                valueDegeri={1}
              />
              {/* onClick={() => dispatch({ type: "ADD_ONE" })} */}
              <CalcButton
                valueDegeri={2}
                onClickFunc={() => dispatch(applyNumber(2))}
              />
              <CalcButton
                valueDegeri={3}
                onClickFunc={() => dispatch(applyNumber(3))}
              />
            </div>

            <div className="row">
              <CalcButton
                valueDegeri={4}
                onClickFunc={() => dispatch(applyNumber(4))}
              />
              <CalcButton
                valueDegeri={5}
                onClickFunc={() => dispatch(applyNumber(5))}
              />
              <CalcButton
                valueDegeri={6}
                onClickFunc={() => dispatch(applyNumber(6))}
              />
            </div>

            <div className="row">
              <CalcButton
                valueDegeri={7}
                onClickFunc={() => dispatch(applyNumber(7))}
              />
              <CalcButton
                valueDegeri={8}
                onClickFunc={() => dispatch(applyNumber(8))}
              />
              <CalcButton
                valueDegeri={9}
                onClickFunc={() => dispatch(applyNumber(9))}
              />
            </div>

            <div className="row">
              <CalcButton
                onClickFunc={() => dispatch(changeOperation("+"))}
                valueDegeri={"+"}
              />
              <CalcButton
                onClickFunc={() => dispatch(changeOperation("*"))}
                valueDegeri={"*"}
              />
              <CalcButton
                onClickFunc={() => dispatch(changeOperation("-"))}
                valueDegeri={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                onClickFunc={() => dispatch(clearDisplay())}
                valueDegeri={"CE"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
