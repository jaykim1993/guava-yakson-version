/**
 * config/layoutPath.js
 *
 * URL 경로별 섹션 렌더링 순서를 정의
 * 마케터/기획자가 코드 최소 지식으로 수정할 수 있도록
 *
 *
 * 사용 가능한 섹션 키:
 *   hero | recommend | whyus | product | review | doctor | faq | price | finalcta
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
    'whyus',
    'review',
    'product',
    'faq',
    'price',
    'finalcta',
  ],

  diet: [
    'hero',
    'recommend',  // 이런 분께 추천
    'product',    // 한방 다이어트 치료
    'whyus',      // 왜 우리 한의원인가
    'review',
    'price',
    'faq',
    'finalcta',
  ],

  backpain: [
    'hero',
    'intro',      // 허리 통증 원인 설명
    'whyus',
    'product',
    'review',
    'faq',
    'price',
    'finalcta',
  ],

  knee: [
    'hero',
    'intro',      // 무릎 관절 원인 설명
    'product',
    'whyus',
    'review',
    'price',
    'finalcta',
  ],

  skin: [
    'hero',
    'recommend',  // 피부 고민 타입별
    'product',
    'review',     // 후기가 핵심
    'whyus',
    'faq',
    'price',
    'finalcta',
  ],

  insomnia: [
    'hero',
    'recommend',  // 이런 증상 있으신가요
    'whyus',
    'product',
    'review',
    'price',
    'faq',
    'finalcta',
  ],
}

export default LAYOUT_CONFIGS