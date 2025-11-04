// ===================================
// 1) Tus datos de libros
// ===================================
window.BOOKS = {
  "goblins-playing-sports": {
    title: "Goblins Playing Sports",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH76J5W2", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH76J5W2",
        de: "https://www.amazon.de/dp/B0FH76J5W2",
        it: "https://www.amazon.it/dp/B0FH76J5W2",
        es: "https://www.amazon.es/dp/B0FH76J5W2",
        fr: "https://www.amazon.fr/dp/B0FH76J5W2",
        jp: "https://www.amazon.jp/dp/B0FH76J5W2",
        au: "https://www.amazon.au/dp/B0FH76J5W2",
        se: "https://www.amazon.se/dp/B0FH76J5W2",
        pl: "https://www.amazon.pl/dp/B0FH76J5W2",
        ca: "https://www.amazon.ca/dp/B0FH76J5W2",
        nl: "https://www.amazon.nl/dp/B0FH76J5W2"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FHK559R7", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHK559R7",
        de: "https://www.amazon.de/dp/B0FHK559R7",
        it: "https://www.amazon.it/dp/B0FHK559R7",
        es: "https://www.amazon.es/dp/B0FHK559R7",
        fr: "https://www.amazon.fr/dp/B0FHK559R7",
        jp: "https://www.amazon.jp/dp/B0FHK559R7",
        au: "https://www.amazon.au/dp/B0FHK559R7",
        se: "https://www.amazon.se/dp/B0FHK559R7",
        pl: "https://www.amazon.pl/dp/B0FHK559R7",
        ca: "https://www.amazon.ca/dp/B0FHK559R7",
        nl: "https://www.amazon.nl/dp/B0FHK559R7"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/goblins-sports/cover.png",
      "assets/img/books/goblins-sports/p01.png",
      "assets/img/books/goblins-sports/p02.png",
      "assets/img/books/goblins-sports/p03.png",
      "assets/img/books/goblins-sports/p04.png",
      "assets/img/books/goblins-sports/p05.png",
      "assets/img/books/goblins-sports/p06.png"
    ],
    sections: [
      "assets/img/books/goblins-sports/sections/01.png",
      "assets/img/books/goblins-sports/sections/02.png",
      "assets/img/books/goblins-sports/sections/03.png",
      "assets/img/books/goblins-sports/sections/04.png",
      "assets/img/books/goblins-sports/sections/05.png"
    ],
    intro: [
      "Get ready for a wild ride through the funniest sports competition you’ve ever seen featuring goblins! In this hilarious coloring book, 50 mischievous goblins take on every sport imaginable and fail spectacularly. Whether it’s surfing on an ironing board or sinking a boat mid regatta, these goblins prove that effort counts.",
      "Perfect for kids, fantasy lovers, or anyone who enjoys goofy action scenes, this book guarantees giggles with every page. Add your favorite colors and bring the goblin games to life it's messy, it's silly, and it's totally gob tastic!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      "50 unique black and white illustrations of goblins playing sports in absurd and funny ways",
      "Format: 8.25 x 8.25 in, ideal for kids and creative minds",
      "Promotes laughter, imagination, and stress-free fun",
      "Great for fans of fantasy, humor, and unconventional coloring books"
    ]
  },

  "goblins-at-the-theme-park": {
    title: "Goblins At The Theme Park",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH74JSJV",
        uk: "https://www.amazon.co.uk/dp/B0FH74JSJV",
        de: "https://www.amazon.de/dp/B0FH74JSJV",
        it: "https://www.amazon.it/dp/B0FH74JSJV",
        es: "https://www.amazon.es/dp/B0FH74JSJV",
        fr: "https://www.amazon.fr/dp/B0FH74JSJV",
        jp: "https://www.amazon.co.jp/dp/B0FH74JSJV",
        au: "https://www.amazon.com.au/dp/B0FH74JSJV",
        se: "https://www.amazon.se/dp/B0FH74JSJV",
        pl: "https://www.amazon.pl/dp/B0FH74JSJV",
        ca: "https://www.amazon.ca/dp/B0FH74JSJV",
        nl: "https://www.amazon.nl/dp/B0FH74JSJV"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FHK3SVQP",
        uk: "https://www.amazon.co.uk/dp/B0FHK3SVQP",
        de: "https://www.amazon.de/dp/B0FHK3SVQP",
        it: "https://www.amazon.it/dp/B0FHK3SVQP",
        es: "https://www.amazon.es/dp/B0FHK3SVQP",
        fr: "https://www.amazon.fr/dp/B0FHK3SVQP",
        jp: "https://www.amazon.co.jp/dp/B0FHK3SVQP",
        au: "https://www.amazon.com.au/dp/B0FHK3SVQP",
        se: "https://www.amazon.se/dp/B0FHK3SVQP",
        pl: "https://www.amazon.pl/dp/B0FHK3SVQP",
        ca: "https://www.amazon.ca/dp/B0FHK3SVQP",
        nl: "https://www.amazon.nl/dp/B0FHK3SVQP"
      }
    },

    // Fallback por si quieres mantener un genérico
    buy: {
      us: "https://www.amazon.com/dp/B0FH74JSJV"
    },

    images: [
      "assets/img/books/goblins-theme-park/cover.png",
      "assets/img/books/goblins-theme-park/p01.png",
      "assets/img/books/goblins-theme-park/p02.png",
      "assets/img/books/goblins-theme-park/p03.png",
      "assets/img/books/goblins-theme-park/p04.png",
      "assets/img/books/goblins-theme-park/p05.png",
      "assets/img/books/goblins-theme-park/p06.png"
    ],
    sections: [
      "assets/img/books/goblins-theme-park/sections/01.png",
      "assets/img/books/goblins-theme-park/sections/02.png",
      "assets/img/books/goblins-theme-park/sections/03.png",
      "assets/img/books/goblins-theme-park/sections/04.png",
      "assets/img/books/goblins-theme-park/sections/05.png"
    ],
    intro: [
      "In this hilarious coloring book, 40 mischievous goblins take over the roller coasters, bumper cars, cotton candy stands, and more. Whether they're screaming on a loop de loop or causing chaos at the snack bar, these silly creatures bring non stop fun to every page.",
      "Perfect for kids, fantasy fans, and anyone who loves action packed coloring, this book is a thrilling ride of humor, imagination, and goblin madness. Color the chaos if you dare!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      "40 unique black and white illustrations of goblins causing mischief at a theme park.",
      "Format: 8.25 x 8.25 in",
      "Encourages creativity, laughter, and storytelling.",
      "Ideal for kids, fantasy lovers, and fans of funny adventure coloring books."
    ]
  },
  "goblins-at-the-beach": {
    title: "Goblins At The Beach",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FHK1D4WB", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHK1D4WB",
        de: "https://www.amazon.de/dp/B0FHK1D4WB",
        it: "https://www.amazon.it/dp/B0FHK1D4WB",
        es: "https://www.amazon.es/dp/B0FHK1D4WB",
        fr: "https://www.amazon.fr/dp/B0FHK1D4WB",
        jp: "https://www.amazon.jp/dp/B0FHK1D4WB",
        au: "https://www.amazon.au/dp/B0FHK1D4WB",
        se: "https://www.amazon.se/dp/B0FHK1D4WB",
        pl: "https://www.amazon.pl/dp/B0FHK1D4WB",
        ca: "https://www.amazon.ca/dp/B0FHK1D4WB",
        nl: "https://www.amazon.nl/dp/B0FHK1D4WB"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJHMPS8Q", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJHMPS8Q",
        de: "https://www.amazon.de/dp/B0FJHMPS8Q",
        it: "https://www.amazon.it/dp/B0FJHMPS8Q",
        es: "https://www.amazon.es/dp/B0FJHMPS8Q",
        fr: "https://www.amazon.fr/dp/B0FJHMPS8Q",
        jp: "https://www.amazon.jp/dp/B0FJHMPS8Q",
        au: "https://www.amazon.au/dp/B0FJHMPS8Q",
        se: "https://www.amazon.se/dp/B0FJHMPS8Q",
        pl: "https://www.amazon.pl/dp/B0FJHMPS8Q",
        ca: "https://www.amazon.ca/dp/B0FJHMPS8Q",
        nl: "https://www.amazon.nl/dp/B0FJHMPS8Q"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/goblins-at-the-beach/cover.png",
      "assets/img/books/goblins-at-the-beach/p01.png",
      "assets/img/books/goblins-at-the-beach/p02.png",
      "assets/img/books/goblins-at-the-beach/p03.png",
      "assets/img/books/goblins-at-the-beach/p04.png",
      "assets/img/books/goblins-at-the-beach/p05.png",
      "assets/img/books/goblins-at-the-beach/p06.png"
    ],
    sections: [
      "assets/img/books/goblins-at-the-beach/sections/01.png",
      "assets/img/books/goblins-at-the-beach/sections/02.png",
      "assets/img/books/goblins-at-the-beach/sections/03.png",
      "assets/img/books/goblins-at-the-beach/sections/04.png",
      "assets/img/books/goblins-at-the-beach/sections/05.png"
    ],
    intro: [
      "Get ready for a sun soaked, sand covered, totally silly adventure with Goblins at the Beach Coloring Book! Join a rowdy bunch of goblins as they hit the shore for a day of wild beach fun building crooked sandcastles, chasing seagulls, surfing , and causing goofy chaos wherever they go.",
      "This quirky coloring book features 30 hilarious beach scenes full of goblin mischief, from sunscreen disasters to epic splash fights. Every page invites creativity, laughter, and a little sandy silliness! Perfect for kids who love goblins, summer fun, and coloring outside the lines.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      " 30 original black and white illustrations to color.",
      "Format: 8.25 x 8.25 in, ideal for kids and creative minds",
      "Great for all ages.",
      "Sparks imagination, humor, and beach-day vibes year-round."
    ]
  },
  "my-best-friend-matilda": {
    title: "My Best Friend Matilda",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FD8K9NVT", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FD8K9NVT",
        de: "https://www.amazon.de/dp/B0FD8K9NVT",
        it: "https://www.amazon.it/dp/B0FD8K9NVT",
        es: "https://www.amazon.es/dp/B0FD8K9NVT",
        fr: "https://www.amazon.fr/dp/B0FD8K9NVT",
        jp: "https://www.amazon.jp/dp/B0FD8K9NVT",
        au: "https://www.amazon.au/dp/B0FD8K9NVT",
        se: "https://www.amazon.se/dp/B0FD8K9NVT",
        pl: "https://www.amazon.pl/dp/B0FD8K9NVT",
        ca: "https://www.amazon.ca/dp/B0FD8K9NVT",
        nl: "https://www.amazon.nl/dp/B0FD8K9NVT"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FFY3GMK2", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FFY3GMK2",
        de: "https://www.amazon.de/dp/B0FFY3GMK2",
        it: "https://www.amazon.it/dp/B0FFY3GMK2",
        es: "https://www.amazon.es/dp/B0FFY3GMK2",
        fr: "https://www.amazon.fr/dp/B0FFY3GMK2",
        jp: "https://www.amazon.jp/dp/B0FFY3GMK2",
        au: "https://www.amazon.au/dp/B0FFY3GMK2",
        se: "https://www.amazon.se/dp/B0FFY3GMK2",
        pl: "https://www.amazon.pl/dp/B0FFY3GMK2",
        ca: "https://www.amazon.ca/dp/B0FFY3GMK2",
        nl: "https://www.amazon.nl/dp/B0FFY3GMK2"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/my-best-friend-matilda/cover.jpg",
      "assets/img/books/my-best-friend-matilda/p01.jpg",
      "assets/img/books/my-best-friend-matilda/p02.jpg",
      "assets/img/books/my-best-friend-matilda/p03.jpg",
      "assets/img/books/my-best-friend-matilda/p04.jpg",
      "assets/img/books/my-best-friend-matilda/p05.jpg",
      "assets/img/books/my-best-friend-matilda/p06.jpg"
    ],
    sections: [
      "assets/img/books/my-best-friend-matilda/sections/01.jpg",
      "assets/img/books/my-best-friend-matilda/sections/02.jpg",
      "assets/img/books/my-best-friend-matilda/sections/03.jpg",
      "assets/img/books/my-best-friend-matilda/sections/04.jpg",
      "assets/img/books/my-best-friend-matilda/sections/05.jpg"
    ],
    intro: [
      "Step into the loving world of Matilda, a sweet and playful little dog who fills every day with joy, messes, snuggles, and unforgettable adventures.",
      "This special coloring book features 40 charming black and white illustrations, perfect for kids and adults alike. Each page tells a piece of Matilda’s story from fun walks and beach days to mischief, cuddles, and the beautiful bond she shares with her favorite human.",
      "🎁 Bonus Included: At the end of the book, enjoy a special color-and-solve maze challenge where you help the main character find their way through twists and turns! A playful final adventure to stimulate focus, patience, and problem-solving after all the coloring fun."
    ],
    bullets: [
      "40 unique illustrations with clean, shadow-free linework for all skill levels",
      "Square format: 8.25 x 8.25 inches — easy to carry and color anywhere",
      "A lovely gift for dog lovers, kids, or anyone who cherishes pets",
      "A touching tribute to the love between a child and her furry best friend"
    ]
  },
  "capybaras-around-the-world": {
    title: "Capybaras Around The World",
    price: 8.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH7599QN", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH7599QN",
        de: "https://www.amazon.de/dp/B0FH7599QN",
        it: "https://www.amazon.it/dp/B0FH7599QN",
        es: "https://www.amazon.es/dp/B0FH7599QN",
        fr: "https://www.amazon.fr/dp/B0FH7599QN",
        jp: "https://www.amazon.jp/dp/B0FH7599QN",
        au: "https://www.amazon.au/dp/B0FH7599QN",
        se: "https://www.amazon.se/dp/B0FH7599QN",
        pl: "https://www.amazon.pl/dp/B0FH7599QN",
        ca: "https://www.amazon.ca/dp/B0FH7599QN",
        nl: "https://www.amazon.nl/dp/B0FH7599QN"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJ1PF7KL", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJ1PF7KL",
        de: "https://www.amazon.de/dp/B0FJ1PF7KL",
        it: "https://www.amazon.it/dp/B0FJ1PF7KL",
        es: "https://www.amazon.es/dp/B0FJ1PF7KL",
        fr: "https://www.amazon.fr/dp/B0FJ1PF7KL",
        jp: "https://www.amazon.jp/dp/B0FJ1PF7KL",
        au: "https://www.amazon.au/dp/B0FJ1PF7KL",
        se: "https://www.amazon.se/dp/B0FJ1PF7KL",
        pl: "https://www.amazon.pl/dp/B0FJ1PF7KL",
        ca: "https://www.amazon.ca/dp/B0FJ1PF7KL",
        nl: "https://www.amazon.nl/dp/B0FJ1PF7KL"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/capybaras-around-the-world/cover.jpg",
      "assets/img/books/capybaras-around-the-world/p01.jpg",
      "assets/img/books/capybaras-around-the-world/p02.jpg",
      "assets/img/books/capybaras-around-the-world/p03.jpg",
      "assets/img/books/capybaras-around-the-world/p04.jpg",
      "assets/img/books/capybaras-around-the-world/p05.jpg",
      "assets/img/books/capybaras-around-the-world/p06.jpg"
    ],
    sections: [
      "assets/img/books/capybaras-around-the-world/sections/1.jpg",
      "assets/img/books/capybaras-around-the-world/sections/2.jpg",
      "assets/img/books/capybaras-around-the-world/sections/3.jpg",
      "assets/img/books/capybaras-around-the-world/sections/4.jpg",
      "assets/img/books/capybaras-around-the-world/sections/5.jpg"
    ],
    intro: [
      "One Chill Capybara, Many Wild Adventures!Grab your passport these capybaras are on the move!",
      "In Capybaras Around the World, you’ll join 30 adorable capybaras as they travel across continents, visit famous landmarks, and explore exciting cultures. From the Eiffel Tower to the Great Wall, these relaxed rodents are ready for adventure.Each page features a new destination and a capybara living its best life, making this coloring book a joyful mix of world exploration and cute animal fun. A perfect gift for curious kids, travel lovers, and capybara fans of all ages!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      "30 unique black and white illustrations of traveling capybaras",
      "Format: 6 x 6 in, compact and perfect for little hands or travel bags",
      "Encourages creativity, learning, and cultural curiosity",
      "Ideal for kids, animal lovers, and young explorers everywhere"
    ]
  },
  "goblins-in-waterworld": {
    title: "Goblins In WaterWorld",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH75PY36", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH75PY36",
        de: "https://www.amazon.de/dp/B0FH75PY36",
        it: "https://www.amazon.it/dp/B0FH75PY36",
        es: "https://www.amazon.es/dp/B0FH75PY36",
        fr: "https://www.amazon.fr/dp/B0FH75PY36",
        jp: "https://www.amazon.jp/dp/B0FH75PY36",
        au: "https://www.amazon.au/dp/B0FH75PY36",
        se: "https://www.amazon.se/dp/B0FH75PY36",
        pl: "https://www.amazon.pl/dp/B0FH75PY36",
        ca: "https://www.amazon.ca/dp/B0FH75PY36",
        nl: "https://www.amazon.nl/dp/B0FH75PY36"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FHK5KBK5", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHK5KBK5",
        de: "https://www.amazon.de/dp/B0FHK5KBK5",
        it: "https://www.amazon.it/dp/B0FHK5KBK5",
        es: "https://www.amazon.es/dp/B0FHK5KBK5",
        fr: "https://www.amazon.fr/dp/B0FHK5KBK5",
        jp: "https://www.amazon.jp/dp/B0FHK5KBK5",
        au: "https://www.amazon.au/dp/B0FHK5KBK5",
        se: "https://www.amazon.se/dp/B0FHK5KBK5",
        pl: "https://www.amazon.pl/dp/B0FHK5KBK5",
        ca: "https://www.amazon.ca/dp/B0FHK5KBK5",
        nl: "https://www.amazon.nl/dp/B0FHK5KBK5"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/goblins-in-waterworld/cover.png",
      "assets/img/books/goblins-in-waterworld/p01.png",
      "assets/img/books/goblins-in-waterworld/p02.png",
      "assets/img/books/goblins-in-waterworld/p03.png",
      "assets/img/books/goblins-in-waterworld/p04.png",
      "assets/img/books/goblins-in-waterworld/p05.png",
      "assets/img/books/goblins-in-waterworld/p06.png"
    ],
    sections: [
      "assets/img/books/goblins-in-waterworld/sections/1.png",
      "assets/img/books/goblins-in-waterworld/sections/2.png",
      "assets/img/books/goblins-in-waterworld/sections/3.png",
      "assets/img/books/goblins-in-waterworld/sections/4.png",
      "assets/img/books/goblins-in-waterworld/sections/5.png"
    ],
    intro: [
      "Splashes, Spells, and Silly Sea Adventures!",
      "Dive into chaos with 30 hilarious scenes where goblins take over a wild water theme park! From clumsy goblins on water slides to magical whirlpools, every page is packed with aquatic mischief and nonstop fun. Whether they're surfing in style or causing trouble in the wave pool, these goblins prove that a day at the water park is anything but calm.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      "30 unique black and white illustrations of goblins in wild underwater adventures.",
      "Format: 8.25 x 8.25 in.",
      "Encourages imagination, laughter, and artistic play.",
      "Ideal for kids, fantasy lovers, and fans of silly goblin stories."
    ]
  },
  "goblins-in-mystic-forest": {
    title: "Goblins In Mystic Forest",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FHKMBYB6", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHKMBYB6",
        de: "https://www.amazon.de/dp/B0FHKMBYB6",
        it: "https://www.amazon.it/dp/B0FHKMBYB6",
        es: "https://www.amazon.es/dp/B0FHKMBYB6",
        fr: "https://www.amazon.fr/dp/B0FHKMBYB6",
        jp: "https://www.amazon.jp/dp/B0FHKMBYB6",
        au: "https://www.amazon.au/dp/B0FHKMBYB6",
        se: "https://www.amazon.se/dp/B0FHKMBYB6",
        pl: "https://www.amazon.pl/dp/B0FHKMBYB6",
        ca: "https://www.amazon.ca/dp/B0FHKMBYB6",
        nl: "https://www.amazon.nl/dp/B0FHKMBYB6"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJLS1D5T", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJLS1D5T",
        de: "https://www.amazon.de/dp/B0FJLS1D5T",
        it: "https://www.amazon.it/dp/B0FJLS1D5T",
        es: "https://www.amazon.es/dp/B0FJLS1D5T",
        fr: "https://www.amazon.fr/dp/B0FJLS1D5T",
        jp: "https://www.amazon.jp/dp/B0FJLS1D5T",
        au: "https://www.amazon.au/dp/B0FJLS1D5T",
        se: "https://www.amazon.se/dp/B0FJLS1D5T",
        pl: "https://www.amazon.pl/dp/B0FJLS1D5T",
        ca: "https://www.amazon.ca/dp/B0FJLS1D5T",
        nl: "https://www.amazon.nl/dp/B0FJLS1D5T"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/goblins-in-mystic-forest/cover.jpg",
      "assets/img/books/goblins-in-mystic-forest/p01.jpg",
      "assets/img/books/goblins-in-mystic-forest/p02.jpg",
      "assets/img/books/goblins-in-mystic-forest/p03.jpg",
      "assets/img/books/goblins-in-mystic-forest/p04.jpg",
      "assets/img/books/goblins-in-mystic-forest/p05.jpg",
      "assets/img/books/goblins-in-mystic-forest/p06.jpg"
    ],
    sections: [
      "assets/img/books/goblins-in-mystic-forest/sections/1.jpg",
      "assets/img/books/goblins-in-mystic-forest/sections/2.jpg",
      "assets/img/books/goblins-in-mystic-forest/sections/3.jpg",
      "assets/img/books/goblins-in-mystic-forest/sections/4.jpg",
      "assets/img/books/goblins-in-mystic-forest/sections/5.jpg"
    ],
    intro: [
      "Step into the enchanted woods with Goblins in Mystic Forest Coloring Book! Join a lively group of goblins as they explore a magical forest filled with strange plants, mysterious creatures, and unexpected adventures.",
      "Watch out for carnivorous plants trying to gobble up the goblins, goblins wrestling with surprisingly strong squirrels, and plenty of other whimsical forest antics! This enchanting coloring book features 30 original scenes that blend fantasy, fun, and a touch of mischief perfect for kids who love goblins, magic, and wild forest adventures.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      "30 original black and white illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Suitable for all ages.",
      "Sparks creativity, imagination, and a love for nature’s mysteries."
    ]
  },
  "the-secret-life-of-goblins": {
    title: "The Secret Life Of Goblins",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FD313677", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FD313677",
        de: "https://www.amazon.de/dp/B0FD313677",
        it: "https://www.amazon.it/dp/B0FD313677",
        es: "https://www.amazon.es/dp/B0FD313677",
        fr: "https://www.amazon.fr/dp/B0FD313677",
        jp: "https://www.amazon.jp/dp/B0FD313677",
        au: "https://www.amazon.au/dp/B0FD313677",
        se: "https://www.amazon.se/dp/B0FD313677",
        pl: "https://www.amazon.pl/dp/B0FD313677",
        ca: "https://www.amazon.ca/dp/B0FD313677",
        nl: "https://www.amazon.nl/dp/B0FD313677"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FGTVDW61", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FGTVDW61",
        de: "https://www.amazon.de/dp/B0FGTVDW61",
        it: "https://www.amazon.it/dp/B0FGTVDW61",
        es: "https://www.amazon.es/dp/B0FGTVDW61",
        fr: "https://www.amazon.fr/dp/B0FGTVDW61",
        jp: "https://www.amazon.jp/dp/B0FGTVDW61",
        au: "https://www.amazon.au/dp/B0FGTVDW61",
        se: "https://www.amazon.se/dp/B0FGTVDW61",
        pl: "https://www.amazon.pl/dp/B0FGTVDW61",
        ca: "https://www.amazon.ca/dp/B0FGTVDW61",
        nl: "https://www.amazon.nl/dp/B0FGTVDW61"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/the-secret-life-of-goblins/cover.jpg",
      "assets/img/books/the-secret-life-of-goblins/p01.jpg",
      "assets/img/books/the-secret-life-of-goblins/p02.jpg",
      "assets/img/books/the-secret-life-of-goblins/p03.jpg",
      "assets/img/books/the-secret-life-of-goblins/p04.jpg",
      "assets/img/books/the-secret-life-of-goblins/p05.jpg",
      "assets/img/books/the-secret-life-of-goblins/p06.jpg"
    ],
    sections: [
      "assets/img/books/the-secret-life-of-goblins/sections/1.jpg",
      "assets/img/books/the-secret-life-of-goblins/sections/2.jpg",
      "assets/img/books/the-secret-life-of-goblins/sections/3.jpg",
      "assets/img/books/the-secret-life-of-goblins/sections/4.jpg",
      "assets/img/books/the-secret-life-of-goblins/sections/5.jpg"
    ],
    intro: [
      "Step into the mischievous world of The Secret Life of Goblins a magical coloring adventure full of chaos, creativity, and charm! Have you ever wondered what goblins do when no one is looking? This incredible coloring book reveals their hilarious, chaotic secret lives! Across 40 beautifully illustrated pages, children and fantasy lovers of all ages will explore whimsical goblin moments filled with fun, silliness, and imagination.",
      "Perfect for young adventurers who love magical creatures, silly surprises, and coloring their way through a world of goblin mischief!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      "40 original black-and-white illustrations packed with goblins",
      "Format: 8.25 x 8.25 inches",
      "Encourages creativity, storytelling, and laughter",
      "Great for kids, tweens, and goblin-loving grown-ups alike"
    ]
  },
  "the-secret-life-of-goblins-ii": {
    title: "The Secret Life Of Goblins II",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FF1X6NW3", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FF1X6NW3",
        de: "https://www.amazon.de/dp/B0FF1X6NW3",
        it: "https://www.amazon.it/dp/B0FF1X6NW3",
        es: "https://www.amazon.es/dp/B0FF1X6NW3",
        fr: "https://www.amazon.fr/dp/B0FF1X6NW3",
        jp: "https://www.amazon.jp/dp/B0FF1X6NW3",
        au: "https://www.amazon.au/dp/B0FF1X6NW3",
        se: "https://www.amazon.se/dp/B0FF1X6NW3",
        pl: "https://www.amazon.pl/dp/B0FF1X6NW3",
        ca: "https://www.amazon.ca/dp/B0FF1X6NW3",
        nl: "https://www.amazon.nl/dp/B0FF1X6NW3"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FGTT8R72", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FGTT8R72",
        de: "https://www.amazon.de/dp/B0FGTT8R72",
        it: "https://www.amazon.it/dp/B0FGTT8R72",
        es: "https://www.amazon.es/dp/B0FGTT8R72",
        fr: "https://www.amazon.fr/dp/B0FGTT8R72",
        jp: "https://www.amazon.jp/dp/B0FGTT8R72",
        au: "https://www.amazon.au/dp/B0FGTT8R72",
        se: "https://www.amazon.se/dp/B0FGTT8R72",
        pl: "https://www.amazon.pl/dp/B0FGTT8R72",
        ca: "https://www.amazon.ca/dp/B0FGTT8R72",
        nl: "https://www.amazon.nl/dp/B0FGTT8R72"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/the-secret-life-of-goblins-ii/cover.jpg",
      "assets/img/books/the-secret-life-of-goblins-ii/p01.jpg",
      "assets/img/books/the-secret-life-of-goblins-ii/p02.jpg",
      "assets/img/books/the-secret-life-of-goblins-ii/p03.jpg",
      "assets/img/books/the-secret-life-of-goblins-ii/p04.jpg",
      "assets/img/books/the-secret-life-of-goblins-ii/p05.jpg",
      "assets/img/books/the-secret-life-of-goblins-ii/p06.jpg"
    ],
    sections: [
      "assets/img/books/the-secret-life-of-goblins-ii/sections/1.jpg",
      "assets/img/books/the-secret-life-of-goblins-ii/sections/2.jpg",
      "assets/img/books/the-secret-life-of-goblins-ii/sections/3.jpg",
      "assets/img/books/the-secret-life-of-goblins-ii/sections/4.jpg",
      "assets/img/books/the-secret-life-of-goblins-ii/sections/5.jpg"
    ],
    intro: [
      "They're back... and messier than ever! Dive into a brand-new collection of 45 hilarious and enchanting goblin scenes, where these cheeky little creatures get up to even weirder, wilder, and more wonderful adventures.",
      "Every page is packed with delightful nonsense and magical mayhem. Whether you're young or just young at heart, this coloring book will spark your imagination and tickle your funny bone!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      "45 fresh and original black and white illustrations featuring brand new goblin antics.",
      "Format: 8.25 x 8.25 inches compact, fun, and perfect for every goblin explorer.",
      "Inspires humor, creativity, and storytelling through fantastical chaos.",
      "Ideal for ages, fantasy fans, and coloring lovers who crave something quirky and unique."
    ]
  },

  "goblin-invasion-discovering-the-human-world": {
    title: "Gooblin Invaision Discovering The Human World",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FHJ24LJ4", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHJ24LJ4",
        de: "https://www.amazon.de/dp/B0FHJ24LJ4",
        it: "https://www.amazon.it/dp/B0FHJ24LJ4",
        es: "https://www.amazon.es/dp/B0FHJ24LJ4",
        fr: "https://www.amazon.fr/dp/B0FHJ24LJ4",
        jp: "https://www.amazon.jp/dp/B0FHJ24LJ4",
        au: "https://www.amazon.au/dp/B0FHJ24LJ4",
        se: "https://www.amazon.se/dp/B0FHJ24LJ4",
        pl: "https://www.amazon.pl/dp/B0FHJ24LJ4",
        ca: "https://www.amazon.ca/dp/B0FHJ24LJ4",
        nl: "https://www.amazon.nl/dp/B0FHJ24LJ4"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJL471ZJ", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJL471ZJ",
        de: "https://www.amazon.de/dp/B0FJL471ZJ",
        it: "https://www.amazon.it/dp/B0FJL471ZJ",
        es: "https://www.amazon.es/dp/B0FJL471ZJ",
        fr: "https://www.amazon.fr/dp/B0FJL471ZJ",
        jp: "https://www.amazon.jp/dp/B0FJL471ZJ",
        au: "https://www.amazon.au/dp/B0FJL471ZJ",
        se: "https://www.amazon.se/dp/B0FJL471ZJ",
        pl: "https://www.amazon.pl/dp/B0FJL471ZJ",
        ca: "https://www.amazon.ca/dp/B0FJL471ZJ",
        nl: "https://www.amazon.nl/dp/B0FJL471ZJ"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/goblin-invasion-discovering-the-human-world/cover.jpg",
      "assets/img/books/goblin-invasion-discovering-the-human-world/p01.jpg",
      "assets/img/books/goblin-invasion-discovering-the-human-world/p02.jpg",
      "assets/img/books/goblin-invasion-discovering-the-human-world/p03.jpg",
      "assets/img/books/goblin-invasion-discovering-the-human-world/p04.jpg",
      "assets/img/books/goblin-invasion-discovering-the-human-world/p05.jpg",
      "assets/img/books/goblin-invasion-discovering-the-human-world/p06.jpg"
    ],
    sections: [
      "assets/img/books/goblin-invasion-discovering-the-human-world/sections/1.jpg",
      "assets/img/books/goblin-invasion-discovering-the-human-world/sections/2.jpg",
      "assets/img/books/goblin-invasion-discovering-the-human-world/sections/3.jpg",
      "assets/img/books/goblin-invasion-discovering-the-human-world/sections/4.jpg",
      "assets/img/books/goblin-invasion-discovering-the-human-world/sections/5.jpg"
    ],
    intro: [
      "What happens when curious goblins invade the human world? Absolute chaos and a lot of laughs! In Goblins Invasion: Discovering the Human World, A band of mischievous goblins where they begin discovering strange human objects like poking at microwaves, fleeing on vacuum cleaners like wild horses, and panicking at the sight of escalators!",
      "This wild coloring book includes 30 imaginative scenes of goblins hilariously exploring human inventions, habits, and confusion. Perfect for kids who love fantasy, silliness, and a twist on the modern world.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      "30 original black and white illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Great for all ages.",
      "Encourages creativity, observation, and lots of laughter.",
    ]
  },
  "goblin-lost-in-space": {
    title: "Gooblin Lost In Space",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH9TQ5NC", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH9TQ5NC",
        de: "https://www.amazon.de/dp/B0FH9TQ5NC",
        it: "https://www.amazon.it/dp/B0FH9TQ5NC",
        es: "https://www.amazon.es/dp/B0FH9TQ5NC",
        fr: "https://www.amazon.fr/dp/B0FH9TQ5NC",
        jp: "https://www.amazon.jp/dp/B0FH9TQ5NC",
        au: "https://www.amazon.au/dp/B0FH9TQ5NC",
        se: "https://www.amazon.se/dp/B0FH9TQ5NC",
        pl: "https://www.amazon.pl/dp/B0FH9TQ5NC",
        ca: "https://www.amazon.ca/dp/B0FH9TQ5NC",
        nl: "https://www.amazon.nl/dp/B0FH9TQ5NC"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FHK65LBY", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHK65LBY",
        de: "https://www.amazon.de/dp/B0FHK65LBY",
        it: "https://www.amazon.it/dp/B0FHK65LBY",
        es: "https://www.amazon.es/dp/B0FHK65LBY",
        fr: "https://www.amazon.fr/dp/B0FHK65LBY",
        jp: "https://www.amazon.jp/dp/B0FHK65LBY",
        au: "https://www.amazon.au/dp/B0FHK65LBY",
        se: "https://www.amazon.se/dp/B0FHK65LBY",
        pl: "https://www.amazon.pl/dp/B0FHK65LBY",
        ca: "https://www.amazon.ca/dp/B0FHK65LBY",
        nl: "https://www.amazon.nl/dp/B0FHK65LBY"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/goblin-lost-in-space/cover.jpg",
      "assets/img/books/goblin-lost-in-space/p01.jpg",
      "assets/img/books/goblin-lost-in-space/p02.jpg",
      "assets/img/books/goblin-lost-in-space/p03.jpg",
      "assets/img/books/goblin-lost-in-space/p04.jpg",
      "assets/img/books/goblin-lost-in-space/p05.jpg",
      "assets/img/books/goblin-lost-in-space/p06.jpg"
    ],
    sections: [
      "assets/img/books/goblin-lost-in-space/sections/1.jpg",
      "assets/img/books/goblin-lost-in-space/sections/2.jpg",
      "assets/img/books/goblin-lost-in-space/sections/3.jpg",
      "assets/img/books/goblin-lost-in-space/sections/4.jpg",
      "assets/img/books/goblin-lost-in-space/sections/5.jpg"
    ],
    intro: [
      "Join a mischievous little goblin as he zooms through galaxies, floats past planets, meets alien creatures, and stumbles into hilarious trouble across the universe!",
      "This wild coloring book includes 30 imaginative scenes of goblins hilariously exploring human inventions, habits, and confusion. Perfect for kids who love fantasy, silliness, and a twist on the modern worldThis unique coloring book is packed with 30 imaginative scenes that blend fantasy in a fun, kid friendly way. From rocket malfunctions to asteroid surfing, every page invites creativity and laughter. Perfect for kids who love goblins, space travel, and silly adventures!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      "30 original black and white illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Great for all ages.",
      "Encourages creativity, imagination, and storytelling.",
    ]
  },

  "zoo-olympia": {
    title: "Zoo Olympia",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FTB29J5V", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FTB29J5V",
        de: "https://www.amazon.de/dp/B0FTB29J5V",
        it: "https://www.amazon.it/dp/B0FTB29J5V",
        es: "https://www.amazon.es/dp/B0FTB29J5V",
        fr: "https://www.amazon.fr/dp/B0FTB29J5V",
        jp: "https://www.amazon.jp/dp/B0FTB29J5V",
        au: "https://www.amazon.au/dp/B0FTB29J5V",
        se: "https://www.amazon.se/dp/B0FTB29J5V",
        pl: "https://www.amazon.pl/dp/B0FTB29J5V",
        ca: "https://www.amazon.ca/dp/B0FTB29J5V",
        nl: "https://www.amazon.nl/dp/B0FTB29J5V"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FG1GW7CQ", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FG1GW7CQ",
        de: "https://www.amazon.de/dp/B0FG1GW7CQ",
        it: "https://www.amazon.it/dp/B0FG1GW7CQ",
        es: "https://www.amazon.es/dp/B0FG1GW7CQ",
        fr: "https://www.amazon.fr/dp/B0FG1GW7CQ",
        jp: "https://www.amazon.jp/dp/B0FG1GW7CQ",
        au: "https://www.amazon.au/dp/B0FG1GW7CQ",
        se: "https://www.amazon.se/dp/B0FG1GW7CQ",
        pl: "https://www.amazon.pl/dp/B0FG1GW7CQ",
        ca: "https://www.amazon.ca/dp/B0FG1GW7CQ",
        nl: "https://www.amazon.nl/dp/B0FG1GW7CQ"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/zoo-olympia/cover.jpg",
      "assets/img/books/zoo-olympia/1.jpg",
      "assets/img/books/zoo-olympia/2.jpg",
      "assets/img/books/zoo-olympia/3.jpg",
      "assets/img/books/zoo-olympia/4.jpg",
      "assets/img/books/zoo-olympia/5.jpg",
      "assets/img/books/zoo-olympia/6.jpg"
    ],
    sections: [
      "assets/img/books/zoo-olympia/sections/1.jpg",
      "assets/img/books/zoo-olympia/sections/2.jpg",
      "assets/img/books/zoo-olympia/sections/3.jpg",
      "assets/img/books/zoo-olympia/sections/4.jpg",
      "assets/img/books/zoo-olympia/sections/5.jpg"
    ],
    intro: [
      "Join the funniest zoo animals as they compete in their very own Olympics! Run with the speedy mouse, jump with the tall giraffe, swim with the dolphin, and celebrate victories with the elephant coach.",
      "This unique coloring book includes 40 action packed and joyful scenes, featuring animals playing sports, winning medals, and enjoying the true spirit of teamwork. Perfect for kids who love animals, sports, and energetic adventures!",
      "🎁 Bonus Included! At the end of the book, enjoy a special Olympic themed word search where kids can discover hidden words about animals and sports. A fun extra activity to spark little minds after coloring!",
    ],
    bullets: [
      "40 original black and white illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Great for all ages.",
      "Encourages creativity, imagination, and storytelling.",
    ]
  },

  "a-day-with-the-capybaras": {
    title: "A Day With The Capybaras",
    price: 8.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FHKBSKBR", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHKBSKBR",
        de: "https://www.amazon.de/dp/B0FHKBSKBR",
        it: "https://www.amazon.it/dp/B0FHKBSKBR",
        es: "https://www.amazon.es/dp/B0FHKBSKBR",
        fr: "https://www.amazon.fr/dp/B0FHKBSKBR",
        jp: "https://www.amazon.jp/dp/B0FHKBSKBR",
        au: "https://www.amazon.au/dp/B0FHKBSKBR",
        se: "https://www.amazon.se/dp/B0FHKBSKBR",
        pl: "https://www.amazon.pl/dp/B0FHKBSKBR",
        ca: "https://www.amazon.ca/dp/B0FHKBSKBR",
        nl: "https://www.amazon.nl/dp/B0FHKBSKBR"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJ1PBCVB", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJ1PBCVB",
        de: "https://www.amazon.de/dp/B0FJ1PBCVB",
        it: "https://www.amazon.it/dp/B0FJ1PBCVB",
        es: "https://www.amazon.es/dp/B0FJ1PBCVB",
        fr: "https://www.amazon.fr/dp/B0FJ1PBCVB",
        jp: "https://www.amazon.jp/dp/B0FJ1PBCVB",
        au: "https://www.amazon.au/dp/B0FJ1PBCVB",
        se: "https://www.amazon.se/dp/B0FJ1PBCVB",
        pl: "https://www.amazon.pl/dp/B0FJ1PBCVB",
        ca: "https://www.amazon.ca/dp/B0FJ1PBCVB",
        nl: "https://www.amazon.nl/dp/B0FJ1PBCVB"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/a-day-with-the-capybaras/cover.jpg",
      "assets/img/books/a-day-with-the-capybaras/p01.jpg",
      "assets/img/books/a-day-with-the-capybaras/p02.jpg",
      "assets/img/books/a-day-with-the-capybaras/p03.jpg",
      "assets/img/books/a-day-with-the-capybaras/p04.jpg",
      "assets/img/books/a-day-with-the-capybaras/p05.jpg",
      "assets/img/books/a-day-with-the-capybaras/p06.jpg"
    ],
    sections: [
      "assets/img/books/a-day-with-the-capybaras/sections/1.jpg",
      "assets/img/books/a-day-with-the-capybaras/sections/2.jpg",
      "assets/img/books/a-day-with-the-capybaras/sections/3.jpg",
      "assets/img/books/a-day-with-the-capybaras/sections/4.jpg",
      "assets/img/books/a-day-with-the-capybaras/sections/5.jpg"
    ],
    intro: [
      "Spend a delightful day with the world’s chillest creatures a lovable family of capybaras as they lounge in hot springs, snack on watermelon, nap under trees, and waddle through the wild in the most adorable ways.",
      "This charming coloring book features 30 heartwarming scenes that celebrate the calm, cozy, and surprisingly fun lives of capybaras. Every page invites relaxation, smiles, and creativity. Perfect for Kids who love gentle animals, quiet adventures, and a touch of whimsy.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      "30 original black and white illustrations to color.",
      "Format: 6 x 6 in.",
      "Great for all ages.",
      "Promotes calmness, creativity, and love for nature.",
    ]
  },

  "funny-halloween-creatures": {
    title: "Funny Halloween Creatures",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FV87RQ9L", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FV87RQ9L",
        de: "https://www.amazon.de/dp/B0FV87RQ9L",
        it: "https://www.amazon.it/dp/B0FV87RQ9L",
        es: "https://www.amazon.es/dp/B0FV87RQ9L",
        fr: "https://www.amazon.fr/dp/B0FV87RQ9L",
        jp: "https://www.amazon.jp/dp/B0FV87RQ9L",
        au: "https://www.amazon.au/dp/B0FV87RQ9L",
        se: "https://www.amazon.se/dp/B0FV87RQ9L",
        pl: "https://www.amazon.pl/dp/B0FV87RQ9L",
        ca: "https://www.amazon.ca/dp/B0FV87RQ9L",
        nl: "https://www.amazon.nl/dp/B0FV87RQ9L"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FVDBTY4F", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FVDBTY4F",
        de: "https://www.amazon.de/dp/B0FVDBTY4F",
        it: "https://www.amazon.it/dp/B0FVDBTY4F",
        es: "https://www.amazon.es/dp/B0FVDBTY4F",
        fr: "https://www.amazon.fr/dp/B0FVDBTY4F",
        jp: "https://www.amazon.jp/dp/B0FVDBTY4F",
        au: "https://www.amazon.au/dp/B0FVDBTY4F",
        se: "https://www.amazon.se/dp/B0FVDBTY4F",
        pl: "https://www.amazon.pl/dp/B0FVDBTY4F",
        ca: "https://www.amazon.ca/dp/B0FVDBTY4F",
        nl: "https://www.amazon.nl/dp/B0FVDBTY4F"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/funny-halloween-creatures/cover.jpg",
      "assets/img/books/funny-halloween-creatures/1.jpg",
      "assets/img/books/funny-halloween-creatures/2.jpg",
      "assets/img/books/funny-halloween-creatures/3.jpg",
      "assets/img/books/funny-halloween-creatures/4.jpg",
      "assets/img/books/funny-halloween-creatures/5.jpg",
      "assets/img/books/funny-halloween-creatures/6.jpg"
    ],
    sections: [
      "assets/img/books/funny-halloween-creatures/sections/1.jpg",
      "assets/img/books/funny-halloween-creatures/sections/2.jpg",
      "assets/img/books/funny-halloween-creatures/sections/3.jpg",
      "assets/img/books/funny-halloween-creatures/sections/4.jpg",
      "assets/img/books/funny-halloween-creatures/sections/5.jpg"
    ],
    intro: [
      "Step into a world of mysterious Halloween magic! 🎃",
      "Meet the funniest monsters of the season mummies that lose their bandages, dancing pumpkins, clumsy ghosts, and skeletons trying to play music with their own bones! Each page is full of weird and hilarious moments that make Halloween a mix of fright and laughter.",
      "This coloring book includes 45 black and white pages of creative and funny Halloween scenes. Perfect for kids and adults who love to color, laugh, and enjoy the spooky season in a cheerful way.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue it to the final page for an extra Halloween challenge. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      "45 original black and white illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Great for all ages.",
      "Inspires imagination, focus, and Halloween spirit.",
    ]
  },

  "trick-or-sweet": {
    title: "Trick Or Sweet",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FV8C3Z44", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FV8C3Z44",
        de: "https://www.amazon.de/dp/B0FV8C3Z44",
        it: "https://www.amazon.it/dp/B0FV8C3Z44",
        es: "https://www.amazon.es/dp/B0FV8C3Z44",
        fr: "https://www.amazon.fr/dp/B0FV8C3Z44",
        jp: "https://www.amazon.jp/dp/B0FV8C3Z44",
        au: "https://www.amazon.au/dp/B0FV8C3Z44",
        se: "https://www.amazon.se/dp/B0FV8C3Z44",
        pl: "https://www.amazon.pl/dp/B0FV8C3Z44",
        ca: "https://www.amazon.ca/dp/B0FV8C3Z44",
        nl: "https://www.amazon.nl/dp/B0FV8C3Z44"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FVDSSJTF", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FVDSSJTF",
        de: "https://www.amazon.de/dp/B0FVDSSJTF",
        it: "https://www.amazon.it/dp/B0FVDSSJTF",
        es: "https://www.amazon.es/dp/B0FVDSSJTF",
        fr: "https://www.amazon.fr/dp/B0FVDSSJTF",
        jp: "https://www.amazon.jp/dp/B0FVDSSJTF",
        au: "https://www.amazon.au/dp/B0FVDSSJTF",
        se: "https://www.amazon.se/dp/B0FVDSSJTF",
        pl: "https://www.amazon.pl/dp/B0FVDSSJTF",
        ca: "https://www.amazon.ca/dp/B0FVDSSJTF",
        nl: "https://www.amazon.nl/dp/B0FVDSSJTF"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/trick-or-sweet/cover.jpg",
      "assets/img/books/trick-or-sweet/1.jpg",
      "assets/img/books/trick-or-sweet/2.jpg",
      "assets/img/books/trick-or-sweet/3.jpg",
      "assets/img/books/trick-or-sweet/4.jpg",
      "assets/img/books/trick-or-sweet/5.jpg",
      "assets/img/books/trick-or-sweet/6.jpg"
    ],
    sections: [
      "assets/img/books/trick-or-sweet/sections/1.jpg",
      "assets/img/books/trick-or-sweet/sections/2.jpg",
      "assets/img/books/trick-or-sweet/sections/3.jpg",
      "assets/img/books/trick-or-sweet/sections/4.jpg",
      "assets/img/books/trick-or-sweet/sections/5.jpg"
    ],
    intro: [
      "Enter a world filled with spooky treats and magical sweets vampire fangs made of candy, smiling gummy worms, spider web donuts, and pumpkin buckets overflowing with sugary surprises. Each page brings the delicious chaos of Halloween night to life!",
      "This coloring book is packed with 40 black and white pages full of detailed Halloween candy designs. Perfect for those who love Halloween, creativity, and of course… sweets! Every illustration invites you to color, relax, and enjoy the fun side of spooky season.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue it to the final page for an extra Halloween challenge. A perfect extra challenge for little minds and crafty hands!"
    ],
    bullets: [
      "40 original black and white illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Great for all ages.",
      "Brings together creativity, imagination, and Halloween fun.",
    ]
  },

  "halloween-haunted-houses": {
    title: "Halloween Haunted Houses",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FV8FFQ16", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FV8FFQ16",
        de: "https://www.amazon.de/dp/B0FV8FFQ16",
        it: "https://www.amazon.it/dp/B0FV8FFQ16",
        es: "https://www.amazon.es/dp/B0FV8FFQ16",
        fr: "https://www.amazon.fr/dp/B0FV8FFQ16",
        jp: "https://www.amazon.jp/dp/B0FV8FFQ16",
        au: "https://www.amazon.au/dp/B0FV8FFQ16",
        se: "https://www.amazon.se/dp/B0FV8FFQ16",
        pl: "https://www.amazon.pl/dp/B0FV8FFQ16",
        ca: "https://www.amazon.ca/dp/B0FV8FFQ16",
        nl: "https://www.amazon.nl/dp/B0FV8FFQ16"
      },
      es: {
        us: "https://www.amazon.com/dp/B0FVDC52Z6", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FVDC52Z6",
        de: "https://www.amazon.de/dp/B0FVDC52Z6",
        it: "https://www.amazon.it/dp/B0FVDC52Z6",
        es: "https://www.amazon.es/dp/B0FVDC52Z6",
        fr: "https://www.amazon.fr/dp/B0FVDC52Z6",
        jp: "https://www.amazon.jp/dp/B0FVDC52Z6",
        au: "https://www.amazon.au/dp/B0FVDC52Z6",
        se: "https://www.amazon.se/dp/B0FVDC52Z6",
        pl: "https://www.amazon.pl/dp/B0FVDC52Z6",
        ca: "https://www.amazon.ca/dp/B0FVDC52Z6",
        nl: "https://www.amazon.nl/dp/B0FVDC52Z6"
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/halloween-haunted-houses/cover.jpg",
      "assets/img/books/halloween-haunted-houses/1.jpg",
      "assets/img/books/halloween-haunted-houses/2.jpg",
      "assets/img/books/halloween-haunted-houses/3.jpg",
      "assets/img/books/halloween-haunted-houses/4.jpg",
      "assets/img/books/halloween-haunted-houses/5.jpg",
      "assets/img/books/halloween-haunted-houses/6.jpg"
    ],
    sections: [
      "assets/img/books/halloween-haunted-houses/sections/1.jpg",
      "assets/img/books/halloween-haunted-houses/sections/2.jpg",
      "assets/img/books/halloween-haunted-houses/sections/3.jpg",
      "assets/img/books/halloween-haunted-houses/sections/4.jpg",
      "assets/img/books/halloween-haunted-houses/sections/5.jpg"
    ],
    intro: [
      "Discover 40 haunted houses unlike any you’ve ever seen cauldrons turned into spooky cottages, teapots releasing ghostly steam, boots covered in webs, and pumpkins glowing in the dark. Every page is filled with Halloween atmosphere, bats, spiders, ghosts, and eerie details waiting for your imagination and colors.",
      "This coloring book is perfect for anyone who loves Halloween, mystery, and creative relaxation. Each page offers a new haunted home to explore if you dare.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue it to the final page for an extra Halloween challenge. A perfect extra challenge for little minds and crafty hands!"

    ],
    bullets: [
      "40 original black and white illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Great for all ages.",
      "Brings together creativity, imagination, and Halloween fun.",
    ]
  },


  "cute-and-cuddly-capybaras": {
    title: "Cute & Cuddly Capybaras",
    price: 8.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH743HDV", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH743HDV",
        de: "https://www.amazon.de/dp/B0FH743HDV",
        it: "https://www.amazon.it/dp/B0FH743HDV",
        es: "https://www.amazon.es/dp/B0FH743HDV",
        fr: "https://www.amazon.fr/dp/B0FH743HDV",
        jp: "https://www.amazon.jp/dp/B0FH743HDV",
        au: "https://www.amazon.au/dp/B0FH743HDV",
        se: "https://www.amazon.se/dp/B0FH743HDV",
        pl: "https://www.amazon.pl/dp/B0FH743HDV",
        ca: "https://www.amazon.ca/dp/B0FH743HDV",
        nl: "https://www.amazon.nl/dp/B0FH743HDV",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJ1FV8JN", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJ1FV8JN",
        de: "https://www.amazon.de/dp/B0FJ1FV8JN",
        it: "https://www.amazon.it/dp/B0FJ1FV8JN",
        es: "https://www.amazon.es/dp/B0FJ1FV8JN",
        fr: "https://www.amazon.fr/dp/B0FJ1FV8JN",
        jp: "https://www.amazon.jp/dp/B0FJ1FV8JN",
        au: "https://www.amazon.au/dp/B0FJ1FV8JN",
        se: "https://www.amazon.se/dp/B0FJ1FV8JN",
        pl: "https://www.amazon.pl/dp/B0FJ1FV8JN",
        ca: "https://www.amazon.ca/dp/B0FJ1FV8JN",
        nl: "https://www.amazon.nl/dp/B0FJ1FV8JN",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/cute-&-cuddly-capybaras/cover.jpg",
      "assets/img/books/cute-&-cuddly-capybaras/p01.jpg",
      "assets/img/books/cute-&-cuddly-capybaras/p02.jpg",
      "assets/img/books/cute-&-cuddly-capybaras/p03.jpg",
      "assets/img/books/cute-&-cuddly-capybaras/p04.jpg",
      "assets/img/books/cute-&-cuddly-capybaras/p05.jpg",
      "assets/img/books/cute-&-cuddly-capybaras/p06.jpg",
    ],
    sections: [
      "assets/img/books/cute-&-cuddly-capybaras/sections/1.jpg",
      "assets/img/books/cute-&-cuddly-capybaras/sections/2.jpg",
      "assets/img/books/cute-&-cuddly-capybaras/sections/3.jpg",
      "assets/img/books/cute-&-cuddly-capybaras/sections/4.jpg",
      "assets/img/books/cute-&-cuddly-capybaras/sections/5.jpg",
    ],
    intro: [
      "Step into the mellow world of the world's chillest animal the capybara! This adorable coloring book features 30 sweet and silly capybara illustrations, each one bursting with charm and cuddly vibes. Every page is a cozy celebration of these gentle creatures.",
      "Whether you're a kid, a capybara superfan, or just someone who loves cute animals and peaceful coloring time, this book is your perfect slow paced escape. So grab your markers it’s time to chill and color with your new capybara friends!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "30 original black and white illustrations to color.",
      "Format: 6 x 6 in.",
      "Great for relaxation, creativity, and screen free joy.",
      "Perfect for animal lovers, kids, and fans of all things cuddly.",
    ]
  },

  "rani": {
    title: "Rani in Jaipur",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FG1HHYGQ", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FG1HHYGQ",
        de: "https://www.amazon.de/dp/B0FG1HHYGQ",
        it: "https://www.amazon.it/dp/B0FG1HHYGQ",
        es: "https://www.amazon.es/dp/B0FG1HHYGQ",
        fr: "https://www.amazon.fr/dp/B0FG1HHYGQ",
        jp: "https://www.amazon.jp/dp/B0FG1HHYGQ",
        au: "https://www.amazon.au/dp/B0FG1HHYGQ",
        se: "https://www.amazon.se/dp/B0FG1HHYGQ",
        pl: "https://www.amazon.pl/dp/B0FG1HHYGQ",
        ca: "https://www.amazon.ca/dp/B0FG1HHYGQ",
        nl: "https://www.amazon.nl/dp/B0FG1HHYGQ",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FW4D5XT8", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FW4D5XT8",
        de: "https://www.amazon.de/dp/B0FW4D5XT8",
        it: "https://www.amazon.it/dp/B0FW4D5XT8",
        es: "https://www.amazon.es/dp/B0FW4D5XT8",
        fr: "https://www.amazon.fr/dp/B0FW4D5XT8",
        jp: "https://www.amazon.jp/dp/B0FW4D5XT8",
        au: "https://www.amazon.au/dp/B0FW4D5XT8",
        se: "https://www.amazon.se/dp/B0FW4D5XT8",
        pl: "https://www.amazon.pl/dp/B0FW4D5XT8",
        ca: "https://www.amazon.ca/dp/B0FW4D5XT8",
        nl: "https://www.amazon.nl/dp/B0FW4D5XT8",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/rani/cover.jpg",
      "assets/img/books/rani/1.jpg",
      "assets/img/books/rani/2.jpg",
      "assets/img/books/rani/3.jpg",
      "assets/img/books/rani/4.jpg",
      "assets/img/books/rani/5.jpg",
      "assets/img/books/rani/6.jpg",
    ],
    sections: [
      "assets/img/books/rani/sections/1.jpg",
      "assets/img/books/rani/sections/2.jpg",
      "assets/img/books/rani/sections/3.jpg",
      "assets/img/books/rani/sections/4.jpg",
      "assets/img/books/rani/sections/5.jpg",
    ],
    intro: [
      "Step into the vibrant streets of Jaipur and follow the footsteps of Rani, a gentle little elephant who embarks on a journey to an ancient monastery in search of inner peace. Her wish is to quiet the mental noise, breathe deeply, and reconnect with the present through meditation, gratitude, and the beauty of simple living.",
      "This beautiful coloring book features 40 unique black and white illustrations that invite you to explore silent temples, sacred gardens, ancient palaces, and hidden corners of India all through Rani’s calm and mindful eyes. In her daily life at the monastery, Rani practices meditation, waters bonsai trees, drinks tea mindfully, writes letters of gratitude, cares for her animal friends, prepares food with love, and watches the sunrise in stillness. Every action becomes an opportunity to live in the present moment with serenity.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "40 original illustrations, rich in cultural and spiritual detail.",
      "Format: 8,25 x 8,25 in.",
      "Suitable for all ages, for kids, teens, and adults alike.",
      "Encourages mindfulness, gratitude, and creativity.",
    ]
  },

  "cute-and-cuddly-capybarasII": {
    title: "Cute & Cuddly Capybaras II",
    price: 8.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH74TL65", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH74TL65",
        de: "https://www.amazon.de/dp/B0FH74TL65",
        it: "https://www.amazon.it/dp/B0FH74TL65",
        es: "https://www.amazon.es/dp/B0FH74TL65",
        fr: "https://www.amazon.fr/dp/B0FH74TL65",
        jp: "https://www.amazon.jp/dp/B0FH74TL65",
        au: "https://www.amazon.au/dp/B0FH74TL65",
        se: "https://www.amazon.se/dp/B0FH74TL65",
        pl: "https://www.amazon.pl/dp/B0FH74TL65",
        ca: "https://www.amazon.ca/dp/B0FH74TL65",
        nl: "https://www.amazon.nl/dp/B0FH74TL65",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJ5J6JSP", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJ5J6JSP",
        de: "https://www.amazon.de/dp/B0FJ5J6JSP",
        it: "https://www.amazon.it/dp/B0FJ5J6JSP",
        es: "https://www.amazon.es/dp/B0FJ5J6JSP",
        fr: "https://www.amazon.fr/dp/B0FJ5J6JSP",
        jp: "https://www.amazon.jp/dp/B0FJ5J6JSP",
        au: "https://www.amazon.au/dp/B0FJ5J6JSP",
        se: "https://www.amazon.se/dp/B0FJ5J6JSP",
        pl: "https://www.amazon.pl/dp/B0FJ5J6JSP",
        ca: "https://www.amazon.ca/dp/B0FJ5J6JSP",
        nl: "https://www.amazon.nl/dp/B0FJ5J6JSP",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/cute-and-cuddly-capybarasII/cover.jpg",
      "assets/img/books/cute-and-cuddly-capybarasII/p01.jpg",
      "assets/img/books/cute-and-cuddly-capybarasII/p02.jpg",
      "assets/img/books/cute-and-cuddly-capybarasII/p03.jpg",
      "assets/img/books/cute-and-cuddly-capybarasII/p04.jpg",
      "assets/img/books/cute-and-cuddly-capybarasII/p05.jpg",
      "assets/img/books/cute-and-cuddly-capybarasII/p06.jpg",
    ],
    sections: [
      "assets/img/books/cute-and-cuddly-capybarasII/sections/1.jpg",
      "assets/img/books/cute-and-cuddly-capybarasII/sections/2.jpg",
      "assets/img/books/cute-and-cuddly-capybarasII/sections/3.jpg",
      "assets/img/books/cute-and-cuddly-capybarasII/sections/4.jpg",
      "assets/img/books/cute-and-cuddly-capybarasII/sections/5.jpg",
    ],
    intro: [
      "One Bark… to Save the Multiverse! Prepare for action packed adventures as heroic hounds take over the multiverse! In this unique and exciting coloring book, 40 brave superdogs leap into battle, each inspired by legendary heroes but with wagging tails and fearless paws.",
      "Whether they're flying through the night sky or standing tall with a shield, these canine champions are here to protect the world. Perfect for kids, dog lovers, and fans of heroic stories, this book offers hours of fun and imagination. Unleash your creativity and color the most pawsome team the multiverse has ever seen!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "40 dynamic black and white illustrations of superhero dogs.",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity, confidence, and love for dogs.",
      " Ideal for animal lovers, young adventurers, and coloring fans who dream big.",
    ]
  },

