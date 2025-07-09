
'use client';

export default function GamePreview() {
  const screenshots = [
    {
      id: 1,
      title: "Match Colorful Fruits",
      image: "https://readdy.ai/api/search-image?query=Mobile%20game%20interface%20showing%20colorful%20fruit%20matching%20puzzle%20with%20strawberries%20oranges%20apples%20cherries%20arranged%20in%20grid%20pattern%2C%20bright%20vibrant%20colors%2C%20game%20UI%20elements%2C%20score%20display%2C%20clean%20simple%20background%2C%20match-3%20puzzle%20game%20style&width=400&height=600&seq=game001&orientation=portrait"
    },
    {
      id: 2,
      title: "Challenging Levels",
      image: "https://readdy.ai/api/search-image?query=Puzzle%20game%20level%20selection%20screen%20with%20fruit%20themed%20islands%20and%20paths%2C%20tropical%20paradise%20background%2C%20multiple%20level%20indicators%2C%20stars%20and%20rewards%2C%20colorful%20cartoon%20style%2C%20mobile%20game%20interface%20design&width=400&height=600&seq=game002&orientation=portrait"
    },
    {
      id: 3,
      title: "Special Power-ups",
      image: "https://readdy.ai/api/search-image?query=Fruit%20puzzle%20game%20showing%20special%20power-up%20effects%20with%20glowing%20magical%20fruits%2C%20rainbow%20explosions%2C%20sparkling%20effects%2C%20bonus%20items%2C%20dynamic%20action%20scene%2C%20vibrant%20colors%2C%20game%20interface%20elements&width=400&height=600&seq=game003&orientation=portrait"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Game Preview
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most engaging fruit puzzle adventure with stunning visuals, 
            smooth gameplay, and endless fun challenges.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-96 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{screenshot.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Game Demo Video Placeholder */}
        <div className="text-center">
          <div className="relative inline-block">
            <div 
              className="w-full max-w-4xl h-64 sm:h-80 lg:h-96 bg-cover bg-center rounded-2xl shadow-2xl relative overflow-hidden cursor-pointer group"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Animated%20fruit%20puzzle%20game%20demonstration%20showing%20fruits%20falling%20and%20matching%20in%20a%20colorful%20cascade%2C%20dynamic%20motion%20blur%20effects%2C%20vibrant%20rainbow%20colors%2C%20game%20interface%20elements%2C%20play%20button%20overlay%2C%20engaging%20action%20scene&width=800&height=450&seq=demo001&orientation=landscape')`
              }}
            >
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                <div className="bg-white/90 hover:bg-white rounded-full p-6 transform transition-all duration-300 group-hover:scale-110 shadow-xl">
                  <div className="w-12 h-12 flex items-center justify-center text-orange-600">
                    <i className="ri-play-fill text-4xl"></i>
                  </div>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                2:30 Demo
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Watch Gameplay Demo</h3>
              <p className="text-gray-600">See how easy and fun it is to play Fruit Game!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
