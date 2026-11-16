"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

type Food = "mango-sticky-rice" | "laksa";
const FoodCollectionContext = createContext<(food: Food) => void>(() => {});

export function useCollectFood() {
  return useContext(FoodCollectionContext);
}

export function FoodCollection({ children }: { children: ReactNode }) {
  const [foods, setFoods] = useState<Food[]>([]);
  const collect = (food: Food) =>
    setFoods((current) =>
      current.includes(food) ? current : [...current, food]
    );

  return (
    <FoodCollectionContext.Provider value={collect}>
      {children}
      <div
        className="food-collection"
        role="img"
        aria-label={`Food tray${foods.length ? ` with ${foods.map((food) => (food === "laksa" ? "laksa" : "mango sticky rice")).join(" and ")}` : ": empty"}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/sponsors/interactive/tray.svg"
          alt=""
          className="food-tray"
        />
        {foods.map((food) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={food}
            src={`/assets/sponsors/interactive/${food}.svg`}
            alt=""
            data-food={food}
            className={`collected-food ${food}`}
          />
        ))}
      </div>
      <span className="sr-only" role="status">
        {foods.length
          ? `Collected: ${foods.map((food) => (food === "laksa" ? "laksa" : "mango sticky rice")).join(", ")}`
          : ""}
      </span>
    </FoodCollectionContext.Provider>
  );
}