"halloween-dogs-in-costume": {
    title: "Halloween Dogs in Costume",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FW5FHGBM", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FW5FHGBM",
        de: "https://www.amazon.de/dp/B0FW5FHGBM",
        it: "https://www.amazon.it/dp/B0FW5FHGBM",
        es: "https://www.amazon.es/dp/B0FW5FHGBM",
        fr: "https://www.amazon.fr/dp/B0FW5FHGBM",
        jp: "https://www.amazon.jp/dp/B0FW5FHGBM",
        au: "https://www.amazon.au/dp/B0FW5FHGBM",
        se: "https://www.amazon.se/dp/B0FW5FHGBM",
        pl: "https://www.amazon.pl/dp/B0FW5FHGBM",
        ca: "https://www.amazon.ca/dp/B0FW5FHGBM",
        nl: "https://www.amazon.nl/dp/B0FW5FHGBM",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FW5GMKVZ", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FW5GMKVZ",
        de: "https://www.amazon.de/dp/B0FW5GMKVZ",
        it: "https://www.amazon.it/dp/B0FW5GMKVZ",
        es: "https://www.amazon.es/dp/B0FW5GMKVZ",
        fr: "https://www.amazon.fr/dp/B0FW5GMKVZ",
        jp: "https://www.amazon.jp/dp/B0FW5GMKVZ",
        au: "https://www.amazon.au/dp/B0FW5GMKVZ",
        se: "https://www.amazon.se/dp/B0FW5GMKVZ",
        pl: "https://www.amazon.pl/dp/B0FW5GMKVZ",
        ca: "https://www.amazon.ca/dp/B0FW5GMKVZ",
        nl: "https://www.amazon.nl/dp/B0FW5GMKVZ",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/halloween-dogs-in-costume/cover.jpg",
      "assets/img/books/halloween-dogs-in-costume/1.jpg",
      "assets/img/books/halloween-dogs-in-costume/2.jpg",
      "assets/img/books/halloween-dogs-in-costume/3.jpg",
      "assets/img/books/halloween-dogs-in-costume/4.jpg",
      "assets/img/books/halloween-dogs-in-costume/5.jpg",
      "assets/img/books/halloween-dogs-in-costume/6.jpg",
    ],
    sections: [
      "assets/img/books/halloween-dogs-in-costume/sections/1.jpg",
      "assets/img/books/halloween-dogs-in-costume/sections/2.jpg",
      "assets/img/books/halloween-dogs-in-costume/sections/3.jpg",
      "assets/img/books/halloween-dogs-in-costume/sections/4.jpg",
      "assets/img/books/halloween-dogs-in-costume/sections/5.jpg",
    ],
    intro: [
      "Step into a spooky-fun world of Halloween dogs in disguise! 🐶🎃.",
      "Get ready to meet the funniest and most adorable pups of the season brave vampire dogs, silly mummies chasing their tails, zombie pups digging up bones, and even little werewolves howling at the moon! Each page is packed with laughter, creativity, and Halloween charm.",
      "This coloring book includes 45 original black and white illustrations featuring dogs dressed up in all kinds of spooky, cute, and hilarious costumes. Perfect for kids and adults who love coloring, dogs, and the joyful spirit of Halloween!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "45 unique Halloween dog illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity, confidence, and love for dogs.",
      "Sparks creativity, laughter, and the true Halloween spirit!",
    ]
  },

  "cute-animals-pumpkin-tales": {
    title: "Cute Animals Pumpkin Tales",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FY5V2787", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FY5V2787",
        de: "https://www.amazon.de/dp/B0FY5V2787",
        it: "https://www.amazon.it/dp/B0FY5V2787",
        es: "https://www.amazon.es/dp/B0FY5V2787",
        fr: "https://www.amazon.fr/dp/B0FY5V2787",
        jp: "https://www.amazon.jp/dp/B0FY5V2787",
        au: "https://www.amazon.au/dp/B0FY5V2787",
        se: "https://www.amazon.se/dp/B0FY5V2787",
        pl: "https://www.amazon.pl/dp/B0FY5V2787",
        ca: "https://www.amazon.ca/dp/B0FY5V2787",
        nl: "https://www.amazon.nl/dp/B0FY5V2787",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FY5KB365", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FY5KB365",
        de: "https://www.amazon.de/dp/B0FY5KB365",
        it: "https://www.amazon.it/dp/B0FY5KB365",
        es: "https://www.amazon.es/dp/B0FY5KB365",
        fr: "https://www.amazon.fr/dp/B0FY5KB365",
        jp: "https://www.amazon.jp/dp/B0FY5KB365",
        au: "https://www.amazon.au/dp/B0FY5KB365",
        se: "https://www.amazon.se/dp/B0FY5KB365",
        pl: "https://www.amazon.pl/dp/B0FY5KB365",
        ca: "https://www.amazon.ca/dp/B0FY5KB365",
        nl: "https://www.amazon.nl/dp/B0FY5KB365",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/cute-animals-pumpkin-tales/cover.jpg",
      "assets/img/books/cute-animals-pumpkin-tales/1.jpg",
      "assets/img/books/cute-animals-pumpkin-tales/2.jpg",
      "assets/img/books/cute-animals-pumpkin-tales/3.jpg",
      "assets/img/books/cute-animals-pumpkin-tales/4.jpg",
      "assets/img/books/cute-animals-pumpkin-tales/5.jpg",
      "assets/img/books/cute-animals-pumpkin-tales/6.jpg",
    ],
    sections: [
      "assets/img/books/cute-animals-pumpkin-tales/sections/1.jpg",
      "assets/img/books/cute-animals-pumpkin-tales/sections/2.jpg",
      "assets/img/books/cute-animals-pumpkin-tales/sections/3.jpg",
      "assets/img/books/cute-animals-pumpkin-tales/sections/4.jpg",
      "assets/img/books/cute-animals-pumpkin-tales/sections/5.jpg",
    ],
    intro: [
      "Step into the adorable world of cozy Halloween magic and autumn fun with Cute animals pumpkin tales!",
      "Meet the sweetest little creatures of the season playful kittens, smiling bats, fluffy hedgehogs, happy foxes, and other cute animal friends enjoying the spooky charm of fall. Each page is filled with delightful scenes full of pumpkins, candies, autumn leaves, and heart warming Halloween vibes.",
      "This book includes 45 black and white pages to enjoy, featuring imaginative and charming designs perfect for anyone who loves cute Halloween art and cozy fall aesthetics.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "45 unique Halloween dog illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Perfect for kids and adults who love cute, cozy Halloween animals.",
      "Encourages creativity, relaxation, and autumn joy.",
    ]
  },

"cute-pumpkins-in-costume": {
    title: "Cute Animals Pumpkin Tales",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FY5ZM81B", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FY5ZM81B",
        de: "https://www.amazon.de/dp/B0FY5ZM81B",
        it: "https://www.amazon.it/dp/B0FY5ZM81B",
        es: "https://www.amazon.es/dp/B0FY5ZM81B",
        fr: "https://www.amazon.fr/dp/B0FY5ZM81B",
        jp: "https://www.amazon.jp/dp/B0FY5ZM81B",
        au: "https://www.amazon.au/dp/B0FY5ZM81B",
        se: "https://www.amazon.se/dp/B0FY5ZM81B",
        pl: "https://www.amazon.pl/dp/B0FY5ZM81B",
        ca: "https://www.amazon.ca/dp/B0FY5ZM81B",
        nl: "https://www.amazon.nl/dp/B0FY5ZM81B",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FY5M9GPY", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FY5M9GPY",
        de: "https://www.amazon.de/dp/B0FY5M9GPY",
        it: "https://www.amazon.it/dp/B0FY5M9GPY",
        es: "https://www.amazon.es/dp/B0FY5M9GPY",
        fr: "https://www.amazon.fr/dp/B0FY5M9GPY",
        jp: "https://www.amazon.jp/dp/B0FY5M9GPY",
        au: "https://www.amazon.au/dp/B0FY5M9GPY",
        se: "https://www.amazon.se/dp/B0FY5M9GPY",
        pl: "https://www.amazon.pl/dp/B0FY5M9GPY",
        ca: "https://www.amazon.ca/dp/B0FY5M9GPY",
        nl: "https://www.amazon.nl/dp/B0FY5M9GPY",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/cute-pumpkins-in-costume/cover.jpg",
      "assets/img/books/cute-pumpkins-in-costume/1.jpg",
      "assets/img/books/cute-pumpkins-in-costume/2.jpg",
      "assets/img/books/cute-pumpkins-in-costume/3.jpg",
      "assets/img/books/cute-pumpkins-in-costume/4.jpg",
      "assets/img/books/cute-pumpkins-in-costume/5.jpg",
      "assets/img/books/cute-pumpkins-in-costume/6.jpg",
    ],
    sections: [
      "assets/img/books/cute-pumpkins-in-costume/sections/1.jpg",
      "assets/img/books/cute-pumpkins-in-costume/sections/2.jpg",
      "assets/img/books/cute-pumpkins-in-costume/sections/3.jpg",
      "assets/img/books/cute-pumpkins-in-costume/sections/4.jpg",
      "assets/img/books/cute-pumpkins-in-costume/sections/5.jpg",
    ],
    intro: [
      "Dive into the adorable world of Halloween and autumn charm with Cute Pumpkins In Costume.",
      "Meet the sweetest pumpkin of the season, dressing up every day in new and fun Halloween costumes. From little witches and smiling ghosts to magical kittens and cheerful bats, each scene is full of cuteness, candies, and cozy autumn vibes.",
      "This title includes 40 black and white illustrations full of creativity and charm, perfect for anyone who loves cute Halloween themes and cozy fall magic.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "40 unique Halloween dog illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Perfect for kids and adults who love cute Halloween pumpkins and costumes.",
      "Encourages creativity, relaxation, and seasonal joy.",
    ]
  },
  

  "halloween-things-to-color": {
    title: "Halloween Things To Color",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FY56SBRF", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FY56SBRF",
        de: "https://www.amazon.de/dp/B0FY56SBRF",
        it: "https://www.amazon.it/dp/B0FY56SBRF",
        es: "https://www.amazon.es/dp/B0FY56SBRF",
        fr: "https://www.amazon.fr/dp/B0FY56SBRF",
        jp: "https://www.amazon.jp/dp/B0FY56SBRF",
        au: "https://www.amazon.au/dp/B0FY56SBRF",
        se: "https://www.amazon.se/dp/B0FY56SBRF",
        pl: "https://www.amazon.pl/dp/B0FY56SBRF",
        ca: "https://www.amazon.ca/dp/B0FY56SBRF",
        nl: "https://www.amazon.nl/dp/B0FY56SBRF",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FY5MTMBH", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FY5MTMBH",
        de: "https://www.amazon.de/dp/B0FY5MTMBH",
        it: "https://www.amazon.it/dp/B0FY5MTMBH",
        es: "https://www.amazon.es/dp/B0FY5MTMBH",
        fr: "https://www.amazon.fr/dp/B0FY5MTMBH",
        jp: "https://www.amazon.jp/dp/B0FY5MTMBH",
        au: "https://www.amazon.au/dp/B0FY5MTMBH",
        se: "https://www.amazon.se/dp/B0FY5MTMBH",
        pl: "https://www.amazon.pl/dp/B0FY5MTMBH",
        ca: "https://www.amazon.ca/dp/B0FY5MTMBH",
        nl: "https://www.amazon.nl/dp/B0FY5MTMBH",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/halloween-things-to-color/cover.jpg",
      "assets/img/books/halloween-things-to-color/1.jpg",
      "assets/img/books/halloween-things-to-color/2.jpg",
      "assets/img/books/halloween-things-to-color/3.jpg",
      "assets/img/books/halloween-things-to-color/4.jpg",
      "assets/img/books/halloween-things-to-color/5.jpg",
      "assets/img/books/halloween-things-to-color/6.jpg",
    ],
    sections: [
      "assets/img/books/halloween-things-to-color/sections/1.jpg",
      "assets/img/books/halloween-things-to-color/sections/2.jpg",
      "assets/img/books/halloween-things-to-color/sections/3.jpg",
      "assets/img/books/halloween-things-to-color/sections/4.jpg",
      "assets/img/books/halloween-things-to-color/sections/5.jpg",
    ],
    intro: [
      "Step into a fun and spooky world of imagination with Halloween Things To Color  a delightful Halloween coloring book filled with charm and creativity!",
      "Inside, you’ll discover a wonderful collection of enchanted objects, funny cartoons, and magical little creatures, all with that perfect mix of cute and spooky. From smiling pumpkins and bubbling potions to friendly ghosts and playful bats, every page brings the cozy Halloween spirit to life.",
      "This book includes 50 black and white illustrations perfect for hours of creativity, relaxation, and festive fun.",
      "🎁 Bonus Included! At the end of the book, you’ll find a Halloween themed word search puzzle  the perfect extra activity for curious and imaginative minds!",
    ],
    bullets: [
      "50 unique Halloween dog illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Great for kids and adults who love cute and spooky Halloween art.",
      "Encourages creativity, calmness, and seasonal joy.",
    ]
  },

