export default {
  getMenu() {
    let menuItems = [];
    fetch("http://localhost:3000/menuItems")
      .then((response) => response.json())
      .then((data) => (menuItems = data));
    return menuItems;
  },

  updatePizzaName(item) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    fetch("http://localhost:3000/menuItems/" + item.id, requestOptions)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  },
};
