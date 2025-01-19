const products = [
    {
      title: "Apple MacBook Air M2",
      text: "Powerful M2 chip, 13.6-inch Liquid Retina display, and all-day battery life.",
      buttonText: "Buy Now",
      buttonVariant: "primary"
    },
    {
      title: "Sony WH-1000XM5 Headphones",
      text: "Industry-leading noise cancellation with premium sound quality and comfort.",
      buttonText: "Buy Now",
      buttonVariant: "primary"
    },
    {
      title: "Samsung Galaxy S23 Ultra",
      text: "200MP camera, Snapdragon 8 Gen 2, and an S Pen for ultimate productivity.",
      buttonText: "Buy Now",
      buttonVariant: "primary"
    },
    {
      title: "Nintendo Switch OLED",
      text: "7-inch OLED display for immersive gaming, with handheld and docked modes.",
      buttonText: "Buy Now",
      buttonVariant: "primary"
    },
    {
      title: "Bose SoundLink Revolve+",
      text: "360-degree wireless speaker with deep bass and long battery life.",
      buttonText: "Buy Now",
      buttonVariant: "primary"
    },
    {
      title: "Logitech MX Master 3S",
      text: "Ergonomic wireless mouse with ultra-fast scrolling and precision tracking.",
      buttonText: "Buy Now",
      buttonVariant: "primary"
    },
    {
      title: "Kindle Paperwhite (11th Gen)",
      text: "Waterproof e-reader with a 6.8-inch display and adjustable warm light.",
      buttonText: "Buy Now",
      buttonVariant: "primary"
    },
    {
      title: "DJI Mini 3 Pro Drone",
      text: "Compact, foldable drone with 4K HDR video and advanced obstacle sensing.",
      buttonText: "Buy Now",
      buttonVariant: "primary"
    },
    {
      title: "Fitbit Charge 6",
      text: "Advanced fitness tracker with heart rate monitoring and built-in GPS.",
      buttonText: "Buy Now",
      buttonVariant: "primary"
    },
    {
      title: "GoPro HERO12 Black",
      text: "High-resolution action camera with HyperSmooth 6.0 stabilization.",
      buttonText: "Buy Now",
      buttonVariant: "primary"
    }
  ];
  
  // Generating 90 more similar products dynamically
  for (let i = 11; i <= 100; i++) {
    products.push({
      title: `Product ${i}`,
      text: `Description for Product ${i}. High-quality and best in class.`,
      buttonText: "Buy Now",
      buttonVariant: "primary"
    });
  }
  
  export default products;
  