"brook-the-smiling-skeleton": {
    title: "Brook The Smiling Skeleton",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FY5ZM95P", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FY5ZM95P",
        de: "https://www.amazon.de/dp/B0FY5ZM95P",
        it: "https://www.amazon.it/dp/B0FY5ZM95P",
        es: "https://www.amazon.es/dp/B0FY5ZM95P",
        fr: "https://www.amazon.fr/dp/B0FY5ZM95P",
        jp: "https://www.amazon.jp/dp/B0FY5ZM95P",
        au: "https://www.amazon.au/dp/B0FY5ZM95P",
        se: "https://www.amazon.se/dp/B0FY5ZM95P",
        pl: "https://www.amazon.pl/dp/B0FY5ZM95P",
        ca: "https://www.amazon.ca/dp/B0FY5ZM95P",
        nl: "https://www.amazon.nl/dp/B0FY5ZM95P",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FY5MPSR9", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FY5MPSR9",
        de: "https://www.amazon.de/dp/B0FY5MPSR9",
        it: "https://www.amazon.it/dp/B0FY5MPSR9",
        es: "https://www.amazon.es/dp/B0FY5MPSR9",
        fr: "https://www.amazon.fr/dp/B0FY5MPSR9",
        jp: "https://www.amazon.jp/dp/B0FY5MPSR9",
        au: "https://www.amazon.au/dp/B0FY5MPSR9",
        se: "https://www.amazon.se/dp/B0FY5MPSR9",
        pl: "https://www.amazon.pl/dp/B0FY5MPSR9",
        ca: "https://www.amazon.ca/dp/B0FY5MPSR9",
        nl: "https://www.amazon.nl/dp/B0FY5MPSR9",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/brook-the-smiling-skeleton/cover.jpg",
      "assets/img/books/brook-the-smiling-skeleton/1.jpg",
      "assets/img/books/brook-the-smiling-skeleton/2.jpg",
      "assets/img/books/brook-the-smiling-skeleton/3.jpg",
      "assets/img/books/brook-the-smiling-skeleton/4.jpg",
      "assets/img/books/brook-the-smiling-skeleton/5.jpg",
      "assets/img/books/brook-the-smiling-skeleton/6.jpg",
    ],
    sections: [
      "assets/img/books/brook-the-smiling-skeleton/sections/1.jpg",
      "assets/img/books/brook-the-smiling-skeleton/sections/2.jpg",
      "assets/img/books/brook-the-smiling-skeleton/sections/3.jpg",
      "assets/img/books/brook-the-smiling-skeleton/sections/4.jpg",
      "assets/img/books/brook-the-smiling-skeleton/sections/5.jpg",
    ],
    intro: [
      "Step into the whimsical and spooky world of Brook The Smiling Skeleton, where every page tells a new story from the everyday life of a charming skeleton!",
      "From morning coffee in a haunted kitchen to dancing under the moonlight with ghostly friends, this delightful Halloween coloring book captures the funny, cozy, and sometimes mysterious moments of skeleton life. Each scene is filled with personality and tiny details that make every page fun to explore.",
      "This book includes 45 black and white illustrations designed to spark imagination, laughter, and Halloween joy.",
      "🎁 Bonus Included! At the end of the book, you’ll find a special themed puzzle activity inspired by the skeleton’s adventures  perfect for creative and curious minds!",
    ],
    bullets: [
      "45 unique Halloween dog illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Perfect for kids and adults who love funny and spooky Halloween stories.",
      "Encourages creativity, imagination, and relaxation.",
    ]
  },

  "funny-little-monsters": {
    title: "Funny Little Monsters",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FY5QXHJ3", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FY5QXHJ3",
        de: "https://www.amazon.de/dp/B0FY5QXHJ3",
        it: "https://www.amazon.it/dp/B0FY5QXHJ3",
        es: "https://www.amazon.es/dp/B0FY5QXHJ3",
        fr: "https://www.amazon.fr/dp/B0FY5QXHJ3",
        jp: "https://www.amazon.jp/dp/B0FY5QXHJ3",
        au: "https://www.amazon.au/dp/B0FY5QXHJ3",
        se: "https://www.amazon.se/dp/B0FY5QXHJ3",
        pl: "https://www.amazon.pl/dp/B0FY5QXHJ3",
        ca: "https://www.amazon.ca/dp/B0FY5QXHJ3",
        nl: "https://www.amazon.nl/dp/B0FY5QXHJ3",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FY5LY286", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FY5LY286",
        de: "https://www.amazon.de/dp/B0FY5LY286",
        it: "https://www.amazon.it/dp/B0FY5LY286",
        es: "https://www.amazon.es/dp/B0FY5LY286",
        fr: "https://www.amazon.fr/dp/B0FY5LY286",
        jp: "https://www.amazon.jp/dp/B0FY5LY286",
        au: "https://www.amazon.au/dp/B0FY5LY286",
        se: "https://www.amazon.se/dp/B0FY5LY286",
        pl: "https://www.amazon.pl/dp/B0FY5LY286",
        ca: "https://www.amazon.ca/dp/B0FY5LY286",
        nl: "https://www.amazon.nl/dp/B0FY5LY286",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/funny-little-monsters/cover.jpg",
      "assets/img/books/funny-little-monsters/1.jpg",
      "assets/img/books/funny-little-monsters/2.jpg",
      "assets/img/books/funny-little-monsters/3.jpg",
      "assets/img/books/funny-little-monsters/4.jpg",
      "assets/img/books/funny-little-monsters/5.jpg",
      "assets/img/books/funny-little-monsters/6.jpg",
    ],
    sections: [
      "assets/img/books/funny-little-monsters/sections/1.jpg",
      "assets/img/books/funny-little-monsters/sections/2.jpg",
      "assets/img/books/funny-little-monsters/sections/3.jpg",
      "assets/img/books/funny-little-monsters/sections/4.jpg",
      "assets/img/books/funny-little-monsters/sections/5.jpg",
    ],
    intro: [
      "Step into the cute and spooky world of Funny Little Monsters, where every little creature is ready to celebrate Halloween in style!",
      "Meet adorable bunnies, kittens, foxes, and other forest friends dressed up as vampires, witches, mummies, monsters, and ghosts. Each page is filled with delightful Halloween costumes, playful details, and cozy autumn charm that will make you smile from start to finish.",
      "This Halloween coloring book includes 40 black and white illustrations perfect for kids and adults who love cute and funny spooky art.",
      "🎁 Bonus Included! At the end of the book, you’ll find a special themed puzzle activity inspired by the skeleton’s adventures  perfect for creative and curious minds!",
    ],
    bullets: [
      "40 unique Halloween dog illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Perfect for anyone who loves cute animals and Halloween fun.",
      "Encourages creativity, joy, and autumn relaxation.",
    ]
  },


  "mutant-dogs": {
    title: "Mutant Dogs",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FWCM71H9", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FWCM71H9",
        de: "https://www.amazon.de/dp/B0FWCM71H9",
        it: "https://www.amazon.it/dp/B0FWCM71H9",
        es: "https://www.amazon.es/dp/B0FWCM71H9",
        fr: "https://www.amazon.fr/dp/B0FWCM71H9",
        jp: "https://www.amazon.jp/dp/B0FWCM71H9",
        au: "https://www.amazon.au/dp/B0FWCM71H9",
        se: "https://www.amazon.se/dp/B0FWCM71H9",
        pl: "https://www.amazon.pl/dp/B0FWCM71H9",
        ca: "https://www.amazon.ca/dp/B0FWCM71H9",
        nl: "https://www.amazon.nl/dp/B0FWCM71H9",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FWCQMTG8", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FWCQMTG8",
        de: "https://www.amazon.de/dp/B0FWCQMTG8",
        it: "https://www.amazon.it/dp/B0FWCQMTG8",
        es: "https://www.amazon.es/dp/B0FWCQMTG8",
        fr: "https://www.amazon.fr/dp/B0FWCQMTG8",
        jp: "https://www.amazon.jp/dp/B0FWCQMTG8",
        au: "https://www.amazon.au/dp/B0FWCQMTG8",
        se: "https://www.amazon.se/dp/B0FWCQMTG8",
        pl: "https://www.amazon.pl/dp/B0FWCQMTG8",
        ca: "https://www.amazon.ca/dp/B0FWCQMTG8",
        nl: "https://www.amazon.nl/dp/B0FWCQMTG8",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/mutant-dogs/cover.jpg",
      "assets/img/books/mutant-dogs/1.jpg",
      "assets/img/books/mutant-dogs/2.jpg",
      "assets/img/books/mutant-dogs/3.jpg",
      "assets/img/books/mutant-dogs/4.jpg",
      "assets/img/books/mutant-dogs/5.jpg",
      "assets/img/books/mutant-dogs/6.jpg",
    ],
    sections: [
      "assets/img/books/mutant-dogs/sections/1.jpg",
      "assets/img/books/mutant-dogs/sections/2.jpg",
      "assets/img/books/mutant-dogs/sections/3.jpg",
      "assets/img/books/mutant-dogs/sections/4.jpg",
      "assets/img/books/mutant-dogs/sections/5.jpg",
    ],
    intro: [
      "Enter the strange and spooky world of Mutant Dogs! 🐶💀.",
      "Get ready to meet the creepiest and funniest dogs you’ve ever seen! Inside you’ll find a clown dog that splits into pieces, a ghost pup floating through dark cemeteries, a sorcerer dog casting mysterious spells, a snake tailed hound, and even Frankenstein and Dracula dogs rising from the shadows!",
      "Each page is packed with dark humor, wild imagination, and eerie Halloween style fun that will keep you coloring for hours. Perfect for anyone who loves horror, fantasy, and weirdly adorable creatures.",
      "🎁 Bonus Included! At the end of the book, enjoy a special Halloween word search activity featuring spooky dog names and mysterious creatures a fun extra challenge for curious and creative minds!",
    ],
    bullets: [
      "40 original black and white illustrations of mutant dogs.",
      "Format: 8.25 x 8.25 in.",
      "Great for teens and adults.",
      "Sparks creativity, laughter, and the true Halloween spirit!",
    ]
  },

  "dolls-of-darkness": {
    title: "Dolls Of Darkness",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FWYL9XVK", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FWYL9XVK",
        de: "https://www.amazon.de/dp/B0FWYL9XVK",
        it: "https://www.amazon.it/dp/B0FWYL9XVK",
        es: "https://www.amazon.es/dp/B0FWYL9XVK",
        fr: "https://www.amazon.fr/dp/B0FWYL9XVK",
        jp: "https://www.amazon.jp/dp/B0FWYL9XVK",
        au: "https://www.amazon.au/dp/B0FWYL9XVK",
        se: "https://www.amazon.se/dp/B0FWYL9XVK",
        pl: "https://www.amazon.pl/dp/B0FWYL9XVK",
        ca: "https://www.amazon.ca/dp/B0FWYL9XVK",
        nl: "https://www.amazon.nl/dp/B0FWYL9XVK",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FWYGXYBM", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FWYGXYBM",
        de: "https://www.amazon.de/dp/B0FWYGXYBM",
        it: "https://www.amazon.it/dp/B0FWYGXYBM",
        es: "https://www.amazon.es/dp/B0FWYGXYBM",
        fr: "https://www.amazon.fr/dp/B0FWYGXYBM",
        jp: "https://www.amazon.jp/dp/B0FWYGXYBM",
        au: "https://www.amazon.au/dp/B0FWYGXYBM",
        se: "https://www.amazon.se/dp/B0FWYGXYBM",
        pl: "https://www.amazon.pl/dp/B0FWYGXYBM",
        ca: "https://www.amazon.ca/dp/B0FWYGXYBM",
        nl: "https://www.amazon.nl/dp/B0FWYGXYBM",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/dolls-of-darkness/cover.jpg",
      "assets/img/books/dolls-of-darkness/1.jpg",
      "assets/img/books/dolls-of-darkness/2.jpg",
      "assets/img/books/dolls-of-darkness/3.jpg",
      "assets/img/books/dolls-of-darkness/4.jpg",
      "assets/img/books/dolls-of-darkness/5.jpg",
      "assets/img/books/dolls-of-darkness/6.jpg",
    ],
    sections: [
      "assets/img/books/dolls-of-darkness/sections/1.jpg",
      "assets/img/books/dolls-of-darkness/sections/2.jpg",
      "assets/img/books/dolls-of-darkness/sections/3.jpg",
      "assets/img/books/dolls-of-darkness/sections/4.jpg",
      "assets/img/books/dolls-of-darkness/sections/5.jpg",
    ],
    intro: [
      "Step into a world where cuteness meets the creepy side of Halloween!",
      "Discover a hauntingly adorable collection of chibi-style dark dolls mysterious figures with big eyes, spooky smiles, and gothic charm. Each page brings to life  yet playful characters inspired by classic horror legends and shadowy fairytales all redesigned in a fun, collectible style look perfect for coloring lovers.",
      "This coloring book includes 40 black and white pages filled with imaginative and detailed Halloween scenes. Ideal for fans of spooky cuteness and dark fantasy art, this book will make you smile while giving you a delightful chill!",
      "🎁 Bonus Included! At the end of the book, you’ll find a special color and cut puzzle activity to assemble and glue to the final page a perfect creative challenge for curious minds and crafty hands!",
    ],
    bullets: [
      "40 original black and white illustrations.",
      "Format: 8.25 x 8.25 in.",
      "Great for teens and adults who love spooky cute art.",
      "Encourages creativity, focus, and a fun Halloween mood.",
    ]
  },

 "capybara-loves-pumpkins": {
    title: "Capybara Loves Pumpkins",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FXGG8F22", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FXGG8F22",
        de: "https://www.amazon.de/dp/B0FXGG8F22",
        it: "https://www.amazon.it/dp/B0FXGG8F22",
        es: "https://www.amazon.es/dp/B0FXGG8F22",
        fr: "https://www.amazon.fr/dp/B0FXGG8F22",
        jp: "https://www.amazon.jp/dp/B0FXGG8F22",
        au: "https://www.amazon.au/dp/B0FXGG8F22",
        se: "https://www.amazon.se/dp/B0FXGG8F22",
        pl: "https://www.amazon.pl/dp/B0FXGG8F22",
        ca: "https://www.amazon.ca/dp/B0FXGG8F22",
        nl: "https://www.amazon.nl/dp/B0FXGG8F22",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FXDYLQGT", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FXDYLQGT",
        de: "https://www.amazon.de/dp/B0FXDYLQGT",
        it: "https://www.amazon.it/dp/B0FXDYLQGT",
        es: "https://www.amazon.es/dp/B0FXDYLQGT",
        fr: "https://www.amazon.fr/dp/B0FXDYLQGT",
        jp: "https://www.amazon.jp/dp/B0FXDYLQGT",
        au: "https://www.amazon.au/dp/B0FXDYLQGT",
        se: "https://www.amazon.se/dp/B0FXDYLQGT",
        pl: "https://www.amazon.pl/dp/B0FXDYLQGT",
        ca: "https://www.amazon.ca/dp/B0FXDYLQGT",
        nl: "https://www.amazon.nl/dp/B0FXDYLQGT",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/capybara-loves-pumpkins/cover.jpg",
      "assets/img/books/capybara-loves-pumpkins/1.jpg",
      "assets/img/books/capybara-loves-pumpkins/2.jpg",
      "assets/img/books/capybara-loves-pumpkins/3.jpg",
      "assets/img/books/capybara-loves-pumpkins/4.jpg",
      "assets/img/books/capybara-loves-pumpkins/5.jpg",
      "assets/img/books/capybara-loves-pumpkins/6.jpg",
    ],
    sections: [
      "assets/img/books/capybara-loves-pumpkins/sections/1.jpg",
      "assets/img/books/capybara-loves-pumpkins/sections/2.jpg",
      "assets/img/books/capybara-loves-pumpkins/sections/3.jpg",
      "assets/img/books/capybara-loves-pumpkins/sections/4.jpg",
      "assets/img/books/capybara-loves-pumpkins/sections/5.jpg",
    ],
    intro: [
      "Step into a cozy world of pumpkins, autumn magic, and capybara charm!",
      "Meet the most adorable capybaras of the season celebrating Halloween surrounded by pumpkins, hugging their favorite gourds, dressing up in cute costumes to collect candies, and enjoying the magic of fall. Each page is filled with heartwarming and detailed scenes that capture the cozy spirit of autumn and the playful joy of Halloween.",
      "This book includes 45 original black and white illustrations to color and enjoy, featuring imaginative, cute designs perfect for both kids and adults who love cozy fall art and charming Halloween animals.",
      "🎁 Bonus Included! At the end of the book, you’ll find a special color and cut puzzle related to the story a fun creative challenge for curious minds and crafty hands!",
    ],
    bullets: [
      "45 unique black and white pages to color.",
      "Format: 8.25 x 8.25 inches.",
      "Capybaras hugging pumpkins, wearing costumes, and celebrating Halloween.",
      "Perfect for kids and adults who love capybaras, pumpkins, and cozy autumn vibes.",
      "Encourages creativity, relaxation, and joyful fall imagination.",
    ]
  },

  "capybaras-in-costume": {
    title: "Capybaras In Costume",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FXGDJ6QF", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FXGDJ6QF",
        de: "https://www.amazon.de/dp/B0FXGDJ6QF",
        it: "https://www.amazon.it/dp/B0FXGDJ6QF",
        es: "https://www.amazon.es/dp/B0FXGDJ6QF",
        fr: "https://www.amazon.fr/dp/B0FXGDJ6QF",
        jp: "https://www.amazon.jp/dp/B0FXGDJ6QF",
        au: "https://www.amazon.au/dp/B0FXGDJ6QF",
        se: "https://www.amazon.se/dp/B0FXGDJ6QF",
        pl: "https://www.amazon.pl/dp/B0FXGDJ6QF",
        ca: "https://www.amazon.ca/dp/B0FXGDJ6QF",
        nl: "https://www.amazon.nl/dp/B0FXGDJ6QF",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FXF3D23S", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FXF3D23S",
        de: "https://www.amazon.de/dp/B0FXF3D23S",
        it: "https://www.amazon.it/dp/B0FXF3D23S",
        es: "https://www.amazon.es/dp/B0FXF3D23S",
        fr: "https://www.amazon.fr/dp/B0FXF3D23S",
        jp: "https://www.amazon.jp/dp/B0FXF3D23S",
        au: "https://www.amazon.au/dp/B0FXF3D23S",
        se: "https://www.amazon.se/dp/B0FXF3D23S",
        pl: "https://www.amazon.pl/dp/B0FXF3D23S",
        ca: "https://www.amazon.ca/dp/B0FXF3D23S",
        nl: "https://www.amazon.nl/dp/B0FXF3D23S",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/capybaras-in-costume/cover.jpg",
      "assets/img/books/capybaras-in-costume/1.jpg",
      "assets/img/books/capybaras-in-costume/2.jpg",
      "assets/img/books/capybaras-in-costume/3.jpg",
      "assets/img/books/capybaras-in-costume/4.jpg",
      "assets/img/books/capybaras-in-costume/5.jpg",
      "assets/img/books/capybaras-in-costume/6.jpg",
    ],
    sections: [
      "assets/img/books/capybaras-in-costume/sections/1.jpg",
      "assets/img/books/capybaras-in-costume/sections/2.jpg",
      "assets/img/books/capybaras-in-costume/sections/3.jpg",
      "assets/img/books/capybaras-in-costume/sections/4.jpg",
      "assets/img/books/capybaras-in-costume/sections/5.jpg",
    ],
    intro: [
      "Get ready for a fun and spooky adventure with the cutest capybaras in costumes!",
      "Welcome to the magical world of Capybaras in Costumes Coloring Book, where every page is filled with adorable capybaras dressed up for Halloween! From brave pirates and mysterious mummies to funny vampires and other creative disguises each illustration captures the playful spirit of the season.",
      "This book includes 40 original black and white illustrations to color and enjoy, featuring charming, detailed, and imaginative Halloween scenes that will bring joy to both kids and adults who love cute animals and cozy fall fun.",
      "🎁 Bonus Included! At the end of the book, you’ll find a special color and cut puzzle inspired by the capybaras the perfect creative activity for curious minds and crafty hands!",
    ],
    bullets: [
      "40 unique black and white pages to color.",
      "Format: 8.25 x 8.25 inches.",
      "Features capybaras dressed as pirates, mummies, vampires, and more!",
      "Perfect for kids and adults who love Halloween, cute animals, and cozy autumn vibes.",
      "Encourages creativity, relaxation, and joyful imagination.",
    ]
  },


  "cozy-halloween-critters": {
    title: "Cozy Halloween Critters",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FWYLCF1S", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FWYLCF1S",
        de: "https://www.amazon.de/dp/B0FWYLCF1S",
        it: "https://www.amazon.it/dp/B0FWYLCF1S",
        es: "https://www.amazon.es/dp/B0FWYLCF1S",
        fr: "https://www.amazon.fr/dp/B0FWYLCF1S",
        jp: "https://www.amazon.jp/dp/B0FWYLCF1S",
        au: "https://www.amazon.au/dp/B0FWYLCF1S",
        se: "https://www.amazon.se/dp/B0FWYLCF1S",
        pl: "https://www.amazon.pl/dp/B0FWYLCF1S",
        ca: "https://www.amazon.ca/dp/B0FWYLCF1S",
        nl: "https://www.amazon.nl/dp/B0FWYLCF1S",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FWXBLJNJ", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FWXBLJNJ",
        de: "https://www.amazon.de/dp/B0FWXBLJNJ",
        it: "https://www.amazon.it/dp/B0FWXBLJNJ",
        es: "https://www.amazon.es/dp/B0FWXBLJNJ",
        fr: "https://www.amazon.fr/dp/B0FWXBLJNJ",
        jp: "https://www.amazon.jp/dp/B0FWXBLJNJ",
        au: "https://www.amazon.au/dp/B0FWXBLJNJ",
        se: "https://www.amazon.se/dp/B0FWXBLJNJ",
        pl: "https://www.amazon.pl/dp/B0FWXBLJNJ",
        ca: "https://www.amazon.ca/dp/B0FWXBLJNJ",
        nl: "https://www.amazon.nl/dp/B0FWXBLJNJ",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/cozy-halloween-critters/cover.jpg",
      "assets/img/books/cozy-halloween-critters/1.jpg",
      "assets/img/books/cozy-halloween-critters/2.jpg",
      "assets/img/books/cozy-halloween-critters/3.jpg",
      "assets/img/books/cozy-halloween-critters/4.jpg",
      "assets/img/books/cozy-halloween-critters/5.jpg",
      "assets/img/books/cozy-halloween-critters/6.jpg",
    ],
    sections: [
      "assets/img/books/cozy-halloween-critters/sections/1.jpg",
      "assets/img/books/cozy-halloween-critters/sections/2.jpg",
      "assets/img/books/cozy-halloween-critters/sections/3.jpg",
      "assets/img/books/cozy-halloween-critters/sections/4.jpg",
      "assets/img/books/cozy-halloween-critters/sections/5.jpg",
    ],
    intro: [
      "Step into a cozy world of autumn magic and Halloween charm!",
      "Meet the sweetest little creatures of the season fluffy hedgehogs, playful bunnies, friendly bats, and other adorable forest friends enjoying the spooky fun of fall. Each page is filled with cute and detailed scenes full of pumpkins, candies, autumn leaves, and cozy Halloween spirit. ",
      "This book includes 45 black and white pages to enjoy, featuring imaginative, heartwarming designs perfect for anyone who loves cute Halloween art and cozy fall vibes. ",
      "🎁 Bonus Included! At the end of the book, you’ll find two special color and cut puzzle activity to assemble and glue to the final page a perfect creative challenge for curious minds and crafty hands!",
    ],
    bullets: [
      "45 original black and white illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Perfect for kids and adults who love cozy, cute Halloween creatures.",
      "Encourages creativity, relaxation, and autumn joy.",
    ]
  },

  "the-superdog-multiverse": {
    title: "The SuperDog Multiverse",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH73FDPG", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH73FDPG",
        de: "https://www.amazon.de/dp/B0FH73FDPG",
        it: "https://www.amazon.it/dp/B0FH73FDPG",
        es: "https://www.amazon.es/dp/B0FH73FDPG",
        fr: "https://www.amazon.fr/dp/B0FH73FDPG",
        jp: "https://www.amazon.jp/dp/B0FH73FDPG",
        au: "https://www.amazon.au/dp/B0FH73FDPG",
        se: "https://www.amazon.se/dp/B0FH73FDPG",
        pl: "https://www.amazon.pl/dp/B0FH73FDPG",
        ca: "https://www.amazon.ca/dp/B0FH73FDPG",
        nl: "https://www.amazon.nl/dp/B0FH73FDPG",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FHK4RLXH", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHK4RLXH",
        de: "https://www.amazon.de/dp/B0FHK4RLXH",
        it: "https://www.amazon.it/dp/B0FHK4RLXH",
        es: "https://www.amazon.es/dp/B0FHK4RLXH",
        fr: "https://www.amazon.fr/dp/B0FHK4RLXH",
        jp: "https://www.amazon.jp/dp/B0FHK4RLXH",
        au: "https://www.amazon.au/dp/B0FHK4RLXH",
        se: "https://www.amazon.se/dp/B0FHK4RLXH",
        pl: "https://www.amazon.pl/dp/B0FHK4RLXH",
        ca: "https://www.amazon.ca/dp/B0FHK4RLXH",
        nl: "https://www.amazon.nl/dp/B0FHK4RLXH",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/the-superdog-multiverse/cover.jpg",
      "assets/img/books/the-superdog-multiverse/p01.jpg",
      "assets/img/books/the-superdog-multiverse/p02.jpg",
      "assets/img/books/the-superdog-multiverse/p03.jpg",
      "assets/img/books/the-superdog-multiverse/p04.jpg",
      "assets/img/books/the-superdog-multiverse/p05.jpg",
      "assets/img/books/the-superdog-multiverse/p06.jpg",
    ],
    sections: [
      "assets/img/books/the-superdog-multiverse/sections/1.jpg",
      "assets/img/books/the-superdog-multiverse/sections/2.jpg",
      "assets/img/books/the-superdog-multiverse/sections/3.jpg",
      "assets/img/books/the-superdog-multiverse/sections/4.jpg",
      "assets/img/books/the-superdog-multiverse/sections/5.jpg",
    ],
    intro: [
      "This coloring book features 40 pages of brand new illustrations that capture the gentle, laid back spirit of these lovable giants soaking in hot springs, snuggling with ducklings, napping under lily pads, and enjoying lazy picnics. Every scene is drawn to make you smile and unwind as you color.",
      "Perfect for cozy afternoons, creative breaks, or as a gift for animal lovers, this compact book is full of peaceful vibes and playful moments. Ready to relax and color with your favorite rodent?",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "40 brand new black and white illustrations of superhero dogs.",
      "Format: 8,25 × 8,25 in, portable, and perfect for on the go coloring.",
      "Boosts calm, mindfulness, and artistic inspiration while encouraging heroic creativity.",
      "Great for kids, dog lovers, and superhero fans who want a peaceful moment in their day.",
    ]
  },

  "supercats-battle-for-multiverse": {
    title: "Supercats Battle For Multiverse",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH75G1XK", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH75G1XK",
        de: "https://www.amazon.de/dp/B0FH75G1XK",
        it: "https://www.amazon.it/dp/B0FH75G1XK",
        es: "https://www.amazon.es/dp/B0FH75G1XK",
        fr: "https://www.amazon.fr/dp/B0FH75G1XK",
        jp: "https://www.amazon.jp/dp/B0FH75G1XK",
        au: "https://www.amazon.au/dp/B0FH75G1XK",
        se: "https://www.amazon.se/dp/B0FH75G1XK",
        pl: "https://www.amazon.pl/dp/B0FH75G1XK",
        ca: "https://www.amazon.ca/dp/B0FH75G1XK",
        nl: "https://www.amazon.nl/dp/B0FH75G1XK",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FHKBTCB7", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHKBTCB7",
        de: "https://www.amazon.de/dp/B0FHKBTCB7",
        it: "https://www.amazon.it/dp/B0FHKBTCB7",
        es: "https://www.amazon.es/dp/B0FHKBTCB7",
        fr: "https://www.amazon.fr/dp/B0FHKBTCB7",
        jp: "https://www.amazon.jp/dp/B0FHKBTCB7",
        au: "https://www.amazon.au/dp/B0FHKBTCB7",
        se: "https://www.amazon.se/dp/B0FHKBTCB7",
        pl: "https://www.amazon.pl/dp/B0FHKBTCB7",
        ca: "https://www.amazon.ca/dp/B0FHKBTCB7",
        nl: "https://www.amazon.nl/dp/B0FHKBTCB7",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/supercats-battle-for-multiverse/cover.jpg",
      "assets/img/books/supercats-battle-for-multiverse/p01.jpg",
      "assets/img/books/supercats-battle-for-multiverse/p02.jpg",
      "assets/img/books/supercats-battle-for-multiverse/p03.jpg",
      "assets/img/books/supercats-battle-for-multiverse/p04.jpg",
      "assets/img/books/supercats-battle-for-multiverse/p05.jpg",
      "assets/img/books/supercats-battle-for-multiverse/p06.jpg",
    ],
    sections: [
      "assets/img/books/supercats-battle-for-multiverse/sections/1.jpg",
      "assets/img/books/supercats-battle-for-multiverse/sections/2.jpg",
      "assets/img/books/supercats-battle-for-multiverse/sections/3.jpg",
      "assets/img/books/supercats-battle-for-multiverse/sections/4.jpg",
      "assets/img/books/supercats-battle-for-multiverse/sections/5.jpg",
    ],
    intro: [
      "Get ready for an epic showdown like no other where the heroes and villains have fur, claws, and unstoppable powers! In SuperCats: Battle for the Multiverse, 40 action packed illustrations bring to life an incredible cast of feline champions and mischievous masterminds. From rooftop standoffs to dimensión hopping adventures, every page is filled with dynamic poses, bold costumes, and a whole lot of cattitude.",
      "Perfect for kids, comic fans, and cat lovers alike, this book invites you to color your way through a multiverse of pawsome action. Who will save the universe… and who will try to destroy it? That’s up to your imagination!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "40 unique black and white illustrations of heroic and villainous cats.",
      "Format: 8.25 x 8.25 in.",
      " Encourages creativity, storytelling, and screen free fun.",
      "Great for kids, comic lovers, and anyone who dreams in cats and capes.",
    ]
  },

  "cuddle-animals": {
    title: "Cuddle Animals",
    price: 8.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FFG2VQRS", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FFG2VQRS",
        de: "https://www.amazon.de/dp/B0FFG2VQRS",
        it: "https://www.amazon.it/dp/B0FFG2VQRS",
        es: "https://www.amazon.es/dp/B0FFG2VQRS",
        fr: "https://www.amazon.fr/dp/B0FFG2VQRS",
        jp: "https://www.amazon.jp/dp/B0FFG2VQRS",
        au: "https://www.amazon.au/dp/B0FFG2VQRS",
        se: "https://www.amazon.se/dp/B0FFG2VQRS",
        pl: "https://www.amazon.pl/dp/B0FFG2VQRS",
        ca: "https://www.amazon.ca/dp/B0FFG2VQRS",
        nl: "https://www.amazon.nl/dp/B0FFG2VQRS",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJ6VQ46Z", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJ6VQ46Z",
        de: "https://www.amazon.de/dp/B0FJ6VQ46Z",
        it: "https://www.amazon.it/dp/B0FJ6VQ46Z",
        es: "https://www.amazon.es/dp/B0FJ6VQ46Z",
        fr: "https://www.amazon.fr/dp/B0FJ6VQ46Z",
        jp: "https://www.amazon.jp/dp/B0FJ6VQ46Z",
        au: "https://www.amazon.au/dp/B0FJ6VQ46Z",
        se: "https://www.amazon.se/dp/B0FJ6VQ46Z",
        pl: "https://www.amazon.pl/dp/B0FJ6VQ46Z",
        ca: "https://www.amazon.ca/dp/B0FJ6VQ46Z",
        nl: "https://www.amazon.nl/dp/B0FJ6VQ46Z",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/cuddle-animals/cover.jpg",
      "assets/img/books/cuddle-animals/p01.jpg",
      "assets/img/books/cuddle-animals/p02.jpg",
      "assets/img/books/cuddle-animals/p03.jpg",
      "assets/img/books/cuddle-animals/p04.jpg",
      "assets/img/books/cuddle-animals/p05.jpg",
      "assets/img/books/cuddle-animals/p06.jpg",
    ],
    sections: [
      "assets/img/books/cuddle-animals/sections/1.jpg",
      "assets/img/books/cuddle-animals/sections/2.jpg",
      "assets/img/books/cuddle-animals/sections/3.jpg",
      "assets/img/books/cuddle-animals/sections/4.jpg",
      "assets/img/books/cuddle-animals/sections/5.jpg",
    ],
    intro: [
      "Need a warm hug and a little creativity? This charming coloring book is packed with 42 pages of the most lovable and cuddly animals you’ve ever seen! From smiling bears with honey pots to sleepy hedgehogs curled into cozy balls, each illustration invites you to relax, smile, and bring these sweet little creatures to life.",
      "Perfect for young artists, animal lovers, or anyone who needs a soft and joyful break from the day. Get your favorite crayons or markers ready it's cuddle time!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "42 unique black and white illustrations featuring cuddly and cute animals.",
      "Format: 6 x 6 inches perfect for travel coloring.",
      "Promotes creativity, calm, and happy vibes for all ages.",
      "Ideal for kids, animal lovers, and fans of all things cute.",
    ]
  },

  "cuddle-animalsII": {
    title: "Cuddle Animals II",
    price: 8.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH7845ZF", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH7845ZF",
        de: "https://www.amazon.de/dp/B0FH7845ZF",
        it: "https://www.amazon.it/dp/B0FH7845ZF",
        es: "https://www.amazon.es/dp/B0FH7845ZF",
        fr: "https://www.amazon.fr/dp/B0FH7845ZF",
        jp: "https://www.amazon.jp/dp/B0FH7845ZF",
        au: "https://www.amazon.au/dp/B0FH7845ZF",
        se: "https://www.amazon.se/dp/B0FH7845ZF",
        pl: "https://www.amazon.pl/dp/B0FH7845ZF",
        ca: "https://www.amazon.ca/dp/B0FH7845ZF",
        nl: "https://www.amazon.nl/dp/B0FH7845ZF",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJ6X2TYX", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJ6X2TYX",
        de: "https://www.amazon.de/dp/B0FJ6X2TYX",
        it: "https://www.amazon.it/dp/B0FJ6X2TYX",
        es: "https://www.amazon.es/dp/B0FJ6X2TYX",
        fr: "https://www.amazon.fr/dp/B0FJ6X2TYX",
        jp: "https://www.amazon.jp/dp/B0FJ6X2TYX",
        au: "https://www.amazon.au/dp/B0FJ6X2TYX",
        se: "https://www.amazon.se/dp/B0FJ6X2TYX",
        pl: "https://www.amazon.pl/dp/B0FJ6X2TYX",
        ca: "https://www.amazon.ca/dp/B0FJ6X2TYX",
        nl: "https://www.amazon.nl/dp/B0FJ6X2TYX",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/cuddle-animalsII/cover.jpg",
      "assets/img/books/cuddle-animalsII/p01.jpg",
      "assets/img/books/cuddle-animalsII/p02.jpg",
      "assets/img/books/cuddle-animalsII/p03.jpg",
      "assets/img/books/cuddle-animalsII/p04.jpg",
      "assets/img/books/cuddle-animalsII/p05.jpg",
      "assets/img/books/cuddle-animalsII/p06.jpg",
    ],
    sections: [
      "assets/img/books/cuddle-animalsII/sections/1.jpg",
      "assets/img/books/cuddle-animalsII/sections/2.jpg",
      "assets/img/books/cuddle-animalsII/sections/3.jpg",
      "assets/img/books/cuddle-animalsII/sections/4.jpg",
      "assets/img/books/cuddle-animalsII/sections/5.jpg",
    ],
    intro: [
      "They’re back and cuter than ever! Cuddle Animals II brings you 40 all new illustrations of the most huggable animals you've ever seen. From smiling cubs to playful forest friends, each page is bursting with charm and ready for little hands to bring them to life with color.",
      "Designed in a sweet and simple style, this book is perfect for young artists who love animals, cuddles, and cozy fun. Whether at home or on the go, its compact 6 x 6 in. Size makes it ideal for coloring anywhere!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "40 unique black and white illustrations of cute, cuddly animals.",
      "Format: 6 x 6 in.",
      "Encourages creativity, calm, and screen-free play.",
      "Ideal for toddlers, preschoolers, and young animal lovers.",
    ]
  },

  "dogs-vs-cats-board-games": {
    title: "Dogs Vs Cats Board Games",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FCXVBPGV", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FCXVBPGV",
        de: "https://www.amazon.de/dp/B0FCXVBPGV",
        it: "https://www.amazon.it/dp/B0FCXVBPGV",
        es: "https://www.amazon.es/dp/B0FCXVBPGV",
        fr: "https://www.amazon.fr/dp/B0FCXVBPGV",
        jp: "https://www.amazon.jp/dp/B0FCXVBPGV",
        au: "https://www.amazon.au/dp/B0FCXVBPGV",
        se: "https://www.amazon.se/dp/B0FCXVBPGV",
        pl: "https://www.amazon.pl/dp/B0FCXVBPGV",
        ca: "https://www.amazon.ca/dp/B0FCXVBPGV",
        nl: "https://www.amazon.nl/dp/B0FCXVBPGV",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FHWFJPMF", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHWFJPMF",
        de: "https://www.amazon.de/dp/B0FHWFJPMF",
        it: "https://www.amazon.it/dp/B0FHWFJPMF",
        es: "https://www.amazon.es/dp/B0FHWFJPMF",
        fr: "https://www.amazon.fr/dp/B0FHWFJPMF",
        jp: "https://www.amazon.jp/dp/B0FHWFJPMF",
        au: "https://www.amazon.au/dp/B0FHWFJPMF",
        se: "https://www.amazon.se/dp/B0FHWFJPMF",
        pl: "https://www.amazon.pl/dp/B0FHWFJPMF",
        ca: "https://www.amazon.ca/dp/B0FHWFJPMF",
        nl: "https://www.amazon.nl/dp/B0FHWFJPMF",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/dogs-vs-cats-board-games/cover.jpg",
      "assets/img/books/dogs-vs-cats-board-games/p01.jpg",
      "assets/img/books/dogs-vs-cats-board-games/p02.jpg",
      "assets/img/books/dogs-vs-cats-board-games/p03.jpg",
      "assets/img/books/dogs-vs-cats-board-games/p04.jpg",
      "assets/img/books/dogs-vs-cats-board-games/p05.jpg",
      "assets/img/books/dogs-vs-cats-board-games/p06.jpg",
    ],
    sections: [
      "assets/img/books/dogs-vs-cats-board-games/sections/1.jpg",
      "assets/img/books/dogs-vs-cats-board-games/sections/2.jpg",
      "assets/img/books/dogs-vs-cats-board-games/sections/3.jpg",
      "assets/img/books/dogs-vs-cats-board-games/sections/4.jpg",
      "assets/img/books/dogs-vs-cats-board-games/sections/5.jpg",
    ],
    intro: [
      "Welcome to the ultimate showdown between dogs and cats… over board games! 🎲 In this hilarious and imaginative coloring book, you'll discover 50 fun filled illustrations where adorable dogs and mischievous cats compete in classic tabletop games. From chess to tic tac toe, checkers to card games, each page is a new battle of brains and cuteness.",
      "Perfect for kids, tweens, and anyone who loves pets, humor, and games, this book is packed with creative scenes that celebrate the playful rivalry between our favorite furry friends. Will the clever cats outsmart the loyal dogs? Or will teamwork win the day?",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "50 original dog vs cat board game illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Great for birthdays, road trips, or rainy day fun.",
      "Ideal for pet lovers, game fans, and creative kids.",
    ]
  },

  "dogs-around-the-world": {
    title: "Dogs Around The World",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FCSCYWFM", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FCSCYWFM",
        de: "https://www.amazon.de/dp/B0FCSCYWFM",
        it: "https://www.amazon.it/dp/B0FCSCYWFM",
        es: "https://www.amazon.es/dp/B0FCSCYWFM",
        fr: "https://www.amazon.fr/dp/B0FCSCYWFM",
        jp: "https://www.amazon.jp/dp/B0FCSCYWFM",
        au: "https://www.amazon.au/dp/B0FCSCYWFM",
        se: "https://www.amazon.se/dp/B0FCSCYWFM",
        pl: "https://www.amazon.pl/dp/B0FCSCYWFM",
        ca: "https://www.amazon.ca/dp/B0FCSCYWFM",
        nl: "https://www.amazon.nl/dp/B0FCSCYWFM",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FHWHSYPH", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHWHSYPH",
        de: "https://www.amazon.de/dp/B0FHWHSYPH",
        it: "https://www.amazon.it/dp/B0FHWHSYPH",
        es: "https://www.amazon.es/dp/B0FHWHSYPH",
        fr: "https://www.amazon.fr/dp/B0FHWHSYPH",
        jp: "https://www.amazon.jp/dp/B0FHWHSYPH",
        au: "https://www.amazon.au/dp/B0FHWHSYPH",
        se: "https://www.amazon.se/dp/B0FHWHSYPH",
        pl: "https://www.amazon.pl/dp/B0FHWHSYPH",
        ca: "https://www.amazon.ca/dp/B0FHWHSYPH",
        nl: "https://www.amazon.nl/dp/B0FHWHSYPH",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/dogs-around-the-world/cover.jpg",
      "assets/img/books/dogs-around-the-world/p01.jpg",
      "assets/img/books/dogs-around-the-world/p02.jpg",
      "assets/img/books/dogs-around-the-world/p03.jpg",
      "assets/img/books/dogs-around-the-world/p04.jpg",
      "assets/img/books/dogs-around-the-world/p05.jpg",
      "assets/img/books/dogs-around-the-world/p06.jpg",
    ],
    sections: [
      "assets/img/books/dogs-around-the-world/sections/1.jpg",
      "assets/img/books/dogs-around-the-world/sections/2.jpg",
      "assets/img/books/dogs-around-the-world/sections/3.jpg",
      "assets/img/books/dogs-around-the-world/sections/4.jpg",
      "assets/img/books/dogs-around-the-world/sections/5.jpg",
    ],
    intro: [
      "Get ready for this unique dog coloring book combines adorable pups with the rich culture of over 40 countries, each page features a dog breed representing a nation, along with its flag and a famous monument.",
      "From the Eiffel Tower in France to the Great Wall of China, children will explore geography and culture through playful illustrations that celebrate diversity, travel, and the joy of man's best friend. A perfect mix of fun and learning, this book is designed for curious kids, young travelers, and animal lovers alike!",
      "🎁 Bonus Included! Includes 4 special pages with cut and color world-themed extras like globes, Passports and country flags to create your own global scenes!",
    ],
    bullets: [
      "40+ countries represented with dogs, flags, and monuments.",
      "Format: 8.25 x 8.25 in.",
      "4 extra activity pages to cut, color, and paste.",
      "Educational and fun, ideal for classrooms, travel time or home.",
      "Great gift for kids who love dogs, geography, and creativity.",
    ]
  },

  "fun-in-the-forest": {
    title: "Fun In The Forest",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FDQ72F84", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FDQ72F84",
        de: "https://www.amazon.de/dp/B0FDQ72F84",
        it: "https://www.amazon.it/dp/B0FDQ72F84",
        es: "https://www.amazon.es/dp/B0FDQ72F84",
        fr: "https://www.amazon.fr/dp/B0FDQ72F84",
        jp: "https://www.amazon.jp/dp/B0FDQ72F84",
        au: "https://www.amazon.au/dp/B0FDQ72F84",
        se: "https://www.amazon.se/dp/B0FDQ72F84",
        pl: "https://www.amazon.pl/dp/B0FDQ72F84",
        ca: "https://www.amazon.ca/dp/B0FDQ72F84",
        nl: "https://www.amazon.nl/dp/B0FDQ72F84",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FGTV658K", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FGTV658K",
        de: "https://www.amazon.de/dp/B0FGTV658K",
        it: "https://www.amazon.it/dp/B0FGTV658K",
        es: "https://www.amazon.es/dp/B0FGTV658K",
        fr: "https://www.amazon.fr/dp/B0FGTV658K",
        jp: "https://www.amazon.jp/dp/B0FGTV658K",
        au: "https://www.amazon.au/dp/B0FGTV658K",
        se: "https://www.amazon.se/dp/B0FGTV658K",
        pl: "https://www.amazon.pl/dp/B0FGTV658K",
        ca: "https://www.amazon.ca/dp/B0FGTV658K",
        nl: "https://www.amazon.nl/dp/B0FGTV658K",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/fun-in-the-forest/cover.jpg",
      "assets/img/books/fun-in-the-forest/p01.jpg",
      "assets/img/books/fun-in-the-forest/p02.jpg",
      "assets/img/books/fun-in-the-forest/p03.jpg",
      "assets/img/books/fun-in-the-forest/p04.jpg",
      "assets/img/books/fun-in-the-forest/p05.jpg",
      "assets/img/books/fun-in-the-forest/p06.jpg",
    ],
    sections: [
      "assets/img/books/fun-in-the-forest/sections/1.jpg",
      "assets/img/books/fun-in-the-forest/sections/2.jpg",
      "assets/img/books/fun-in-the-forest/sections/3.jpg",
      "assets/img/books/fun-in-the-forest/sections/4.jpg",
      "assets/img/books/fun-in-the-forest/sections/5.jpg",
    ],
    intro: [
      "Discover a magical woodland full of laughter, friendship, and adorable animals having the time of their lives! This heartwarming coloring adventure features 35 delightful illustrations of forest creatures playing, exploring, and enjoying life together.",
      "From giggling foxes and dancing squirrels to cheerful owls and curious raccoons, each page is a celebration of the fun and wonder that lives in the forest. Perfect for kids who love animals, nature, and bringing cute characters to life with their favorite colors!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "35 black and white illustrations of cute forest animals.",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity, joy, and a love for nature.",
      " Great for all ages, animal lovers, and little adventurers.",
    
    ]
  },

   "space-explorers": {
    title: "Space Explorers",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FF4TF73T", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FF4TF73T",
        de: "https://www.amazon.de/dp/B0FF4TF73T",
        it: "https://www.amazon.it/dp/B0FF4TF73T",
        es: "https://www.amazon.es/dp/B0FF4TF73T",
        fr: "https://www.amazon.fr/dp/B0FF4TF73T",
        jp: "https://www.amazon.jp/dp/B0FF4TF73T",
        au: "https://www.amazon.au/dp/B0FF4TF73T",
        se: "https://www.amazon.se/dp/B0FF4TF73T",
        pl: "https://www.amazon.pl/dp/B0FF4TF73T",
        ca: "https://www.amazon.ca/dp/B0FF4TF73T",
        nl: "https://www.amazon.nl/dp/B0FF4TF73T",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FHWKQCC4", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHWKQCC4",
        de: "https://www.amazon.de/dp/B0FHWKQCC4",
        it: "https://www.amazon.it/dp/B0FHWKQCC4",
        es: "https://www.amazon.es/dp/B0FHWKQCC4",
        fr: "https://www.amazon.fr/dp/B0FHWKQCC4",
        jp: "https://www.amazon.jp/dp/B0FHWKQCC4",
        au: "https://www.amazon.au/dp/B0FHWKQCC4",
        se: "https://www.amazon.se/dp/B0FHWKQCC4",
        pl: "https://www.amazon.pl/dp/B0FHWKQCC4",
        ca: "https://www.amazon.ca/dp/B0FHWKQCC4",
        nl: "https://www.amazon.nl/dp/B0FHWKQCC4",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/space-explorers/cover.jpg",
      "assets/img/books/space-explorers/p01.jpg",
      "assets/img/books/space-explorers/p02.jpg",
      "assets/img/books/space-explorers/p03.jpg",
      "assets/img/books/space-explorers/p04.jpg",
      "assets/img/books/space-explorers/p05.jpg",
      "assets/img/books/space-explorers/p06.jpg",
    ],
    sections: [
      "assets/img/books/space-explorers/sections/1.jpg",
      "assets/img/books/space-explorers/sections/2.jpg",
      "assets/img/books/space-explorers/sections/3.jpg",
      "assets/img/books/space-explorers/sections/4.jpg",
      "assets/img/books/space-explorers/sections/5.jpg",
    ],
    intro: [
      "Get ready to zoom across the stars and meet the most lovable extraterrestrials in the universe! This whimsical coloring book features 30 delightful illustrations of cute aliens in hilarious and heartwarming space adventures.",
      "Every page invites you into a charming galaxy full of wonder, fun, and friendship.These friendly creatures are here to brighten your day and launch your creativity into orbit!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "30 unique and imaginative black-and-white illustrations of adorable alien escapades.",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity, storytelling, and cosmic giggles.",
      " Great for all ages, space lovers, and anyone who enjoys cute, quirky characters.",
    
    ]
  },

  "busy-birds": {
    title: "Busy Birds",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FDQ5KFPC", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FDQ5KFPC",
        de: "https://www.amazon.de/dp/B0FDQ5KFPC",
        it: "https://www.amazon.it/dp/B0FDQ5KFPC",
        es: "https://www.amazon.es/dp/B0FDQ5KFPC",
        fr: "https://www.amazon.fr/dp/B0FDQ5KFPC",
        jp: "https://www.amazon.jp/dp/B0FDQ5KFPC",
        au: "https://www.amazon.au/dp/B0FDQ5KFPC",
        se: "https://www.amazon.se/dp/B0FDQ5KFPC",
        pl: "https://www.amazon.pl/dp/B0FDQ5KFPC",
        ca: "https://www.amazon.ca/dp/B0FDQ5KFPC",
        nl: "https://www.amazon.nl/dp/B0FDQ5KFPC",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FHWMKFXM", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHWMKFXM",
        de: "https://www.amazon.de/dp/B0FHWMKFXM",
        it: "https://www.amazon.it/dp/B0FHWMKFXM",
        es: "https://www.amazon.es/dp/B0FHWMKFXM",
        fr: "https://www.amazon.fr/dp/B0FHWMKFXM",
        jp: "https://www.amazon.jp/dp/B0FHWMKFXM",
        au: "https://www.amazon.au/dp/B0FHWMKFXM",
        se: "https://www.amazon.se/dp/B0FHWMKFXM",
        pl: "https://www.amazon.pl/dp/B0FHWMKFXM",
        ca: "https://www.amazon.ca/dp/B0FHWMKFXM",
        nl: "https://www.amazon.nl/dp/B0FHWMKFXM",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/busy-birds/cover.jpg",
      "assets/img/books/busy-birds/p01.jpg",
      "assets/img/books/busy-birds/p02.jpg",
      "assets/img/books/busy-birds/p03.jpg",
      "assets/img/books/busy-birds/p04.jpg",
      "assets/img/books/busy-birds/p05.jpg",
      "assets/img/books/busy-birds/p06.jpg",
    ],
    sections: [
      "assets/img/books/busy-birds/sections/1.jpg",
      "assets/img/books/busy-birds/sections/2.jpg",
      "assets/img/books/busy-birds/sections/3.jpg",
      "assets/img/books/busy-birds/sections/4.jpg",
      "assets/img/books/busy-birds/sections/5.jpg",
    ],
    intro: [
      "This vibrant coloring adventure features 35 delightful illustrations of all kinds of adorable birds staying busy in the cutest ways imaginable!.",
      "These friendly feathered friends are always up to something fun and now it's your turn to bring them to life with color! Perfect for kids who love animals, laughter, and creative adventures.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "35 black and white illustrations of cute and busy birds.",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity, humor, and love for nature and animals.",
      " Great for all ages, bird lovers, and curious imaginations.",
    
    ]
  },

  "arctic-adventures": {
    title: "Arctic Adventures",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FFFZFDXF", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FFFZFDXF",
        de: "https://www.amazon.de/dp/B0FFFZFDXF",
        it: "https://www.amazon.it/dp/B0FFFZFDXF",
        es: "https://www.amazon.es/dp/B0FFFZFDXF",
        fr: "https://www.amazon.fr/dp/B0FFFZFDXF",
        jp: "https://www.amazon.jp/dp/B0FFFZFDXF",
        au: "https://www.amazon.au/dp/B0FFFZFDXF",
        se: "https://www.amazon.se/dp/B0FFFZFDXF",
        pl: "https://www.amazon.pl/dp/B0FFFZFDXF",
        ca: "https://www.amazon.ca/dp/B0FFFZFDXF",
        nl: "https://www.amazon.nl/dp/B0FFFZFDXF",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FHWJ53F7", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHWJ53F7",
        de: "https://www.amazon.de/dp/B0FHWJ53F7",
        it: "https://www.amazon.it/dp/B0FHWJ53F7",
        es: "https://www.amazon.es/dp/B0FHWJ53F7",
        fr: "https://www.amazon.fr/dp/B0FHWJ53F7",
        jp: "https://www.amazon.jp/dp/B0FHWJ53F7",
        au: "https://www.amazon.au/dp/B0FHWJ53F7",
        se: "https://www.amazon.se/dp/B0FHWJ53F7",
        pl: "https://www.amazon.pl/dp/B0FHWJ53F7",
        ca: "https://www.amazon.ca/dp/B0FHWJ53F7",
        nl: "https://www.amazon.nl/dp/B0FHWJ53F7",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/arctic-adventures/cover.jpg",
      "assets/img/books/arctic-adventures/p01.jpg",
      "assets/img/books/arctic-adventures/p02.jpg",
      "assets/img/books/arctic-adventures/p03.jpg",
      "assets/img/books/arctic-adventures/p04.jpg",
      "assets/img/books/arctic-adventures/p05.jpg",
      "assets/img/books/arctic-adventures/p06.jpg",
    ],
    sections: [
      "assets/img/books/arctic-adventures/sections/1.jpg",
      "assets/img/books/arctic-adventures/sections/2.jpg",
      "assets/img/books/arctic-adventures/sections/3.jpg",
      "assets/img/books/arctic-adventures/sections/4.jpg",
      "assets/img/books/arctic-adventures/sections/5.jpg",
    ],
    intro: [
      "A Cozy Arctic World Full of Friendship and Fun to Color! Get ready for a magical trip to the frosty north! This heartwarming coloring book features 40 charming black and white illustrations of adorable arctic animals enjoying fun and friendly adventures. From seals playing chess on ice to penguins reading under twinkling stars, every page is a gentle invitation to creativity and imagination.",
      "Perfect for kids, families, and anyone who loves cute animals and cozy winter scenes, this book brings the magic of the Arctic right to your coloring table!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "40 unique illustrations featuring cute and friendly Arctic animals.",
      "Format: 8.25 x 8.25 in.",
      "Great for cozy afternoons, gifting, or peaceful bedtime activities.",
      "Designed to inspire creativity, calm, and smiles for all ages.",
    
    ]
  },

  "ant-adventures": {
    title: "Ant Adventures",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FHKNBKFP", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHKNBKFP",
        de: "https://www.amazon.de/dp/B0FHKNBKFP",
        it: "https://www.amazon.it/dp/B0FHKNBKFP",
        es: "https://www.amazon.es/dp/B0FHKNBKFP",
        fr: "https://www.amazon.fr/dp/B0FHKNBKFP",
        jp: "https://www.amazon.jp/dp/B0FHKNBKFP",
        au: "https://www.amazon.au/dp/B0FHKNBKFP",
        se: "https://www.amazon.se/dp/B0FHKNBKFP",
        pl: "https://www.amazon.pl/dp/B0FHKNBKFP",
        ca: "https://www.amazon.ca/dp/B0FHKNBKFP",
        nl: "https://www.amazon.nl/dp/B0FHKNBKFP",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJXFZYD6", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJXFZYD6",
        de: "https://www.amazon.de/dp/B0FJXFZYD6",
        it: "https://www.amazon.it/dp/B0FJXFZYD6",
        es: "https://www.amazon.es/dp/B0FJXFZYD6",
        fr: "https://www.amazon.fr/dp/B0FJXFZYD6",
        jp: "https://www.amazon.jp/dp/B0FJXFZYD6",
        au: "https://www.amazon.au/dp/B0FJXFZYD6",
        se: "https://www.amazon.se/dp/B0FJXFZYD6",
        pl: "https://www.amazon.pl/dp/B0FJXFZYD6",
        ca: "https://www.amazon.ca/dp/B0FJXFZYD6",
        nl: "https://www.amazon.nl/dp/B0FJXFZYD6",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/ant-adventures/cover.jpg",
      "assets/img/books/ant-adventures/p01.jpg",
      "assets/img/books/ant-adventures/p02.jpg",
      "assets/img/books/ant-adventures/p03.jpg",
      "assets/img/books/ant-adventures/p04.jpg",
      "assets/img/books/ant-adventures/p05.jpg",
      "assets/img/books/ant-adventures/p06.jpg",
    ],
    sections: [
      "assets/img/books/ant-adventures/sections/1.jpg",
      "assets/img/books/ant-adventures/sections/2.jpg",
      "assets/img/books/ant-adventures/sections/3.jpg",
      "assets/img/books/ant-adventures/sections/4.jpg",
      "assets/img/books/ant-adventures/sections/5.jpg",
    ],
    intro: [
      "Join a team of adventurous ants as they explore their bustling colony, navigate towering grass forests, and face exciting challenges along the way.",
      "From building intricate tunnels to outsmarting curious critters, and discovering hidden treasures, these friendly ants turn everyday life into a big adventure! This charming coloring book features 30 original illustrations full of fun, friendship, and the wonder of nature’s smallest heroes.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "30 original black and white illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity, teamwork, and a love for the natural world.",
      "Designed to inspire creativity, calm, and smiles for all ages.",
    
    ]
  },

  "under-the-sea": {
    title: "Under The Sea",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FDPYVHB6", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FDPYVHB6",
        de: "https://www.amazon.de/dp/B0FDPYVHB6",
        it: "https://www.amazon.it/dp/B0FDPYVHB6",
        es: "https://www.amazon.es/dp/B0FDPYVHB6",
        fr: "https://www.amazon.fr/dp/B0FDPYVHB6",
        jp: "https://www.amazon.jp/dp/B0FDPYVHB6",
        au: "https://www.amazon.au/dp/B0FDPYVHB6",
        se: "https://www.amazon.se/dp/B0FDPYVHB6",
        pl: "https://www.amazon.pl/dp/B0FDPYVHB6",
        ca: "https://www.amazon.ca/dp/B0FDPYVHB6",
        nl: "https://www.amazon.nl/dp/B0FDPYVHB6",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FGTTBF24", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FGTTBF24",
        de: "https://www.amazon.de/dp/B0FGTTBF24",
        it: "https://www.amazon.it/dp/B0FGTTBF24",
        es: "https://www.amazon.es/dp/B0FGTTBF24",
        fr: "https://www.amazon.fr/dp/B0FGTTBF24",
        jp: "https://www.amazon.jp/dp/B0FGTTBF24",
        au: "https://www.amazon.au/dp/B0FGTTBF24",
        se: "https://www.amazon.se/dp/B0FGTTBF24",
        pl: "https://www.amazon.pl/dp/B0FGTTBF24",
        ca: "https://www.amazon.ca/dp/B0FGTTBF24",
        nl: "https://www.amazon.nl/dp/B0FGTTBF24",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/under-the-sea/cover.jpg",
      "assets/img/books/under-the-sea/p01.jpg",
      "assets/img/books/under-the-sea/p02.jpg",
      "assets/img/books/under-the-sea/p03.jpg",
      "assets/img/books/under-the-sea/p04.jpg",
      "assets/img/books/under-the-sea/p05.jpg",
      "assets/img/books/under-the-sea/p06.jpg",
    ],
    sections: [
      "assets/img/books/under-the-sea/sections/1.jpg",
      "assets/img/books/under-the-sea/sections/2.jpg",
      "assets/img/books/under-the-sea/sections/3.jpg",
      "assets/img/books/under-the-sea/sections/4.jpg",
      "assets/img/books/under-the-sea/sections/5.jpg",
    ],
    intro: [
      "Dive into the heartwarming world of Friendly Creatures: Under The Sea Coloring Book! This delightful coloring journey brings the ocean to life with 40 charming illustrations of cute underwater animals ready to be brought to color by young artists.",
      "From smiling sea turtles and playful dolphins to curious octopuses and gentle jellyfish, each page invites kids to explore the wonders of the ocean through adorable and imaginative scenes. Perfect for animal lovers and creative minds who dream of a magical life beneath the waves!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "40 black and white illustrations of adorable sea creatures.",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity, relaxation, and a love for marine life.",
      "Designed to inspire creativity, calm, and smiles for all ages.",
    
    ]
  },

  "explore-the-ocean": {
    title: "Explore The Ocean",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FNQM6J66", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FNQM6J66",
        de: "https://www.amazon.de/dp/B0FNQM6J66",
        it: "https://www.amazon.it/dp/B0FNQM6J66",
        es: "https://www.amazon.es/dp/B0FNQM6J66",
        fr: "https://www.amazon.fr/dp/B0FNQM6J66",
        jp: "https://www.amazon.jp/dp/B0FNQM6J66",
        au: "https://www.amazon.au/dp/B0FNQM6J66",
        se: "https://www.amazon.se/dp/B0FNQM6J66",
        pl: "https://www.amazon.pl/dp/B0FNQM6J66",
        ca: "https://www.amazon.ca/dp/B0FNQM6J66",
        nl: "https://www.amazon.nl/dp/B0FNQM6J66",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FFLVCBN6", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FFLVCBN6",
        de: "https://www.amazon.de/dp/B0FFLVCBN6",
        it: "https://www.amazon.it/dp/B0FFLVCBN6",
        es: "https://www.amazon.es/dp/B0FFLVCBN6",
        fr: "https://www.amazon.fr/dp/B0FFLVCBN6",
        jp: "https://www.amazon.jp/dp/B0FFLVCBN6",
        au: "https://www.amazon.au/dp/B0FFLVCBN6",
        se: "https://www.amazon.se/dp/B0FFLVCBN6",
        pl: "https://www.amazon.pl/dp/B0FFLVCBN6",
        ca: "https://www.amazon.ca/dp/B0FFLVCBN6",
        nl: "https://www.amazon.nl/dp/B0FFLVCBN6",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/explore-the-ocean/cover.jpg",
      "assets/img/books/explore-the-ocean/1.jpg",
      "assets/img/books/explore-the-ocean/2.jpg",
      "assets/img/books/explore-the-ocean/3.jpg",
      "assets/img/books/explore-the-ocean/4.jpg",
      "assets/img/books/explore-the-ocean/5.jpg",
      "assets/img/books/explore-the-ocean/6.jpg",
    ],
    sections: [
      "assets/img/books/explore-the-ocean/sections/1.jpg",
      "assets/img/books/explore-the-ocean/sections/2.jpg",
      "assets/img/books/explore-the-ocean/sections/3.jpg",
      "assets/img/books/explore-the-ocean/sections/4.jpg",
      "assets/img/books/explore-the-ocean/sections/5.jpg",
    ],
    intro: [
      "Let your imagination set sail with this adorable and inspiring coloring book featuring 40 joyful illustrations. From the peaceful seafloor to playful dolphins, and from hidden treasure chests to mermaids under the sea, this book is perfect for children and ocean lovers of all ages.",
     
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "40 original, easy to color black and white illustrations.",
      "Format: 8.25 x 8.25 in.",
      "Cheerful, clean line art ideal for crayons, pencils, or markers.",
      "Ideal for young kids, ocean fans, and adults who love cute and calming art",
    
    ]
  },

  "bug-town": {
    title: "Bug Town",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FF2BFJRG", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FF2BFJRG",
        de: "https://www.amazon.de/dp/B0FF2BFJRG",
        it: "https://www.amazon.it/dp/B0FF2BFJRG",
        es: "https://www.amazon.es/dp/B0FF2BFJRG",
        fr: "https://www.amazon.fr/dp/B0FF2BFJRG",
        jp: "https://www.amazon.jp/dp/B0FF2BFJRG",
        au: "https://www.amazon.au/dp/B0FF2BFJRG",
        se: "https://www.amazon.se/dp/B0FF2BFJRG",
        pl: "https://www.amazon.pl/dp/B0FF2BFJRG",
        ca: "https://www.amazon.ca/dp/B0FF2BFJRG",
        nl: "https://www.amazon.nl/dp/B0FF2BFJRG",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FK21QM2R", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FK21QM2R",
        de: "https://www.amazon.de/dp/B0FK21QM2R",
        it: "https://www.amazon.it/dp/B0FK21QM2R",
        es: "https://www.amazon.es/dp/B0FK21QM2R",
        fr: "https://www.amazon.fr/dp/B0FK21QM2R",
        jp: "https://www.amazon.jp/dp/B0FK21QM2R",
        au: "https://www.amazon.au/dp/B0FK21QM2R",
        se: "https://www.amazon.se/dp/B0FK21QM2R",
        pl: "https://www.amazon.pl/dp/B0FK21QM2R",
        ca: "https://www.amazon.ca/dp/B0FK21QM2R",
        nl: "https://www.amazon.nl/dp/B0FK21QM2R",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/bug-town/cover.jpg",
      "assets/img/books/bug-town/p01.jpg",
      "assets/img/books/bug-town/p02.jpg",
      "assets/img/books/bug-town/p03.jpg",
      "assets/img/books/bug-town/p04.jpg",
      "assets/img/books/bug-town/p05.jpg",
      "assets/img/books/bug-town/p06.jpg",
    ],
    sections: [
      "assets/img/books/bug-town/sections/1.jpg",
      "assets/img/books/bug-town/sections/2.jpg",
      "assets/img/books/bug-town/sections/3.jpg",
      "assets/img/books/bug-town/sections/4.jpg",
      "assets/img/books/bug-town/sections/5.jpg",
    ],
    intro: [
      "Get ready to crawl, flap, and scurry into 50 delightful pages of insect-sized adventures! This charming coloring book is filled with the cutest bugs you've ever seen from happy ladybugs and playful beetles all staying busy in the most adorable ways!",
      "Perfect for kids who love tiny creatures, silly scenes, and colorful fun. Every page is a chance to bring these buggy friends to life!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "50 original black and white illustrations of cute, funny, and busy insects.",
      "Format: 8.25 x 8.25 in.",
      "Inspires creativity, love for nature, and endless giggles.",
      "Great for all ages, bug lovers, and curious imaginations.",
    
    ]
  },

  "play-in-summer": {
    title: "Play In Summer",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FCMFL8YD", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FCMFL8YD",
        de: "https://www.amazon.de/dp/B0FCMFL8YD",
        it: "https://www.amazon.it/dp/B0FCMFL8YD",
        es: "https://www.amazon.es/dp/B0FCMFL8YD",
        fr: "https://www.amazon.fr/dp/B0FCMFL8YD",
        jp: "https://www.amazon.jp/dp/B0FCMFL8YD",
        au: "https://www.amazon.au/dp/B0FCMFL8YD",
        se: "https://www.amazon.se/dp/B0FCMFL8YD",
        pl: "https://www.amazon.pl/dp/B0FCMFL8YD",
        ca: "https://www.amazon.ca/dp/B0FCMFL8YD",
        nl: "https://www.amazon.nl/dp/B0FCMFL8YD",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FGTV995L", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FGTV995L",
        de: "https://www.amazon.de/dp/B0FGTV995L",
        it: "https://www.amazon.it/dp/B0FGTV995L",
        es: "https://www.amazon.es/dp/B0FGTV995L",
        fr: "https://www.amazon.fr/dp/B0FGTV995L",
        jp: "https://www.amazon.jp/dp/B0FGTV995L",
        au: "https://www.amazon.au/dp/B0FGTV995L",
        se: "https://www.amazon.se/dp/B0FGTV995L",
        pl: "https://www.amazon.pl/dp/B0FGTV995L",
        ca: "https://www.amazon.ca/dp/B0FGTV995L",
        nl: "https://www.amazon.nl/dp/B0FGTV995L",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/play-in-summer/cover.jpg",
      "assets/img/books/play-in-summer/p01.jpg",
      "assets/img/books/play-in-summer/p02.jpg",
      "assets/img/books/play-in-summer/p03.jpg",
      "assets/img/books/play-in-summer/p04.jpg",
      "assets/img/books/play-in-summer/p05.jpg",
      "assets/img/books/play-in-summer/p06.jpg",
    ],
    sections: [
      "assets/img/books/play-in-summer/sections/1.jpg",
      "assets/img/books/play-in-summer/sections/2.jpg",
      "assets/img/books/play-in-summer/sections/3.jpg",
      "assets/img/books/play-in-summer/sections/4.jpg",
      "assets/img/books/play-in-summer/sections/5.jpg",
    ],
    intro: [
      "Dive into a world of sunshine, waves, and action-packed fun with this exciting Play in Summer Coloring Book! Join our two cheerful adventurers a boy and a girl as they explore 33 pages of summer sports, including surfing, kayaking, windsurfing, volleyball, swimming, and more.",
      "This book is perfect for children who love the beach, water activities, and creative play. Every scene captures the joy of summer with easy-to-color illustrations and lots of smiling energy.",
      "🎁 Bonus Included! Includes 4 extra pages of beach-themed objects to color, cut, and paste, like floaties, flippers, beach balls, snorkel masks, and more! Kids can use them to decorate their favorite coloring pages or create their own summer scenes.",
    ],
    bullets: [
      "33 fun-filled coloring pages with summer sports.",
      "Format: 8.25 x 8.25 in.",
      "4 cut-and-color activity pages with beach items",
      "Great for summer vacations, road trips, or rainy days",
    
    ]
  },

  "choco-sweets": {
    title: "Choco Sweets",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FF4TK6LH", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FF4TK6LH",
        de: "https://www.amazon.de/dp/B0FF4TK6LH",
        it: "https://www.amazon.it/dp/B0FF4TK6LH",
        es: "https://www.amazon.es/dp/B0FF4TK6LH",
        fr: "https://www.amazon.fr/dp/B0FF4TK6LH",
        jp: "https://www.amazon.jp/dp/B0FF4TK6LH",
        au: "https://www.amazon.au/dp/B0FF4TK6LH",
        se: "https://www.amazon.se/dp/B0FF4TK6LH",
        pl: "https://www.amazon.pl/dp/B0FF4TK6LH",
        ca: "https://www.amazon.ca/dp/B0FF4TK6LH",
        nl: "https://www.amazon.nl/dp/B0FF4TK6LH",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FGTSQ5TL", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FGTSQ5TL",
        de: "https://www.amazon.de/dp/B0FGTSQ5TL",
        it: "https://www.amazon.it/dp/B0FGTSQ5TL",
        es: "https://www.amazon.es/dp/B0FGTSQ5TL",
        fr: "https://www.amazon.fr/dp/B0FGTSQ5TL",
        jp: "https://www.amazon.jp/dp/B0FGTSQ5TL",
        au: "https://www.amazon.au/dp/B0FGTSQ5TL",
        se: "https://www.amazon.se/dp/B0FGTSQ5TL",
        pl: "https://www.amazon.pl/dp/B0FGTSQ5TL",
        ca: "https://www.amazon.ca/dp/B0FGTSQ5TL",
        nl: "https://www.amazon.nl/dp/B0FGTSQ5TL",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/choco-sweets/cover.jpg",
      "assets/img/books/choco-sweets/p01.jpg",
      "assets/img/books/choco-sweets/p02.jpg",
      "assets/img/books/choco-sweets/p03.jpg",
      "assets/img/books/choco-sweets/p04.jpg",
      "assets/img/books/choco-sweets/p05.jpg",
      "assets/img/books/choco-sweets/p06.jpg",
    ],
    sections: [
      "assets/img/books/choco-sweets/sections/1.jpg",
      "assets/img/books/choco-sweets/sections/2.jpg",
      "assets/img/books/choco-sweets/sections/3.jpg",
      "assets/img/books/choco-sweets/sections/4.jpg",
      "assets/img/books/choco-sweets/sections/5.jpg",
    ],
    intro: [
      "Prepare your pencils for the tastiest journey ever! Dive into a world filled with delicious delights in this mouthwatering coloring book packed with 40 scrumptious chocolate themed illustrations.",
      "From melty truffles and gooey brownies to cheerful chocolate bars and dreamy desserts, every page is a feast for your imagination! Whether you're a chocolate lover, a coloring fan, or just craving something sweet and fun this book is your perfect treat!",
      "🎁 Bonus Included! At the end of the book, enjoy a special chocolate-themed crossword puzzle! It’s a fun and tasty challenge designed to tickle young brains and test their sweet knowledge. The perfect extra treat for curious minds and creative hands!",
    ],
    bullets: [
      "40 unique and delightful black and white illustrations featuring chocolate in all its forms.",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity, relaxation, and joyful coloring moments.",
      "For all ages, dessert enthusiasts, and anyone who loves the sweeter side of life.",
    
    ]
  },

  "sweet-makes-me-happy": {
    title: "Sweet Makes Me Happy",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FF4TDMVD", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FF4TDMVD",
        de: "https://www.amazon.de/dp/B0FF4TDMVD",
        it: "https://www.amazon.it/dp/B0FF4TDMVD",
        es: "https://www.amazon.es/dp/B0FF4TDMVD",
        fr: "https://www.amazon.fr/dp/B0FF4TDMVD",
        jp: "https://www.amazon.jp/dp/B0FF4TDMVD",
        au: "https://www.amazon.au/dp/B0FF4TDMVD",
        se: "https://www.amazon.se/dp/B0FF4TDMVD",
        pl: "https://www.amazon.pl/dp/B0FF4TDMVD",
        ca: "https://www.amazon.ca/dp/B0FF4TDMVD",
        nl: "https://www.amazon.nl/dp/B0FF4TDMVD",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJ86PDWM", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJ86PDWM",
        de: "https://www.amazon.de/dp/B0FJ86PDWM",
        it: "https://www.amazon.it/dp/B0FJ86PDWM",
        es: "https://www.amazon.es/dp/B0FJ86PDWM",
        fr: "https://www.amazon.fr/dp/B0FJ86PDWM",
        jp: "https://www.amazon.jp/dp/B0FJ86PDWM",
        au: "https://www.amazon.au/dp/B0FJ86PDWM",
        se: "https://www.amazon.se/dp/B0FJ86PDWM",
        pl: "https://www.amazon.pl/dp/B0FJ86PDWM",
        ca: "https://www.amazon.ca/dp/B0FJ86PDWM",
        nl: "https://www.amazon.nl/dp/B0FJ86PDWM",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/sweet-makes-me-happy/cover.jpg",
      "assets/img/books/sweet-makes-me-happy/p01.jpg",
      "assets/img/books/sweet-makes-me-happy/p02.jpg",
      "assets/img/books/sweet-makes-me-happy/p03.jpg",
      "assets/img/books/sweet-makes-me-happy/p04.jpg",
      "assets/img/books/sweet-makes-me-happy/p05.jpg",
      "assets/img/books/sweet-makes-me-happy/p06.jpg",
    ],
    sections: [
      "assets/img/books/sweet-makes-me-happy/sections/1.jpg",
      "assets/img/books/sweet-makes-me-happy/sections/2.jpg",
      "assets/img/books/sweet-makes-me-happy/sections/3.jpg",
      "assets/img/books/sweet-makes-me-happy/sections/4.jpg",
      "assets/img/books/sweet-makes-me-happy/sections/5.jpg",
    ],
    intro: [
      "Craving something sweet and creative? This delightful coloring book is filled with 40 pages of the most mouthwatering desserts you can imagine! From fluffy donuts and creamy tiramisu to classic panettone and colorful cakes, every page is a celebration of sugar, joy, and imagination.",
      "Grab your favorite coloring tools and bring these tasty treats to life. Whether you're a dessert lover, a young artist, or just looking for a relaxing and fun activity, this book is the perfect indulgence!",
      "🎁 Bonus Included!At the end of the book, enjoy a special dessert themed word search! Search for your favorite sweet treats hidden in a yummy grid a fun and brain boosting activity perfect for little dessert lovers and creative minds!",
    ],
    bullets: [
      "40 unique black and white illustrations featuring all kinds of delicious desserts.",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity, relaxation, and smiles for all ages.",
      "For all ages.",
    
    ]
  },

  "choco-craft-world": {
    title: "Choco Craft World",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH74PKJ9", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH74PKJ9",
        de: "https://www.amazon.de/dp/B0FH74PKJ9",
        it: "https://www.amazon.it/dp/B0FH74PKJ9",
        es: "https://www.amazon.es/dp/B0FH74PKJ9",
        fr: "https://www.amazon.fr/dp/B0FH74PKJ9",
        jp: "https://www.amazon.jp/dp/B0FH74PKJ9",
        au: "https://www.amazon.au/dp/B0FH74PKJ9",
        se: "https://www.amazon.se/dp/B0FH74PKJ9",
        pl: "https://www.amazon.pl/dp/B0FH74PKJ9",
        ca: "https://www.amazon.ca/dp/B0FH74PKJ9",
        nl: "https://www.amazon.nl/dp/B0FH74PKJ9",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJ5J34RX", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJ5J34RX",
        de: "https://www.amazon.de/dp/B0FJ5J34RX",
        it: "https://www.amazon.it/dp/B0FJ5J34RX",
        es: "https://www.amazon.es/dp/B0FJ5J34RX",
        fr: "https://www.amazon.fr/dp/B0FJ5J34RX",
        jp: "https://www.amazon.jp/dp/B0FJ5J34RX",
        au: "https://www.amazon.au/dp/B0FJ5J34RX",
        se: "https://www.amazon.se/dp/B0FJ5J34RX",
        pl: "https://www.amazon.pl/dp/B0FJ5J34RX",
        ca: "https://www.amazon.ca/dp/B0FJ5J34RX",
        nl: "https://www.amazon.nl/dp/B0FJ5J34RX",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/choco-craft-world/cover.jpg",
      "assets/img/books/choco-craft-world/p01.jpg",
      "assets/img/books/choco-craft-world/p02.jpg",
      "assets/img/books/choco-craft-world/p03.jpg",
      "assets/img/books/choco-craft-world/p04.jpg",
      "assets/img/books/choco-craft-world/p05.jpg",
      "assets/img/books/choco-craft-world/p06.jpg",
    ],
    sections: [
      "assets/img/books/choco-craft-world/sections/1.jpg",
      "assets/img/books/choco-craft-world/sections/2.jpg",
      "assets/img/books/choco-craft-world/sections/3.jpg",
      "assets/img/books/choco-craft-world/sections/4.jpg",
      "assets/img/books/choco-craft-world/sections/5.jpg",
    ],
    intro: [
      "Welcome to a whimsical realm where every gadget, vehicle, and invention is baked, glazed, or drizzled in chocolatey goodness! From cookie winged airplanes to waffle cone telescopes oozing with cocoa, each of the 30 illustrations in Choco Craft World invites you to dream up delicious color combos and bring irresistibly sweet creations to life.",
      "Perfect for kids, chocoholics, and crafty colorists of all ages, this book turns ordinary objects into mouth-watering masterpieces no sugar rush required!",
      "🎁 Bonus Included!At the end of the book, enjoy a special cookie and chocolate themed word search! Hunt for your favorite sweet treats hidden in a delicious puzzle a fun and brain boosting activity for little chocoholics and creative cookie lovers!",
    ],
    bullets: [
      "30 unique black and white illustrations of chocolate-and-cookie contraptions.",
      "Format: 8.25 x 8.25 in.",
      "Thick lines and playful designs for stress free, screen free fun.",
      "Great gift for dessert lovers, young creators, and anyone with a sweet imagination.",
    
    ]
  },

  "realistic-food": {
    title: "Realistic Food",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FCM5CTBQ", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FCM5CTBQ",
        de: "https://www.amazon.de/dp/B0FCM5CTBQ",
        it: "https://www.amazon.it/dp/B0FCM5CTBQ",
        es: "https://www.amazon.es/dp/B0FCM5CTBQ",
        fr: "https://www.amazon.fr/dp/B0FCM5CTBQ",
        jp: "https://www.amazon.jp/dp/B0FCM5CTBQ",
        au: "https://www.amazon.au/dp/B0FCM5CTBQ",
        se: "https://www.amazon.se/dp/B0FCM5CTBQ",
        pl: "https://www.amazon.pl/dp/B0FCM5CTBQ",
        ca: "https://www.amazon.ca/dp/B0FCM5CTBQ",
        nl: "https://www.amazon.nl/dp/B0FCM5CTBQ",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FHWKX8KM", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHWKX8KM",
        de: "https://www.amazon.de/dp/B0FHWKX8KM",
        it: "https://www.amazon.it/dp/B0FHWKX8KM",
        es: "https://www.amazon.es/dp/B0FHWKX8KM",
        fr: "https://www.amazon.fr/dp/B0FHWKX8KM",
        jp: "https://www.amazon.jp/dp/B0FHWKX8KM",
        au: "https://www.amazon.au/dp/B0FHWKX8KM",
        se: "https://www.amazon.se/dp/B0FHWKX8KM",
        pl: "https://www.amazon.pl/dp/B0FHWKX8KM",
        ca: "https://www.amazon.ca/dp/B0FHWKX8KM",
        nl: "https://www.amazon.nl/dp/B0FHWKX8KM",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/realistic-food/cover.jpg",
      "assets/img/books/realistic-food/p01.jpg",
      "assets/img/books/realistic-food/p02.jpg",
      "assets/img/books/realistic-food/p03.jpg",
      "assets/img/books/realistic-food/p04.jpg",
      "assets/img/books/realistic-food/p05.jpg",
      "assets/img/books/realistic-food/p06.jpg",
    ],
    sections: [
      "assets/img/books/realistic-food/sections/1.jpg",
      "assets/img/books/realistic-food/sections/2.jpg",
      "assets/img/books/realistic-food/sections/3.jpg",
      "assets/img/books/realistic-food/sections/4.jpg",
      "assets/img/books/realistic-food/sections/5.jpg",
    ],
    intro: [
      "Satisfy your creative cravings with this beautifully illustrated realistic food coloring book, featuring 42 mouthwatering images of iconic dishes from around the globe. From rich desserts to vibrant savory meals, each page takes you on a delicious journey through multicultural cuisine.",
      " Inspired by dishes from Asia, Europe, the Americas, Africa, and beyond, this book invites you to explore the flavors of the world through bold, detailed line art. Whether you’re a foodie, an artist, or just love coloring beautiful things. Every plate is a feast for the eyes and your colored pencils.",
      "🎁 Bonus Included!At the end of the book, enjoy a special Word Search Puzzle filled with tech terms from the book.",
    ],
    bullets: [
      "42 realistic food illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "A variety of sweet and savory dishes.",
      "Perfect for artists, chefs, travelers, and food lovers.",
      "A relaxing and inspiring activity for all ages."
    
    ]
  },

  "color-your-favorite-candies": {
    title: "Color Your Favorite Candies",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH76ZXW4", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH76ZXW4",
        de: "https://www.amazon.de/dp/B0FH76ZXW4",
        it: "https://www.amazon.it/dp/B0FH76ZXW4",
        es: "https://www.amazon.es/dp/B0FH76ZXW4",
        fr: "https://www.amazon.fr/dp/B0FH76ZXW4",
        jp: "https://www.amazon.jp/dp/B0FH76ZXW4",
        au: "https://www.amazon.au/dp/B0FH76ZXW4",
        se: "https://www.amazon.se/dp/B0FH76ZXW4",
        pl: "https://www.amazon.pl/dp/B0FH76ZXW4",
        ca: "https://www.amazon.ca/dp/B0FH76ZXW4",
        nl: "https://www.amazon.nl/dp/B0FH76ZXW4",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJ6X1QZK", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJ6X1QZK",
        de: "https://www.amazon.de/dp/B0FJ6X1QZK",
        it: "https://www.amazon.it/dp/B0FJ6X1QZK",
        es: "https://www.amazon.es/dp/B0FJ6X1QZK",
        fr: "https://www.amazon.fr/dp/B0FJ6X1QZK",
        jp: "https://www.amazon.jp/dp/B0FJ6X1QZK",
        au: "https://www.amazon.au/dp/B0FJ6X1QZK",
        se: "https://www.amazon.se/dp/B0FJ6X1QZK",
        pl: "https://www.amazon.pl/dp/B0FJ6X1QZK",
        ca: "https://www.amazon.ca/dp/B0FJ6X1QZK",
        nl: "https://www.amazon.nl/dp/B0FJ6X1QZK",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/color-your-favorite-candies/cover.jpg",
      "assets/img/books/color-your-favorite-candies/p01.jpg",
      "assets/img/books/color-your-favorite-candies/p02.jpg",
      "assets/img/books/color-your-favorite-candies/p03.jpg",
      "assets/img/books/color-your-favorite-candies/p04.jpg",
      "assets/img/books/color-your-favorite-candies/p05.jpg",
      "assets/img/books/color-your-favorite-candies/p06.jpg",
    ],
    sections: [
      "assets/img/books/color-your-favorite-candies/sections/1.jpg",
      "assets/img/books/color-your-favorite-candies/sections/2.jpg",
      "assets/img/books/color-your-favorite-candies/sections/3.jpg",
      "assets/img/books/color-your-favorite-candies/sections/4.jpg",
      "assets/img/books/color-your-favorite-candies/sections/5.jpg",
    ],
    intro: [
      "Step into a world of delicious imagination with this charming coloring book packed with your favorite candies! From gummy bears and chewy swirls to wrapped sweets and jars full of sugar dreams, each page is bursting with adorable treats just waiting for your creativity.",
      "With 40 sweet illustrations to color, this book is perfect for kids, candy lovers, and anyone who enjoys playful and relaxing art. Grab your favorite markers and make these candies as colorful and yummy as you like no sugar rush included!",
      "🎁 Bonus Included!At the end of the book, enjoy a special candy themed word search! Hunt for your favorite candies hidden in a sweet puzzle a fun and brain-boosting activity for little candy lovers and creative minds!",
    ],
    bullets: [
      "40 unique black and white illustrations of cute candies, gummies, and sweet jars.",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity, color exploration, and joyful screen free fun",
      "Perfect for artists, chefs, travelers, and food lovers.",
      
    
    ]
  },

  "medical-tools": {
    title: "Medical Tools",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FCS8TW6F", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FCS8TW6F",
        de: "https://www.amazon.de/dp/B0FCS8TW6F",
        it: "https://www.amazon.it/dp/B0FCS8TW6F",
        es: "https://www.amazon.es/dp/B0FCS8TW6F",
        fr: "https://www.amazon.fr/dp/B0FCS8TW6F",
        jp: "https://www.amazon.jp/dp/B0FCS8TW6F",
        au: "https://www.amazon.au/dp/B0FCS8TW6F",
        se: "https://www.amazon.se/dp/B0FCS8TW6F",
        pl: "https://www.amazon.pl/dp/B0FCS8TW6F",
        ca: "https://www.amazon.ca/dp/B0FCS8TW6F",
        nl: "https://www.amazon.nl/dp/B0FCS8TW6F",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJ85DR2F", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJ85DR2F",
        de: "https://www.amazon.de/dp/B0FJ85DR2F",
        it: "https://www.amazon.it/dp/B0FJ85DR2F",
        es: "https://www.amazon.es/dp/B0FJ85DR2F",
        fr: "https://www.amazon.fr/dp/B0FJ85DR2F",
        jp: "https://www.amazon.jp/dp/B0FJ85DR2F",
        au: "https://www.amazon.au/dp/B0FJ85DR2F",
        se: "https://www.amazon.se/dp/B0FJ85DR2F",
        pl: "https://www.amazon.pl/dp/B0FJ85DR2F",
        ca: "https://www.amazon.ca/dp/B0FJ85DR2F",
        nl: "https://www.amazon.nl/dp/B0FJ85DR2F",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/medical-tools/cover.jpg",
      "assets/img/books/medical-tools/p01.jpg",
      "assets/img/books/medical-tools/p02.jpg",
      "assets/img/books/medical-tools/p03.jpg",
      "assets/img/books/medical-tools/p04.jpg",
      "assets/img/books/medical-tools/p05.jpg",
      "assets/img/books/medical-tools/p06.jpg",
    ],
    sections: [
      "assets/img/books/medical-tools/sections/1.jpg",
      "assets/img/books/medical-tools/sections/2.jpg",
      "assets/img/books/medical-tools/sections/3.jpg",
      "assets/img/books/medical-tools/sections/4.jpg",
      "assets/img/books/medical-tools/sections/5.jpg",
    ],
    intro: [
      "Discover the fascinating world of healthcare with Medical Tools: A Coloring Book, a fun and educational activity book designed for curious minds of all ages!",
      "This unique coloring book with 30 pages filled with essential medical instruments such as thermometers, bandages, and more perfect for future doctors, nurses, or anyone interested in medicine.",
      "🎁 Bonus Included! Includes 2 extra pages of doctor-themed tools to color, cut, and paste like stethoscopes, syringes, thermometers, bandages, pill bottles, and more! Kids can use them to complete their medical scenes.",
    ],
    bullets: [
      "30 unique medical themed illustrations to color",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity and learning about first aid and doctor tools.",
      "Ideal for kids, students, or healthcare-themed activities.",
      
    
    ]
  },

  "color-your-classroom": {
    title: "Color Your Classroom",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FD33XDN9", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FD33XDN9",
        de: "https://www.amazon.de/dp/B0FD33XDN9",
        it: "https://www.amazon.it/dp/B0FD33XDN9",
        es: "https://www.amazon.es/dp/B0FD33XDN9",
        fr: "https://www.amazon.fr/dp/B0FD33XDN9",
        jp: "https://www.amazon.jp/dp/B0FD33XDN9",
        au: "https://www.amazon.au/dp/B0FD33XDN9",
        se: "https://www.amazon.se/dp/B0FD33XDN9",
        pl: "https://www.amazon.pl/dp/B0FD33XDN9",
        ca: "https://www.amazon.ca/dp/B0FD33XDN9",
        nl: "https://www.amazon.nl/dp/B0FD33XDN9",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FK21QDTC", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FK21QDTC",
        de: "https://www.amazon.de/dp/B0FK21QDTC",
        it: "https://www.amazon.it/dp/B0FK21QDTC",
        es: "https://www.amazon.es/dp/B0FK21QDTC",
        fr: "https://www.amazon.fr/dp/B0FK21QDTC",
        jp: "https://www.amazon.jp/dp/B0FK21QDTC",
        au: "https://www.amazon.au/dp/B0FK21QDTC",
        se: "https://www.amazon.se/dp/B0FK21QDTC",
        pl: "https://www.amazon.pl/dp/B0FK21QDTC",
        ca: "https://www.amazon.ca/dp/B0FK21QDTC",
        nl: "https://www.amazon.nl/dp/B0FK21QDTC",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/color-your-classroom/cover.jpg",
      "assets/img/books/color-your-classroom/p01.jpg",
      "assets/img/books/color-your-classroom/p02.jpg",
      "assets/img/books/color-your-classroom/p03.jpg",
      "assets/img/books/color-your-classroom/p04.jpg",
      "assets/img/books/color-your-classroom/p05.jpg",
      "assets/img/books/color-your-classroom/p06.jpg",
    ],
    sections: [
      "assets/img/books/color-your-classroom/sections/1.jpg",
      "assets/img/books/color-your-classroom/sections/2.jpg",
      "assets/img/books/color-your-classroom/sections/3.jpg",
      "assets/img/books/color-your-classroom/sections/4.jpg",
      "assets/img/books/color-your-classroom/sections/5.jpg",
    ],
    intro: [
      "From backpacks to blackboards, this delightful coloring book lets kids explore all the fun and familiar objects found in a classroom. With 35 beautifully illustrated pages, children will enjoy bringing everyday school supplies to life while reinforcing learning, curiosity, and creativity.",
      "Perfect for young learners who love school, teachers, and coloring their way through a day full of pencils, paper, and playful discovery!",
      "🎁 Bonus Included! At the end of the book, enjoy two fun school-themed games: a word search puzzle filled with classroom objects, and a maze challenge where you help a pencil reach the sharpener without touching ink puddles!",
    ],
    bullets: [
      "35 original black-and-white illustrations featuring classroom objects.",
      "Format: 8.25 x 8.25 in.",
      "Encourages school readiness, object recognition, and creative thinking.",
      "Ideal for kids,for preschoolers, elementary students, teachers, and homeschoolers",
      
    
    ]
  },

  "exomech": {
    title: "exomech",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FHKN5J31", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FHKN5J31",
        de: "https://www.amazon.de/dp/B0FHKN5J31",
        it: "https://www.amazon.it/dp/B0FHKN5J31",
        es: "https://www.amazon.es/dp/B0FHKN5J31",
        fr: "https://www.amazon.fr/dp/B0FHKN5J31",
        jp: "https://www.amazon.jp/dp/B0FHKN5J31",
        au: "https://www.amazon.au/dp/B0FHKN5J31",
        se: "https://www.amazon.se/dp/B0FHKN5J31",
        pl: "https://www.amazon.pl/dp/B0FHKN5J31",
        ca: "https://www.amazon.ca/dp/B0FHKN5J31",
        nl: "https://www.amazon.nl/dp/B0FHKN5J31",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJWMPX49", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJWMPX49",
        de: "https://www.amazon.de/dp/B0FJWMPX49",
        it: "https://www.amazon.it/dp/B0FJWMPX49",
        es: "https://www.amazon.es/dp/B0FJWMPX49",
        fr: "https://www.amazon.fr/dp/B0FJWMPX49",
        jp: "https://www.amazon.jp/dp/B0FJWMPX49",
        au: "https://www.amazon.au/dp/B0FJWMPX49",
        se: "https://www.amazon.se/dp/B0FJWMPX49",
        pl: "https://www.amazon.pl/dp/B0FJWMPX49",
        ca: "https://www.amazon.ca/dp/B0FJWMPX49",
        nl: "https://www.amazon.nl/dp/B0FJWMPX49",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/exomech/cover.jpg",
      "assets/img/books/exomech/p01.jpg",
      "assets/img/books/exomech/p02.jpg",
      "assets/img/books/exomech/p03.jpg",
      "assets/img/books/exomech/p04.jpg",
      "assets/img/books/exomech/p05.jpg",
      "assets/img/books/exomech/p06.jpg",
    ],
    sections: [
      "assets/img/books/exomech/sections/1.jpg",
      "assets/img/books/exomech/sections/2.jpg",
      "assets/img/books/exomech/sections/3.jpg",
      "assets/img/books/exomech/sections/4.jpg",
      "assets/img/books/exomech/sections/5.jpg",
    ],
    intro: [
      "Follow a brave robot warrior as it protects distant planets, explores unknown worlds, and discovers incredible new technologies and mysteries across the galaxy.",
      "From epic battles to quiet moments of discovery, every page brings action packed scenes and futuristic adventures that spark creativity and imagination. This thrilling coloring book features 30 original illustrations perfect for fans of robots, space exploration, and heroic quests.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "30 original black and white illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Inspires creativity, imagination, and a love for sci-fi adventure.",
      "Great for all ages.",
      
    
    ]
  },

  "metal-beasts": {
    title: "Metal Beasts",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FCRP28VM", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FCRP28VM",
        de: "https://www.amazon.de/dp/B0FCRP28VM",
        it: "https://www.amazon.it/dp/B0FCRP28VM",
        es: "https://www.amazon.es/dp/B0FCRP28VM",
        fr: "https://www.amazon.fr/dp/B0FCRP28VM",
        jp: "https://www.amazon.jp/dp/B0FCRP28VM",
        au: "https://www.amazon.au/dp/B0FCRP28VM",
        se: "https://www.amazon.se/dp/B0FCRP28VM",
        pl: "https://www.amazon.pl/dp/B0FCRP28VM",
        ca: "https://www.amazon.ca/dp/B0FCRP28VM",
        nl: "https://www.amazon.nl/dp/B0FCRP28VM",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJ5J8G1Z", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJ5J8G1Z",
        de: "https://www.amazon.de/dp/B0FJ5J8G1Z",
        it: "https://www.amazon.it/dp/B0FJ5J8G1Z",
        es: "https://www.amazon.es/dp/B0FJ5J8G1Z",
        fr: "https://www.amazon.fr/dp/B0FJ5J8G1Z",
        jp: "https://www.amazon.jp/dp/B0FJ5J8G1Z",
        au: "https://www.amazon.au/dp/B0FJ5J8G1Z",
        se: "https://www.amazon.se/dp/B0FJ5J8G1Z",
        pl: "https://www.amazon.pl/dp/B0FJ5J8G1Z",
        ca: "https://www.amazon.ca/dp/B0FJ5J8G1Z",
        nl: "https://www.amazon.nl/dp/B0FJ5J8G1Z",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/metal-beasts/cover.jpg",
      "assets/img/books/metal-beasts/p01.jpg",
      "assets/img/books/metal-beasts/p02.jpg",
      "assets/img/books/metal-beasts/p03.jpg",
      "assets/img/books/metal-beasts/p04.jpg",
      "assets/img/books/metal-beasts/p05.jpg",
      "assets/img/books/metal-beasts/p06.jpg",
    ],
    sections: [
      "assets/img/books/metal-beasts/sections/1.jpg",
      "assets/img/books/metal-beasts/sections/2.jpg",
      "assets/img/books/metal-beasts/sections/3.jpg",
      "assets/img/books/metal-beasts/sections/4.jpg",
      "assets/img/books/metal-beasts/sections/5.jpg",
    ],
    intro: [
      "Welcome to a futuristic world where animals have evolved into amazing robotic creatures! This exciting coloring book features 30 unique illustrations of robot animals living in a high-tech, mechanical future. From robotic lions to cybernetic dog, each page offers a fun and imaginative twist on wildlife as we know it.",
      "Perfect for kids, teens, and anyone who loves animals, or creative coloring adventures, this book sparks the imagination and challenges creativity with every design.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "30 original black and white illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Perfect gift for birthdays, travel, or creative play.",
      "Ideal for fans of futuristic, cyber, or tech inspired art.",
      
    
    ]
  },

  "lets-color-technology": {
    title: "Let's Color Technology",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FCXYWJGV", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FCXYWJGV",
        de: "https://www.amazon.de/dp/B0FCXYWJGV",
        it: "https://www.amazon.it/dp/B0FCXYWJGV",
        es: "https://www.amazon.es/dp/B0FCXYWJGV",
        fr: "https://www.amazon.fr/dp/B0FCXYWJGV",
        jp: "https://www.amazon.jp/dp/B0FCXYWJGV",
        au: "https://www.amazon.au/dp/B0FCXYWJGV",
        se: "https://www.amazon.se/dp/B0FCXYWJGV",
        pl: "https://www.amazon.pl/dp/B0FCXYWJGV",
        ca: "https://www.amazon.ca/dp/B0FCXYWJGV",
        nl: "https://www.amazon.nl/dp/B0FCXYWJGV",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJDQCRDJ", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJDQCRDJ",
        de: "https://www.amazon.de/dp/B0FJDQCRDJ",
        it: "https://www.amazon.it/dp/B0FJDQCRDJ",
        es: "https://www.amazon.es/dp/B0FJDQCRDJ",
        fr: "https://www.amazon.fr/dp/B0FJDQCRDJ",
        jp: "https://www.amazon.jp/dp/B0FJDQCRDJ",
        au: "https://www.amazon.au/dp/B0FJDQCRDJ",
        se: "https://www.amazon.se/dp/B0FJDQCRDJ",
        pl: "https://www.amazon.pl/dp/B0FJDQCRDJ",
        ca: "https://www.amazon.ca/dp/B0FJDQCRDJ",
        nl: "https://www.amazon.nl/dp/B0FJDQCRDJ",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/lets-color-technology/cover.jpg",
      "assets/img/books/lets-color-technology/p01.jpg",
      "assets/img/books/lets-color-technology/p02.jpg",
      "assets/img/books/lets-color-technology/p03.jpg",
      "assets/img/books/lets-color-technology/p04.jpg",
      "assets/img/books/lets-color-technology/p05.jpg",
      "assets/img/books/lets-color-technology/p06.jpg",
    ],
    sections: [
      "assets/img/books/lets-color-technology/sections/1.jpg",
      "assets/img/books/lets-color-technology/sections/2.jpg",
      "assets/img/books/lets-color-technology/sections/3.jpg",
      "assets/img/books/lets-color-technology/sections/4.jpg",
      "assets/img/books/lets-color-technology/sections/5.jpg",
    ],
    intro: [
      "Get ready to explore the exciting world of modern technology one coloring page at a time! This fun and educational coloring book features 30 awesome illustrations of today’s coolest tech gadgets, machines, and inventions. From flying drones and electric cars to 3D printers and futuristic robots, every page sparks curiosity and creativity.",
      "Perfect for kids, teens, and future inventors, this coloring book blends fun with learning It's the perfect gift for curious minds who love gadgets and innovation!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "30 original illustrations of modern tech objects.",
      "Format: 8.25 x 8.25 in.",
      "Perfect gift for birthdays, travel, or creative play.",
      "Ideal for fans of futuristic, cyber, or tech inspired art.",
      
    
    ]
  },

  "technology-through-the-ages": {
    title: "Technology Through The Ages",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FDG3R1L1", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FDG3R1L1",
        de: "https://www.amazon.de/dp/B0FDG3R1L1",
        it: "https://www.amazon.it/dp/B0FDG3R1L1",
        es: "https://www.amazon.es/dp/B0FDG3R1L1",
        fr: "https://www.amazon.fr/dp/B0FDG3R1L1",
        jp: "https://www.amazon.jp/dp/B0FDG3R1L1",
        au: "https://www.amazon.au/dp/B0FDG3R1L1",
        se: "https://www.amazon.se/dp/B0FDG3R1L1",
        pl: "https://www.amazon.pl/dp/B0FDG3R1L1",
        ca: "https://www.amazon.ca/dp/B0FDG3R1L1",
        nl: "https://www.amazon.nl/dp/B0FDG3R1L1",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJ87CGGG", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJ87CGGG",
        de: "https://www.amazon.de/dp/B0FJ87CGGG",
        it: "https://www.amazon.it/dp/B0FJ87CGGG",
        es: "https://www.amazon.es/dp/B0FJ87CGGG",
        fr: "https://www.amazon.fr/dp/B0FJ87CGGG",
        jp: "https://www.amazon.jp/dp/B0FJ87CGGG",
        au: "https://www.amazon.au/dp/B0FJ87CGGG",
        se: "https://www.amazon.se/dp/B0FJ87CGGG",
        pl: "https://www.amazon.pl/dp/B0FJ87CGGG",
        ca: "https://www.amazon.ca/dp/B0FJ87CGGG",
        nl: "https://www.amazon.nl/dp/B0FJ87CGGG",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/technology-through-the-ages/cover.jpg",
      "assets/img/books/technology-through-the-ages/p01.jpg",
      "assets/img/books/technology-through-the-ages/p02.jpg",
      "assets/img/books/technology-through-the-ages/p03.jpg",
      "assets/img/books/technology-through-the-ages/p04.jpg",
      "assets/img/books/technology-through-the-ages/p05.jpg",
      "assets/img/books/technology-through-the-ages/p06.jpg",
    ],
    sections: [
      "assets/img/books/technology-through-the-ages/sections/1.jpg",
      "assets/img/books/technology-through-the-ages/sections/2.jpg",
      "assets/img/books/technology-through-the-ages/sections/3.jpg",
      "assets/img/books/technology-through-the-ages/sections/4.jpg",
      "assets/img/books/technology-through-the-ages/sections/5.jpg",
    ],
    intro: [
      "Step into the exciting world of Color Technology Through the Ages a dynamic and educational coloring journey through the evolution of technology! From cassette players to smartphones, typewriters to VR headsets, this coloring book invites Kids and curious adults! to explore 40 iconic gadgets that shaped our world one page at a time.",
      "Whether it’s rewinding the past or scrolling into the future, each black and white illustration offers a chance to discover, learn, and color a slice of tech history. Perfect for kids who love machines, inventions, and hands-on learning, and for families who enjoy coloring together while sparking great conversations!",
      "🎁 Bonus Included! A themed Word Search Puzzle filled with tech terms from the book",
    ],
    bullets: [
      "40 original black and white illustrations of vintage and modern tech objects.",
      "Format: 8.25 x 8.25 in.",
      "Perfect gift for birthdays, travel, or creative play.",
      "Encourages tech awareness, history exploration, and creative expression.",
      
    
    ]
  },

  "the-food-is-alive": {
    title: "The Food Is Alive",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FCRY2683", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FCRY2683",
        de: "https://www.amazon.de/dp/B0FCRY2683",
        it: "https://www.amazon.it/dp/B0FCRY2683",
        es: "https://www.amazon.es/dp/B0FCRY2683",
        fr: "https://www.amazon.fr/dp/B0FCRY2683",
        jp: "https://www.amazon.jp/dp/B0FCRY2683",
        au: "https://www.amazon.au/dp/B0FCRY2683",
        se: "https://www.amazon.se/dp/B0FCRY2683",
        pl: "https://www.amazon.pl/dp/B0FCRY2683",
        ca: "https://www.amazon.ca/dp/B0FCRY2683",
        nl: "https://www.amazon.nl/dp/B0FCRY2683",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FNQM3QLP", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FNQM3QLP",
        de: "https://www.amazon.de/dp/B0FNQM3QLP",
        it: "https://www.amazon.it/dp/B0FNQM3QLP",
        es: "https://www.amazon.es/dp/B0FNQM3QLP",
        fr: "https://www.amazon.fr/dp/B0FNQM3QLP",
        jp: "https://www.amazon.jp/dp/B0FNQM3QLP",
        au: "https://www.amazon.au/dp/B0FNQM3QLP",
        se: "https://www.amazon.se/dp/B0FNQM3QLP",
        pl: "https://www.amazon.pl/dp/B0FNQM3QLP",
        ca: "https://www.amazon.ca/dp/B0FNQM3QLP",
        nl: "https://www.amazon.nl/dp/B0FNQM3QLP",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/the-food-is-alive/cover.jpg",
      "assets/img/books/the-food-is-alive/p01.jpg",
      "assets/img/books/the-food-is-alive/p02.jpg",
      "assets/img/books/the-food-is-alive/p03.jpg",
      "assets/img/books/the-food-is-alive/p04.jpg",
      "assets/img/books/the-food-is-alive/p05.jpg",
      "assets/img/books/the-food-is-alive/p06.jpg",
    ],
    sections: [
      "assets/img/books/the-food-is-alive/sections/1.jpg",
      "assets/img/books/the-food-is-alive/sections/2.jpg",
      "assets/img/books/the-food-is-alive/sections/3.jpg",
      "assets/img/books/the-food-is-alive/sections/4.jpg",
      "assets/img/books/the-food-is-alive/sections/5.jpg",
    ],
    intro: [
      "This isn’t just a coloring book, it’s a world where food has feelings, dreams, and a whole lot of personality! Get ready to laugh, color, and imagine as you explore 40 whimsical black and white illustrations where fruits, veggies, and sweet treats spring to life. In this universe, carrots run marathons, bananas ride skateboards, and a Mexican taco plays the maracas.",
      "Each page invites you to slow down, smile, and let your creativity shine. Whether you’re a kid, an adult, or somewhere in between, this book offers a joyful escape into a deliciously quirky universe.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "40 playful and original illustrations.",
      "Format: 8.25 x 8.25 in.",
      "For all ages, from curious kids to creative grown ups.",
      "A perfect gift for anyone who loves to laugh, relax, and create.",
      
    
    ]
  },

  "fun-in-the-park-animals-adventures": {
    title: "Fun In The Park Animals Adventures",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FF8ZTB6Z", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FF8ZTB6Z",
        de: "https://www.amazon.de/dp/B0FF8ZTB6Z",
        it: "https://www.amazon.it/dp/B0FF8ZTB6Z",
        es: "https://www.amazon.es/dp/B0FF8ZTB6Z",
        fr: "https://www.amazon.fr/dp/B0FF8ZTB6Z",
        jp: "https://www.amazon.jp/dp/B0FF8ZTB6Z",
        au: "https://www.amazon.au/dp/B0FF8ZTB6Z",
        se: "https://www.amazon.se/dp/B0FF8ZTB6Z",
        pl: "https://www.amazon.pl/dp/B0FF8ZTB6Z",
        ca: "https://www.amazon.ca/dp/B0FF8ZTB6Z",
        nl: "https://www.amazon.nl/dp/B0FF8ZTB6Z",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FG327TRN", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FG327TRN",
        de: "https://www.amazon.de/dp/B0FG327TRN",
        it: "https://www.amazon.it/dp/B0FG327TRN",
        es: "https://www.amazon.es/dp/B0FG327TRN",
        fr: "https://www.amazon.fr/dp/B0FG327TRN",
        jp: "https://www.amazon.jp/dp/B0FG327TRN",
        au: "https://www.amazon.au/dp/B0FG327TRN",
        se: "https://www.amazon.se/dp/B0FG327TRN",
        pl: "https://www.amazon.pl/dp/B0FG327TRN",
        ca: "https://www.amazon.ca/dp/B0FG327TRN",
        nl: "https://www.amazon.nl/dp/B0FG327TRN",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/fun-in-the-park-animals-adventures/cover.jpg",
      "assets/img/books/fun-in-the-park-animals-adventures/p01.jpg",
      "assets/img/books/fun-in-the-park-animals-adventures/p02.jpg",
      "assets/img/books/fun-in-the-park-animals-adventures/p03.jpg",
      "assets/img/books/fun-in-the-park-animals-adventures/p04.jpg",
      "assets/img/books/fun-in-the-park-animals-adventures/p05.jpg",
      "assets/img/books/fun-in-the-park-animals-adventures/p06.jpg",
    ],
    sections: [
      "assets/img/books/fun-in-the-park-animals-adventures/sections/1.jpg",
      "assets/img/books/fun-in-the-park-animals-adventures/sections/2.jpg",
      "assets/img/books/fun-in-the-park-animals-adventures/sections/3.jpg",
      "assets/img/books/fun-in-the-park-animals-adventures/sections/4.jpg",
      "assets/img/books/fun-in-the-park-animals-adventures/sections/5.jpg",
    ],
    intro: [
      "A joyful journey through laughter, rides, and sweet surprises! Step into a world of laughter, rides, and magical fun with four lovable animal friends!",
      "From roller coasters and pirate ships to teacups, balloons, and candy adventures, every page invites you to explore a delightful amusement park bursting with joy and imagination.",
      "🎁 Bonus Included! At the end of the book, enjoy a surprise word search full of playful park themed words, perfect for winding down after coloring!",
    ],
    bullets: [
      "40 joyful illustrations, packed with detailed funfair adventures.",
      "Format: 8.25 x 8.25 in.",
      "Perfect for all ages, from toddlers to playful adults.",
      "A perfect gift for anyone who loves to laugh, relax, and create.",
      
    
    ]
  },

  "coloring-with-roxie": {
    title: "Color With Roxie",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FT2FCYX6", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FT2FCYX6",
        de: "https://www.amazon.de/dp/B0FT2FCYX6",
        it: "https://www.amazon.it/dp/B0FT2FCYX6",
        es: "https://www.amazon.es/dp/B0FT2FCYX6",
        fr: "https://www.amazon.fr/dp/B0FT2FCYX6",
        jp: "https://www.amazon.jp/dp/B0FT2FCYX6",
        au: "https://www.amazon.au/dp/B0FT2FCYX6",
        se: "https://www.amazon.se/dp/B0FT2FCYX6",
        pl: "https://www.amazon.pl/dp/B0FT2FCYX6",
        ca: "https://www.amazon.ca/dp/B0FT2FCYX6",
        nl: "https://www.amazon.nl/dp/B0FT2FCYX6",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FG1F8DGX", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FG1F8DGX",
        de: "https://www.amazon.de/dp/B0FG1F8DGX",
        it: "https://www.amazon.it/dp/B0FG1F8DGX",
        es: "https://www.amazon.es/dp/B0FG1F8DGX",
        fr: "https://www.amazon.fr/dp/B0FG1F8DGX",
        jp: "https://www.amazon.jp/dp/B0FG1F8DGX",
        au: "https://www.amazon.au/dp/B0FG1F8DGX",
        se: "https://www.amazon.se/dp/B0FG1F8DGX",
        pl: "https://www.amazon.pl/dp/B0FG1F8DGX",
        ca: "https://www.amazon.ca/dp/B0FG1F8DGX",
        nl: "https://www.amazon.nl/dp/B0FG1F8DGX",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/coloring-with-roxie/cover.jpg",
      "assets/img/books/coloring-with-roxie/p01.jpg",
      "assets/img/books/coloring-with-roxie/p02.jpg",
      "assets/img/books/coloring-with-roxie/p03.jpg",
      "assets/img/books/coloring-with-roxie/p04.jpg",
      "assets/img/books/coloring-with-roxie/p05.jpg",
      "assets/img/books/coloring-with-roxie/p06.jpg",
    ],
    sections: [
      "assets/img/books/coloring-with-roxie/sections/1.jpg",
      "assets/img/books/coloring-with-roxie/sections/2.jpg",
      "assets/img/books/coloring-with-roxie/sections/3.jpg",
      "assets/img/books/coloring-with-roxie/sections/4.jpg",
      "assets/img/books/coloring-with-roxie/sections/5.jpg",
    ],
    intro: [
      "Step into the elegant world of Roxie, the most stylish little mouse in all of Paris. With charm, poise, and a love for the finer things, Roxie invites you to color her glamorous life filled with fashion, fun, and Parisian magic.",
      "Drawn in a delightful and animated style, this coloring book is perfect for relaxing, dreaming, and expressing your creativity no matter your age.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and solve word search filled with words related to the story! A fun bonus activity to challenge little minds and sharp eyes after all the coloring fun.",
    ],
    bullets: [
      "40 original illustrations 100% unique and full of charm.",
      "Format: 8.25 x 8.25 in.",
      "Made to inspire elegance, imagination, and creativity.",
      "Ideal for travel, quiet afternoons, or gifting.",
      
    
    ]
  },

  "summer-splash": {
    title: "Summer Splash",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FR12RNMY", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FR12RNMY",
        de: "https://www.amazon.de/dp/B0FR12RNMY",
        it: "https://www.amazon.it/dp/B0FR12RNMY",
        es: "https://www.amazon.es/dp/B0FR12RNMY",
        fr: "https://www.amazon.fr/dp/B0FR12RNMY",
        jp: "https://www.amazon.jp/dp/B0FR12RNMY",
        au: "https://www.amazon.au/dp/B0FR12RNMY",
        se: "https://www.amazon.se/dp/B0FR12RNMY",
        pl: "https://www.amazon.pl/dp/B0FR12RNMY",
        ca: "https://www.amazon.ca/dp/B0FR12RNMY",
        nl: "https://www.amazon.nl/dp/B0FR12RNMY",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FFNGG45T", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FFNGG45T",
        de: "https://www.amazon.de/dp/B0FFNGG45T",
        it: "https://www.amazon.it/dp/B0FFNGG45T",
        es: "https://www.amazon.es/dp/B0FFNGG45T",
        fr: "https://www.amazon.fr/dp/B0FFNGG45T",
        jp: "https://www.amazon.jp/dp/B0FFNGG45T",
        au: "https://www.amazon.au/dp/B0FFNGG45T",
        se: "https://www.amazon.se/dp/B0FFNGG45T",
        pl: "https://www.amazon.pl/dp/B0FFNGG45T",
        ca: "https://www.amazon.ca/dp/B0FFNGG45T",
        nl: "https://www.amazon.nl/dp/B0FFNGG45T",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/summer-splash/cover.jpg",
      "assets/img/books/summer-splash/p01.jpg",
      "assets/img/books/summer-splash/p02.jpg",
      "assets/img/books/summer-splash/p03.jpg",
      "assets/img/books/summer-splash/p04.jpg",
      "assets/img/books/summer-splash/p05.jpg",
      "assets/img/books/summer-splash/p06.jpg",
    ],
    sections: [
      "assets/img/books/summer-splash/sections/1.jpg",
      "assets/img/books/summer-splash/sections/2.jpg",
      "assets/img/books/summer-splash/sections/3.jpg",
      "assets/img/books/summer-splash/sections/4.jpg",
      "assets/img/books/summer-splash/sections/5.jpg",
    ],
    intro: [
      "Welcome to a world of sun, sea, and smiles!",
      "This beautiful coloring book features 40 original black and white illustrations, celebrating everything we love about summer. From beach games to tropical fruits, from palm trees to firework nights. Summer Splash invites you to escape into a creative seaside adventure.",
      "Drawn in a delightful and animated style, this coloring book is perfect for relaxing, dreaming, and expressing your creativity no matter your age.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and solve maze challenge where you help the main character find their way through twists and turns! A playful final adventure to stimulate focus, patience, and problem-solving after all the coloring fun.",
    ],
    bullets: [
      "40 unique illustrations to color, full of beach life, joy, and fun details.",
      "Format: 8.25 x 8.25 in.",
      "Perfect for all ages: from children to adults who love to unwind through art.",
      "Single sided pages, to prevent bleed through and allow framing",
      
    
    ]
  },

  "a-day-in-the-life-of-little-witch": {
    title: "A day in the life of Little Witch",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FF4ZGXRK", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FF4ZGXRK",
        de: "https://www.amazon.de/dp/B0FF4ZGXRK",
        it: "https://www.amazon.it/dp/B0FF4ZGXRK",
        es: "https://www.amazon.es/dp/B0FF4ZGXRK",
        fr: "https://www.amazon.fr/dp/B0FF4ZGXRK",
        jp: "https://www.amazon.jp/dp/B0FF4ZGXRK",
        au: "https://www.amazon.au/dp/B0FF4ZGXRK",
        se: "https://www.amazon.se/dp/B0FF4ZGXRK",
        pl: "https://www.amazon.pl/dp/B0FF4ZGXRK",
        ca: "https://www.amazon.ca/dp/B0FF4ZGXRK",
        nl: "https://www.amazon.nl/dp/B0FF4ZGXRK",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FG31MSVZ", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FG31MSVZ",
        de: "https://www.amazon.de/dp/B0FG31MSVZ",
        it: "https://www.amazon.it/dp/B0FG31MSVZ",
        es: "https://www.amazon.es/dp/B0FG31MSVZ",
        fr: "https://www.amazon.fr/dp/B0FG31MSVZ",
        jp: "https://www.amazon.jp/dp/B0FG31MSVZ",
        au: "https://www.amazon.au/dp/B0FG31MSVZ",
        se: "https://www.amazon.se/dp/B0FG31MSVZ",
        pl: "https://www.amazon.pl/dp/B0FG31MSVZ",
        ca: "https://www.amazon.ca/dp/B0FG31MSVZ",
        nl: "https://www.amazon.nl/dp/B0FG31MSVZ",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/a-day-in-the-life-of-little-witch/cover.png",
      "assets/img/books/a-day-in-the-life-of-little-witch/p01.png",
      "assets/img/books/a-day-in-the-life-of-little-witch/p02.png",
      "assets/img/books/a-day-in-the-life-of-little-witch/p03.png",
      "assets/img/books/a-day-in-the-life-of-little-witch/p04.png",
      "assets/img/books/a-day-in-the-life-of-little-witch/p05.png",
      "assets/img/books/a-day-in-the-life-of-little-witch/p06.png",
    ],
    sections: [
      "assets/img/books/a-day-in-the-life-of-little-witch/sections/1.png",
      "assets/img/books/a-day-in-the-life-of-little-witch/sections/2.png",
      "assets/img/books/a-day-in-the-life-of-little-witch/sections/3.png",
      "assets/img/books/a-day-in-the-life-of-little-witch/sections/4.png",
      "assets/img/books/a-day-in-the-life-of-little-witch/sections/5.png",
    ],
    intro: [
      " Step into the enchanting world of a little witch and discover the magic hidden in her everyday life! From brewing potions and painting moonlit dreams to flying over rainbows and reading ancient spell books each page invites you to join her sweet and magical adventures.",
      " In this beautiful coloring book, you’ll meet a curious little witch with a big heart, a loyal cat, and many magical friends. Whether she’s baking enchanted cookies, exploring the stars through a telescope, or discovering glowing mushrooms in the forest, every moment of her day is filled with wonder, imagination, and fun!",
      "🎁 Bonus Included! At the end of the book, enjoy a magical word search filled with all the special things in her world a fun little brain adventure after all the coloring!",
    ],
    bullets: [
      "40 magical illustrations, each scene is full of charm, magic, and delightful surprises",
      "Format: 8.25 x 8.25 in.",
      "Single sided pages, ideal for markers, crayons, or colored pencils",
      "For all ages, perfect for kids, teens, and adults who love magical worlds",
      
    
    ]
  },

  "timeless-treasures": {
    title: "Timeless Treasures",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FT2KK23Q", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FT2KK23Q",
        de: "https://www.amazon.de/dp/B0FT2KK23Q",
        it: "https://www.amazon.it/dp/B0FT2KK23Q",
        es: "https://www.amazon.es/dp/B0FT2KK23Q",
        fr: "https://www.amazon.fr/dp/B0FT2KK23Q",
        jp: "https://www.amazon.jp/dp/B0FT2KK23Q",
        au: "https://www.amazon.au/dp/B0FT2KK23Q",
        se: "https://www.amazon.se/dp/B0FT2KK23Q",
        pl: "https://www.amazon.pl/dp/B0FT2KK23Q",
        ca: "https://www.amazon.ca/dp/B0FT2KK23Q",
        nl: "https://www.amazon.nl/dp/B0FT2KK23Q",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FG6X4RLC", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FG6X4RLC",
        de: "https://www.amazon.de/dp/B0FG6X4RLC",
        it: "https://www.amazon.it/dp/B0FG6X4RLC",
        es: "https://www.amazon.es/dp/B0FG6X4RLC",
        fr: "https://www.amazon.fr/dp/B0FG6X4RLC",
        jp: "https://www.amazon.jp/dp/B0FG6X4RLC",
        au: "https://www.amazon.au/dp/B0FG6X4RLC",
        se: "https://www.amazon.se/dp/B0FG6X4RLC",
        pl: "https://www.amazon.pl/dp/B0FG6X4RLC",
        ca: "https://www.amazon.ca/dp/B0FG6X4RLC",
        nl: "https://www.amazon.nl/dp/B0FG6X4RLC",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/timeless-treasures/cover.jpg",
      "assets/img/books/timeless-treasures/p01.jpg",
      "assets/img/books/timeless-treasures/p02.jpg",
      "assets/img/books/timeless-treasures/p03.jpg",
      "assets/img/books/timeless-treasures/p04.jpg",
      "assets/img/books/timeless-treasures/p05.jpg",
      "assets/img/books/timeless-treasures/p06.jpg",
    ],
    sections: [
      "assets/img/books/timeless-treasures/sections/1.jpg",
      "assets/img/books/timeless-treasures/sections/2.jpg",
      "assets/img/books/timeless-treasures/sections/3.jpg",
      "assets/img/books/timeless-treasures/sections/4.jpg",
      "assets/img/books/timeless-treasures/sections/5.jpg",
    ],
    intro: [
      "Timeless Treasures. Vintage Objects to Color is a fun and unique book for coloring, discovering, and observing. Travel through time as you create in the present.",
      "This coloring book is an invitation to travel back in time through 40 curious objects that few people use today. Timeless Treasures will guide you through fascinating artifacts, full of details and unique shapes that defined past eras. You'll find bellows cameras, gramophones, pocket watches, typewriters, retro consoles, and more. Each illustration is a visual adventure, ready to come to life with your colors.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and solve word search filled with words related to the story! A fun bonus activity to challenge little minds and sharp eyes after all the coloring fun.",
    ],
    bullets: [
      "40 original illustrations, each object is rich in detail and perfect for coloring.",
      "Format: 8.25 x 8.25 in.",
      "Single sided printing, perfect for markers, pencils, or crayons without worries",
      "Fun for all ages, from visual explorers to retro design lovers",
      
    
    ]
  },

  "the-new-era-jurassic-tek": {
    title: "The New Era Jurassic Tek",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FDG3VNZY", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FDG3VNZY",
        de: "https://www.amazon.de/dp/B0FDG3VNZY",
        it: "https://www.amazon.it/dp/B0FDG3VNZY",
        es: "https://www.amazon.es/dp/B0FDG3VNZY",
        fr: "https://www.amazon.fr/dp/B0FDG3VNZY",
        jp: "https://www.amazon.jp/dp/B0FDG3VNZY",
        au: "https://www.amazon.au/dp/B0FDG3VNZY",
        se: "https://www.amazon.se/dp/B0FDG3VNZY",
        pl: "https://www.amazon.pl/dp/B0FDG3VNZY",
        ca: "https://www.amazon.ca/dp/B0FDG3VNZY",
        nl: "https://www.amazon.nl/dp/B0FDG3VNZY",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJD6XQZP", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJD6XQZP",
        de: "https://www.amazon.de/dp/B0FJD6XQZP",
        it: "https://www.amazon.it/dp/B0FJD6XQZP",
        es: "https://www.amazon.es/dp/B0FJD6XQZP",
        fr: "https://www.amazon.fr/dp/B0FJD6XQZP",
        jp: "https://www.amazon.jp/dp/B0FJD6XQZP",
        au: "https://www.amazon.au/dp/B0FJD6XQZP",
        se: "https://www.amazon.se/dp/B0FJD6XQZP",
        pl: "https://www.amazon.pl/dp/B0FJD6XQZP",
        ca: "https://www.amazon.ca/dp/B0FJD6XQZP",
        nl: "https://www.amazon.nl/dp/B0FJD6XQZP",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/the-new-era-jurassic-tek/cover.jpg",
      "assets/img/books/the-new-era-jurassic-tek/p01.jpg",
      "assets/img/books/the-new-era-jurassic-tek/p02.jpg",
      "assets/img/books/the-new-era-jurassic-tek/p03.jpg",
      "assets/img/books/the-new-era-jurassic-tek/p04.jpg",
      "assets/img/books/the-new-era-jurassic-tek/p05.jpg",
      "assets/img/books/the-new-era-jurassic-tek/p06.jpg",
    ],
    sections: [
      "assets/img/books/the-new-era-jurassic-tek/sections/1.jpg",
      "assets/img/books/the-new-era-jurassic-tek/sections/2.jpg",
      "assets/img/books/the-new-era-jurassic-tek/sections/3.jpg",
      "assets/img/books/the-new-era-jurassic-tek/sections/4.jpg",
      "assets/img/books/the-new-era-jurassic-tek/sections/5.jpg",
    ],
    intro: [
      "Welcome to the thrilling world of The New Era: Jurassic Tek a high tech coloring adventure where prehistoric power meets futuristic innovation! From mighty T-Rexes with metal jaws to soaring robotic Trike, this one of a kind coloring book features 30 action packed illustrations of dinosaur machines.",
      "Each page invites kids to explore the wild fusion of nature and technology in a world where dinosaurs evolve into incredible mechanical marvels. Perfect for dino lovers and creative explorers ready to color their way through a world where the Jurassic meets the future.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "30 original black and white illustrations of robotic dinosaurs.",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity, imagination, and love for science & fantasy.",
      "Fun for all ages,future engineers, and dinosaur enthusiasts.",
      
    
    ]
  },


