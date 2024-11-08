
import CategoryMenu from "./CategoryMenu";

function Home() {
  return (
    <div className="bg-black-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-white font-bold mb-4">Welcome to Your Company!</h1>
        <p className="text-lg text-white">
          We provide high-quality services to meet all your needs.
        </p>
        <p className="text-lg mt-4 text-white">Contact us today to get started.</p>
        <CategoryMenu></CategoryMenu>
      </div>
  
    </div>
  );
}

export default Home;
