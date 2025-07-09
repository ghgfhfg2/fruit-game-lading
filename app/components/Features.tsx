"use client";

export default function Features() {
  const features = [
    {
      icon: "ri-heart-3-fill",
      title: "힐링 플레이",
      description: "스트레스를 날리고 마음까지 편안해지는 게임 시간.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: "ri-trophy-fill",
      title: "도전 정신 자극",
      description: "여러분의 두뇌 회전과 전략적 사고력을 시험해보세요.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "ri-smartphone-fill",
      title: "설치 없이 바로 플레이",
      description: "PC든 모바일이든, 브라우저에서 바로 실행이 가능해요.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Game Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            과일게임이 왜 많은 유저들에게 사랑받는 퍼즐 게임인지 확인해보세요!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              window.open("https://sy-web-game.web.app", "_blank");
            }}
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-play-circle-fill text-2xl"></i>
              </div>
              게임 하러 가기기
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