"pixel-baby-animals": {
    title: "Pixel Baby Animals",
    price: 8.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FF1NL2FY", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FF1NL2FY",
        de: "https://www.amazon.de/dp/B0FF1NL2FY",
        it: "https://www.amazon.it/dp/B0FF1NL2FY",
        es: "https://www.amazon.es/dp/B0FF1NL2FY",
        fr: "https://www.amazon.fr/dp/B0FF1NL2FY",
        jp: "https://www.amazon.jp/dp/B0FF1NL2FY",
        au: "https://www.amazon.au/dp/B0FF1NL2FY",
        se: "https://www.amazon.se/dp/B0FF1NL2FY",
        pl: "https://www.amazon.pl/dp/B0FF1NL2FY",
        ca: "https://www.amazon.ca/dp/B0FF1NL2FY",
        nl: "https://www.amazon.nl/dp/B0FF1NL2FY",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJR8DMDS", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJR8DMDS",
        de: "https://www.amazon.de/dp/B0FJR8DMDS",
        it: "https://www.amazon.it/dp/B0FJR8DMDS",
        es: "https://www.amazon.es/dp/B0FJR8DMDS",
        fr: "https://www.amazon.fr/dp/B0FJR8DMDS",
        jp: "https://www.amazon.jp/dp/B0FJR8DMDS",
        au: "https://www.amazon.au/dp/B0FJR8DMDS",
        se: "https://www.amazon.se/dp/B0FJR8DMDS",
        pl: "https://www.amazon.pl/dp/B0FJR8DMDS",
        ca: "https://www.amazon.ca/dp/B0FJR8DMDS",
        nl: "https://www.amazon.nl/dp/B0FJR8DMDS",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/pixel-baby-animals/cover.jpg",
      "assets/img/books/pixel-baby-animals/p01.jpg",
      "assets/img/books/pixel-baby-animals/p02.jpg",
      "assets/img/books/pixel-baby-animals/p03.jpg",
      "assets/img/books/pixel-baby-animals/p04.jpg",
      "assets/img/books/pixel-baby-animals/p05.jpg",
      "assets/img/books/pixel-baby-animals/p06.jpg",
    ],
    sections: [
      "assets/img/books/pixel-baby-animals/sections/1.jpg",
      "assets/img/books/pixel-baby-animals/sections/2.jpg",
      "assets/img/books/pixel-baby-animals/sections/3.jpg",
      "assets/img/books/pixel-baby-animals/sections/4.jpg",
      "assets/img/books/pixel-baby-animals/sections/5.jpg",
    ],
    intro: [
      "Get ready to pixel your way into cuteness with Pixel Baby Animals A Cute Coloring Book! Step into a tiny world of charm where adorable baby animals are waiting to come to life with your colors!",
      "From baby sealions to penguins and turtles each page features a delightful digital creature in super cute pixel style. Perfect for kids who love animals, pixel art, and creative fun in a pocket sized format!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "30 original black and white illustrations of baby animals in charming pixel style.",
      "Format: 6 x 6 inches small, fun, and perfect for on the go coloring!",
      "Encourages focus, creativity, and fine motor skills.",
      "Fun for all ages,animal lovers, and fans of Minecraft style art.",
      
    
    ]
  },

  "pixel-baby-animals-II": {
    title: "Pixel Baby Animals II",
    price: 8.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH8WJ1QG", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH8WJ1QG",
        de: "https://www.amazon.de/dp/B0FH8WJ1QG",
        it: "https://www.amazon.it/dp/B0FH8WJ1QG",
        es: "https://www.amazon.es/dp/B0FH8WJ1QG",
        fr: "https://www.amazon.fr/dp/B0FH8WJ1QG",
        jp: "https://www.amazon.jp/dp/B0FH8WJ1QG",
        au: "https://www.amazon.au/dp/B0FH8WJ1QG",
        se: "https://www.amazon.se/dp/B0FH8WJ1QG",
        pl: "https://www.amazon.pl/dp/B0FH8WJ1QG",
        ca: "https://www.amazon.ca/dp/B0FH8WJ1QG",
        nl: "https://www.amazon.nl/dp/B0FH8WJ1QG",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJRBB81R", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJRBB81R",
        de: "https://www.amazon.de/dp/B0FJRBB81R",
        it: "https://www.amazon.it/dp/B0FJRBB81R",
        es: "https://www.amazon.es/dp/B0FJRBB81R",
        fr: "https://www.amazon.fr/dp/B0FJRBB81R",
        jp: "https://www.amazon.jp/dp/B0FJRBB81R",
        au: "https://www.amazon.au/dp/B0FJRBB81R",
        se: "https://www.amazon.se/dp/B0FJRBB81R",
        pl: "https://www.amazon.pl/dp/B0FJRBB81R",
        ca: "https://www.amazon.ca/dp/B0FJRBB81R",
        nl: "https://www.amazon.nl/dp/B0FJRBB81R",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/pixel-baby-animals-II/cover.jpg",
      "assets/img/books/pixel-baby-animals-II/p01.jpg",
      "assets/img/books/pixel-baby-animals-II/p02.jpg",
      "assets/img/books/pixel-baby-animals-II/p03.jpg",
      "assets/img/books/pixel-baby-animals-II/p04.jpg",
      "assets/img/books/pixel-baby-animals-II/p05.jpg",
      "assets/img/books/pixel-baby-animals-II/p06.jpg",
    ],
    sections: [
      "assets/img/books/pixel-baby-animals-II/sections/1.jpg",
      "assets/img/books/pixel-baby-animals-II/sections/2.jpg",
      "assets/img/books/pixel-baby-animals-II/sections/3.jpg",
      "assets/img/books/pixel-baby-animals-II/sections/4.jpg",
      "assets/img/books/pixel-baby-animals-II/sections/5.jpg",
    ],
    intro: [
      "The baby animals are back and cuter than ever! This second volume brings 30 brand new pixel art animals, ready to be colored and loved. Each page bursts with charm in that iconic pixel perfect style.",
      "Perfect for kids who enjoy animals, video game vibes, and coloring on the go!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "30 original black and white illustrations of baby animals in pixel art style.",
      "Format: 6 x 6 inches small, fun, and perfect for on the go coloring!",
      "Supports focus, creativity, and fine motor skill development.",
      "Fun for all ages,animal lovers, and fans of Minecraft style art.",
      
    
    ]
  },

  "pixel-art-animals": {
    title: "Pixel Art Animals",
    price: 8.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FFGHYB5F", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FFGHYB5F",
        de: "https://www.amazon.de/dp/B0FFGHYB5F",
        it: "https://www.amazon.it/dp/B0FFGHYB5F",
        es: "https://www.amazon.es/dp/B0FFGHYB5F",
        fr: "https://www.amazon.fr/dp/B0FFGHYB5F",
        jp: "https://www.amazon.jp/dp/B0FFGHYB5F",
        au: "https://www.amazon.au/dp/B0FFGHYB5F",
        se: "https://www.amazon.se/dp/B0FFGHYB5F",
        pl: "https://www.amazon.pl/dp/B0FFGHYB5F",
        ca: "https://www.amazon.ca/dp/B0FFGHYB5F",
        nl: "https://www.amazon.nl/dp/B0FFGHYB5F",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJR8HVQH", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJR8HVQH",
        de: "https://www.amazon.de/dp/B0FJR8HVQH",
        it: "https://www.amazon.it/dp/B0FJR8HVQH",
        es: "https://www.amazon.es/dp/B0FJR8HVQH",
        fr: "https://www.amazon.fr/dp/B0FJR8HVQH",
        jp: "https://www.amazon.jp/dp/B0FJR8HVQH",
        au: "https://www.amazon.au/dp/B0FJR8HVQH",
        se: "https://www.amazon.se/dp/B0FJR8HVQH",
        pl: "https://www.amazon.pl/dp/B0FJR8HVQH",
        ca: "https://www.amazon.ca/dp/B0FJR8HVQH",
        nl: "https://www.amazon.nl/dp/B0FJR8HVQH",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/pixel-art-animals/cover.jpg",
      "assets/img/books/pixel-art-animals/p01.jpg",
      "assets/img/books/pixel-art-animals/p02.jpg",
      "assets/img/books/pixel-art-animals/p03.jpg",
      "assets/img/books/pixel-art-animals/p04.jpg",
      "assets/img/books/pixel-art-animals/p05.jpg",
      "assets/img/books/pixel-art-animals/p06.jpg",
    ],
    sections: [
      "assets/img/books/pixel-art-animals/sections/1.jpg",
      "assets/img/books/pixel-art-animals/sections/2.jpg",
      "assets/img/books/pixel-art-animals/sections/3.jpg",
      "assets/img/books/pixel-art-animals/sections/4.jpg",
      "assets/img/books/pixel-art-animals/sections/5.jpg",
    ],
    intro: [
      "Ready to dive into a world of cute critters and pixel-perfect fun? This charming coloring book features 30 delightful pixel art animals, each designed to spark creativity and bring joy to your day. Every page is a cozy celebration of animals in adorable blocky style.",
      "Whether you're a young artist, a fan of retro games, or just someone who loves all things cute and creative, this book is your perfect companion. Grab your favorite colors it’s time to pixel and play!!",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "30 original black and white illustrations of baby animals in pixel art style.",
      "Format: 6 x 6 inches small, fun, and perfect for on the go coloring!",
      "Promotes creativity, focus, and screen free fun.",
      "Fun for all ages,perfect for kids, game lovers, and fans of pixel art!",
      
    
    ]
  },


