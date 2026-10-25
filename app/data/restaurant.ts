export interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

export const restaurant = {
  name: "ATELIER",
  dishes : [
  {
    id: 1,
    name: "Burrata & tomates",
    description:
      "Tomates de temporada, albahaca fresca y aceite de oliva virgen extra.",
    price: "16 €",
    category: "Entrantes",
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Risotto de temporada",
    description:
      "Arroz cremoso, parmesano curado y un delicado toque de trufa.",
    price: "19 €",
    category: "Principales",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Tarta de chocolate",
    description:
      "Chocolate intenso, textura cremosa y elaboración artesanal.",
    price: "9 €",
    category: "Postres",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Tartar de salmón",
    description:
      "Salmón fresco marinado, aguacate, lima y un toque de sésamo.",
    price: "18 €",
    category: "Entrantes",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85",
  },
 
  
  {
    id: 5,
    name: "Croquetas caseras",
    description:
      "Croquetas cremosas de jamón ibérico con un exterior dorado y crujiente.",
    price: "12 €",
    category: "Entrantes",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Solomillo de ternera",
    description:
      "Solomillo a la parrilla, patatas rústicas y salsa de pimienta.",
    price: "28 €",
    category: "Principales",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Ensalada mediterránea",
    description:
      "Mezcla de hojas frescas, tomate cherry, aceitunas, feta y vinagreta cítrica.",
    price: "14 €",
    category: "Entrantes",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Lasaña artesanal",
    description:
      "Capas de pasta fresca, ragú de carne, bechamel suave y parmesano gratinado.",
    price: "18 €",
    category: "Principales",
    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    name: "Tiramisú italiano",
    description:
      "Bizcocho empapado en café, crema de mascarpone y cacao puro.",
    price: "8 €",
    category: "Postres",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85",
  },
 
  {
    id: 10,
    name: "Lubina al horno",
    description:
      "Lubina fresca con verduras de temporada, limón y hierbas aromáticas.",
    price: "25 €",
    category: "Principales",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 11,
    name: "Cheesecake de frutos rojos",
    description:
      "Tarta de queso cremosa con base crujiente y coulis de frutos rojos.",
    price: "9 €",
    category: "Postres",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    name: "Pizza de burrata",
    description:
      "Masa artesanal, tomate italiano, burrata fresca, albahaca y aceite de oliva.",
    price: "20 €",
    category: "Principales",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 13,
    name: "Crema catalana",
    description:
      "Crema suave aromatizada con cítricos y canela, cubierta de azúcar caramelizado.",
    price: "7 €",
    category: "Postres",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
  },
] satisfies Dish[],
};
