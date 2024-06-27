const industries = [
    { name: "Health Care", description: "Short description of Health Care" },
    { name: "Manufacturing", description: "Short description of Manufacturing" },
    { name: "Banking & Finance", description: "Short description of Banking & Finance" },
    { name: "Government", description: "Short description of Government" },
    { name: "Retail & E-Commerce", description: "Short description of Retail & E-Commerce" },
    { name: "Insurance", description: "Short description of Insurance" },
  ];
  
  const IndustriesSection = () => (
    <section id="industries" className="p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl mb-4">Industries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card p-4 border rounded">
              <h3 className="text-lg font-semibold">{industry.name}</h3>
              <p className="mt-2">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default IndustriesSection;
  