/**
 * hooks/useSourcePath.js
 *
 * URL 경로(pathname)를 읽어 페이지 키를 반환합니다.
 * 나중에 analytics 이벤트, AB 테스트 연동도 여기서 처리합니다.
 */

import LAYOUT_CONFIGS from '../config/layoutPath.js'

export function usePath() {
  const path = window.location.pathname.replace('/', '') || 'default'
  const resolved = path in LAYOUT_CONFIGS ? path : 'default'
  return resolved
}
