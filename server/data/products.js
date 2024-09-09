const products = [
  {
    name: "Gree 1.5 ton F-Split Inv AC H&C GSH-18NFV410",
    image: "/public/images/products/product-1.jpg",
    brand: "Gree",
    category: "Air Conditioner",
    description:
      "GREE 1.5 ton air conditioner GSH-18NFV410 is a high-quality and energy-efficient air conditioning unit designed to cool rooms up to 600 square feet. With a cooling capacity of 18,000 BTUs, it is ideal for small to medium-sized rooms in your home or office.This air conditioner features a range of modes, including Cool, Heat, Fan, and Dry, providing customizable cooling and heating options to meet your specific needs. It also has a built-in air purifying system that helps filter out harmful particles, ensuring the air you breathe is clean and healthy.GREE 1.5 ton air conditioner GSH-18NFV410 is an excellent choice if you're looking for a powerful and efficient air conditioning unit for your home or office. Its advanced features and customizable options ensure that you stay comfortable all year round while also keeping your energy costs low.",
    rating: 4.5,
    price: 725,
    countInStock: 20,
  },
  {
    name: "JBL Boombox 2 Wireless Portable Speaker",
    image: "/public/images/products/product-4.jpg",
    brand: "JBL",
    category: "Audio & Visual",
    description:
      "The 300W of power output ensures great audio performance for movies and music, Bring movies to life with JBL Surround Sound, without the hassle of any additional wires or speakers, Enjoy rich and deep bass as well as the convenience of flexible placement without the hassle of wires, Stream all music wirelessly from any mobile device, Connect devices and simplify home entertainment setup.Soundbar Transducer Size: 4 x 2.25 Inch racetrack drivers, 2 x 1.25 Inch tweeter, Subwoofer Transducer Size: 6.5 Inch, Max SPL: 99db, HDMI Video Inputs: 1, HDMI Video Output(with Audio Return Channel): 1, HDMI HDCP Version: 1.4, Bluetooth Version: 4.2.",
    rating: 4.5,
    price: 45,
    countInStock: 12,
  },
  {
    name: "DAIKIN 1 Ton Split Inv AC FTKL12TV16WD",
    image: "/public/images/products/product-2.jpg",
    brand: "Daikin",
    category: "Air Conditioner",
    description:
      "DAIKIN Energy Saving during standby operation, 3-D airflow, Auto fan speed, ECONO mode, Indoor unit ON/OFF switch, PAM Control, Vertical Auto Swing ( Up & Down ) , Horizontal Auto Swing ( Left & Right ) , R/C With Back Light",
    rating: 4,
    price: 612,
    countInStock: 16,
  },
  {
    name: "JBL Bar 2.1 – Channel Soundbar with Wireless Subwoofer",
    image: "/public/images/products/product-3.jpg",
    brand: "JBL",
    category: "Audio & Visual",
    description:
      "JBL Soundbar, Wireless subwoofer, Remote control with battery, Power cables (number and types varied by region), Optical cable, AUX cable, Wall-mount bracket kit, Quickstart guide, Warranty card, Safety sheet.Enjoy JBL sound with 300W of power, JBL Surround Sound makes movies come alive, Rich and deep bass from a 6.5 Inch (165mm) wireless subwoofer, Wireless music streaming with Bluetooth, Connect devices with HDMI IN/ 1 HDMI out (ARC), Works with TV remote control.",
    rating: 5,
    price: 32,
    countInStock: 10,
  },
  {
    name: "Apple Homepod Price Bangladesh | DRM Electronics",
    image: "/public/images/products/product-5.jpg",
    brand: "Apple",
    category: "Audio & Visual",
    description:
      "Apple Soundbar, Wireless subwoofer, Remote control with battery, Power cables (number and types varied by region), Optical cable, AUX cable, Wall-mount bracket kit, Quickstart guide, Warranty card, Safety sheet.Enjoy JBL sound with 300W of power, JBL Surround Sound makes movies come alive, Rich and deep bass from a 6.5 Inch (165mm) wireless subwoofer, Wireless music streaming with Bluetooth, Connect devices with HDMI IN/ 1 HDMI out (ARC), Works with TV remote control.",
    rating: 5,
    price: 40,
    countInStock: 8,
  },
  {
    name: "8 KG Front Loading Washing Machine |HW80-BP12929S3|",
    image: "/public/images/products/product-6.jpg",
    brand: "Washing",
    category: "Home Appliance",
    description:
      "Super Drum with 525mm diameter helps to enhance the quality of washing by 25% and decreases the depth by 16% ensuring a unique design that is gentle on clothes yet tough on dirt. Advanced high-tech brushless inverter motor reduce the vibrations and ensure greater stability, proving more reliable than the conventional motor which gives consumer to experience the ultimate washing with extensive care of garments.",
    rating: 3.5,
    price: 48,
    countInStock: 4,
  },
  {
    name: "Samsung 98Q80C 98 Inch QLED 4K HDR Smart TV",
    image: "/public/images/products/product-7.jpg",
    brand: "Samsung",
    category: "Television",
    description:
      "Binge-watching, gaming, and marathoning all reach new heights with the Samsung QLED 4K. Experience the world at a whole new level, with all of its details, hues, and sounds. (Note that AI-based upscaling may change depending on the original content.) Discover a whole new level of TV excitement on Samsung displays while taking advantage of the greatest entertainment package. (Q-Series and S-Series soundbars are available separately. To use the gaming features, you'll need a high-speed internet connection, additional gaming service subscriptions, and a compatible controller.",
    rating: 4.5,
    price: 1150,
    countInStock: 8,
  },
  {
    name: "Apple 15-inch Macbook Air price in bd with M2 chip - Midnight",
    image: "/public/images/products/product-8.jpg",
    brand: "Apple",
    category: "Laptop",
    description:
      "Experience the future of computing with the 2023 model of the Apple MacBook Air M2, featuring an advanced chip, 8GB RAM, and a swift 256GB storage, offering unparalleled speed and versatility for your tasks, all encapsulated in the iconic MacBook design.",
    rating: 5,
    price: 155,
    countInStock: 4,
  },
  {
    name: "16.0 kg Top Load Washing Machine with Digital Inverter Motor",
    image: "/public/images/products/product-9.jpg",
    brand: "Digital",
    category: "Home Appliance",
    description:
      "Super Drum with 525mm diameter helps to enhance the quality of washing by 25% and decreases the depth by 16% ensuring a unique design that is gentle on clothes yet tough on dirt. Advanced high-tech brushless inverter motor reduce the vibrations and ensure greater stability, proving more reliable than the conventional motor which gives consumer to experience the ultimate washing with extensive care of garments.",
    rating: 2.5,
    price: 25,
    countInStock: 2,
  },
  {
    name: "F&D A140X 2.1 Multimedia Bluetooth Speaker",
    image: "/public/images/products/product-10.jpg",
    brand: "F&D",
    category: "Audio & Visual",
    description:
      "Subwoofer: 4-inch bass driver for subwoofer.Signal / noise ratio: ≥ 65dB.USB: USB Reader Supports MP3/WMA Dual Formats Decoding.Manufacturing Warranty: 1 year service.",
    rating: 3.5,
    price: 52,
    countInStock: 5,
  },
  {
    name: "MacBook Pro m2 max 16‑inch MacBook Pro - Space Gray",
    image: "/public/images/products/product-11.jpg",
    brand: "Apple",
    category: "Laptop",
    description:
      "Elevate your computing experience with the MacBook Pro M2 Max 16 Inch in Space Gray, now accessible in Bangladesh featuring a spacious 1TB SSD. Embrace unmatched power and style, propelling your creativity and efficiency to new heights, all at an enticing price.Included Software: Photos, iMovie, GarageBand, Pages, Numbers, Keynote, Siri, Safari, Mail, FaceTime, Messages, Maps, News, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Music, Podcasts, TV, Books, App Store",
    rating: 5,
    price: 405,
    countInStock: 13,
  },
  {
    name: "BRAVIA 7 65” class Mini LED QLED 4K HDR Google TV (2024)",
    image: "/public/images/products/product-12.jpg",
    brand: "Sony",
    category: "Television",
    description:
      "Elevate your computing experience with the MacBook Pro M2 Max 16 Inch in Space Gray, now accessible in Bangladesh featuring a spacious 1TB SSD. Embrace unmatched power and style, propelling your creativity and efficiency to new heights, all at an enticing price.Included Software: Photos, iMovie, GarageBand, Pages, Numbers, Keynote, Siri, Safari, Mail, FaceTime, Messages, Maps, News, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Music, Podcasts, TV, Books, App Store",
    rating: 5,
    price: 440,
    countInStock: 2,
  },
];

module.exports = products;
