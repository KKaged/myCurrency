let crncyOne = document.querySelector("#crncy1");

const USDtoJPYreq = async (crncy1, crncy2) => {
  try {
    const req = await fetch(
      `https://v6.exchangerate-api.com/v6/421cf9898b649f8594231bfd/pair/${crncy1}/${crncy2}`
    );
    const thisData = await req.json();
    crncyOne.innerHTML = thisData.conversion_rate;
  } catch (e) {
    console.log("There seems to be an error.", e);
  }
};
USDtoJPYreq("USD", "JPY");
