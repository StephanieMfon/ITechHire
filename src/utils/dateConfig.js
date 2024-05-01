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

export const getDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const obj = new Date(date);
  const year = obj.getFullYear();
  const month = months[obj.getMonth()];
  const day = obj.getDate();
  const hour = obj.getHours();
  const minute = obj.getMinutes();

  return { day: `${month} ${day}, ${year}`, time: `${hour}:${minute}` };
};
