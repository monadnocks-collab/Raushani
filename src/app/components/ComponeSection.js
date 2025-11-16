import data from "../data.json";

export default function ComponeSection() {
  const componeData = data.compone;
  
  return (
    <section className="w-full max-w-full py-12 sm:py-20 px-4 text-center bg-black text-white mx-auto" id="compone">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 px-2">
        <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">{componeData.title}</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 px-2 leading-relaxed max-w-4xl mx-auto">
        {componeData.description}
      </p>
    </section>
  );
} 