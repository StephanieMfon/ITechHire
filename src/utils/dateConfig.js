export const dateConfig = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const dateFormatter = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("US-en", dateConfig);
  return formattedDate;
};
