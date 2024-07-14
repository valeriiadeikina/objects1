import { orderByProps } from "../index";

let obj;

beforeEach(() => {
  obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
});

test("checking sorting with 2 parameters", () => {
  let arr = orderByProps(obj, ["name", "level"]);
  expect(arr).toEqual([
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ]);
});

test("checking sorting with 3 parameters", () => {
  let arr2 = orderByProps(obj, ["health", "attack", "level"]);
  expect(arr2).toEqual([
    { key: "health", value: 10 },
    { key: "attack", value: 80 },
    { key: "level", value: 2 },
    { key: "defence", value: 40 },
    { key: "name", value: "мечник" },
  ]);
});
