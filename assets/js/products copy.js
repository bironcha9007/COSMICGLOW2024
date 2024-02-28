function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{5})+(?!\d))/g, ".");
}

const products = [
  /*
  {
    id: 1,
    title: "Lips Addict",
    img: "img/Kit_Labiales_Lip_Addict.png",
    category: "Maquillaje/Labios",
    price: formatPrice(25000), // Formateamos el precio usando la función formatPrice
    quanty: 1,
  },
  */
  {
    id: 2,
    title: "Brochas Coral",
    img: "img/Kit_Brochas_Coral.png",
    category: "Cuidado Piel/Brochas",
    price: formatPrice(45000), // También formateamos el precio aquí
    quanty: 1,
  },
  {
    id: 3,
    title: "Sombras Duo Harm",
    img: "img/Sombras_Duo_Harm.png",
    category: "Maquillaje/Ojos",
    price: formatPrice(8000), // Y aquí
    quanty: 1,
  },

  {
    id: 4,
    title: "Toalla Desmaquilladora",
    img: "img/Toalla_Desmaquilladora.png",
    category: "Maquillaje/Cuidado Piel",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
  },

  {
    id: 5,
    title: "Labial Matte",
    img: "img/Labial_Mayte.png",
    category: "Labios",
    price: formatPrice(12000), // Formateamos el precio usando la función formatPrice
    quanty: 1,
  },
  {
    id: 6,
    title: "Rueda Piedras-Silicona",
    img: "img/Kit_Piedras_Silicona.png",
    category: "Accesorios/Facial",
    price: formatPrice(20000), // También formateamos el precio aquí
    quanty: 1,
  },
 /*
  {
    id: 7,
    title: "Kit Coorporal",
    img: "img/Kit_Corporal_Morado.png",
    category: "Corporal/Cuidado Piel",
    price: formatPrice(40000), // Y aquí
    quanty: 1,
  },

  {
    id: 8,
    title: "Jabón facial detox",
    img: "img/Jabon_Detox.png",
    category: "Corporal/Cuidado Piel",
    price: formatPrice(20000), // Y aquí
    quanty: 1,
  },
  */
  {
    id: 9,
    title: "Corrector Facial Beauty glazed",
    img: "img/Correcto_Rueda_Beauty-Glazed.png",
    category: "Facial/Cuidado Piel",
    price: formatPrice(25000), // Formateamos el precio usando la función formatPrice
    quanty: 1,
  },
  /*
  {
    id: 10,
    title: "Brochas Negras",
    img: "img/Brochas_Negras_6.png",
    category:  "Cuidado Piel/Brochas",
    price: formatPrice(20000), // También formateamos el precio aquí
    quanty: 1,
  },
  */
  {
    id: 11,
    title: "Balsamo Labial Color",
    img: "img/balsamo_color.png",
    category: "Labios/Facial",
    price: formatPrice(8000), // Y aquí
    quanty: 1,
  },
/*
  {
    id: 12,
    title: "Iluminadores Pertect Shine",
    img: "img/Iluminadores_Pertect_Shine.png",
    category: "Corporal/Cuidado Piel",
    price: formatPrice(30000), // Y aquí
    quanty: 1,
  },

  {
    id: 13,
    title: "Fijador Bio Karite",
    img: "img/Fijador_Bio_Karite.png",
    category: "Cuidado Piel/Ojos",
    price: formatPrice(15000), // Formateamos el precio usando la función formatPrice
    quanty: 1,
  },
  */
  {
    id: 14,
    title: "Crema Sebo Reguladora",
    img: "img/Crema_Sebo_Reguladora.png",
    category: "Corporal/Cuidado Piel",
    price: formatPrice(38000), // También formateamos el precio aquí
    quanty: 1,
  },

  {
    id: 15,
    title: "Corrector Beauty",
    img: "img/Corrector_Beauty_tono404.png",
    category: "Cuidado Piel/Ojos",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
  },

  {
    id: 16,
    title: "Protector Solar",
    img: "img/Protector_Solar.png",
    category: "Corporal/Cuidado Piel",
    price: formatPrice(20000), // Y aquí
    quanty: 1,
  },
  {
    id: 17,
    title: "Lápiz de Ojos Trendy",
    img: "img/Lapiz_Delineador_Trendy.png",
    category: "Ojos/Facial",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
  },
/*
  {
    id: 18,
    title: "Voluminizador Smoothie",
    img: "img/Voluminizador_Color.png",
    category: "Corporal/Cuidado Piel",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
  },
*/
  {
    id: 19,
    title: "Sombra Color Studio",
    img: "img/Sombras_Color_Studio.png",
    category: "Ojos/Cuidado Piel",
    price: formatPrice(35000), // Y aquí
    quanty: 1,
  },
/*
  {
    id: 20,
    title: "Mascarilla Arcilla",
    img: "img/Mascarilla_Arcilla_Karite.png",
    category: "Corporal/Cuidado Piel",
    price: formatPrice(15000), // Y aquí
    quanty: 1,
  },
*/
  {
    id: 21,
    title: "Papeleta Antigrasa",
    img: "img/Papeleta_Antigrasa.png",
    category: "Corporal/Cuidado Piel",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
  },
/*
  {
    id: 22,
    title: "Agua de Rosas",
    img: "img/agua_rosas-240ml.jpg",
    category: "Corporal/Cuidado Piel",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
  },

  {
    id: 23,
    title: "Suero Bioretinol",
    img: "img/Suero_Bioretinol.png",
    category: "Corporal/Cuidado Piel",
    price: formatPrice(35000), // Y aquí
    quanty: 1,
  },
  {
    id: 24,
    title: "Rubor Corazon Love",
    img: "img/Rubor_Corazon.png",
    category: "Cuidado Piel",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
  },
*/
  {
    id: 25,
    title: "Pegante Pestañas",
    img: "img/Pegante_Pestanas.jpg",
    category: "Ojos/Pestañas",
    price: formatPrice(18000), // Y aquí
    quanty: 1,
  },

  {
    id: 26,
    title: "Limpiador Brochas",
    img: "img/Limpiador_Brochas.png",
    category: "Brochas/Accesorios",
    price: formatPrice(8000), // Y aquí
    quanty: 1,
  },
/*
  {
    id: 27,
    title: "Ácido hialuronico karate",
    img: "img/Acido_Hialuronico.png",
    category: "Facial/Corporal",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
  },
*/
  {
    id: 28,
    title: "Lapiz Fijador",
    img: "img/Lapiz_Fijador_2.png",
    category: "Ojos/Pestañas",
    price: formatPrice(8000), // Y aquí
    quanty: 1,
  },

  {
    id: 29,
    title: "Maker Tint",
    img: "img/Maker_Tint.png",
    category: "Labios/Facial",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
  },

  {
    id: 30,
    title: "Sombra Fusión Color",
    img: "img/Sombras_Fusion_Color.png",
    category: "Ojos/Facial",
    price: formatPrice(40000), // Y aquí
    quanty: 1,
  },
/*
  {
    id: 31,
    title: "Polvo de Hadas",
    img: "img/Polvo_Hadas.png",
    category: "Facial/Cuidado Piel",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
  },
  */
  {
    id: 31,
    title: "Sachet Protector Solar Facial ",
    img: "img/SACHET-PROTECTOR-SOLAR-TRENDY.jpg",
    category: "Facial/Cuidado Piel",
    price: formatPrice(20000), // Y aquí
    quanty: 1,
  },

  {
    id: 32,
    title: "Primer Menta Trendy",
    img: "img/PRIMER-MENTA-TRENDY.jpg",
    category: "Facial/Cuidado Piel",
    price: formatPrice(15000), // Y aquí
    quanty: 1,
  },

  {
    id: 68,
    title: "Primer Basic Look",
    img: "img/PRIMER-BASIC-LOOK.jpg",
    category: "Facial",
    price: formatPrice(20000), // Y aquí
    quanty: 1,
  },

  {
    id: 69,
    title: "Tinta School Trendy",
    img: "img/TINTA-SCHOOL.jpg",
    category: "Labios",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
  },

  {
    id: 70,
    title: "Brillo Cotton Trendy",
    img: "img/BRILLO-COTTON-CANDY-TRENDY.jpg",
    category: "Labios",
    price: formatPrice(15000), // Y aquí
    quanty: 1,
  },

  {
    id: 71,
    title: "Pestañina Pastel/Prueba de Agua",
    img: "img/PESTA_PASTEL.jpg",
    category: "Ojos",
    price: formatPrice(15000), // Y aquí
    quanty: 1,
  },

  {
    id: 72,
    title: "Rubor Mineralizado Trendy",
    img: "img/RUBOR-MINERALIZADO-COSMIC-TRENDY.jpg",
    category: "Facial",
    price: formatPrice(25000), // Y aquí
    quanty: 1,
  },
  {
    id: 73,
    title: "Lápiz Para Cejas Microblading",
    img: "img/LAPIZ-PARA-CEJAS-TRENDY-TIPO-MICROBLADING.jpg",
    category: "Ojos",
    price: formatPrice(15000), // Y aquí
    quanty: 1,
  },

  {
    id: 74,
    title: "Tarjetero Monedero Trendy",
    img: "img/TARJETERO.jpg",
    category: "Accesorios",
    price: formatPrice(18000), // Y aquí
    quanty: 1,
  },

  {
    id: 75,
    title: "Espejo Gatito Trendy",
    img: "img/ESPEJO-GATITO.jpg",
    category: "Accesorios",
    price: formatPrice(18000), // Y aquí
    quanty: 1,
  },

  {
    id: 76,
    title: "Labial Holográfico Kleancolor",
    img: "img/LABIAL-HOLOGRAFICO.jpg",
    category: "Labios",
    price: formatPrice(8000), // Y aquí
    quanty: 1,
  },

  {
    id: 77,
    title: "Sombra Meow Trendy",
    img: "img/sombra-meow.jpg",
    category: "Ojos",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
  },

  
  {
    id: 78,
    title: "Sombra Escarchada Party",
    img: "img/sombra-escarcha.jpg",
    category: "Ojos",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
  },
  
  {
    id: 79,
    title: "Sombra Salvame RBD",
    img: "img/sombra-salvame.jpg",
    category: "Ojos",
    price: formatPrice(18000), // Y aquí
    quanty: 1,
  },

  {
    id: 80,
    title: "Sombra Boxing RBD",
    img: "img/sombra-boxing.jpg",
    category: "Ojos",
    price: formatPrice(25000), // Y aquí
    quanty: 1,
  },

  {
    id: 81,
    title: "Sombra Toy Trendy",
    img: "img/sombras-toy.jpg",
    category: "Ojos",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
  },

  {
    id: 82,
    title: "Iluminador Quesito Hightouille",
    img: "img/iluminador-hig.jpg",
    category: "Facial",
    price: formatPrice(18000), // Y aquí
    quanty: 1,
  },

  {
    id: 83,
    title: "Iluminador Corporal Alma",
    img: "img/iluminador-corporal.jpg",
    category: "Facial",
    price: formatPrice(20000), // Y aquí
    quanty: 1,
  },

  {
    id: 84,
    title: "Corrector Bear Verde",
    img: "img/corrector-bearv.jpg",
    category: "Facial",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
  },

  {
    id: 85,
    title: "Corrector Bear Naranja",
    img: "img/corrector-bearn.jpg",
    category: "Facial",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
  },

  {
    id: 86,
    title: "Labiales Cremosos Pout LAC",
    img: "img/labial-cremoso.jpg",
    category: "Labios",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
  },
  {
    id: 87,
    title: "Brillos Holográficos LAC",
    img: "img/brillo-holografico.jpg",
    category: "Labios",
    price: formatPrice(15000), // Y aquí
    quanty: 1,
  },
];

