/**
 * config/layoutPath.js
 *
 * URL 경로별 섹션 렌더링 순서를 정의
 * 마케터/기획자가 코드 최소 지식으로 수정할 수 있도록
 *
 *
 * 사용 가능한 섹션 키:
 *   hero | recommend | intro | doctor | product | review |  faq | supplement | finalcta
 *
 * URL 예시:
 *   /diet      → 한방 다이어트 레이아웃
 *   /backpain  → 허리/척추 레이아웃
 *   /knee      → 무릎 관절 레이아웃
 *   /skin      → 피부 레이아웃
 *   /insomnia  → 불면증 레이아웃
 *   (없음)     → default 레이아웃
 */

const LAYOUT_CONFIGS = {

  default: [
    'hero',
    'recommend',
    'intro',
    'review',
    'product',
    'faq',
    'supplement',
    'finalcta',
  ],

  diet: [
    'hero',
    'recommend',
    'product',
    'review',
    'supplement',
    'faq',
    'finalcta',
  ],

  backpain: [
    'hero',
    'intro',
    'product',
    'review',
    'faq',
    'supplement',
    'finalcta',
  ],

  knee: [
    'hero',
    'intro',
    'product',
    'review',
    'supplement',
    'finalcta',
  ],

  skin: [
    'hero',
    'recommend',
    'product',
    'review',
    'faq',
    'supplement',
    'finalcta',
  ],

  insomnia: [
    'hero',
    'recommend',
    'product',
    'review',
    'supplement',
    'faq',
    'finalcta',
  ],
}

export default LAYOUT_CONFIGS