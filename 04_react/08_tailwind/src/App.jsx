import Cards from "./Cards";

function App() {
  return (
    <div className="flex justify-center items-center mx-4 flex-col">
      <h1 className="text-center text-4xl font-semibold my-4">
        Testing the Tailwind
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map((product, index) => (
          <Cards product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;

const products = [
  {
    title: "Apple MacBook Air M2",
    text: "Powerful M2 chip, 13.6-inch Liquid Retina display, and all-day battery life.",
    buttonText: "Buy Now",
    buttonVariant: "primary",
  },
  {
    title: "Sony WH-1000XM5 Headphones",
    text: "Industry-leading noise cancellation with premium sound quality and comfort.",
    buttonText: "Buy Now",
    buttonVariant: "primary",
  },
  {
    title: "Samsung Galaxy S23 Ultra",
    text: "200MP camera, Snapdragon 8 Gen 2, and an S Pen for ultimate productivity.",
    buttonText: "Buy Now",
    buttonVariant: "primary",
  },
  {
    title: "Nintendo Switch OLED",
    text: "7-inch OLED display for immersive gaming, with handheld and docked modes.",
    buttonText: "Buy Now",
    buttonVariant: "primary",
  },
  {
    title: "Bose SoundLink Revolve+",
    text: "360-degree wireless speaker with deep bass and long battery life.",
    buttonText: "Buy Now",
    buttonVariant: "primary",
  },
  {
    title: "Logitech MX Master 3S",
    text: "Ergonomic wireless mouse with ultra-fast scrolling and precision tracking.",
    buttonText: "Buy Now",
    buttonVariant: "primary",
  },
  {
    title: "Kindle Paperwhite (11th Gen)",
    text: "Waterproof e-reader with a 6.8-inch display and adjustable warm light.",
    buttonText: "Buy Now",
    buttonVariant: "primary",
  },
  {
    title: "DJI Mini 3 Pro Drone",
    text: "Compact, foldable drone with 4K HDR video and advanced obstacle sensing.",
    buttonText: "Buy Now",
    buttonVariant: "primary",
  },
  {
    title: "Fitbit Charge 6",
    text: "Advanced fitness tracker with heart rate monitoring and built-in GPS.",
    buttonText: "Buy Now",
    buttonVariant: "primary",
  },
  {
    title: "GoPro HERO12 Black",
    text: "High-resolution action camera with HyperSmooth 6.0 stabilization.",
    buttonText: "Buy Now",
    buttonVariant: "primary",
  },
];