"monster-trucks": {
    title: "Monster Trucks",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FH9GTFTB", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FH9GTFTB",
        de: "https://www.amazon.de/dp/B0FH9GTFTB",
        it: "https://www.amazon.it/dp/B0FH9GTFTB",
        es: "https://www.amazon.es/dp/B0FH9GTFTB",
        fr: "https://www.amazon.fr/dp/B0FH9GTFTB",
        jp: "https://www.amazon.jp/dp/B0FH9GTFTB",
        au: "https://www.amazon.au/dp/B0FH9GTFTB",
        se: "https://www.amazon.se/dp/B0FH9GTFTB",
        pl: "https://www.amazon.pl/dp/B0FH9GTFTB",
        ca: "https://www.amazon.ca/dp/B0FH9GTFTB",
        nl: "https://www.amazon.nl/dp/B0FH9GTFTB",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJX9C23T", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJX9C23T",
        de: "https://www.amazon.de/dp/B0FJX9C23T",
        it: "https://www.amazon.it/dp/B0FJX9C23T",
        es: "https://www.amazon.es/dp/B0FJX9C23T",
        fr: "https://www.amazon.fr/dp/B0FJX9C23T",
        jp: "https://www.amazon.jp/dp/B0FJX9C23T",
        au: "https://www.amazon.au/dp/B0FJX9C23T",
        se: "https://www.amazon.se/dp/B0FJX9C23T",
        pl: "https://www.amazon.pl/dp/B0FJX9C23T",
        ca: "https://www.amazon.ca/dp/B0FJX9C23T",
        nl: "https://www.amazon.nl/dp/B0FJX9C23T",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/monster-trucks/cover.jpg",
      "assets/img/books/monster-trucks/p01.jpg",
      "assets/img/books/monster-trucks/p02.jpg",
      "assets/img/books/monster-trucks/p03.jpg",
      "assets/img/books/monster-trucks/p04.jpg",
      "assets/img/books/monster-trucks/p05.jpg",
      "assets/img/books/monster-trucks/p06.jpg",
    ],
    sections: [
      "assets/img/books/monster-trucks/sections/1.jpg",
      "assets/img/books/monster-trucks/sections/2.jpg",
      "assets/img/books/monster-trucks/sections/3.jpg",
      "assets/img/books/monster-trucks/sections/4.jpg",
      "assets/img/books/monster-trucks/sections/5.jpg",
    ],
    intro: [
      "This high octane coloring book features 25 action packed illustrations of powerful monster trucks crushing cars, jumping ramps, racing through dirt, and dodging danger!",
      "Perfect for kids and truck lovers who enjoy bold designs, big wheels, and thrilling stunts.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "25 black and white illustrations of epic monster truck scenes.",
      "Format: 6 x 6 inches small, fun, and perfect for on the go coloring!",
      "Encourages creativity, focus, and fine motor skills.",
      "For all ages and fans of motorsport action.",
      
    
    ]
  },

  "color-and-go": {
    title: "Color & GO",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FDG3M9JQ", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FDG3M9JQ",
        de: "https://www.amazon.de/dp/B0FDG3M9JQ",
        it: "https://www.amazon.it/dp/B0FDG3M9JQ",
        es: "https://www.amazon.es/dp/B0FDG3M9JQ",
        fr: "https://www.amazon.fr/dp/B0FDG3M9JQ",
        jp: "https://www.amazon.jp/dp/B0FDG3M9JQ",
        au: "https://www.amazon.au/dp/B0FDG3M9JQ",
        se: "https://www.amazon.se/dp/B0FDG3M9JQ",
        pl: "https://www.amazon.pl/dp/B0FDG3M9JQ",
        ca: "https://www.amazon.ca/dp/B0FDG3M9JQ",
        nl: "https://www.amazon.nl/dp/B0FDG3M9JQ",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FJDK64LR", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FJDK64LR",
        de: "https://www.amazon.de/dp/B0FJDK64LR",
        it: "https://www.amazon.it/dp/B0FJDK64LR",
        es: "https://www.amazon.es/dp/B0FJDK64LR",
        fr: "https://www.amazon.fr/dp/B0FJDK64LR",
        jp: "https://www.amazon.jp/dp/B0FJDK64LR",
        au: "https://www.amazon.au/dp/B0FJDK64LR",
        se: "https://www.amazon.se/dp/B0FJDK64LR",
        pl: "https://www.amazon.pl/dp/B0FJDK64LR",
        ca: "https://www.amazon.ca/dp/B0FJDK64LR",
        nl: "https://www.amazon.nl/dp/B0FJDK64LR",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/color-and-go/cover.jpg",
      "assets/img/books/color-and-go/p01.jpg",
      "assets/img/books/color-and-go/p02.jpg",
      "assets/img/books/color-and-go/p03.jpg",
      "assets/img/books/color-and-go/p04.jpg",
      "assets/img/books/color-and-go/p05.jpg",
      "assets/img/books/color-and-go/p06.jpg",
    ],
    sections: [
      "assets/img/books/color-and-go/sections/1.jpg",
      "assets/img/books/color-and-go/sections/2.jpg",
      "assets/img/books/color-and-go/sections/3.jpg",
      "assets/img/books/color-and-go/sections/4.jpg",
      "assets/img/books/color-and-go/sections/5.jpg",
    ],
    intro: [
      "Unleash your creativity and fuel your imagination with this action-packed car coloring book! Whether you're a young car enthusiast or an adult who loves roaring engines and sleek designs, this book is your ultimate ride.",
      "Add to cart now and start your coloring engine!",
      "🎁 Bonus Included!Includes 4 extra pages of car-themed parts to color, cut, and paste like spoilers, wheels, cones, headlights, and more! Kids can use them to upgrade their favorite cars or create their own custom racing scenes. Rev up your coloring skills and bring these powerful vehicles to life!",
    ],
    bullets: [
      "40 high quality illustrations with custom cars.",
      "Format: 8.25 x 8.25 in.",
      "Encourages creativity, focus, and fine motor skills.",
      "Ideal for relaxation, focus, and stress relief.",
      "4 bonus customization pages.",
      "Perfect for birthdays, road trips, or creative afternoons.",
      
    
    ]
  },

  "goblins-lost-in-halloween": {
    title: "Goblins Lost in Halloween",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FYVMGN87", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FYVMGN87",
        de: "https://www.amazon.de/dp/B0FYVMGN87",
        it: "https://www.amazon.it/dp/B0FYVMGN87",
        es: "https://www.amazon.es/dp/B0FYVMGN87",
        fr: "https://www.amazon.fr/dp/B0FYVMGN87",
        jp: "https://www.amazon.jp/dp/B0FYVMGN87",
        au: "https://www.amazon.au/dp/B0FYVMGN87",
        se: "https://www.amazon.se/dp/B0FYVMGN87",
        pl: "https://www.amazon.pl/dp/B0FYVMGN87",
        ca: "https://www.amazon.ca/dp/B0FYVMGN87",
        nl: "https://www.amazon.nl/dp/B0FYVMGN87",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FYVNJZPL", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FYVNJZPL",
        de: "https://www.amazon.de/dp/B0FYVNJZPL",
        it: "https://www.amazon.it/dp/B0FYVNJZPL",
        es: "https://www.amazon.es/dp/B0FYVNJZPL",
        fr: "https://www.amazon.fr/dp/B0FYVNJZPL",
        jp: "https://www.amazon.jp/dp/B0FYVNJZPL",
        au: "https://www.amazon.au/dp/B0FYVNJZPL",
        se: "https://www.amazon.se/dp/B0FYVNJZPL",
        pl: "https://www.amazon.pl/dp/B0FYVNJZPL",
        ca: "https://www.amazon.ca/dp/B0FYVNJZPL",
        nl: "https://www.amazon.nl/dp/B0FYVNJZPL",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/goblins-lost-in-halloween/cover.jpg",
      "assets/img/books/goblins-lost-in-halloween/1.jpg",
      "assets/img/books/goblins-lost-in-halloween/2.jpg",
      "assets/img/books/goblins-lost-in-halloween/3.jpg",
      "assets/img/books/goblins-lost-in-halloween/4.jpg",
      "assets/img/books/goblins-lost-in-halloween/5.jpg",
      "assets/img/books/goblins-lost-in-halloween/6.jpg",
    ],
    sections: [
      "assets/img/books/goblins-lost-in-halloween/sections/1.jpg",
      "assets/img/books/goblins-lost-in-halloween/sections/2.jpg",
      "assets/img/books/goblins-lost-in-halloween/sections/3.jpg",
      "assets/img/books/goblins-lost-in-halloween/sections/4.jpg",
      "assets/img/books/goblins-lost-in-halloween/sections/5.jpg",
    ],
    intro: [
      "Step into a playful world of this book Goblin Lost in Halloween! ",
      "Meet the funniest little goblins of the season dressed up in the cutest Halloween costumes you’ve ever seen! Each page is packed with silly adventures, pumpkins, candies, bats, and magical autumn vibes that will make you smile from ear to ear.",
      "This book includes 40 original black and white illustrations filled with charming details and spooky-cute surprises. Perfect for anyone who loves Halloween art with a funny twist!",
      "💜 Bonus Included! At the end of the book, you’ll find a special sticker activity where you can color, cut, and glue adorable Halloween stickers right inside your book a perfect creative touch for crafty little hands and imaginative minds!",
    ],
    bullets: [
      "40 unique black and white illustrations to color.",
      "Format: 8.25 x 8.25 in.",
      "Great for kids and adults who love cute, funny Halloween goblins.",
      "Encourages creativity, relaxation, and spooky autumn joy.",
      
    ]
  },


  "goblins-dressed-for-halloween": {
    title: "Goblins Dressed for Halloween",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FYVM7YSR", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FYVM7YSR",
        de: "https://www.amazon.de/dp/B0FYVM7YSR",
        it: "https://www.amazon.it/dp/B0FYVM7YSR",
        es: "https://www.amazon.es/dp/B0FYVM7YSR",
        fr: "https://www.amazon.fr/dp/B0FYVM7YSR",
        jp: "https://www.amazon.jp/dp/B0FYVM7YSR",
        au: "https://www.amazon.au/dp/B0FYVM7YSR",
        se: "https://www.amazon.se/dp/B0FYVM7YSR",
        pl: "https://www.amazon.pl/dp/B0FYVM7YSR",
        ca: "https://www.amazon.ca/dp/B0FYVM7YSR",
        nl: "https://www.amazon.nl/dp/B0FYVM7YSR",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FYVF5M5Y", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FYVF5M5Y",
        de: "https://www.amazon.de/dp/B0FYVF5M5Y",
        it: "https://www.amazon.it/dp/B0FYVF5M5Y",
        es: "https://www.amazon.es/dp/B0FYVF5M5Y",
        fr: "https://www.amazon.fr/dp/B0FYVF5M5Y",
        jp: "https://www.amazon.jp/dp/B0FYVF5M5Y",
        au: "https://www.amazon.au/dp/B0FYVF5M5Y",
        se: "https://www.amazon.se/dp/B0FYVF5M5Y",
        pl: "https://www.amazon.pl/dp/B0FYVF5M5Y",
        ca: "https://www.amazon.ca/dp/B0FYVF5M5Y",
        nl: "https://www.amazon.nl/dp/B0FYVF5M5Y",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/goblins-dressed-for-halloween/cover.jpg",
      "assets/img/books/goblins-dressed-for-halloween/1.jpg",
      "assets/img/books/goblins-dressed-for-halloween/2.jpg",
      "assets/img/books/goblins-dressed-for-halloween/3.jpg",
      "assets/img/books/goblins-dressed-for-halloween/4.jpg",
      "assets/img/books/goblins-dressed-for-halloween/5.jpg",
      "assets/img/books/goblins-dressed-for-halloween/6.jpg",
    ],
    sections: [
      "assets/img/books/goblins-dressed-for-halloween/sections/1.jpg",
      "assets/img/books/goblins-dressed-for-halloween/sections/2.jpg",
      "assets/img/books/goblins-dressed-for-halloween/sections/3.jpg",
      "assets/img/books/goblins-dressed-for-halloween/sections/4.jpg",
      "assets/img/books/goblins-dressed-for-halloween/sections/5.jpg",
    ],
    intro: [
      "Get lost in the magical chaos of Halloween night with the funniest little goblins around! ",
      "Follow our mischievous goblin friends as they stumble through a spooky Halloween full of surprises from playful skeletons dancing under the moon, to goblins painting pumpkins, scaring scarecrows, or popping out of mysterious boxes! Every page is bursting with laughter, pumpkins, and that cozy Halloween spirit we all love.",
      "This book includes 45 original black and white illustrations filled with charming, funny, and spooky cute details. Perfect for anyone who adores imaginative Halloween adventures and adorable goblin chaos!",
      "💜 Bonus Included! At the end of the book, you’ll find a special puzzle activity connected to the story a fun challenge to color, cut, and assemble, bringing even more creativity to your Halloween adventure!",
    ],
    bullets: [
      "45 unique black and white illustrations to enjoy.",
      "Format: 8.25 x 8.25 in.",
      "Great for kids and adults who love funny, spooky goblin stories.",
      "Encourages creativity, relaxation, and Halloween joy.",
      
    ]
  },

  "mythical-creatures": {
    title: "Mythical Creatures",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FCM9G2SH", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FCM9G2SH",
        de: "https://www.amazon.de/dp/B0FCM9G2SH",
        it: "https://www.amazon.it/dp/B0FCM9G2SH",
        es: "https://www.amazon.es/dp/B0FCM9G2SH",
        fr: "https://www.amazon.fr/dp/B0FCM9G2SH",
        jp: "https://www.amazon.jp/dp/B0FCM9G2SH",
        au: "https://www.amazon.au/dp/B0FCM9G2SH",
        se: "https://www.amazon.se/dp/B0FCM9G2SH",
        pl: "https://www.amazon.pl/dp/B0FCM9G2SH",
        ca: "https://www.amazon.ca/dp/B0FCM9G2SH",
        nl: "https://www.amazon.nl/dp/B0FCM9G2SH",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FK3CZRZJ", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FK3CZRZJ",
        de: "https://www.amazon.de/dp/B0FK3CZRZJ",
        it: "https://www.amazon.it/dp/B0FK3CZRZJ",
        es: "https://www.amazon.es/dp/B0FK3CZRZJ",
        fr: "https://www.amazon.fr/dp/B0FK3CZRZJ",
        jp: "https://www.amazon.jp/dp/B0FK3CZRZJ",
        au: "https://www.amazon.au/dp/B0FK3CZRZJ",
        se: "https://www.amazon.se/dp/B0FK3CZRZJ",
        pl: "https://www.amazon.pl/dp/B0FK3CZRZJ",
        ca: "https://www.amazon.ca/dp/B0FK3CZRZJ",
        nl: "https://www.amazon.nl/dp/B0FK3CZRZJ",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/mythical-creatures/cover.jpg",
      "assets/img/books/mythical-creatures/p01.jpg",
      "assets/img/books/mythical-creatures/p02.jpg",
      "assets/img/books/mythical-creatures/p03.jpg",
      "assets/img/books/mythical-creatures/p04.jpg",
      "assets/img/books/mythical-creatures/p05.jpg",
      "assets/img/books/mythical-creatures/p06.jpg",
    ],
    sections: [
      "assets/img/books/mythical-creatures/sections/1.jpg",
      "assets/img/books/mythical-creatures/sections/2.jpg",
      "assets/img/books/mythical-creatures/sections/3.jpg",
      "assets/img/books/mythical-creatures/sections/4.jpg",
      "assets/img/books/mythical-creatures/sections/5.jpg",
    ],
    intro: [
      "Travel through legends and across cultures with this exciting coloring book featuring 25 mythical creatures from around the world! From the mysterious Medusa of Ancient Greece to the mighty Jörmungandr of Norse mythology, each page introduces a legendary being brought to life through bold, imaginative line art — ready for you to color!",
      "Perfect for curious minds and creative hands, this book invites children, teens, and adults to explore powerful legends and epic monsters from global folklore. Whether you're fascinated by ancient tales or simply love coloring fantastic creatures, this journey promises wonder and fun on every page.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "25 mythical creatures from various cultures.",
      "Format: 8.27 x 11.69 inches",
      "Sparks imagination and appreciation for world mythology.",
      "Great for fantasy lovers, students, and artistic souls.",
      
    
    ]
  },

  "cube-world": {
    title: "Cube World",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FDKSVNW3", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FDKSVNW3",
        de: "https://www.amazon.de/dp/B0FDKSVNW3",
        it: "https://www.amazon.it/dp/B0FDKSVNW3",
        es: "https://www.amazon.es/dp/B0FDKSVNW3",
        fr: "https://www.amazon.fr/dp/B0FDKSVNW3",
        jp: "https://www.amazon.jp/dp/B0FDKSVNW3",
        au: "https://www.amazon.au/dp/B0FDKSVNW3",
        se: "https://www.amazon.se/dp/B0FDKSVNW3",
        pl: "https://www.amazon.pl/dp/B0FDKSVNW3",
        ca: "https://www.amazon.ca/dp/B0FDKSVNW3",
        nl: "https://www.amazon.nl/dp/B0FDKSVNW3",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FK3DQVZV", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FK3DQVZV",
        de: "https://www.amazon.de/dp/B0FK3DQVZV",
        it: "https://www.amazon.it/dp/B0FK3DQVZV",
        es: "https://www.amazon.es/dp/B0FK3DQVZV",
        fr: "https://www.amazon.fr/dp/B0FK3DQVZV",
        jp: "https://www.amazon.jp/dp/B0FK3DQVZV",
        au: "https://www.amazon.au/dp/B0FK3DQVZV",
        se: "https://www.amazon.se/dp/B0FK3DQVZV",
        pl: "https://www.amazon.pl/dp/B0FK3DQVZV",
        ca: "https://www.amazon.ca/dp/B0FK3DQVZV",
        nl: "https://www.amazon.nl/dp/B0FK3DQVZV",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/cube-world/cover.jpg",
      "assets/img/books/cube-world/p01.jpg",
      "assets/img/books/cube-world/p02.jpg",
      "assets/img/books/cube-world/p03.jpg",
      "assets/img/books/cube-world/p04.jpg",
      "assets/img/books/cube-world/p05.jpg",
      "assets/img/books/cube-world/p06.jpg",
    ],
    sections: [
      "assets/img/books/cube-world/sections/1.jpg",
      "assets/img/books/cube-world/sections/2.jpg",
      "assets/img/books/cube-world/sections/3.jpg",
      "assets/img/books/cube-world/sections/4.jpg",
      "assets/img/books/cube-world/sections/5.jpg",
    ],
    intro: [
      "Dive into the wild and wonderful world of Cube World Animal Coloring Book, a bold and imaginative coloring adventure that jumps off the page! From sleeping bears to leaping dolphins, this exciting coloring book features 30 eye catching 3D style animal illustrations designed to captivate kids creativity and bring their favorite creatures to life like never before. Each page invites young artists to explore patterns, textures, and playful details in a whole new dimension.",
      "Perfect for curious minds and animal lovers, this book offers a fresh and modern twist on traditional coloring fun. Whether at home or in the classroom, it's a joyful way to develop focus, color awareness, and artistic confidence.",
      "🎁 Bonus Included!Includes 4 extra pages of car-themed parts to color, cut, and paste like spoilers, wheels, cones, headlights, and more! Kids can use them to upgrade their favorite cars or create their own custom racing scenes. Rev up your coloring skills and bring these powerful vehicles to life!",
    ],
    bullets: [
      "30 original black and white illustrations featuring 3D style animals.",
      "Format: 8.27 x 11.69 inches large pages for bold and creative coloring.",
      "Encourages visual exploration, fine motor skills, and imaginative play.",
      "Great for all ages who loves animals with a twist!",
      
      
    
    ]
  },

  "flying-driving-and-sailing": {
    title: "Flying Driving & Sailing",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FT2WJW5F", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FT2WJW5F",
        de: "https://www.amazon.de/dp/B0FT2WJW5F",
        it: "https://www.amazon.it/dp/B0FT2WJW5F",
        es: "https://www.amazon.es/dp/B0FT2WJW5F",
        fr: "https://www.amazon.fr/dp/B0FT2WJW5F",
        jp: "https://www.amazon.jp/dp/B0FT2WJW5F",
        au: "https://www.amazon.au/dp/B0FT2WJW5F",
        se: "https://www.amazon.se/dp/B0FT2WJW5F",
        pl: "https://www.amazon.pl/dp/B0FT2WJW5F",
        ca: "https://www.amazon.ca/dp/B0FT2WJW5F",
        nl: "https://www.amazon.nl/dp/B0FT2WJW5F",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FGTXWBVB", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FGTXWBVB",
        de: "https://www.amazon.de/dp/B0FGTXWBVB",
        it: "https://www.amazon.it/dp/B0FGTXWBVB",
        es: "https://www.amazon.es/dp/B0FGTXWBVB",
        fr: "https://www.amazon.fr/dp/B0FGTXWBVB",
        jp: "https://www.amazon.jp/dp/B0FGTXWBVB",
        au: "https://www.amazon.au/dp/B0FGTXWBVB",
        se: "https://www.amazon.se/dp/B0FGTXWBVB",
        pl: "https://www.amazon.pl/dp/B0FGTXWBVB",
        ca: "https://www.amazon.ca/dp/B0FGTXWBVB",
        nl: "https://www.amazon.nl/dp/B0FGTXWBVB",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/flying-driving-and-sailing/cover.jpg",
      "assets/img/books/flying-driving-and-sailing/p01.jpg",
      "assets/img/books/flying-driving-and-sailing/p02.jpg",
      "assets/img/books/flying-driving-and-sailing/p03.jpg",
      "assets/img/books/flying-driving-and-sailing/p04.jpg",
      "assets/img/books/flying-driving-and-sailing/p05.jpg",
      "assets/img/books/flying-driving-and-sailing/p06.jpg",
    ],
    sections: [
      "assets/img/books/flying-driving-and-sailing/sections/1.jpg",
      "assets/img/books/flying-driving-and-sailing/sections/2.jpg",
      "assets/img/books/flying-driving-and-sailing/sections/3.jpg",
      "assets/img/books/flying-driving-and-sailing/sections/4.jpg",
      "assets/img/books/flying-driving-and-sailing/sections/5.jpg",
    ],
    intro: [
      "Hop in, buckle up, and let your imagination take the wheel!",
      "This original and joyful coloring book invites children and adults alike to explore a world filled with adorable vehicles each with its own cheerful personality. Inside, you'll find 40 charming illustrations",
      "🎁 Bonus Included!At the end of the book, enjoy a special color and cut puzzle activity that you can assemble and glue to the final page. A perfect extra challenge for little minds and crafty hands!",
    ],
    bullets: [
      "40 unique, hand-drawn illustrations.",
      "Format: 8.25 x 8.25 inches.",
      "Suitable for kids, teens, and adults, no age limit for fun!",
      "Great gift for birthdays, holidays, classrooms, or just because!",
      
      
    
    ]
  },

  "woof": {
    title: "Woof",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FD9HDY1Z", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FD9HDY1Z",
        de: "https://www.amazon.de/dp/B0FD9HDY1Z",
        it: "https://www.amazon.it/dp/B0FD9HDY1Z",
        es: "https://www.amazon.es/dp/B0FD9HDY1Z",
        fr: "https://www.amazon.fr/dp/B0FD9HDY1Z",
        jp: "https://www.amazon.jp/dp/B0FD9HDY1Z",
        au: "https://www.amazon.au/dp/B0FD9HDY1Z",
        se: "https://www.amazon.se/dp/B0FD9HDY1Z",
        pl: "https://www.amazon.pl/dp/B0FD9HDY1Z",
        ca: "https://www.amazon.ca/dp/B0FD9HDY1Z",
        nl: "https://www.amazon.nl/dp/B0FD9HDY1Z",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FFNG2DN8", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FFNG2DN8",
        de: "https://www.amazon.de/dp/B0FFNG2DN8",
        it: "https://www.amazon.it/dp/B0FFNG2DN8",
        es: "https://www.amazon.es/dp/B0FFNG2DN8",
        fr: "https://www.amazon.fr/dp/B0FFNG2DN8",
        jp: "https://www.amazon.jp/dp/B0FFNG2DN8",
        au: "https://www.amazon.au/dp/B0FFNG2DN8",
        se: "https://www.amazon.se/dp/B0FFNG2DN8",
        pl: "https://www.amazon.pl/dp/B0FFNG2DN8",
        ca: "https://www.amazon.ca/dp/B0FFNG2DN8",
        nl: "https://www.amazon.nl/dp/B0FFNG2DN8",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/woof/cover.jpg",
      "assets/img/books/woof/p01.jpg",
      "assets/img/books/woof/p02.jpg",
      "assets/img/books/woof/p03.jpg",
      "assets/img/books/woof/p04.jpg",
      "assets/img/books/woof/p05.jpg",
      "assets/img/books/woof/p06.jpg",
    ],
    sections: [
      "assets/img/books/woof/sections/1.jpg",
      "assets/img/books/woof/sections/2.jpg",
      "assets/img/books/woof/sections/3.jpg",
      "assets/img/books/woof/sections/4.jpg",
      "assets/img/books/woof/sections/5.jpg",
    ],
    intro: [
      "Welcome to a tail-wagging world full of cuteness! Woof is a heartwarming coloring book featuring 40 unique illustrations of lovable puppies from a wide variety of dog breeds. With their sweet eyes and cheerful expressions, these pups are here to melt hearts and spark creativity in kids, teens, and adults alike.",
      "Whether you’re a lifelong dog lover or just looking for a moment of joy and relaxation, this book is your perfect companion.",
      "🎁 Bonus Included!At the end of the book, enjoy a special color and solve maze challenge where you help the main character find their way through twists and turns! A playful final adventure to stimulate focus, patience, and problem-solving after all the coloring fun.",
    ],
    bullets: [
      "40 original illustrations of charming puppy breeds.",
      "Format: 8.25 x 8.25 inches.",
      "Crisp, clean line art, no shading or grayscale, ideal for coloring.",
      "Suitable for crayons, markers, colored pencils, and even watercolors.",
      
      
    
    ]
  },

  "color-and-travel": {
    title: "Color & Travel",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FD8HTHZK", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FD8HTHZK",
        de: "https://www.amazon.de/dp/B0FD8HTHZK",
        it: "https://www.amazon.it/dp/B0FD8HTHZK",
        es: "https://www.amazon.es/dp/B0FD8HTHZK",
        fr: "https://www.amazon.fr/dp/B0FD8HTHZK",
        jp: "https://www.amazon.jp/dp/B0FD8HTHZK",
        au: "https://www.amazon.au/dp/B0FD8HTHZK",
        se: "https://www.amazon.se/dp/B0FD8HTHZK",
        pl: "https://www.amazon.pl/dp/B0FD8HTHZK",
        ca: "https://www.amazon.ca/dp/B0FD8HTHZK",
        nl: "https://www.amazon.nl/dp/B0FD8HTHZK",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FFMHPG1J", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FFMHPG1J",
        de: "https://www.amazon.de/dp/B0FFMHPG1J",
        it: "https://www.amazon.it/dp/B0FFMHPG1J",
        es: "https://www.amazon.es/dp/B0FFMHPG1J",
        fr: "https://www.amazon.fr/dp/B0FFMHPG1J",
        jp: "https://www.amazon.jp/dp/B0FFMHPG1J",
        au: "https://www.amazon.au/dp/B0FFMHPG1J",
        se: "https://www.amazon.se/dp/B0FFMHPG1J",
        pl: "https://www.amazon.pl/dp/B0FFMHPG1J",
        ca: "https://www.amazon.ca/dp/B0FFMHPG1J",
        nl: "https://www.amazon.nl/dp/B0FFMHPG1J",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/color-and-travel/cover.jpg",
      "assets/img/books/color-and-travel/p01.jpg",
      "assets/img/books/color-and-travel/p02.jpg",
      "assets/img/books/color-and-travel/p03.jpg",
      "assets/img/books/color-and-travel/p04.jpg",
      "assets/img/books/color-and-travel/p05.jpg",
      "assets/img/books/color-and-travel/p06.jpg",
    ],
    sections: [
      "assets/img/books/color-and-travel/sections/1.jpg",
      "assets/img/books/color-and-travel/sections/2.jpg",
      "assets/img/books/color-and-travel/sections/3.jpg",
      "assets/img/books/color-and-travel/sections/4.jpg",
      "assets/img/books/color-and-travel/sections/5.jpg",
    ],
    intro: [
      "Step into an artistic world tour with this charming coloring book that lets you explore 40 iconic cities from around the globe. Each page is a passport to stunning architecture, cultural treasures, and captivating landscapes all waiting for your unique color palette.",
      "Whether you're a passionate traveler, an art lover, or simply looking for a relaxing escape, this book is your ticket to unforgettable adventures without leaving your home.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and solve word search filled with words related to the story! A fun bonus activity to challenge little minds and sharp eyes after all the coloring fun.",
    ],
    bullets: [
      "40 one of a kind illustrations of world famous cities.",
      "Format: 8.25 x 8.25 inches.",
      "Fun for all ages from curious kids to daydreaming adults.",
      "Great with pencils, markers, or watercolors.",
      
      
    
    ]
  },

  "color-with-hana": {
    title: "Color With Hana",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FGW2BDN1", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FGW2BDN1",
        de: "https://www.amazon.de/dp/B0FGW2BDN1",
        it: "https://www.amazon.it/dp/B0FGW2BDN1",
        es: "https://www.amazon.es/dp/B0FGW2BDN1",
        fr: "https://www.amazon.fr/dp/B0FGW2BDN1",
        jp: "https://www.amazon.jp/dp/B0FGW2BDN1",
        au: "https://www.amazon.au/dp/B0FGW2BDN1",
        se: "https://www.amazon.se/dp/B0FGW2BDN1",
        pl: "https://www.amazon.pl/dp/B0FGW2BDN1",
        ca: "https://www.amazon.ca/dp/B0FGW2BDN1",
        nl: "https://www.amazon.nl/dp/B0FGW2BDN1",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FGW33QB1", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FGW33QB1",
        de: "https://www.amazon.de/dp/B0FGW33QB1",
        it: "https://www.amazon.it/dp/B0FGW33QB1",
        es: "https://www.amazon.es/dp/B0FGW33QB1",
        fr: "https://www.amazon.fr/dp/B0FGW33QB1",
        jp: "https://www.amazon.jp/dp/B0FGW33QB1",
        au: "https://www.amazon.au/dp/B0FGW33QB1",
        se: "https://www.amazon.se/dp/B0FGW33QB1",
        pl: "https://www.amazon.pl/dp/B0FGW33QB1",
        ca: "https://www.amazon.ca/dp/B0FGW33QB1",
        nl: "https://www.amazon.nl/dp/B0FGW33QB1",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/color-with-hana/cover.jpg",
      "assets/img/books/color-with-hana/p01.jpg",
      "assets/img/books/color-with-hana/p02.jpg",
      "assets/img/books/color-with-hana/p03.jpg",
      "assets/img/books/color-with-hana/p04.jpg",
      "assets/img/books/color-with-hana/p05.jpg",
      "assets/img/books/color-with-hana/p06.jpg",
    ],
    sections: [
      "assets/img/books/color-with-hana/sections/1.jpg",
      "assets/img/books/color-with-hana/sections/2.jpg",
      "assets/img/books/color-with-hana/sections/3.jpg",
      "assets/img/books/color-with-hana/sections/4.jpg",
      "assets/img/books/color-with-hana/sections/5.jpg",
    ],
    intro: [
      "Step into the delicious and charming world of Hana, a creative, cheerful bear chef full of passion for cooking. This beautiful coloring book offers you 40 original black and white illustrations in a square format, perfect for all ages.",
      "With a cute, detailed, and fun style, this book is perfect not only for relaxing while you color but also for letting your imagination run wild and dreaming of a world full of flavors and joy.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and solve puzzle related to Hana’s culinary adventures. A fun extra activity to challenge your mind and keep the fun going after all the coloring!",
    ],
    bullets: [
      "40 one of a kind illustrations.",
      "Format: 8.25 x 8.25 inches.",
      "Easy to take anywhere.",
      "Perfect as a gift for food and art lovers.",
      "Designed to spark your creative side.",
      
      
    
    ]
  },

  "funny-working-animals": {
    title: "Funny Working Animals",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FR3GLN1F", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FR3GLN1F",
        de: "https://www.amazon.de/dp/B0FR3GLN1F",
        it: "https://www.amazon.it/dp/B0FR3GLN1F",
        es: "https://www.amazon.es/dp/B0FR3GLN1F",
        fr: "https://www.amazon.fr/dp/B0FR3GLN1F",
        jp: "https://www.amazon.jp/dp/B0FR3GLN1F",
        au: "https://www.amazon.au/dp/B0FR3GLN1F",
        se: "https://www.amazon.se/dp/B0FR3GLN1F",
        pl: "https://www.amazon.pl/dp/B0FR3GLN1F",
        ca: "https://www.amazon.ca/dp/B0FR3GLN1F",
        nl: "https://www.amazon.nl/dp/B0FR3GLN1F",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FR3978GP", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FR3978GP",
        de: "https://www.amazon.de/dp/B0FR3978GP",
        it: "https://www.amazon.it/dp/B0FR3978GP",
        es: "https://www.amazon.es/dp/B0FR3978GP",
        fr: "https://www.amazon.fr/dp/B0FR3978GP",
        jp: "https://www.amazon.jp/dp/B0FR3978GP",
        au: "https://www.amazon.au/dp/B0FR3978GP",
        se: "https://www.amazon.se/dp/B0FR3978GP",
        pl: "https://www.amazon.pl/dp/B0FR3978GP",
        ca: "https://www.amazon.ca/dp/B0FR3978GP",
        nl: "https://www.amazon.nl/dp/B0FR3978GP",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/funny-working-animals/cover.jpg",
      "assets/img/books/funny-working-animals/p01.jpg",
      "assets/img/books/funny-working-animals/p02.jpg",
      "assets/img/books/funny-working-animals/p03.jpg",
      "assets/img/books/funny-working-animals/p04.jpg",
      "assets/img/books/funny-working-animals/p05.jpg",
      "assets/img/books/funny-working-animals/p06.jpg",
    ],
    sections: [
      "assets/img/books/funny-working-animals/sections/1.jpg",
      "assets/img/books/funny-working-animals/sections/2.jpg",
      "assets/img/books/funny-working-animals/sections/3.jpg",
      "assets/img/books/funny-working-animals/sections/4.jpg",
      "assets/img/books/funny-working-animals/sections/5.jpg",
    ],
    intro: [
      "Step into a city like no other where animals wear suits, uniforms, and tool belts!",
      "This delightful coloring book features 40 unique black and white illustrations of charming creatures taking on all sorts of jobs, from a wise owl dentist to a news reporting bunny, a gardening bee, a shoemaking caterpillar, and even a space exploring dog!",
      "Each page celebrates imagination, creativity, and the fun of exploring different careers, all while enjoying a relaxing coloring experience.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and solve maze challenge where you help the main character find their way through twists and turns! A playful final adventure to stimulate focus, patience, and problem solving after all the coloring fun.",
    ],
    bullets: [
      "40 original illustrations of animals in professional roles.",
      "Format: 8.25 x 8.25 inches.",
      "Easy to take anywhere.",
      "Suitable for all ages great for kids and equally fun for adults.",
      "Encourages learning through art discover new professions while coloring!",
      
      
    
    ]
  },

  "agent-secret-origins": {
    title: "Agent Secret Origins 1",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FCRZ2SSR", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FCRZ2SSR",
        de: "https://www.amazon.de/dp/B0FCRZ2SSR",
        it: "https://www.amazon.it/dp/B0FCRZ2SSR",
        es: "https://www.amazon.es/dp/B0FCRZ2SSR",
        fr: "https://www.amazon.fr/dp/B0FCRZ2SSR",
        jp: "https://www.amazon.jp/dp/B0FCRZ2SSR",
        au: "https://www.amazon.au/dp/B0FCRZ2SSR",
        se: "https://www.amazon.se/dp/B0FCRZ2SSR",
        pl: "https://www.amazon.pl/dp/B0FCRZ2SSR",
        ca: "https://www.amazon.ca/dp/B0FCRZ2SSR",
        nl: "https://www.amazon.nl/dp/B0FCRZ2SSR",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FGT28FDX", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FGT28FDX",
        de: "https://www.amazon.de/dp/B0FGT28FDX",
        it: "https://www.amazon.it/dp/B0FGT28FDX",
        es: "https://www.amazon.es/dp/B0FGT28FDX",
        fr: "https://www.amazon.fr/dp/B0FGT28FDX",
        jp: "https://www.amazon.jp/dp/B0FGT28FDX",
        au: "https://www.amazon.au/dp/B0FGT28FDX",
        se: "https://www.amazon.se/dp/B0FGT28FDX",
        pl: "https://www.amazon.pl/dp/B0FGT28FDX",
        ca: "https://www.amazon.ca/dp/B0FGT28FDX",
        nl: "https://www.amazon.nl/dp/B0FGT28FDX",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/agent-secret-origins/cover.jpg",
      "assets/img/books/agent-secret-origins/1.jpg",
      "assets/img/books/agent-secret-origins/2.jpg",
      "assets/img/books/agent-secret-origins/3.jpg",
      "assets/img/books/agent-secret-origins/4.jpg",
      "assets/img/books/agent-secret-origins/5.jpg",
      "assets/img/books/agent-secret-origins/6.jpg",
    ],
    sections: [
      "assets/img/books/agent-secret-origins/sections/1.jpg",
      "assets/img/books/agent-secret-origins/sections/2.jpg",
      "assets/img/books/agent-secret-origins/sections/3.jpg",
      "assets/img/books/agent-secret-origins/sections/4.jpg",
      "assets/img/books/agent-secret-origins/sections/5.jpg",
    ],
    intro: [
      "Step into a world of mystery, bravery, and clever thinking with James, a sharp-eyed gray pigeon with a secret past. While others pecked at crumbs in the plaza, James was busy studying spy films,he had a legacy to follow. His grandfather? None other than Secret Agent Featherstone, the most cunning spy the city had ever known.",
      "Inspired by his story, James trained with determination. He studied maps, cracked secret codes, and mastered the art of disguise. No longer just a pigeon… he became a Secret Agent. Now, he’s ready to solve cases, follow clues, and uncover what others can’t see.",
      "This coloring book isn’t just a story, it’s a journey of discovery and courage, with each page offering a scene full of secrets to bring to life with your own colors.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and solve word search filled with words related to the story! A fun bonus activity to challenge curious minds and sharp eyes after all the coloring fun.",
      
    ],
    bullets: [
      "40 action packed and mysterious illustrations.",
      "Format: 8.25 x 8.25 inches.",
      "Great for kids, teens, and adults, relaxing, inspiring, and fun.",
      "A unique and thoughtful gift for creative minds.",
      "Encourages observation, imagination, and storytelling through art.",
      
    
    ]
  },

  "animals-from-all-the-world": {
    title: "Animals From All The World",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FRQZDT5G", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FRQZDT5G",
        de: "https://www.amazon.de/dp/B0FRQZDT5G",
        it: "https://www.amazon.it/dp/B0FRQZDT5G",
        es: "https://www.amazon.es/dp/B0FRQZDT5G",
        fr: "https://www.amazon.fr/dp/B0FRQZDT5G",
        jp: "https://www.amazon.jp/dp/B0FRQZDT5G",
        au: "https://www.amazon.au/dp/B0FRQZDT5G",
        se: "https://www.amazon.se/dp/B0FRQZDT5G",
        pl: "https://www.amazon.pl/dp/B0FRQZDT5G",
        ca: "https://www.amazon.ca/dp/B0FRQZDT5G",
        nl: "https://www.amazon.nl/dp/B0FRQZDT5G",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FRRNKQ8C", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FRRNKQ8C",
        de: "https://www.amazon.de/dp/B0FRRNKQ8C",
        it: "https://www.amazon.it/dp/B0FRRNKQ8C",
        es: "https://www.amazon.es/dp/B0FRRNKQ8C",
        fr: "https://www.amazon.fr/dp/B0FRRNKQ8C",
        jp: "https://www.amazon.jp/dp/B0FRRNKQ8C",
        au: "https://www.amazon.au/dp/B0FRRNKQ8C",
        se: "https://www.amazon.se/dp/B0FRRNKQ8C",
        pl: "https://www.amazon.pl/dp/B0FRRNKQ8C",
        ca: "https://www.amazon.ca/dp/B0FRRNKQ8C",
        nl: "https://www.amazon.nl/dp/B0FRRNKQ8C",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/animals-from-all-the-world/cover.jpg",
      "assets/img/books/animals-from-all-the-world/1.jpg",
      "assets/img/books/animals-from-all-the-world/2.jpg",
      "assets/img/books/animals-from-all-the-world/3.jpg",
      "assets/img/books/animals-from-all-the-world/4.jpg",
      "assets/img/books/animals-from-all-the-world/5.jpg",
      "assets/img/books/animals-from-all-the-world/6.jpg",
    ],
    sections: [
      "assets/img/books/animals-from-all-the-world/sections/1.jpg",
      "assets/img/books/animals-from-all-the-world/sections/2.jpg",
      "assets/img/books/animals-from-all-the-world/sections/3.jpg",
      "assets/img/books/animals-from-all-the-world/sections/4.jpg",
      "assets/img/books/animals-from-all-the-world/sections/5.jpg",
    ],
    intro: [
      "Pack your imagination and get ready to travel! Planet Animal is a heartwarming and fun coloring book that takes you on a journey around the globe, guided by 40 adorable animals, each representing a different country.",
      "Whether you’re coloring alone or with family, Animals From All The World is the perfect companion for fun and creativity while learning about the world.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and solve maze challenge where you help the main character find their way through twists and turns! A playful final adventure to stimulate focus, patience, and problem solving after all the coloring fun.",
    ],
    bullets: [
      "40 illustrations in black and white.",
      "Format: 8.25 x 8.25 inches.",
      "For all ages, perfect for both children and adults",
      "A unique and thoughtful gift for creative minds.",
    
    ]
  },

  "lovely-flowers-to-color": {
    title: "Lovely Flowers to Color",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FR4D3W8X", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FR4D3W8X",
        de: "https://www.amazon.de/dp/B0FR4D3W8X",
        it: "https://www.amazon.it/dp/B0FR4D3W8X",
        es: "https://www.amazon.es/dp/B0FR4D3W8X",
        fr: "https://www.amazon.fr/dp/B0FR4D3W8X",
        jp: "https://www.amazon.jp/dp/B0FR4D3W8X",
        au: "https://www.amazon.au/dp/B0FR4D3W8X",
        se: "https://www.amazon.se/dp/B0FR4D3W8X",
        pl: "https://www.amazon.pl/dp/B0FR4D3W8X",
        ca: "https://www.amazon.ca/dp/B0FR4D3W8X",
        nl: "https://www.amazon.nl/dp/B0FR4D3W8X",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FG74XMC3", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FG74XMC3",
        de: "https://www.amazon.de/dp/B0FG74XMC3",
        it: "https://www.amazon.it/dp/B0FG74XMC3",
        es: "https://www.amazon.es/dp/B0FG74XMC3",
        fr: "https://www.amazon.fr/dp/B0FG74XMC3",
        jp: "https://www.amazon.jp/dp/B0FG74XMC3",
        au: "https://www.amazon.au/dp/B0FG74XMC3",
        se: "https://www.amazon.se/dp/B0FG74XMC3",
        pl: "https://www.amazon.pl/dp/B0FG74XMC3",
        ca: "https://www.amazon.ca/dp/B0FG74XMC3",
        nl: "https://www.amazon.nl/dp/B0FG74XMC3",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/lovely-flowers-to-color/cover.jpg",
      "assets/img/books/lovely-flowers-to-color/1.jpg",
      "assets/img/books/lovely-flowers-to-color/2.jpg",
      "assets/img/books/lovely-flowers-to-color/3.jpg",
      "assets/img/books/lovely-flowers-to-color/4.jpg",
      "assets/img/books/lovely-flowers-to-color/5.jpg",
      "assets/img/books/lovely-flowers-to-color/6.jpg",
    ],
    sections: [
      "assets/img/books/lovely-flowers-to-color/sections/1.jpg",
      "assets/img/books/lovely-flowers-to-color/sections/2.jpg",
      "assets/img/books/lovely-flowers-to-color/sections/3.jpg",
      "assets/img/books/lovely-flowers-to-color/sections/4.jpg",
      "assets/img/books/lovely-flowers-to-color/sections/5.jpg",
    ],
    intro: [
      "Step into a garden of serenity and inspiration with Bloom, a delightful coloring book featuring 40 beautifully hand drawn flower illustrations. From timeless roses and cheerful daisies to exotic blooms you’ve never seen before, each page is an invitation to slow down, breathe deeply, and let creativity take root.",
      "Whether you're a child discovering colors or an adult seeking a quiet moment of calm, this book offers the perfect balance of beauty and relaxation.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and solve word search filled with words related to the story! A fun bonus activity to challenge little minds and sharp eyes after all the coloring fun.",
    ],
    bullets: [
      "40 unique floral designs, from familiar favorites to rare botanical wonders.",
      "Large A4 format 8.27 x 11.69 inches, ideal for detailed and expressive coloring.",
      "For all ages great for kids developing focus, and adults looking for mindfulness.",
      "A thoughtful gift bring joy, beauty, and peace to any occasion",
    
    ]
  },

  "behind-the-scenes-of-a-vloggers-life": {
    title: "Behind the scenes of a vlogger's life",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FD6PRZXB", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FD6PRZXB",
        de: "https://www.amazon.de/dp/B0FD6PRZXB",
        it: "https://www.amazon.it/dp/B0FD6PRZXB",
        es: "https://www.amazon.es/dp/B0FD6PRZXB",
        fr: "https://www.amazon.fr/dp/B0FD6PRZXB",
        jp: "https://www.amazon.jp/dp/B0FD6PRZXB",
        au: "https://www.amazon.au/dp/B0FD6PRZXB",
        se: "https://www.amazon.se/dp/B0FD6PRZXB",
        pl: "https://www.amazon.pl/dp/B0FD6PRZXB",
        ca: "https://www.amazon.ca/dp/B0FD6PRZXB",
        nl: "https://www.amazon.nl/dp/B0FD6PRZXB",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FNQPVSTN", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FNQPVSTN",
        de: "https://www.amazon.de/dp/B0FNQPVSTN",
        it: "https://www.amazon.it/dp/B0FNQPVSTN",
        es: "https://www.amazon.es/dp/B0FNQPVSTN",
        fr: "https://www.amazon.fr/dp/B0FNQPVSTN",
        jp: "https://www.amazon.jp/dp/B0FNQPVSTN",
        au: "https://www.amazon.au/dp/B0FNQPVSTN",
        se: "https://www.amazon.se/dp/B0FNQPVSTN",
        pl: "https://www.amazon.pl/dp/B0FNQPVSTN",
        ca: "https://www.amazon.ca/dp/B0FNQPVSTN",
        nl: "https://www.amazon.nl/dp/B0FNQPVSTN",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/behind-the-scenes-of-a-vloggers-life/cover.jpg",
      "assets/img/books/behind-the-scenes-of-a-vloggers-life/1.jpg",
      "assets/img/books/behind-the-scenes-of-a-vloggers-life/2.jpg",
      "assets/img/books/behind-the-scenes-of-a-vloggers-life/3.jpg",
      "assets/img/books/behind-the-scenes-of-a-vloggers-life/4.jpg",
      "assets/img/books/behind-the-scenes-of-a-vloggers-life/5.jpg",
      "assets/img/books/behind-the-scenes-of-a-vloggers-life/6.jpg",
    ],
    sections: [
      "assets/img/books/behind-the-scenes-of-a-vloggers-life/sections/1.jpg",
      "assets/img/books/behind-the-scenes-of-a-vloggers-life/sections/2.jpg",
      "assets/img/books/behind-the-scenes-of-a-vloggers-life/sections/3.jpg",
      "assets/img/books/behind-the-scenes-of-a-vloggers-life/sections/4.jpg",
      "assets/img/books/behind-the-scenes-of-a-vloggers-life/sections/5.jpg",
    ],
    intro: [
      "Step into the inspiring world of Chloe, a modern, creative, and free spirited vlogger, with this beautiful coloring book featuring 40 square illustrations, designed for all ages.",
      "With a fun, lively, and unique style, this book is perfect not only for relaxing while coloring but also for letting your imagination soar and dreaming of a creative, adventurous life.",
      "🎁 Bonus Included! At the end of the book, enjoy a fun word search to color and solve, filled with words related to Chloe’s story! A fun extra activity to challenge your mind and eyes after all that coloring.",
    ],
    bullets: [
      "40 unique pages to color.",
      "Ideal square format: 8.25 x 8.25 inches.",
      "Easy to take anywhere.",
      "Perfect as a gift.",
    
    ]
  },

  "animandalas": {
    title: "Animandalas",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FDL7WP5B", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FDL7WP5B",
        de: "https://www.amazon.de/dp/B0FDL7WP5B",
        it: "https://www.amazon.it/dp/B0FDL7WP5B",
        es: "https://www.amazon.es/dp/B0FDL7WP5B",
        fr: "https://www.amazon.fr/dp/B0FDL7WP5B",
        jp: "https://www.amazon.jp/dp/B0FDL7WP5B",
        au: "https://www.amazon.au/dp/B0FDL7WP5B",
        se: "https://www.amazon.se/dp/B0FDL7WP5B",
        pl: "https://www.amazon.pl/dp/B0FDL7WP5B",
        ca: "https://www.amazon.ca/dp/B0FDL7WP5B",
        nl: "https://www.amazon.nl/dp/B0FDL7WP5B",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FG7976W6", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FG7976W6",
        de: "https://www.amazon.de/dp/B0FG7976W6",
        it: "https://www.amazon.it/dp/B0FG7976W6",
        es: "https://www.amazon.es/dp/B0FG7976W6",
        fr: "https://www.amazon.fr/dp/B0FG7976W6",
        jp: "https://www.amazon.jp/dp/B0FG7976W6",
        au: "https://www.amazon.au/dp/B0FG7976W6",
        se: "https://www.amazon.se/dp/B0FG7976W6",
        pl: "https://www.amazon.pl/dp/B0FG7976W6",
        ca: "https://www.amazon.ca/dp/B0FG7976W6",
        nl: "https://www.amazon.nl/dp/B0FG7976W6",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/animandalas/cover.jpg",
      "assets/img/books/animandalas/1.jpg",
      "assets/img/books/animandalas/2.jpg",
      "assets/img/books/animandalas/3.jpg",
      "assets/img/books/animandalas/4.jpg",
      "assets/img/books/animandalas/5.jpg",
      "assets/img/books/animandalas/6.jpg",
    ],
    sections: [
      "assets/img/books/animandalas/sections/1.jpg",
      "assets/img/books/animandalas/sections/2.jpg",
      "assets/img/books/animandalas/sections/3.jpg",
      "assets/img/books/animandalas/sections/4.jpg",
      "assets/img/books/animandalas/sections/5.jpg",
    ],
    intro: [
      "Step into a world where nature meets symmetry, and each animal becomes a living mandala waiting to be brought to life with your colors. Animandalas is more than a coloring book it’s a soothing escape filled with magic, wonder, and artistic discovery.",
      "Let owls bloom with floral patterns, turtles swirl with ocean energy, and big cats shine with powerful symmetry. Each page is designed to calm the mind, spark imagination, and celebrate the mystical connection between animals and sacred geometry.",
      "🎁 Bonus Included! At the end of the book, enjoy a special color and solve word search filled with words related to the story! A fun bonus activity to challenge little minds and sharp eyes after all the coloring fun.",
    ],
    bullets: [
      "40 unique animal mandala illustrations, each with intricate, mesmerizing details.",
      "Perfect square format:8.27 x 11.69 inches, ideal for smooth, relaxing coloring.",
      "For all ages, ideal for mindful kids, creative teens, and adults seeking peace.",
      "A thoughtful gift, perfect for birthdays, holidays, or moments of self care.",
      "A therapeutic tool helps reduce stress, boost focus, and awaken artistic flow",
    
    ]
  },

  "jurassaur": {
    title: "Jurassaur",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FDL4CF42", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FDL4CF42",
        de: "https://www.amazon.de/dp/B0FDL4CF42",
        it: "https://www.amazon.it/dp/B0FDL4CF42",
        es: "https://www.amazon.es/dp/B0FDL4CF42",
        fr: "https://www.amazon.fr/dp/B0FDL4CF42",
        jp: "https://www.amazon.jp/dp/B0FDL4CF42",
        au: "https://www.amazon.au/dp/B0FDL4CF42",
        se: "https://www.amazon.se/dp/B0FDL4CF42",
        pl: "https://www.amazon.pl/dp/B0FDL4CF42",
        ca: "https://www.amazon.ca/dp/B0FDL4CF42",
        nl: "https://www.amazon.nl/dp/B0FDL4CF42",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FGNBD6FR", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FGNBD6FR",
        de: "https://www.amazon.de/dp/B0FGNBD6FR",
        it: "https://www.amazon.it/dp/B0FGNBD6FR",
        es: "https://www.amazon.es/dp/B0FGNBD6FR",
        fr: "https://www.amazon.fr/dp/B0FGNBD6FR",
        jp: "https://www.amazon.jp/dp/B0FGNBD6FR",
        au: "https://www.amazon.au/dp/B0FGNBD6FR",
        se: "https://www.amazon.se/dp/B0FGNBD6FR",
        pl: "https://www.amazon.pl/dp/B0FGNBD6FR",
        ca: "https://www.amazon.ca/dp/B0FGNBD6FR",
        nl: "https://www.amazon.nl/dp/B0FGNBD6FR",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/jurassaur/cover.jpg",
      "assets/img/books/jurassaur/1.jpg",
      "assets/img/books/jurassaur/2.jpg",
      "assets/img/books/jurassaur/3.jpg",
      "assets/img/books/jurassaur/4.jpg",
      "assets/img/books/jurassaur/5.jpg",
      "assets/img/books/jurassaur/6.jpg",
    ],
    sections: [
      "assets/img/books/jurassaur/sections/1.jpg",
      "assets/img/books/jurassaur/sections/2.jpg",
      "assets/img/books/jurassaur/sections/3.jpg",
      "assets/img/books/jurassaur/sections/4.jpg",
      "assets/img/books/jurassaur/sections/5.jpg",
    ],
    intro: [
      "Discover a Prehistoric World of Fun and Creativity!",
      "Step back in time and explore the fascinating world of dinosaurs with Jurassaur Coloring Adventure, a thrilling coloring book that brings 35 different dinosaur species to life in a fun, artistic, and family-friendly way.",
      "🎁 Bonus Included! At the end of the book, enjoy two exciting activities: a color and solve word search filled with fun dinosaur-related terms to sharpen curious minds, and a color and cut puzzle that you can assemble and glue to the final page , a perfect extra challenge for little minds and crafty hands after all the coloring fun!",
    ],
    bullets: [
      "35 hand drawn dinosaur designs, each with personality.",
      "A4 format, 8.27 x 11.69 inches.",
      "Great for learning, relaxing, or decorating.",
      "A fun gift for dino lovers of all ages.",
      "Encourages focus, creativity, and imagination.",
    
    ]
  },

  "the-colors-of-your-soul": {
    title: "The Colors Of Your Soul",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FCS36YJP", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FCS36YJP",
        de: "https://www.amazon.de/dp/B0FCS36YJP",
        it: "https://www.amazon.it/dp/B0FCS36YJP",
        es: "https://www.amazon.es/dp/B0FCS36YJP",
        fr: "https://www.amazon.fr/dp/B0FCS36YJP",
        jp: "https://www.amazon.jp/dp/B0FCS36YJP",
        au: "https://www.amazon.au/dp/B0FCS36YJP",
        se: "https://www.amazon.se/dp/B0FCS36YJP",
        pl: "https://www.amazon.pl/dp/B0FCS36YJP",
        ca: "https://www.amazon.ca/dp/B0FCS36YJP",
        nl: "https://www.amazon.nl/dp/B0FCS36YJP",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FG79DR27", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FG79DR27",
        de: "https://www.amazon.de/dp/B0FG79DR27",
        it: "https://www.amazon.it/dp/B0FG79DR27",
        es: "https://www.amazon.es/dp/B0FG79DR27",
        fr: "https://www.amazon.fr/dp/B0FG79DR27",
        jp: "https://www.amazon.jp/dp/B0FG79DR27",
        au: "https://www.amazon.au/dp/B0FG79DR27",
        se: "https://www.amazon.se/dp/B0FG79DR27",
        pl: "https://www.amazon.pl/dp/B0FG79DR27",
        ca: "https://www.amazon.ca/dp/B0FG79DR27",
        nl: "https://www.amazon.nl/dp/B0FG79DR27",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/the-colors-of-your-soul/cover.jpg",
      "assets/img/books/the-colors-of-your-soul/1.jpg",
      "assets/img/books/the-colors-of-your-soul/2.jpg",
      "assets/img/books/the-colors-of-your-soul/3.jpg",
      "assets/img/books/the-colors-of-your-soul/4.jpg",
      "assets/img/books/the-colors-of-your-soul/5.jpg",
      "assets/img/books/the-colors-of-your-soul/6.jpg",
    ],
    sections: [
      "assets/img/books/the-colors-of-your-soul/sections/1.jpg",
      "assets/img/books/the-colors-of-your-soul/sections/2.jpg",
      "assets/img/books/the-colors-of-your-soul/sections/3.jpg",
      "assets/img/books/the-colors-of-your-soul/sections/4.jpg",
      "assets/img/books/the-colors-of-your-soul/sections/5.jpg",
    ],
    intro: [
      "Dive into a magical world of peace, creativity, and inspiration with The Colors of Your Soul Coloring Book. Each page brings you detailed, enchanting illustrations filled with nature, animals, and spiritual energy, designed to help you relax, focus, and express your inner creativity.",
      "With 40 unique hand drawn designs, this book is the perfect way to slow down, enjoy the present moment, and bring art to life with your favorite colors. From majestic lions to serene landscapes, every illustration invites mindfulness and imagination.",
      "🎁 Bonus Included! At the end of the book, enjoy two exciting activities: a color and solve word search filled with fun dinosaur-related terms to sharpen curious minds, and a color and cut puzzle that you can assemble and glue to the final page , a perfect extra challenge for little minds and crafty hands after all the coloring fun!",
    ],
    bullets: [
      "40 hand drawn designs, each one with personality.",
      "A4 format, 8.27 x 11.69 inches.",
      "Great for learning, relaxing, or decorating.",
      "A thoughtful gift for art and coloring lovers of all ages.",
      "Encourages mindfulness, imagination, and self-expression.",
    
    ]
  },

  "miniluca": {
    title: "Miniluca",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FF1ZRRVF", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FF1ZRRVF",
        de: "https://www.amazon.de/dp/B0FF1ZRRVF",
        it: "https://www.amazon.it/dp/B0FF1ZRRVF",
        es: "https://www.amazon.es/dp/B0FF1ZRRVF",
        fr: "https://www.amazon.fr/dp/B0FF1ZRRVF",
        jp: "https://www.amazon.jp/dp/B0FF1ZRRVF",
        au: "https://www.amazon.au/dp/B0FF1ZRRVF",
        se: "https://www.amazon.se/dp/B0FF1ZRRVF",
        pl: "https://www.amazon.pl/dp/B0FF1ZRRVF",
        ca: "https://www.amazon.ca/dp/B0FF1ZRRVF",
        nl: "https://www.amazon.nl/dp/B0FF1ZRRVF",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FK21DDR8", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FK21DDR8",
        de: "https://www.amazon.de/dp/B0FK21DDR8",
        it: "https://www.amazon.it/dp/B0FK21DDR8",
        es: "https://www.amazon.es/dp/B0FK21DDR8",
        fr: "https://www.amazon.fr/dp/B0FK21DDR8",
        jp: "https://www.amazon.jp/dp/B0FK21DDR8",
        au: "https://www.amazon.au/dp/B0FK21DDR8",
        se: "https://www.amazon.se/dp/B0FK21DDR8",
        pl: "https://www.amazon.pl/dp/B0FK21DDR8",
        ca: "https://www.amazon.ca/dp/B0FK21DDR8",
        nl: "https://www.amazon.nl/dp/B0FK21DDR8",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/miniluca/cover.jpg",
      "assets/img/books/miniluca/1.jpg",
      "assets/img/books/miniluca/2.jpg",
      "assets/img/books/miniluca/3.jpg",
      "assets/img/books/miniluca/4.jpg",
      "assets/img/books/miniluca/5.jpg",
      "assets/img/books/miniluca/6.jpg",
    ],
    sections: [
      "assets/img/books/miniluca/sections/1.jpg",
      "assets/img/books/miniluca/sections/2.jpg",
      "assets/img/books/miniluca/sections/3.jpg",
      "assets/img/books/miniluca/sections/4.jpg",
      "assets/img/books/miniluca/sections/5.jpg",
    ],
    intro: [
      "Step into the heartwarming world of MiniLuca, a friendly little robot with big dreams and an even bigger imagination! This delightful coloring book follows a day in the life of MiniLuca. With 35 beautifully illustrated pages full of charming robot adventures, kids will love coloring MiniLuca’s daily moments while connecting with themes of kindness, curiosity, and creative play.",
      "It’s perfect for children who adore robots, storytelling, and coloring their way through a magical day. Join MiniLuca in a journey through fun routines, small discoveries, and peaceful robot dreams!",
      "🎁 Bonus Included! At the end of the book, discover a surprise Word Search Puzzle a fun challenge where kids can find all the hidden words related to MiniLuca’s world!",
    ],
    bullets: [
      "35 original illustrations featuring MiniLuca’s daily activities.",
      "Perfect size: A4, 8.27 x 11.69 in.",
      "Encourages creativity, mindfulness, and routine familiarity.",
      "Great for all ages.",
    
    
    ]
  },

  "leos-advetnures-in-rome": {
    title: "Leo's Adventures in Rome",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FF2NCD7S", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FF2NCD7S",
        de: "https://www.amazon.de/dp/B0FF2NCD7S",
        it: "https://www.amazon.it/dp/B0FF2NCD7S",
        es: "https://www.amazon.es/dp/B0FF2NCD7S",
        fr: "https://www.amazon.fr/dp/B0FF2NCD7S",
        jp: "https://www.amazon.jp/dp/B0FF2NCD7S",
        au: "https://www.amazon.au/dp/B0FF2NCD7S",
        se: "https://www.amazon.se/dp/B0FF2NCD7S",
        pl: "https://www.amazon.pl/dp/B0FF2NCD7S",
        ca: "https://www.amazon.ca/dp/B0FF2NCD7S",
        nl: "https://www.amazon.nl/dp/B0FF2NCD7S",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FG2XLRB8", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FG2XLRB8",
        de: "https://www.amazon.de/dp/B0FG2XLRB8",
        it: "https://www.amazon.it/dp/B0FG2XLRB8",
        es: "https://www.amazon.es/dp/B0FG2XLRB8",
        fr: "https://www.amazon.fr/dp/B0FG2XLRB8",
        jp: "https://www.amazon.jp/dp/B0FG2XLRB8",
        au: "https://www.amazon.au/dp/B0FG2XLRB8",
        se: "https://www.amazon.se/dp/B0FG2XLRB8",
        pl: "https://www.amazon.pl/dp/B0FG2XLRB8",
        ca: "https://www.amazon.ca/dp/B0FG2XLRB8",
        nl: "https://www.amazon.nl/dp/B0FG2XLRB8",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/leos-advetnures-in-rome/cover.jpg",
      "assets/img/books/leos-advetnures-in-rome/1.jpg",
      "assets/img/books/leos-advetnures-in-rome/2.jpg",
      "assets/img/books/leos-advetnures-in-rome/3.jpg",
      "assets/img/books/leos-advetnures-in-rome/4.jpg",
      "assets/img/books/leos-advetnures-in-rome/5.jpg",
      "assets/img/books/leos-advetnures-in-rome/6.jpg",
    ],
    sections: [
      "assets/img/books/leos-advetnures-in-rome/sections/1.jpg",
      "assets/img/books/leos-advetnures-in-rome/sections/2.jpg",
      "assets/img/books/leos-advetnures-in-rome/sections/3.jpg",
      "assets/img/books/leos-advetnures-in-rome/sections/4.jpg",
      "assets/img/books/leos-advetnures-in-rome/sections/5.jpg",
    ],
    intro: [
      "Discover Leo’s Adventures in Rome, a charming coloring book that invites you to explore the Eternal City in the most delightful and stylish way. ",
      "Join Leo, a curious and elegant lion, as he explores the most iconic corners of Rome.With 40 original illustrations, this book is a visual celebration of art, history, and the joy of travel.",
      "🎁 Bonus Included! At the end of the book, enjoy a fun color and solve word search filled with travel words related to Leo’s journey. A perfect extra activity for curious and sharp minds.",
    ],
    bullets: [
      "40 unique illustrations to color.",
      "Perfect size: 8.25 x 8.25 in.",
      "A great gift for creative minds.",
      "Great for all ages.",
    
    
    ]
  },

  "planet-animal": {
    title: "Planet Animal",
    price: 9.99,
    currency: "USD",

    // Enlaces por idioma y país (prioridad máx)
    buy_by_lang: {
      en: {
        us: "https://www.amazon.com/dp/B0FMXK8FVR", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FMXK8FVR",
        de: "https://www.amazon.de/dp/B0FMXK8FVR",
        it: "https://www.amazon.it/dp/B0FMXK8FVR",
        es: "https://www.amazon.es/dp/B0FMXK8FVR",
        fr: "https://www.amazon.fr/dp/B0FMXK8FVR",
        jp: "https://www.amazon.jp/dp/B0FMXK8FVR",
        au: "https://www.amazon.au/dp/B0FMXK8FVR",
        se: "https://www.amazon.se/dp/B0FMXK8FVR",
        pl: "https://www.amazon.pl/dp/B0FMXK8FVR",
        ca: "https://www.amazon.ca/dp/B0FMXK8FVR",
        nl: "https://www.amazon.nl/dp/B0FMXK8FVR",
      },
      es: {
        us: "https://www.amazon.com/dp/B0FGJ6Z3FQ", // ← pon el ASIN/URL de la edición EN
        uk: "https://www.amazon.co.uk/dp/B0FGJ6Z3FQ",
        de: "https://www.amazon.de/dp/B0FGJ6Z3FQ",
        it: "https://www.amazon.it/dp/B0FGJ6Z3FQ",
        es: "https://www.amazon.es/dp/B0FGJ6Z3FQ",
        fr: "https://www.amazon.fr/dp/B0FGJ6Z3FQ",
        jp: "https://www.amazon.jp/dp/B0FGJ6Z3FQ",
        au: "https://www.amazon.au/dp/B0FGJ6Z3FQ",
        se: "https://www.amazon.se/dp/B0FGJ6Z3FQ",
        pl: "https://www.amazon.pl/dp/B0FGJ6Z3FQ",
        ca: "https://www.amazon.ca/dp/B0FGJ6Z3FQ",
        nl: "https://www.amazon.nl/dp/B0FGJ6Z3FQ",
      }
    },

    // Fallback (si no hay buy_by_lang): por país, sin idioma
    buy: {
      us: "#",
      uk: "#",
      au: "#"
    },

    images: [
      "assets/img/books/planet-animal/cover.jpg",
      "assets/img/books/planet-animal/1.jpg",
      "assets/img/books/planet-animal/2.jpg",
      "assets/img/books/planet-animal/3.jpg",
      "assets/img/books/planet-animal/4.jpg",
      "assets/img/books/planet-animal/5.jpg",
      "assets/img/books/planet-animal/6.jpg",
    ],
    sections: [
      "assets/img/books/planet-animal/sections/1.jpg",
      "assets/img/books/planet-animal/sections/2.jpg",
      "assets/img/books/planet-animal/sections/3.jpg",
      "assets/img/books/planet-animal/sections/4.jpg",
      "assets/img/books/planet-animal/sections/5.jpg",
    ],
    intro: [
      "Discover Leo’s Adventures in Rome, a charming coloring book that invites you to explore the Eternal City in the most delightful and stylish way. ",
      "Join Leo, a curious and elegant lion, as he explores the most iconic corners of Rome.With 40 original illustrations, this book is a visual celebration of art, history, and the joy of travel.",
      "🎁 Bonus Included! At the end of the book, enjoy a fun color and solve word search filled with travel words related to Leo’s journey. A perfect extra activity for curious and sharp minds.",
    ],
    bullets: [
      "40 unique illustrations to color.",
      "Perfect size: 8.25 x 8.25 in.",
      "A great gift for creative minds.",
      "Great for all ages.",
    
    
    ]
  },

  
};




