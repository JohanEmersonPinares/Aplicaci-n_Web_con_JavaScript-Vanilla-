const API_URL = 'https://fakestoreapi.com/products';
const productList = document.getElementById('product-list')
const getRandomTime = () => Math.floor(Math.random() * (3 - 1 + 1)) + 1;
fetch(API_URL)
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      const title = document.createElement('h2');
      title.innerText = product.title;

      const image = document.createElement('img');
      image.src = product.image;

      const price = document.createElement('p');
      price.innerText = `Precio: $${product.price}`;
      price.classList.add('price');

      const description = document.createElement('p');
      description.innerText = product.description;
      description.classList.add('description');

      const category = document.createElement('p');
      category.innerText = `Categoría: ${product.category}`;
      category.classList.add('category');

      const buyButton = document.createElement('button');
      buyButton.innerText = 'Comprar';

      const timer = document.createElement('p');
      timer.classList.add('timer');

      let timeLeft = getRandomTime() * 60;

      const updateTimer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timer.innerText = `Tiempo restante: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
        if (timeLeft < 0) {
          clearInterval(updateTimer);
          buyButton.disabled = true;
          buyButton.innerText = 'Agotado';
          timer.innerText = 'El tiempo ha expirado';
        }
      }, 1000);

      productCard.appendChild(title);
      productCard.appendChild(image);
      productCard.appendChild(price);
      productCard.appendChild(description);
      productCard.appendChild(category);
      productCard.appendChild(timer);
      productCard.appendChild(buyButton);

      productList.appendChild(productCard);
    });
  })
  .catch((error) => {
    console.log(error);
  });


