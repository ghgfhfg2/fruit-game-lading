"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-12">
              <div className="flex items-center mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent font-pacifico">
                  Fruit Game
                </h3>
              </div>
              <p className="text-gray-400">
                숫자 매치의 짜릿한 재미! 숫자를 더하고, 퍼즐을 풀며, 상큼한
                플레이 타임을 경험하세요!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © 2025 sooya. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Available on all devices</span>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-smartphone-line"></i>
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-computer-line"></i>
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-tablet-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