// ===================================
// 2) Módulo de idioma + tienda (fallback global)
// ===================================

// Fallback global (si un libro no define buy_by_lang ni buy)
const STORE_LINKS = {
  en: {
    us: "https://www.amazon.com/dp/B0FH76J5W2",
    uk: "https://www.amazon.co.uk/dp/B0FH76J5W2",
    de: "https://www.amazon.de/dp/B0FH76J5W2",
    it: "https://www.amazon.it/dp/B0FH76J5W2",
    es: "https://www.amazon.es/dp/B0FH76J5W2",
    fr: "https://www.amazon.fr/dp/B0FH76J5W2",
    jp: "https://www.amazon.co.jp/dp/B0FH76J5W2",
    au: "https://www.amazon.com.au/dp/B0FH76J5W2",
    se: "https://www.amazon.se/dp/B0FH76J5W2",
    pl: "https://www.amazon.pl/dp/B0FH76J5W2",
    ca: "https://www.amazon.ca/dp/B0FH76J5W2",
    nl: "https://www.amazon.nl/dp/B0FH76J5W2"
  },
  es: {
    us: "https://www.amazon.com/dp/B0FHK559R7",
    uk: "https://www.amazon.co.uk/dp/B0FHK559R7",
    de: "https://www.amazon.de/dp/B0FHK559R7",
    it: "https://www.amazon.it/dp/B0FHK559R7",
    es: "https://www.amazon.es/dp/B0FHK559R7",
    fr: "https://www.amazon.fr/dp/B0FHK559R7",
    jp: "https://www.amazon.co.jp/dp/B0FHK559R7",
    au: "https://www.amazon.com.au/dp/B0FHK559R7",
    se: "https://www.amazon.se/dp/B0FHK559R7",
    pl: "https://www.amazon.pl/dp/B0FHK559R7",
    ca: "https://www.amazon.ca/dp/B0FHK559R7",
    nl: "https://www.amazon.nl/dp/B0FHK559R7"
  }
};

