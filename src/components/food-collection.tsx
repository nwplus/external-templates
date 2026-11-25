"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

type Food =
  | "mango-sticky-rice"
  | "laksa"
  | "tanghulu"
  | "taiyaki"
  | "strawberry-pancakes";
const FOOD_LABELS: Record<Food, string> = {
  "mango-sticky-rice": "mango sticky rice",
  laksa: "laksa",
  tanghulu: "tanghulu",
  taiyaki: "taiyaki",
  "strawberry-pancakes": "strawberry pancakes",
};
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
        aria-label={`Food tray${foods.length ? ` with ${foods.map((food) => FOOD_LABELS[food]).join(" and ")}` : ": empty"}`}
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
            src={
              food === "strawberry-pancakes"
                ? "/assets/sponsors/interactive/strawberry-pancakes.png"
                : `/assets/sponsors/interactive/${food}.svg?v=2`
            }
            alt=""
            data-food={food}
            className={`collected-food ${food}`}
          />
        ))}
      </div>
      <span className="sr-only" role="status">
        {foods.length
          ? `Collected: ${foods.map((food) => FOOD_LABELS[food]).join(", ")}`
          : ""}
      </span>
    </FoodCollectionContext.Provider>
  );
}
