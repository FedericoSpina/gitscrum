let products = {
  data: [
    {
      productName: "DIseño Industrial",
      category: "Gráfica",
      lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://www.intec.edu.do/images/headers/carousel-diseno-industrial.jpg",
    },
    {
      productName: "UI | UX diseño",
      category: "UI/UX",
      lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://beadgrup.com/news/wp-content/uploads/2021/02/2.png",
    },
    {
      productName: "Diseño Gráfico",
      category: "Gráfica",
      lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://www.comunicare.es/wp-content/uploads/2021/09/importancia-del-diseno-grafico-web-en-el-marketing.jpg",
    },
    {
      productName: "Marketing",
      category: "Branding",
      lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://cdn2.hubspot.net/hubfs/53/Estrategias%20de%20marketing.jpg",
    },
    {
      productName: "Design Thinking",
      category: "UI/UX",
      lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://blog.ida.cl/wp-content/uploads/sites/5/2021/01/ida-origenDesginThinking-blog-1024x735.png",
    },
    {
      productName: "Redes Sociales",
      category: "Branding",
      lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://img.freepik.com/vector-gratis/educacion-linea-video-tutorial-isometrico-lecciones-computadora-portatil-libros-gente-recompensa-diseno-color-brillante-banner-web-ilustracion-vectorial_259594-377.jpg",
    },
    {
      productName: "UI | UX diseño",
      category: "UI/UX",
      lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://ejemplos-curriculum.com/wp-content/uploads/2021/04/Graphic-1-980x701.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //lorem
  let lorem = document.createElement("h6");
  lorem.innerText = i.lorem;
  container.appendChild(lorem);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "todo") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}


//Initially display all products
window.onload = () => {
  filterProduct("todo");
};