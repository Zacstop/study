import React from "react";
import counterSlice, { up, down } from "./counterSlice";
import { useAppDispatch, useAppSelecter } from "./app/hooks";

export default function Todo() {
  const dispatch = useAppDispatch();
  const count = useAppSelecter((state) => {
    console.log(state);
    return state.counter.value;
  });

  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: "counterSlice/up", step: 2 });
          dispatch(counterSlice.actions.up(2));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(down(5));
        }}
      >
        -
      </button>
      <p>{count}</p>

      <p>---------------------</p>
    </div>
  );
}
