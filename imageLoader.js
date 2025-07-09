/**
 * @param {Object} params
 * @param {string} params.src - 이미지 소스 경로
 * @param {number} params.width - 이미지 너비
 * @param {number} [params.quality=75] - 이미지 품질
 * @returns {string} 최적화된 이미지 URL
 */
export default function imageLoader({ src, width, quality = 75 }) {
  // 로컬 이미지인 경우 (public 폴더 내)
  if (src.startsWith("/")) {
    return `${src}?w=${width}&q=${quality}`;
  }

  // 외부 이미지인 경우
  return `${src}?w=${width}&q=${quality}`;
}
