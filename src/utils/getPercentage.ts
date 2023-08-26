/** Функция вычисления процентов */
// eslint-disable-next-line no-mixed-operators
export const getPercentage = (count?: number, total?: number) => Math.round((count ?? 0) * 100 / (total ?? 1));
