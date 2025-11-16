import data from "../data.json";

export default function ConnectSection() {
  const connectData = data.connect;
  
  // Helper function to get contact display text
  const getContactDisplay = (link) => {
    if (link.name === 'Email') {
      return link.url.replace('mailto:', '');
    } else if (link.name === 'Phone') {
      return link.url.replace('tel:', '');
    } else if (link.name === 'Instagram') {
      // Extract Instagram handle from URL
      const handle = link.url.split('/').filter(part => part).pop();
      return `@${handle}`;
    } else if (link.name === 'LinkedIn') {
      const handle = link.url.split('/').filter(part => part).pop();
      return `@${handle}`;
    }
    return link.url;
  };

  // Get email from data
  const emailLink = connectData.links.find(link => link.name === 'Email');
  const emailAddress = emailLink ? emailLink.url.replace('mailto:', '') : '';

  return (
    <section className="w-full max-w-full py-12 sm:py-20 px-4 text-center mx-auto bg-black text-white" id="connect">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 px-2">
        <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">{connectData.title}</span>
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8 text-pink-400">Get in Touch</h3>
          
          {/* Contact Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {connectData.links.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-8 bg-neutral-900 rounded-xl border border-neutral-700 hover:border-pink-500 hover:bg-neutral-800 transition-all duration-300 group"
              >
                <span className="text-4xl">
                  {link.name === 'LinkedIn' && '💼'}
                  {link.name === 'Email' && '📧'}
                  {link.name === 'Instagram' && '📸'}
                  {link.name === 'Phone' && '📞'}
                </span>
                <div className="text-center">
                  <h4 className="font-semibold text-white text-lg mb-1">{link.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {getContactDisplay(link)}
                  </p>
                </div>
                <span className="text-pink-400 text-xl group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
          
          {/* Email CTA */}
          <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-2xl p-8 border border-pink-500/20">
            <h4 className="text-xl font-semibold text-white mb-4">Ready to Collaborate?</h4>
            <p className="text-gray-300 mb-6">Send me an email directly to discuss your project, collaboration opportunities, or just to say hello!</p>
            <a 
              href={`mailto:${emailAddress}?subject=Hello Binit - Let's Connect!`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300 text-lg"
            >
              <span>📧</span>
              <span>Send Email</span>
              <span>→</span>
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 p-6 bg-neutral-900 rounded-lg border border-neutral-700 max-w-2xl mx-auto">
            <h4 className="font-semibold text-white mb-2">Quick Response</h4>
            <p className="text-gray-300 text-sm">I typically respond within 24 hours for business inquiries and collaboration opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 