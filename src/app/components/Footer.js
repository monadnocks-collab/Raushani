import Link from "next/link";
import data from "../data.json";

export default function Footer() {
  // Get contact information from data
  const emailLink = data.connect.links.find(link => link.name === 'Email');
  const instagramLink = data.connect.links.find(link => link.name === 'Instagram');
  const youtubeLink = data.connect.links.find(link => link.name === 'YouTube');

  return (
    <footer className="w-full bg-black text-white py-4 sm:py-8 lg:py-12 mt-8 sm:mt-12 border-t border-neutral-700">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">
              <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                {data.footer.name}
              </span>
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {data.footer.brandDescription}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center sm:text-center lg:text-center">
            <h4 className="font-semibold mb-2 sm:mb-3 lg:mb-4 text-pink-400 text-xs sm:text-sm lg:text-base">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
              {data.footer.quickLinks.map((link, index) => {
                const isExternal = link.href.startsWith('http');
                
                return (
                  <span key={index} className="flex items-center">
                    {index > 0 && <span className="text-gray-500 mr-2">•</span>}
                    {isExternal ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-pink-400 transition-colors"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-pink-400 transition-colors"
                      >
                        {link.text}
                      </Link>
                    )}
                  </span>
                );
              })}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="text-center sm:text-center lg:text-right">
            <h4 className="font-semibold mb-2 sm:mb-3 lg:mb-4 text-pink-400 text-xs sm:text-sm lg:text-base">Get in Touch</h4>
            <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm">
              {emailLink && (
                <a href={emailLink.url} className="text-gray-300 hover:text-pink-400 transition-colors flex items-center justify-center lg:justify-end gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm lg:text-base">📧</span> Email
                </a>
              )}
              {instagramLink && (
                <a href={instagramLink.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center justify-center lg:justify-end gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm lg:text-base">📸</span> Instagram
                </a>
              )}
              {youtubeLink && (
                <a href={youtubeLink.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center justify-center lg:justify-end gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm lg:text-base">📺</span> YouTube
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col gap-2 sm:gap-4 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
          <div className="text-gray-400 text-center sm:text-left order-3 sm:order-1">
            &copy; {new Date().getFullYear()} {data.footer.name}. {data.footer.copyright}
          </div>
          
          <div className="flex items-center justify-center gap-1 sm:gap-2 text-gray-400 order-1 sm:order-2">
            <span>{data.footer.madeWith.text}</span>
            <span className="text-pink-400 text-sm sm:text-base lg:text-lg">{data.footer.madeWith.icon}</span>
            <span>{data.footer.madeWith.by}</span>
            <a href="https://monadnocks.in" target="_blank" rel="noopener noreferrer" className="text-pink-400 font-semibold hover:text-pink-300 transition-colors">Monadnocks</a>
            <span className="hidden sm:inline">{data.footer.madeWith.team}</span>
            <span className="sm:hidden">{data.footer.madeWith.teamShort}</span>
          </div>
          
          <div className="flex items-center justify-center gap-1 sm:gap-2 text-gray-400 order-2 sm:order-3">
            <a href="https://monadnocks.in" target="_blank" rel="noopener noreferrer" className="text-pink-400 font-semibold hover:text-pink-300 transition-colors">Monadnocks</a>
            <span className="hidden sm:inline">{data.footer.tagline.full}</span>
            <span className="sm:hidden">{data.footer.tagline.short}</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 