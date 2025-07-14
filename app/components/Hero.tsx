"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/sy-groupware-sample.appspot.com/o/publicImages%2Fhero-bg.jpg?alt=media&token=aaf2aacd-73fb-4d05-8b68-3600059445b2')`,
        }}
      />

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-pink-400/30" />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            <span className="text-yellow-100 bg-clip-text text-transparent">
              Fruit Game
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-4 drop-shadow-md">
            숫자를 더해 10을 만들어 보세요!
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-sm">
            단순하지만 중독성 있는 규칙으로
            <br />
            머리를 쓰는 재미와 상큼한 손맛을 동시에!
            <br />
            <br />
            설치 없이, 지금 바로 브라우저에서 플레이해보세요 🍊
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://sy-web-game.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-play-circle-fill text-2xl"></i>
                </div>
                지금 무료로 플레이하기
              </div>
            </Link>
          </div>

          {/* Quick Stats */}
          {/* <div className="mt-12 flex flex-wrap gap-8 justify-center text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold">500K+</div>
              <div className="text-sm">Happy Players</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm">Puzzle Levels</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.8★</div>
              <div className="text-sm">Player Rating</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 flex items-center justify-center text-white/70">
          <i className="ri-arrow-down-line text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
