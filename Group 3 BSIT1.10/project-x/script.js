const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const products = [
  {
    id: 1,
    title: "CASUAL TEE",
    price: 400,
    description: "BYTE STYLE APPAREL Old Computer Design Casual Tee Unisex.",
    colors: [
      {
        code: "white",
        img: "./img/casual tee.png",
      },
      {
        code: "black",  
        img: "./img/black casual tee.png",
      },
      {
        code: "#e99976",
        img: "./img/brown casual tee.png",
      },
    ],
  },
  {
    id: 2,
    title: "LOOSE FIT",
    price: 500,
    description: "BYTE STYLE APPAREL Oversized Aesthetic Loose Fit Unisex.",
    colors: [
      {
        code: "white",
        img: "./img/white loose fit.png",
      },
      {
        code: "black",
        img: "./img/black loose fit.png",
      },
      {
        code: "#e99976",
        img: "./img/brown loose fit.png",
      },
    ],
  },
  {
    id: 3,
    title: "HOODIE",
    price: 1000,
    description: "BYTE STYLE APPAREL Computer Syntax Error Hoodie Unisex.",
    colors: [
      {
        code: "white",
        img: "./img/white hoodie.png",
      },
      {
        code: "black",
        img: "./img/black hoodie.png",
      },
      {
        code: "#e99976",
        img: "./img/brown hoodie.png",
      },
    ],
  },
  {
    id: 4,
    title: "SWEATER",
    price: 700,
    description: "BYTE STYLE APPAREL Cotton Long Sleeve Sweater Jacket.",
    colors: [
      {
        code: "white",
        img: "./img/white sweater.png",
      },
      {
        code: "black",
        img: "./img/black sweater.png",
      },
      {
        code: "#e99976",
        img: "./img/brown sweater.png",
      },
    ],
  },
  {
    id: 5,
    title: "POLO SWEATSHIRT",
    price: 900,
    description: "BYTE STYLE APPAREL Debug Design Fashion Polo Sweatshirt Unisex.",
    colors: [
      {
        code: "black",
        img: "./img/sweatshirt.png",
      },
      {
        code: "#e99976",
        img: "./img/brown polo sweatshirt.png",
      },
      {
        code: "gray",
        img: "./img/gray polo sweatshirt.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductDesc=document.querySelector(".productDesc");
const currentProductSizes = document.querySelectorAll(".size");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₱" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductDesc.textContent = choosenProduct.description;
    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "transparent";
      size.style.color = "white";
    });
    size.style.backgroundColor = "#4C6444";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

const checkoutButton = document.querySelector(".payButton");

checkoutButton.addEventListener("click", () => {
  // Select all required fields within the .payment container
  const payment = document.querySelector(".payment");
  const requiredFields = payment.querySelectorAll('.payInput');

  // Check if all required fields are filled out
  let allFieldsFilled = true;
  requiredFields.forEach((field) => {
    if (field.type !== 'checkbox' && field.value === "") {
      allFieldsFilled = false;
    } else if (field.type === 'checkbox' && !field.checked) {
      allFieldsFilled = false;
    }
  });

  if (!allFieldsFilled) {
    // If any of the fields are empty, show an alert or other indication
    alert("Please fill out all required fields.");
    location.reload();
  } else {
    // All fields are filled, proceed with checkout
    alert("Your order is complete! Thank you for shopping with ByteStyle Apparel.");
    location.reload();
  }
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

function subscribeNewsletter() {
  // Get the email input value
  const emailInput = document.getElementById("newsletterEmail");
  const email = emailInput.value;

  // Check if the email is not empty
  if (email.trim() !== "") {
      // Display a success message
      alert(`Thank you for subscribing! You will receive our newsletter at ${email}.`);

      // Clear the email input
      emailInput.value = "";
  } else {
      // Display an error message if the email is empty
      alert("Please enter a valid email address.");
  }
}

