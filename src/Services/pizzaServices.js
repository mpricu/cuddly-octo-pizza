export default {
  updatePizza(item) {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    };

    fetch('http://localhost:3000/menuItems/' + item.id, requestOptions)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
};
