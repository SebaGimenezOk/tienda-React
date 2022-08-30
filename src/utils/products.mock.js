
const products = [
{
    id:1,
    title: "holanda",
    price: 1700,
    img:'holanda.png',
    stock: 20,
    category:'blandos',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

},
{
    id:2,
    title: "cremoso",
    price: 1400,
    img:'cremosoComun.png',
    stock: 20,
    category:'blandos',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

},
{
    id:3,
    title: "reggiano",
    price: 2100,
    img:'reggiano.png',
    stock: 20,
    category:'estacionados',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

},
{
    id:4,
    title: "sardo",
    price: 1900,
    img:'sardo.png',
    stock: 20,
    category:'duros',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

},
// {
//     id:5,
//     title: "campo",
//     price: 1700,
//     img:'campo.png',
//     stock: 20,
//     category:'duros',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

// },
// {
//     id:6,
//     title: "provolone",
//     price: 1900,
//     img:'provolone.png',
//     stock: 20,
//     category:'duros',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

// },
// {
//     id:7,
//     title: "ricota",
//     price: 1700,
//     img:'ricota.png',
//     stock: 20,
//     category:'blandos',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

// },
// {
//     id:8,
//     title: "criollo",
//     price: 1700,
//     img:'criollo.png',
//     stock: 20,
//     category:'blandos',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

// },
// {
//     id:9,
//     title: "dulce de leche",
//     price: 1700,
//     img:'dulce1.png',
//     stock: 20,
//     category:'blandos',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

// },
// {
//     id:10,
//     title: "provoleta",
//     price: 1700,
//     img:'provoleta.png',
//     stock: 20,
//     category:'blandos',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

// },
// {
//     id:11,
//     title: "tybo",
//     price: 1700,
//     img:'tybo2.png',
//     stock: 20,
//     category:'blandos',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

// },
// {
//     id:12,
//     title: "yogur",
//     price: 1700,
//     img:'yogur.png',
//     stock: 20,
//     category:'blandos',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

// },
// {
//     id:13,
//     title: "rallado",
//     price: 1700,
//     img:'quesobresito.png',
//     stock: 20,
//     category:'duros',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

// },
// {
//     id:14,
//     title: "mozzarella",
//     price: 1700,
//     img:'mozzarella2.png',
//     stock: 20,
//     category:'blandos',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.', 

// }
]

export default products;













