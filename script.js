let crncyOne = document.querySelector("#crncy1");

axios
  .get(
    "https://v6.exchangerate-api.com/v6/421cf9898b649f8594231bfd/pair/USD/JPY"
  )
  .then((res) => {
    crncyOne.innerHTML = res.data.conversion_rate;
  })
  .catch((e) => {
    console.log("Error: ", e);
  });
