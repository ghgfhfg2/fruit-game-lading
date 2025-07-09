
'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "New York, USA",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20smiling%20young%20woman%20with%20brown%20hair%2C%20friendly%20expression%2C%20casual%20attire%2C%20clean%20background%2C%20portrait%20photography%20style%2C%20natural%20lighting&width=100&height=100&seq=avatar001&orientation=squarish",
      rating: 5,
      review: "This is hands down the best puzzle game I've ever played! The graphics are stunning and the gameplay is so addictive. I've been playing for months and still discover new challenges every day.",
      date: "2 days ago"
    },
    {
      name: "Mike Johnson",
      location: "London, UK",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20smiling%20middle-aged%20man%20with%20short%20hair%2C%20friendly%20expression%2C%20business%20casual%20attire%2C%20clean%20background%2C%20portrait%20photography%20style&width=100&height=100&seq=avatar002&orientation=squarish",
      rating: 5,
      review: "Perfect for my daily commute! The levels are just the right length and difficulty. I love how I can play without downloading anything - it works perfectly on my phone's browser.",
      date: "1 week ago"
    },
    {
      name: "Emily Chen",
      location: "Tokyo, Japan",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20smiling%20young%20Asian%20woman%20with%20long%20black%20hair%2C%20friendly%20expression%2C%20modern%20casual%20clothing%2C%20clean%20background%2C%20portrait%20photography&width=100&height=100&seq=avatar003&orientation=squarish",
      rating: 5,
      review: "I'm usually not into puzzle games, but Fruit Game changed my mind completely! The relaxing music and beautiful visuals make it so therapeutic. It's become my go-to stress reliever.",
      date: "3 weeks ago"
    },
    {
      name: "David Rodriguez",
      location: "Barcelona, Spain",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20smiling%20Hispanic%20man%20with%20beard%2C%20friendly%20expression%2C%20casual%20shirt%2C%20clean%20background%2C%20portrait%20photography%20style%2C%20natural%20lighting&width=100&height=100&seq=avatar004&orientation=squarish",
      rating: 5,
      review: "My whole family is obsessed with this game! We compete to see who can get the highest scores. The daily rewards keep us coming back every day. Absolutely fantastic game design!",
      date: "1 month ago"
    },
    {
      name: "Lisa Thompson",
      location: "Sydney, Australia",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20smiling%20blonde%20woman%20with%20shoulder%20length%20hair%2C%20friendly%20expression%2C%20colorful%20blouse%2C%20clean%20background%2C%20portrait%20photography%20style&width=100&height=100&seq=avatar005&orientation=squarish",
      rating: 5,
      review: "The progression system is perfect - not too easy, not too hard. I love how each level introduces new mechanics while keeping the core gameplay familiar. Truly a masterpiece!",
      date: "2 months ago"
    },
    {
      name: "Alex Kim",
      location: "Seoul, South Korea",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20smiling%20young%20Asian%20man%20with%20stylish%20haircut%2C%20friendly%20expression%2C%20modern%20casual%20attire%2C%20clean%20background%2C%20portrait%20photography%20style&width=100&height=100&seq=avatar006&orientation=squarish",
      rating: 5,
      review: "As a game developer myself, I'm impressed by the attention to detail. The animations are smooth, the sound effects are satisfying, and the overall polish is exceptional. Well done!",
      date: "3 months ago"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Player Reviews
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join over 500,000 happy players worldwide who have fallen in love with Fruit Game. 
            See what they're saying about their experience!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="text-sm text-gray-500">{testimonial.date}</div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 flex items-center justify-center text-yellow-400">
                    <i className="ri-star-fill text-lg"></i>
                  </div>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Fruit Game Community!
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500K+</div>
              <div className="text-white/80">Active Players</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10M+</div>
              <div className="text-white/80">Games Played</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Recommend Rate</div>
            </div>
          </div>
          <button className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer">
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-play-circle-fill text-2xl"></i>
              </div>
              Start Your Adventure
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
