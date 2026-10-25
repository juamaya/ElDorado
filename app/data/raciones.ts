export interface Dish1 {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}
export const raciones: Dish1[] = [
  {
    id: 1,
    name: "Calamares fritos",
    description:
      "Anillas de calamar rebozadas, doradas y crujientes, servidas con limón.",
    price: "12.50 €",
    category: "Pescado frito",
    image: "/images/calamares.jpg",
  },
  {
    id: 2,
    name: "Boquerones fritos",
    description:
      "Boquerones frescos enharinados y fritos al estilo tradicional andaluz.",
    price: "9.50 €",
    category: "Pescado frito",

    image: "/images/boquerones.jpg",
  },
  {
    id: 3,
    name: "Cazón en adobo",
    description:
      "Dados de cazón marinados con ajo, vinagre y especias, fritos hasta quedar crujientes.",
    price: "11.00 €",
    category: "Pescado frito",
    image: "/images/cazon.jpg",
  },
  {
    id: 4,
    name: "Chopitos fritos",
    description:
      "Pequeños calamares fritos con un rebozado ligero y un toque de limón.",
    price: "10.50 €",
    category: "Pescado frito",
    image: "/images/chopitos.jpg",
  },
  {
    id: 5,
    name: "Puntillitas fritas",
    description:
      "Puntillitas tiernas, enharinadas y fritas al estilo mediterráneo.",
    price: "12.00 €",
    category: "Pescado frito",
    image: "/images/puntillitas.jpg",
  },
  {
    id: 6,
    name: "Pescadito frito",
    description:
      "Selección de pescado pequeño fresco, con harina fina y fritura dorada.",
    price: "13.50 €",
    category: "Pescado frito",
    image: "/images/pescaito.jpg",
  },
  {
    id: 7,
    name: "Atún encebollado",
    description:
      "El atún encebollado es un plato clásico, sabroso y reconfortante, tradicional de la cocina gaditana (Andalucía). El secreto está en cocinar la cebolla a fuego lento para que quede caramelizada y jugosa, y en no pasarse de cocción con el atún para que no quede seco.",
    price: "13.00 €",
    category: "Mariscos",
    image: "/images/atun.jpg",
  },
  {
    id: 8,
    name: "Gambas al ajillo",
    description:
      "Gambas salteadas con ajo, aceite de oliva y un toque de guindilla.",
    price: "14.50 €",
    category: "Mariscos",
    image: "/images/gambas.jpg",
  },

  {
    id: 9,
    name: "Tortillitas de camarones",
    description:
      "Tortillitas finas y crujientes elaboradas con camarones y perejil.",
    price: "9.00 €",
    category: "Mariscos",
    image: "/images/tortillitas.jpg",
  },
  {
    id: 10,
    name: "Gambas fritas",
    description:
      "Gambas doradas con una fritura ligera y acompañados de limón.",
    price: "15.50 €",
    category: "Mariscos",
    image: "/images/gambas.jpg",
  },

  {
    id: 11,
    name: "Fritura de pescado y marisco",
    description: "Surtido de pescado frito, calamares y gambas para compartir.",
    price: "19.50 €",
    category: "Fritos variados",
    image: "/images/pescaito1.jpg",
  },
 
] satisfies Dish1[];