// Banderas (orden de render)
const STORES_META = [
  { code:'us', label:'United States',    flag:'https://flagcdn.com/us.svg' },
  { code:'uk', label:'United Kingdom',   flag:'https://flagcdn.com/gb.svg' },
  { code:'es', label:'Spain',            flag:'https://flagcdn.com/es.svg' },
  { code:'fr', label:'France',           flag:'https://flagcdn.com/fr.svg' },
  { code:'de', label:'Germany',          flag:'https://flagcdn.com/de.svg' },
  { code:'it', label:'Italy',            flag:'https://flagcdn.com/it.svg' },
  { code:'jp', label:'Japan',            flag:'https://flagcdn.com/jp.svg' },
  { code:'au', label:'Australia',        flag:'https://flagcdn.com/au.svg' },
  { code:'pl', label:'Poland',           flag:'https://flagcdn.com/pl.svg' },
  { code:'se', label:'Sweden',           flag:'https://flagcdn.com/se.svg' },
  { code:'ca', label:'Canada',           flag:'https://flagcdn.com/w40/ca.png' },
  { code:'nl', label:'Netherlands',      flag:'https://flagcdn.com/w40/nl.png' }
];


window.BOOKS = window.BOOKS || {};

window.BOOKS["digital-explore"] = {
  title: "Digital Explore The Ocean",
  price: 1.99,
  images: [
    "assets/etsy/explore/1.jpg",
    "assets/etsy/explore/2.jpg",
    "assets/etsy/explore/3.jpg",
    "assets/etsy/explore/4.jpg",
    "assets/etsy/explore/5.jpg"
  ]
};

