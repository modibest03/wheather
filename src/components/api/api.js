import axios from "axios";

export const fetchLocation = async (
  latt = 6.5568767999999995,
  long = 3.3488895999999997
) => {
  const { data } = await axios.get(
    `https://www.metaweather.com/api/location/search/?lattlong=${~latt},${long}`
  );
  console.log(data);
  return data;
};

export const fetchAuthorsQuote = async (
  latt = 6.5568767999999995,
  long = 3.3488895999999997
) => {
  const { data } = await axios.get(
    `https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`
  );
  //   console.log(data);
  return data;
};
