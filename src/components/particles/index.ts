import { snow, bubbles } from "./presets";

const checkDate = (month: number, days: number[]): boolean => {
  const today = new Date();
  return today.getMonth() === month && days.indexOf(today.getDate()) !== -1;
};

export const getParticlesOptions = (): any => {
  if (checkDate(11, [28, 29, 30, 31]) || checkDate(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) return snow;
  return bubbles;
};