window.BOOKS["digital-matilda"] = {
  title: "Digital My Best Friend Matilda",
  price: 1.99,
  images: [
    "assets/etsy/matilda/1.jpg"
  ]
};

window.BOOKS["digital-agent"] = {
  title: "Digital Agent Secret: Origins 1",
  price: 1.99,
  images: [
    "assets/etsy/agent/1.jpg"
  ]
};

window.BOOKS["digital-witch"] = {
  title: "Digital A Day In The Life of Little Witch",
  price: 1.99,
  images: [
    "assets/etsy/witch/1.jpg"
  ]
};

window.BOOKS["digital-roxie"] = {
  title: "Digital Coloring With Roxie",
  price: 1.99,
  images: [
    "assets/etsy/roxie/1.jpg"
  ]
};


// === Util: qué libro está abierto (acepta ?slug= o ?book=) ===
function getCurrentBookSlug() {
  const u = new URL(location.href);
  return u.searchParams.get('slug')
      || u.searchParams.get('book')
      || Object.keys(window.BOOKS || {})[0]
      || "";
}

// === Resuelve el enlace final para un país, según idioma y libro ===
// Prioridad: book.buy_by_lang[lang][country] → book.buy[country] → STORE_LINKS[lang][country] → '#'
function resolveStoreHref(selectedLang, countryCode, bookData) {
  const byLang = bookData?.buy_by_lang?.[selectedLang]?.[countryCode];
  if (byLang) return byLang;

  const byCountry = bookData?.buy?.[countryCode];
  if (byCountry) return byCountry;

  const global = (STORE_LINKS?.[selectedLang] || {})[countryCode];
  if (global) return global;

  return '#';
}

// === Módulo de compra (pinta los botones idioma + banderas) ===
function initBuyModule() {
  const mod = document.getElementById('buyModule');
  if (!mod) return;

  const langBtns  = mod.querySelectorAll('.lang-btn');
  const storesBox = mod.querySelector('#stores');
  const flagsWrap = mod.querySelector('#flags');
  const langLabel = mod.querySelector('#langLabel');

  const currentSlug = getCurrentBookSlug();
  const bookData = (window.BOOKS || {})[currentSlug] || null;

  let selectedLang = 'null'; // idioma por defecto

  function renderFlags() {
    flagsWrap.innerHTML = (STORES_META || []).map(st => {
      const href = resolveStoreHref(selectedLang, st.code, bookData);
      const disabled = !href || href === '#';
      return `
        <a class="flag ${st.code}" href="${href}" ${disabled ? 'style="opacity:.45;pointer-events:none"' : ''}
           target="_blank" rel="noopener" title="${st.label} Store">
          <img src="${st.flag}" alt="${st.label}">
        </a>`;
    }).join('');
  }

  function chooseLang(lang) {
    selectedLang = lang;
    langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    langLabel.textContent = lang === 'es' ? 'Español' : 'English';
    storesBox.hidden = false;
    renderFlags();
  }

  langBtns.forEach(btn => btn.addEventListener('click', () => chooseLang(btn.dataset.lang)));

  // Mostrar EN al cargar (cámbialo a 'es' si prefieres)
  chooseLang(selectedLang);
}

/* ====== Helpers para “libros relacionados” (carrusel) ====== */



// Flechas del carrusel (scope por sección)
function initCarouselForSection(sectionEl){
  if (!sectionEl) return;
  const track = sectionEl.querySelector('.ac-track'); // usa .ac-track aquí
  const prev  = sectionEl.querySelector('.ac-arrow--left');
  const next  = sectionEl.querySelector('.ac-arrow--right');
  if (!track || !prev || !next) return;

  function stepSize(){
    const card = track.querySelector('.ac-card');
    if(!card) return 300;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || 16);
    return card.getBoundingClientRect().width + gap;
  }
  function updateArrows(){
    const maxScroll = track.scrollWidth - track.clientWidth - 1;
    prev.disabled = track.scrollLeft <= 0;
    next.disabled = track.scrollLeft >= maxScroll;
  }

  prev.addEventListener('click', ()=> track.scrollBy({left: -stepSize(), behavior:'smooth'}));
  next.addEventListener('click', ()=> track.scrollBy({left:  stepSize(), behavior:'smooth'}));
  track.addEventListener('scroll', updateArrows, {passive:true});
  window.addEventListener('resize', updateArrows);

  track.setAttribute('tabindex','0');
  track.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowRight') track.scrollBy({left: stepSize(), behavior:'smooth'});
    if(e.key === 'ArrowLeft')  track.scrollBy({left: -stepSize(), behavior:'smooth'});
  });

  updateArrows();
}



// ================================
// 👀 Recently Viewed (global)
// ================================

// Guardar libro en "vistos recientemente"
function rvPush(slug) {
  let viewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");

  // quitar duplicados
  viewed = viewed.filter(s => s !== slug);

  // añadir al principio
  viewed.unshift(slug);

  // limitar a máximo 10
  if (viewed.length > 10) {
    viewed = viewed.slice(0, 10);
  }

  localStorage.setItem("recentlyViewed", JSON.stringify(viewed));
}

// Renderizar la sección "Recently Viewed"
function renderRecentlyViewed(currentSlug) {
  const section = document.getElementById("recent");
  if (!section) return;
  const wrap = section.querySelector(".ac-track");
  if (!wrap) return;

  let viewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");

  // ✅ si está vacío (primera visita), enseñamos al menos el actual
  if (viewed.length === 0 && currentSlug) {
    viewed = [currentSlug];
  }

  // opcional: quita duplicados y limita a 10
  viewed = Array.from(new Set(viewed)).slice(0, 10);

  wrap.innerHTML = viewed
    .map(slug => {
      const book = window.BOOKS?.[slug];
      if (!book) return "";
      return `
        <a class="ac-card" href="${slug}.html">
          <img class="ac-img" src="${book.images[0]}" alt="${book.title}">
          <h3 class="ac-title">${book.title}</h3>
          <div class="ac-price">$${book.price.toFixed(2)}</div>
        </a>
      `;
    })
    .join("");

  if (wrap.innerHTML.trim()) {
    section.removeAttribute("hidden");
    // ✅ activa flechas y teclado también en “recent”
    initCarouselForSection(section);
  }
}


// ================================
// 🎯 Related (YOU MIGHT ALSO ENJOY)
// ================================
function renderRelatedCarousel(currentSlug) {
  const wrap = document.getElementById("relatedTrack");
  if (!wrap) return;

  // ✅ solo digitales
  let items = Object.entries(window.BOOKS)
    .filter(([slug]) => slug.startsWith("digital-") && slug !== currentSlug);

  wrap.innerHTML = items
    .map(([slug, book]) => `
      <a class="ac-card" href="${slug}.html">
        <img class="ac-img" src="${book.images[0]}" alt="${book.title}">
        <h3 class="ac-title">${book.title}</h3>
        <div class="ac-price">$${book.price.toFixed(2)}</div>
      </a>
    `)
    .join("");

  // 👉 ahora sí inicializamos las flechas
  initCarouselForSection(document.getElementById("related"));
}


window.BOOKS["digital-matilda"] = {
  title: "Digital My Best Friend Matilda",
  price: 1.99,
  images: [
    "assets/etsy/matilda/1.jpg",
    "assets/etsy/matilda/2.jpg",
    "assets/etsy/matilda/3.jpg"
  ]
};

window.BOOKS["digital-agent"] = {
  title: "Digital Agent Secret Origins 1",
  price: 1.99,
  images: [
    "assets/etsy/agent/1.jpg",
    "assets/etsy/agent/2.jpg",
    "assets/etsy/agent/3.jpg"
  ]
};

window.BOOKS["digital-roxie"] = {
  title: "Digital Coloring With Roxie",
  price: 1.99,
  images: [
    "assets/etsy/roxie/1.jpg",
    "assets/etsy/roxie/2.jpg",
    "assets/etsy/roxie/3.jpg"
  ]
};

window.BOOKS["digital-roxie"] = {
  title: "Digital Coloring With Roxie",
  price: 1.99,
  images: [
    "assets/etsy/roxie/1.jpg",
    "assets/etsy/roxie/2.jpg",
    "assets/etsy/roxie/3.jpg"
  ]
};