function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{5})+(?!\d))/g, ".");
}

const products = [





  {
    id: 1,
    title: "Brochas Coral",
    img: "img/Kit_Brochas_Coral.png",
    category: "Brochas",
    img2: "assets/images/products/kit-brochas-coral.jpg",
    description: "-El Kit de Brochas Coral X9 Trendy trae 9 brochas para rostro y ojos.\n- Con textura muy suave y excelente difuminación en todos los productos.\n-¡Este es el kit perfecto para tus maquillajes diarios!",
    thumbnails: ["assets/images/products/kit-brochas-coral.jpg", "assets/images/products/kit-brochas-coral2.jpg", "assets/images/products/kit-brochas-coral3.jpg"],
    price: formatPrice(45000), // También formateamos el precio aquí
    quanty: 1,
    popular: true,
  },
  {
    id: 2,
    title: "Sombras Duo Harm",
    img: "img/Sombras_Duo_Harm.png",
    category: "Ojos",
    img2: "assets/images/products/sombra_duo.jpg",
    thumbnails: ["assets/images/products/sombra_duo.jpg"],
    description: "-El dúo más versátil.\n-Solo con dos sombras logras un maquillaje espectacular.\n-Vienen 6 referencias diferentes, elige tu color favorito, tenemos tierras, naranjas y uno morado para que te arriesgues con tu look.\n- Cada dúo incluye una sombra en acabado mate y otra satinada. ",
    price: formatPrice(8000), // Y aquí
    quanty: 1,
    popular: true,
  },

  {
    id: 3,
    title: "Toalla Desmaquilladora",
    img: "img/Toalla_Desmaquilladora.png",
    category: "Facial",
    img2: "assets/images/products/toalla-desmaquilladora.jpg",
    thumbnails: ["assets/images/products/toalla-desmaquilladora.jpg", "assets/images/products/toalla-desmaquilladora2.jpg"],
    description: "-Fabricada con fibra de felpa muy suave.\n-Las fibras actúan como una esponja que absorben los productos de tu rostro.\n-Retira toda clase de productos de maquillaje.",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
    popular: true,
  },

  {
    id: 4,
    title: "Labial Matte",
    img: "img/Labial_Mayte.png",
    category: "Labios",
    img2: "assets/images/products/labiales-mayte.jpg",
    thumbnails: ["assets/images/products/labiales-mayte.jpg", "assets/images/products/labiales-mayte2.jpg", "assets/images/products/labiales-mayte3.jpg"],
    description: "-Su fórmula es mate.No te reseca los labios, no te deja sensación pesada ni pegajosa.\n-Te deja una textura cremosa terciopelo.\n-Tienen una buena durabilidad.",
    price: formatPrice(12000), // Formateamos el precio usando la función formatPrice
    quanty: 1,
    popular: true,
  },
  {
    id: 5,
    title: "Rueda Piedras-Silicona",
    img: "img/Kit_Piedras_Silicona.png",
    category: "Accesorios",
    img2: "assets/images/products/piedras-silicona.jpg",
    thumbnails: ["assets/images/products/piedras-silicona.jpg", "assets/images/products/piedras-silicona2.jpg", "assets/images/products/piedras-silicona3.jpg"],
    description: "El Kit Piedritas Crystal de Trendy es ideal para todos tus looks.\n-Llévalo por tiempo limitado con el Lápiz de Silicona para pegar las piedritas sin costo adicional.\n-Coge la piedra que quieras con la punta de nuestro Lápiz de Silicona y llévala a tu rostro.Puedes adherirla con pegante de pestañas.",
    price: formatPrice(20000), // También formateamos el precio aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 6,
    title: "Polvo de Hadas",
    img: "img/Polvo_Hadas.png",
    category: "Facial",
    img2: "assets/images/products/polvo-hadas.jpg",
    thumbnails: ["assets/images/products/polvo-hadas.jpg", "assets/images/products/polvo-hadas2.jpg"],
    description: "-Su aplicador es en forma de lengüita y no necesitas hacer mucha fuerza o presión para que salga el producto.\n-Puedes aplicarlo en el rostro, pecho, hombro, brazos, y si quieres que te dure mucho más puedes sellarlo con un poquito de fijador o tónico de rosas.\n-Trae muchísimo contenido y el aplicador deposita en tu piel  la cantidad necesaria para lucir brillitos en la zona aplicada.",
    price: formatPrice(12000), // Y aquí
    quanty: 0,
    popular: false,
  },

  {
    id: 7,
    title: "Corrector Facial Beauty",
    img: "img/Correcto_Rueda_Beauty-Glazed.png",
    category: "Facial",
    img2: "assets/images/products/corrector-ojos-beauty-rueda.jpg",
    thumbnails: ["assets/images/products/corrector-ojos-beauty-rueda.jpg", "assets/images/products/corrector-ojos-beauty-rueda2.jpg", "assets/images/products/corrector-ojos-beauty-rueda3.jpg"],
    description: "-El corrector para un acabado más natural y ligero está aquí.Puedes elegir entre 4 tonos.\n-Elige el correcta para tu tono de piel.\n-Su textura cremosa la hace delicada al contacto con el rostro y muy fácil de difuminar.",
    price: formatPrice(15000), // Formateamos el precio usando la función formatPrice
    quanty: 1,
    popular: false,
  },



  {
    id: 8,
    title: "Balsamo Labial Color",
    img: "img/balsamo_color.png",
    category: "Labios",
    img2: "assets/images/products/balsamo.jpg",
    thumbnails: ["assets/images/products/balsamo.jpg", "assets/images/products/balsamo2.jpg"],
    description: "-Hidratantes para labios con color.\n-NO son labiales de larga duración.\n-Su función principal es hidratar y reparar tus labios a profundidad pero al mismo tiempo maquillarlo en tonos muy lindos.\n-La duración del color es de 2-4 horas, pero ayudará a mantener tus labios perfectos en todo momento.\n-Cera de candelilla: Esta cera se utiliza mucho en cosmética debido a sus propiedades protectoras, calmantes y regeneradoras de la piel, en este caso específicamente de los labios. También es útil para fórmula ya que ayuda a que las emulsiones cosméticas se mantengan en perfecto estado por mucho tiempo. Protege los labios de la resequedad, y evita la deshidratación.",
    price: formatPrice(8000), // Y aquí
    quanty: 1,
    popular: false,
  },



  {
    id: 9,
    title: "Crema Sebo Reguladora",
    img: "img/Crema_Sebo_Reguladora.png",
    category: "Corporal",
    img2: "assets/images/products/crema-sebo-reguladora.jpg",
    thumbnails: ["assets/images/products/crema-sebo-reguladora.jpg", "assets/images/products/crema-sebo-reguladora2.jpg", "assets/images/products/crema-sebo-reguladora3.jpg"],
    description: "-Reduce y controla la producción de grasa en el rostro. Su función es regular la producción de sebo, no la disminuye en su totalidad. Mantiene el rostro balanceado, hidratado y sin resecarlo\n-Niacinamida: Tiene propiedades seborreguladoras y antiinflamatorias que combaten el acné. Hidrata la piel a profundidad, la calma, mejora la textura y refuerza la creación de células nuevas para mantener tu rostro libre de impurezas.\n-En la mañana aplícala después de tu tónico, sueros, contorno de ojos y antes de tu protector solar.",
    price: formatPrice(38000), // También formateamos el precio aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 10,
    title: "Corrector Beauty Glazed",
    img: "img/Corrector_Beauty_tono404.png",
    category: "Ojos",
    img2: "assets/images/products/corrector-ojos-beauty.jpg",
    thumbnails: ["assets/images/products/corrector-ojos-beauty.jpg", "assets/images/products/corrector-ojos-beauty2.jpg", "assets/images/products/corrector-ojos-beauty3.jpg"],
    description: "- Hidrata la zona del contorno de tus ojos con nuestros productos especializados en esa zona, así evitas que tu corrector se cuartee o se pronuncien las líneas de expresión.\n-Aplica el producto con una brochita lengua de gato y difumina a toquecitos el producto en la zona deseada.\n-Acabado semimate de cobertura media/alta, un plus: Es construible dependiendo de tu necesidad. ",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 11,
    title: "Protector Solar Hombre",
    img: "img/Protector_Solar.png",
    category: "Facial",
    img2: "assets/images/products/protector-solar.jpg",
    thumbnails: ["assets/images/products/protector-solar.jpg", "assets/images/products/protector-solar2.jpg"],
    description: "-¡Protege tu piel con un Protector Solar diseñado exclusivamente para hombres! Factor de protección solar del 50+.\n-Contiene Extracto de Aloe que suaviza y regenera la piel.Formulado con Extracto de Manzanilla que tonifica y limpia la zona.Protege de luz solar y luces artificiales.",
    price: formatPrice(20000), // Y aquí
    quanty: 1,
    popular: true,
  },
  {
    id: 12,
    title: "Lápiz de Ojos Trendy",
    img: "img/Lapiz_Delineador_Trendy.png",
    category: "Ojos",
    img2: "assets/images/products/lapiz-delineador.jpg",
    thumbnails: ["assets/images/products/lapiz-delineador.jpg", "assets/images/products/lapiz-delineador2.jpg"],
    description: "-Excelente pigmentación, textura en gel de rápido secado, resistente al agua y a transferencias. Es retráctil. Se desliza fácilmente.\n-Puedes aplicarlo en la línea de agua del ojo o sobre tu párpado.\n-Logra un look ahumado difuminando el producto antes de que se seque.",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
    popular: false,
  },



  {
    id: 13,
    title: "Sombra Color Studio",
    img: "img/Sombras_Color_Studio.png",
    category: "Ojos",
    img2: "assets/images/products/sombras-color-studio.jpg",
    thumbnails: ["assets/images/products/sombras-color-studio.jpg", "assets/images/products/sombras-color-studio2.jpg"],
    description: "-Paleta de sombras con 35 tonos.Tonos coloridos.Acabado mate y satinado.Calidad profesional.\n-Recuerda que puedes apoyarte en el Kit Mármol Trendy o en el Kit de Brochas Neón para el uso más profesional de esta paleta.\n-Aplica corrector Magic Trendy o Perfect Silky de Beauty Glazed, para preparar el párpado, esto permitirá que la sombra tenga mayor duración y su pigmentación sea increíble.",
    price: formatPrice(35000), // Y aquí
    quanty: 1,
    popular: false,
  },



  {
    id: 14,
    title: "Papeleta Antigrasa",
    img: "img/Papeleta_Antigrasa.png",
    category: "Facial",
    img2: "assets/images/products/papeleta-antigrasa.jpg",
    thumbnails: ["assets/images/products/papeleta-antigrasa.jpg"],
    description: "-Papeletas quita grasa del rostro, hechas a base de Aloe Vera y Té Verde, cada cajita trae 100 und.\n-Si estas maquillada la usas oprimiendo en la zona T a “toquesitos” para no arruinar el look y que sí absorba lo necesario, y si tienes no maquillaje si puedes deslizarla normalmente por todo el rostro.",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 15,
    title: "Agua de Rosas",
    img: "img/agua_rosas-240ml.jpg",
    category: "Facial",
    img2: "assets/images/products/tonico-rosas.jpg",
    thumbnails: ["assets/images/products/tonico-rosas.jpg", "assets/images/products/tonico-rosas2.jpg", "assets/images/products/tonico-rosas3.jpg"],
    description: "-Extracto de rosas y manzanilla en alta concentración, por eso nuestra fórmula se ha posicionado como una de las mejores del mercado, ya que estos dos ingredientes juntos hidratan a profundidad la piel, y controlan brillo durante el día, mejorando en mediano plazo el aspecto de la piel, unificando el tono, calmando alergias o imperfecciones, emparejando el tono de la piel, y ayuda a prevenir y tratar el acné.",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
  },



  {
    id: 16,
    title: "Pegante Pestañas",
    img: "img/Pegante_Pestanas.jpg",
    category: "Ojos",
    img2: "assets/images/products/pegante-pestanas.jpg",
    thumbnails: ["assets/images/products/pegante-pestanas.jpg", "assets/images/products/pegante-pestanas2.jpg"],
    description: "-Aplica una línea delgada de adhesivo a lo largo de la banda de tus pestañas postizas.\n-Espera 30 segundos para que el adhesivo se seque ligeramente y se vuelva pegajoso.\n-Coloca la banda de tus pestañas postizas en el párpado, lo más cerca posible de las raíces de tus pestañas. Con las yemas de los dedos, presiona suavemente las esquinas y a lo largo de la banda de tus pestañas postizas para asegurarlas.",
    price: formatPrice(18000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 17,
    title: "Limpiador Brochas Trendy",
    img: "img/Limpiador_Brochas.png",
    category: "Brochas",
    img2: "assets/images/products/limpiador-brochas.jpg",
    thumbnails: ["assets/images/products/limpiador-brochas.jpg", "assets/images/products/limpiador-brochas2.jpg", "assets/images/products/limpiador-brochas3.jpg"],
    description: "-El Líquido Limpiador De Brochas Trendy es amigable con tus brochas. Las deja suave y con un agradable olor. Es ideal para hacer limpieza entre maquillajes sin tener que hacer uso de agua y shampoo de brochas.",
    price: formatPrice(8000), // Y aquí
    quanty: 1,
    popular: false,
  },




  {
    id: 18,
    title: "Lapiz Fijador Cejas",
    img: "img/Lapiz_Fijador_2.png",
    category: "Ojos",
    img2: "assets/images/products/lapiz_fijador.jpg",
    thumbnails: ["assets/images/products/lapiz_fijador.jpg", "assets/images/products/lapiz_fijador2.jpg", "assets/images/products/lapiz_fijador3.jpg"],
    description: "-Tiene dos extremos: En uno viene la barrita de cera y en el otro costado viene un cepillo ultra funcional para peinar y darle forma a tus cejas.\n-El cepillo tiene cerdas punteadas y con la separación ideal para dejar un acabado hermoso\n- Aplica la cera directamente en las cejas hasta obtener la cantidad de producto deseado.",
    price: formatPrice(8000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 19,
    title: "Maker Tint",
    img: "img/Maker_Tint.png",
    category: "Labios",
    img2: "assets/images/products/tinta-marker.jpg",
    thumbnails: ["assets/images/products/tinta-marker.jpg", "assets/images/products/tinta-marker2.jpg"],
    description: "-Son ultra pigmentadas, su fórmula es líquida, de secado rápido, es a prueba de manchas y no transfiere. Es de larga duración.\n-Su divertido diseño en forma de marcador tiene una punta delgada que facilita su aplicación.\n-Puedes aplicar la tinta en el centro de tus labios y difuminar hacia afuera para dar un acabado más natural.",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 20,
    title: "Sombra Fusión Color",
    img: "img/Sombras_Fusion_Color.png",
    category: "Ojos",
    img2: "assets/images/products/Sombras_Fusion_Color_dest3.jpg",
    thumbnails: ["assets/images/products/Sombras_Fusion_Color_dest3.jpg", "assets/images/products/Sombras_Fusion_Color_dest2.jpg"],
    description: "-39 tonos diferentes: Crea looks infinitos con 7 colores brillantes sedosos + 32 colores mate super pigmentados, frescos e impresionantes.\n-Perfectos para el día y la noche\n-Saca toda tu creatividad creando looks divinos de moda. 24x15,8x1 cms.",
    price: formatPrice(40000), // Y aquí
    quanty: 1,
    popular: false,
  },



  {
    id: 21,
    title: "Sachet Protector Solar",
    img: "img/SACHET-PROTECTOR-SOLAR-TRENDY.jpg",
    category: "Facial",
    img2: "assets/images/products/SACHET-PROTECTOR-SOLAR-TRENDY.jpg",
    thumbnails: ["assets/images/products/SACHET-PROTECTOR-SOLAR-TRENDY.jpg", "assets/images/products/SACHET-PROTECTOR-SOLAR-TRENDY2.jpg"],
    description: "-Nuestro producto tiene una protección de +50, evita “casi” en su totalidad que los rayos solares penetren en tu piel.\n-Los rayos solares pueden cambiar la estructura de tu piel y provocar manchas, quemaduras solares, arrugas prematuras y lunares.",
    price: formatPrice(20000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 22,
    title: "Primer Menta Trendy",
    img: "img/PRIMER-MENTA-TRENDY.jpg",
    category: "Facial",
    img2: "assets/images/products/PRIMER-MENTA-TRENDY-60ml-REF-PMT1371-2.jpeg",
    thumbnails: ["assets/images/products/PRIMER-MENTA-TRENDY-60ml-REF-PMT1371-2.jpeg", "assets/images/products/PRIMER-MENTA-TRENDY-60ml-REF-PMT1371-22.jpg"],
    description: "-El Primer Mint viene con un efecto mentolado que le aportará frescura a tu piel antes de maquillarla.\n-Te ayuda a que los productos de maquillaje se adhieran mucho más en la piel y tenga acabados hermosos en ella.\n-Aplica una cantidad moderada sobre tu rostro y distribuye suavemente con tus manos o una brocha lengua de gato. Deja actuar 2-3 minutos y ya puedes aplicar tu base de maquillaje.",
    price: formatPrice(15000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 23,
    title: "Primer Basic Look",
    img: "img/PRIMER-BASIC-LOOK.jpg",
    category: "Facial",
    img2: "assets/images/products/PRIMER-BASIC-LOOK-REF-BLP1370.jpeg",
    thumbnails: ["assets/images/products/PRIMER-BASIC-LOOK-REF-BLP1370.jpeg", "assets/images/products/PRIMER-BASIC-LOOK-REF-BLP13702.jpg"],
    description: "-La preparación de la piel siempre es un paso importante a la hora de realizar cualquier maquillaje y sabemos que te encanta lucir una piel perfecta, por eso traemos el Primer Basic Look.\n-Es un Primer siliconado con efecto blur que te ayudará a lucir esa piel increíble desde la primera aplicación, no deja sensación grasa ni pesada.\n-Aplica una cantidad moderada principalmente sobre la zona T y los puntos de tu rostro que desees perfeccionar más, distribuye suavemente con tus manos o una brocha lengua de gato. Deja actuar 2-3 minutos y ya puedes aplicar tu base de maquillaje.",
    price: formatPrice(20000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 24,
    title: "Tinta School Trendy",
    img: "img/TINTA-SCHOOL.jpg",
    category: "Labios",
    img2: "assets/images/products/TINTAS.jpeg",
    thumbnails: ["assets/images/products/TINTAS.jpeg", "assets/images/products/TINTAS2.jpg"],
    description: "-La preparación de la piel siempre es un paso importante a la hora de realizar cualquier maquillaje y sabemos que te encanta lucir una piel perfecta, por eso traemos el Primer Basic Look.\n-Es un Primer siliconado con efecto blur que te ayudará a lucir esa piel increíble desde la primera aplicación, no deja sensación grasa ni pesada.\n-Aplica una cantidad moderada principalmente sobre la zona T y los puntos de tu rostro que desees perfeccionar más, distribuye suavemente con tus manos o una brocha lengua de gato. Deja actuar 2-3 minutos y ya puedes aplicar tu base de maquillaje.",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 25,
    title: "Brillo Cotton Trendy",
    img: "img/BRILLO-COTTON-CANDY-TRENDY.jpg",
    category: "Labios",
    img2: "assets/images/products/BRILLO-COTTON-CANDY-TRENDY-REF-CC11-4.jpg",
    thumbnails: ["assets/images/products/BRILLO-COTTON-CANDY-TRENDY-REF-CC11-4.jpg", "assets/images/products/BRILLO-COTTON-CANDY-TRENDY-REF-CC11-42.jpg", "assets/images/products/BRILLO-COTTON-CANDY-TRENDY-REF-CC11-43.jpg"],
    description: "-Es un brillo transparente que deja un efecto gloss con glitter sobre los labios gracias a las partículas de escarcha que se reflejan.\n-Viene con un aplicador en goma divino que ayuda a dejar un efecto húmedo en los labios.\n-Pueden ser aplicados sobre labiales mate para dejar un efecto glowy.",
    price: formatPrice(15000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 26,
    title: "Pestañina Pastel Trendy",
    img: "img/PESTA_PASTEL.jpg",
    category: "Ojos",
    img2: "assets/images/products/PESTA_PASTEL.jpg",
    thumbnails: ["assets/images/products/PESTA_PASTEL.jpg", "assets/images/products/PESTA_PASTEL2.jpg", "assets/images/products/PESTA_PASTEL3.jpg"],
    description: "-Pestañinas a prueba de agua que te sorprenderán desde la primera aplicación.\n-La verde es ideal para dar volumen y grosor a tus pestañas. Gracias a la forma de su cepillo, ayuda a dar un volumen extra a las pestañas más pequeñas.\n-No baja el rizo de tus pestañas.",
    price: formatPrice(15000), // Y aquí
    quanty: 1,
    popular: true,
  },

  {
    id: 27,
    title: "Rubor Mineralizado Trendy",
    img: "img/RUBOR-MINERALIZADO-COSMIC-TRENDY.jpg",
    category: "Facial",
    img2: "assets/images/products/RUBOR-MINERALIZADO-COSMIC-TRENDY-REF-RC28-3.jpg",
    thumbnails: ["assets/images/products/RUBOR-MINERALIZADO-COSMIC-TRENDY-REF-RC28-3.jpg", "assets/images/products/RUBOR-MINERALIZADO-COSMIC-TRENDY-REF-RC28-32.jpg"],
    description: "-Trae 4 tonos de iluminadores entre plateados y dorados.\n-Viene con 4 tonos de rubores duocromáticos entre tonos rosados y terracotas.\n-Son micropulverizados por lo que su textura es muy suave.",
    price: formatPrice(25000), // Y aquí
    quanty: 1,
    popular: true,
  },
  {
    id: 28,
    title: "Lápiz Para Cejas Microblading",
    img: "img/LAPIZ-PARA-CEJAS-TRENDY-TIPO-MICROBLADING.jpg",
    category: "Ojos",
    img2: "assets/images/products/LAPIZ-PARA-CEJAS-TRENDY-TIPO-MICROBLADING-REF-EPT1376-2.jpeg",
    thumbnails: ["assets/images/products/LAPIZ-PARA-CEJAS-TRENDY-TIPO-MICROBLADING-REF-EPT1376-2.jpeg", "assets/images/products/LAPIZ-PARA-CEJAS-TRENDY-TIPO-MICROBLADING-REF-EPT1376-22.jpg"],
    description: "-El lápiz para cejas microblading en dos tonos cafés, uno claro y otro más oscurito.\n-Tiene un pincel de corte especial tipo microblading que te ayuda a simular perfectamente cada vellito de tu ceja con una sola pasada.\n-Funciona bastante bien si deseas realizar la técnica de cejas orgánicas. Después de aplicar tu cera o fijador de cejas favorito, utiliza el Eyebrow Pen de Trendy para dibujar pelitos en tu piel y crear un efecto orgánico y de cejas abundantes.",
    price: formatPrice(15000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 29,
    title: "Tarjetero Monedero Trendy",
    img: "img/TARJETERO.jpg",
    category: "Accesorios",
    img2: "assets/images/products/tarjetero.jpg",
    thumbnails: ["assets/images/products/tarjetero.jpg", "assets/images/products/tarjetero2.jpg", "assets/images/products/tarjetero3.jpg"],
    description: "-Tamaño compacto perfecto para llevar tus tarjetas, documentos y dinero cuando no tienes mucho espacio.\n-Viene con un bolsillo externo, espacio para guardar tarjetas y un bolsillo con cremallera.\n-Forro interno: 100% sintético, composición externa: 100% Cuerina sintética.",
    price: formatPrice(18000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 30,
    title: "Espejo Gatito Trendy",
    img: "img/ESPEJO-GATITO.jpg",
    category: "Accesorios",
    img2: "assets/images/products/Espejo-Gatico-Trendy-Ref-EM50-2-1.jpg",
    thumbnails: ["assets/images/products/Espejo-Gatico-Trendy-Ref-EM50-2-1.jpg", "assets/images/products/Espejo-Gatico-Trendy-Ref-EM50-2-12.jpg"],
    description: "-¡Nuestro Espejo Trendy es todo lo que necesitas para organizar tu tocador!\n-Incluye un organizador de joyas que te permite colgar tus collares, pulseras, aretes y anillos.\n-El ángulo del espejo se puede ajustar según el movimiento.",
    price: formatPrice(18000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 31,
    title: "Labial Holográfico Kleancolor",
    img: "img/LABIAL-HOLOGRAFICO.jpg",
    category: "Labios",
    img2: "assets/images/products/HOLOGRAFICO.jpeg",
    thumbnails: ["assets/images/products/HOLOGRAFICO.jpeg", "assets/images/products/HOLOGRAFICO2.jpg", "assets/images/products/HOLOGRAFICO3.jpg"],
    description: "-Labiales en barra con acabado brillante metalizado.\n-Si quieres aportar ese acabado “glitter” debes usarlos solos, si de lo contrario quieres complementarlo, primero aplica una capa de labial y encima añade una capa de este labial.\n-Su fórmula es metálica reflectiva que refleja en la luz.",
    price: formatPrice(8000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 32,
    title: "Sombra Meow Trendy",
    img: "img/sombra-meow.jpg",
    category: "Ojos",
    img2: "assets/images/products/sombra-meow.jpeg",
    thumbnails: ["assets/images/products/sombra-meow.jpeg", "assets/images/products/sombra-meow2.jpg", "assets/images/products/sombra-meow3.jpg"],
    description: "-Vienen 3 glitters en gel prensado con destellos en forma de estrella y 3 satinadas.\n-Aplica la sombra satinada como base de la sombra en gel para dar un aspecto más glowy.\n-Viene en un empaque hermoso y funcional.",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
    popular: false,
  },


  {
    id: 33,
    title: "Sombra Escarchada Party",
    img: "img/sombra-escarcha.jpg",
    category: "Ojos",
    img2: "assets/images/products/sombra-escharcha.jpeg",
    thumbnails: ["assets/images/products/sombra-escharcha.jpeg", "assets/images/products/sombra-escharcha2.jpg", "assets/images/products/sombra-escharcha3.jpg"],
    description: "-Los Party Glitter son el alido más conveniente si te vas de fiesta.\n-Glitter de excelente pigmentación y calidad.\n-Puedes aplicar una base de corrector o pegamento para glitter antes de utilizar esta paleta para incrementar su duración y darles una mejor adherencia.",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 34,
    title: "Sombra Salvame RBD",
    img: "img/sombra-salvame.jpg",
    category: "Ojos",
    img2: "assets/images/products/sombras-salvame.jpeg",
    thumbnails: ["assets/images/products/sombras-salvame.jpeg", "assets/images/products/sombras-salvame2.jpg", "assets/images/products/sombras-salvame3.jpg"],
    description: "-¡No se llama Sálvame porque sí, se llama Sálvame porque lo hace con tus looks de ojos diarios!\n-Contiene 6 tonos entre mates y satinados que te ayudarán a crear looks de calidad profesional en segundos.\n-Son de calidad premium y edición limitada.",
    price: formatPrice(18000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 35,
    title: "Sombra Boxing RBD",
    img: "img/sombra-boxing.jpg",
    category: "Ojos",
    img2: "assets/images/products/sombra-boxing.jpeg",
    thumbnails: ["assets/images/products/sombra-boxing.jpeg", "assets/images/products/sombra-boxing2.jpg"],
    description: "-Son edición limitada de Soy Rebelde Tour.\n-Contiene 9 tonos entre mates, satinados y un iluminador en tono dorado.\n-Si quieres una mayor precisión y saturación de los tonos satinados e iluminador, aplica con una brocha lengua de gato o tus dedos para intensificar el tono.",
    price: formatPrice(25000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 36,
    title: "Sombra Toy Trendy",
    img: "img/sombras-toy.jpg",
    category: "Ojos",
    img2: "assets/images/products/sombra-toy.jpeg",
    thumbnails: ["assets/images/products/sombra-toy.jpeg", "assets/images/products/sombra-toy2.jpg", "assets/images/products/sombra-toy3.jpg"],
    description: "-La paleta Toy son del tamaño justo para llevar contigo siempre.\n-La combinación de la calidez y la elegancia la vas a lograr con estas sombras.\n-Vienen en 3 referencias, ¡Todas son perfectas para realizar maquillajes hermosos!",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 37,
    title: "Iluminador Quesito Hightouille",
    img: "img/iluminador-hig.jpg",
    category: "Facial",
    img2: "assets/images/products/iluminador-hig.jpeg",
    thumbnails: ["assets/images/products/iluminador-hig.jpeg", "assets/images/products/iluminador-hig2.jpg"],
    description: "-Vienen 4 iluminadores entre champañas y dorados.\n-Un cuarteto que eleva desde el look más sencillo hasta el más sofisticado.\n-Son de excelente pigmentación y calidad premium.",
    price: formatPrice(18000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 38,
    title: "Iluminador Corporal Alma",
    img: "img/iluminador-corporal.jpg",
    category: "Facial",
    img2: "assets/images/products/iluminador-corporal.jpeg",
    thumbnails: ["assets/images/products/iluminador-corporal.jpeg"],
    description: "-Shimmer Iluminador para lucir tu piel brillante.\n-Los brillos reflejan bajo la luz natural, así que para eventos o días donde necesites resaltar es perfecto.\n-Aplícalo en cabello, pecho, hombros y brazos.",
    price: formatPrice(20000), // Y aquí
    quanty: 1,
    popular: false,
  },



  {
    id: 39,
    title: "Corrector Bear Trendy",
    img: "img/corrector-bearn.jpg",
    category: "Facial",
    img2: "assets/images/products/corrector-bearn.jpg",
    thumbnails: ["assets/images/products/corrector-bearn.jpg", "assets/images/products/corrector-bearv.jpeg", "assets/images/products/corrector-beard.jpg"],
    description: "-Neutralizador para reducir tus ojeras oscuras.\n-El sistema de aplicación hace que no desperdicies producto.\n-Antes de aplicar la base, posiciona el neutralizador naranja solo en la zona donde está marcada la ojera o la imperfección a eliminar, difumina el producto y sobre este aplica un corrector que se asemeje a tu tono de piel.\n-Manejamos tono Verde y Naranja",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 40,
    title: "Labiales Cremosos PoutLAC",
    img: "img/labial-cremoso.jpg",
    category: "Labios",
    img2: "assets/images/products/labial-cremoso.jpeg",
    thumbnails: ["assets/images/products/labial-cremoso.jpeg", "assets/images/products/labial-cremoso2.jpg", "assets/images/products/labial-cremoso3.jpg"],
    description: "-Utiliza el lápiz de labios para perfilar y definir los labios antes de aplicar el labial, así lucirás unos labios perfectos.\n-No te deja sensación pegajosa o pesada en los labios.\n-Extracto de aloe vera y vitamina E.",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
    popular: false,
  },
  {
    id: 41,
    title: "Brillos Holográficos LAC",
    img: "img/brillo-holografico.jpg",
    category: "Labios",
    img2: "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7.jpg",
    thumbnails: ["assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t1.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t2.jpg"],
    description: "-¡Eleva tus labios con un color metalizado!\n-Brillo labial holográfico.\n-Fórmula con vitamina E y manteca de Karité.\n-Hidrata los labios dejando un aspecto radiante.\n-Lo puedes aplicar sobre un labial mate por si quieres un estilo luminoso.",
    price: formatPrice(15000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 42,
    title: "Labiales Lips Addict",
    img: "img/Kit_Labiales_Lip_Addict.png",
    category: "Labios",
    img2: "assets/images/products/kit-labiales-lipaddictto.jpg",
    thumbnails: ["assets/images/products/kit-labiales-lipaddictto.jpg", "img/Kit-Labiales-Lip-Addict-X6-Trendy-2.jpg", "img/Kit-Labiales-Lip-Addict-X6-Trendy-3.jpg"],
    description: "-Tonalidades nude o rojos.\n-Acabado mate.\n-Duración de 3 a 4 horas.",
    price: formatPrice(25000), // Formateamos el precio usando la función formatPrice
    quanty: 0,
    popular: false,
  },

  {
    id: 43,
    title: "Kit Coorporal",
    img: "img/Kit_Corporal_Morado.png",
    category: "Facial",
    img2: "assets/images/products/kit-corporal-morado.jpg",
    thumbnails: ["/pages/programacion/cosmic-glow-shop/assets/images/products/kit-corporal-morado.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t1.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t2.jpg"],
    description: "Kit Corporal que incluye cuatro productos para cuerpo y para rostro. Ideal para regalar en ocasiones especiales.Tónico Facial: Fórmula que le da a tu piel el equilibrio perfecto entre nutrición e hidratación. Revitaliza tu rostro luego de cada aplicación y luce una piel sana y radiante. Apto para todo tipo de piel. Contiene extracto de aloe vera, hamamelis, caléndula, cannabis, colágeno y elastina. Son activos muy hidratantes, calmantes y reparadores para el rostro.",
    price: formatPrice(40000), // Y aquí
    quanty: 0,
    popular: false,
  },

  {
    id: 44,
    title: "Jabón facial detox",
    img: "img/Jabon_Detox.png",
    category: "Facial",
    img2: "assets/images/products/jabon-detox.jpg",
    thumbnails: ["/pages/programacion/cosmic-glow-shop/assets/images/products/jabon-detox.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t1.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t2.jpg"],
    description: "¡Nuestro Jabón Facial Détox es perfecto si tu tipo de piel es grasa! Combate la producción de grasa en el rostro, disminuye visualmente los poros y previene la aparición de imperfecciones. Su ingrediente principal es el carbón activado.",
    price: formatPrice(20000), // Y aquí
    quanty: 0,
    popular: false,
  },

  {
    id: 45,
    title: "Brochas Negras",
    img: "img/Brochas_Negras_6.png",
    category: "Brochas",
    img2: "assets/images/products/brochas_tendy_x6.jpg",
    thumbnails: ["/pages/programacion/cosmic-glow-shop/assets/images/products/brochas_tendy_x6.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t1.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t2.jpg"],
    description: "Así como lo ves, volvieron y mejor que nunca!Un kit que se fue, para regresar con mejor calidad.Uno de los kits más completos que vas a encontrar en el mercado.Incluye 4 brochas para maquillar tu rostro, 2 brochas dobles también de rostro para que aproveches al máximo",
    price: formatPrice(20000), // También formateamos el precio aquí
    quanty: 0,
    popular: false,
  },

  {
    id: 46,
    title: "Iluminadores Pertect Shine",
    img: "img/Iluminadores_Pertect_Shine.png",
    category: "Facial",
    img2: "assets/images/products/iluminador-perfect-shine.jpg",
    thumbnails: ["/pages/programacion/cosmic-glow-shop/assets/images/products/iluminador-perfect-shine.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t1.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t2.jpg"],
    description: "¡Si amas el iluminador nuestro Kit Perfect Shine es un infaltable en tu colección!Es una paleta de 4 iluminadores en polvo.Viene 1 en tono champaña, 1 dorado, 1 oro rosa y 1 champaña más oscuro.Deja la piel iluminada y con efecto radiante.    ",
    price: formatPrice(30000), // Y aquí
    quanty: 0,
    popular: false,
  },

  {
    id: 47,
    title: "Fijador Bio Karite",
    img: "img/Fijador_Bio_Karite.png",
    category: "Ojos",
    img2: "assets/images/products/fijador-karite.jpg",
    thumbnails: ["/pages/programacion/cosmic-glow-shop/assets/images/products/fijador-karite.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t1.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t2.jpg"],
    description: "-Tonalidades nude o rojos.\n-Acabado mate.\n-Duración de 3 a 4 horas.",
    price: formatPrice(15000), // Formateamos el precio usando la función formatPrice
    quanty: 0,
    popular: false,
  },

  {
    id: 48,
    title: "Voluminizador Smoothie",
    img: "img/Voluminizador_Color.png",
    category: "Facial",
    img2: "assets/images/products/smothie-lips.jpg",
    thumbnails: ["/pages/programacion/cosmic-glow-shop/assets/images/products/smothie-lips.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t1.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t2.jpg"],
    description: "-Tonalidades nude o rojos.\n-Acabado mate.\n-Duración de 3 a 4 horas.",
    price: formatPrice(12000), // Y aquí
    quanty: 0,
    popular: false,
  },

  {
    id: 49,
    title: "Mascarilla Arcilla",
    img: "img/Mascarilla_Arcilla_Karite.png",
    category: "Facial",
    img2: "assets/images/products/crema-arcilla.jpg",
    thumbnails: ["/pages/programacion/cosmic-glow-shop/assets/images/products/crema-arcilla.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t1.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t2.jpg"],
    description: "-Tonalidades nude o rojos.\n-Acabado mate.\n-Duración de 3 a 4 horas.",
    price: formatPrice(15000), // Y aquí
    quanty: 0,
    popular: false,
  },

  {
    id: 50,
    title: "Suero Bioretinol",
    img: "img/Suero_Bioretinol.png",
    category: "Corporal",
    price: formatPrice(35000), // Y aquí
    img2: "assets/images/products/suero-detox.jpg",
    thumbnails: ["/pages/programacion/cosmic-glow-shop/assets/images/products/suero-detox.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t1.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t2.jpg"],
    description: "-Tonalidades nude o rojos.\n-Acabado mate.\n-Duración de 3 a 4 horas.",
    quanty: 0,
    popular: false,
  },
  {
    id: 51,
    title: "Rubor Corazon Love",
    img: "img/Rubor_Corazon.png",
    category: "Facial",
    img2: "assets/images/products/rubor-corazon.jpg",
    thumbnails: ["/pages/programacion/cosmic-glow-shop/assets/images/products/rubor-corazon.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t1.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t2.jpg"],
    description: "-Tonalidades nude o rojos.\n-Acabado mate.\n-Duración de 3 a 4 horas.",
    price: formatPrice(10000), // Y aquí
    quanty: 0,
    popular: false,
  },

  {
    id: 52,
    title: "Ácido hialuronico karate",
    img: "img/Acido_Hialuronico.png",
    category: "Corporal",
    img2: "assets/images/products/acido-hiauluronico.jpg",
    thumbnails: ["/pages/programacion/cosmic-glow-shop/assets/images/products/acido-hiauluronico.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t1.jpg", "assets/images/products/BRILLO-HOLOGRAFICO-LA-COLORS-7t2.jpg"],
    description: "-Tonalidades nude o rojos.\n-Acabado mate.\n-Duración de 3 a 4 horas.",
    price: formatPrice(12000), // Y aquí
    quanty: 0,
    popular: false,
  },
  {
    id: 53,
    title: "Papeleta Antigrasa",
    img: "img/Papeleta_Antigrasa.png",
    category: "Facial",
    img2: "assets/images/products/papeleta-antigrasa.jpg",
    thumbnails: ["assets/images/products/papeleta-antigrasa.jpg"],
    description: "-Papeletas quita grasa del rostro, hechas a base de Aloe Vera y Té Verde, cada cajita trae 100 und.\n-Si estas maquillada la usas oprimiendo en la zona T a “toquesitos” para no arruinar el look y que sí absorba lo necesario, y si tienes no maquillaje si puedes deslizarla normalmente por todo el rostro.",
    price: formatPrice(10000), // Y aquí
    quanty: 1,
    popular: false,
  },

  {
    id: 54,
    title: "Sombra Escarchada Party",
    img: "img/sombra-escarcha.jpg",
    category: "Ojos",
    img2: "assets/images/products/sombra-escharcha.jpeg",
    thumbnails: ["assets/images/products/sombra-escharcha.jpeg", "assets/images/products/sombra-escharcha2.jpg", "assets/images/products/sombra-escharcha3.jpg"],
    description: "-Los Party Glitter son el alido más conveniente si te vas de fiesta.\n-Glitter de excelente pigmentación y calidad.\n-Puedes aplicar una base de corrector o pegamento para glitter antes de utilizar esta paleta para incrementar su duración y darles una mejor adherencia.",
    price: formatPrice(12000), // Y aquí
    quanty: 1,
    popular: false,
  },

];

