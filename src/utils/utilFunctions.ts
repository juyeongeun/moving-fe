export const formatCount = (count: number) => {
  if (count > 9999) return "9,999+";
  return count.toLocaleString();
};
