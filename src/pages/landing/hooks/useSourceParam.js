/**
 * hooks/useSourceParam.js
 *
 * URL ?src= 파라미터를 읽어 유입경로 키를 반환합니다.
 * 나중에 analytics 이벤트, AB 테스트 연동도 여기서 처리합니다.
 */

import LAYOUT_CONFIGS from '../config/layouts.js'

export function useSourceParam() {
  const params = new URLSearchParams(window.location.search)
  const src = params.get('src') || 'default'

  // 정의되지 않은 src 값이면 default로 폴백
  const resolved = src in LAYOUT_CONFIGS ? src : 'default'

  return resolved
}
