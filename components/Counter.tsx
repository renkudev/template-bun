"use client";
import { createSignal, type FunctionComponent } from "renku";

export const Counter: FunctionComponent<{ start: number }> = ({ start }) => {
  const counter = createSignal(start);

  return (
    <div>
      <button type="button" onclick={() => counter.set(counter.get() + 1)}>
        Counter: {String(counter.get())}
      </button>
    </div>
  );
};
