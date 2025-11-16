import data from "../data.json";

export default function ContributionsSection() {
  // Use contributions data from data.json
  const contributions = data.contributions.items;

  return (
    <section className="w-full max-w-full py-12 sm:py-20 px-4 mx-auto bg-black text-white" id="contributions">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center px-2">
        <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">Key Contributions</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {contributions.map((contribution, index) => (
          <div key={index} className="flex items-start gap-4 p-6 bg-neutral-900 rounded-lg shadow-lg border border-neutral-700">
            <span className="text-2xl sm:text-3xl flex-shrink-0">{contribution.icon}</span>
            <div className="text-base sm:text-lg text-gray-300">{contribution.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 