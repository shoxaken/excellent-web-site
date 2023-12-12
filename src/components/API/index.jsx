export const getOrders = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};
// export const getInventory = () => {
//   // return fetch("https://dummyjson.com/products").then((res) => res.json());
// };
export const getInventory = () => {
  // Replace this with your actual API endpoint or data retrieval logic
  return fetch("https://excellentlc.uz/api/")
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};
export const getInventoryKetgan = () => {
  // Replace this with your actual API endpoint or data retrieval logic
  return fetch("https://excellentlc.uz/ketgan/")
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};
// console.log(getInventoryKetgan);
export const getInventoryVip = () => {
  // Replace this with your actual API endpoint or data retrieval logic
  return fetch("https://excellentlc.uz/Vip/")
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};



export const TolovApi = () => {
  // Replace this with your actual API endpoint or data retrieval logic
  return fetch("https://excellentlc.uz/tolovapi/")
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};
export const Qarzdorlar = () => {
  // Replace this with your actual API endpoint or data retrieval logic
  return fetch("https://excellentlc.uz/qarzdorlar/")
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};

export const ToqApi = () => {
  // Replace this with your actual API endpoint or data retrieval logic
  return fetch("https://excellentlc.uz/toqapi/")
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};
export const JuftApi = () => {
  // Replace this with your actual API endpoint or data retrieval logic
  return fetch("https://excellentlc.uz/juftapi/")
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};
