/**
 * config/layouts.js
 *
 * 유입경로(src 파라미터)별 섹션 렌더링 순서를 정의
 * 마케터/기획자가 코드 최소 지식으로 수정할 수 있도록
 *
 *
 * 사용 가능한 섹션 키:
 *   hero | recommend | whyus | product | review | doctor | faq | price | finalcta
 *
 * URL 예시:
 *   /?src=blog   → blog 레이아웃
 *   /?src=crm    → crm 레이아웃
 *   (없음)       → default 레이아웃
 */

const LAYOUT_CONFIGS = {

  // 기본값
  default: [
    'hero',
    'recommend',
    'whyus',
    'product',
    'review',
    'doctor',
    'faq',
    'price',
    'finalcta',
  ],

  // 블로그 유입: 신뢰 구축 → 차별점 → 전환
  blog: [
    'hero',
    'doctor',     // 원장 신뢰 먼저
    'whyus',
    'recommend',
    'product',
    'review',
    'price',
    'faq',
    'finalcta',
  ],

  // CRM 문자 유입: 이미 인지된 고객 → 바로 가격/CTA
  crm: [
    'hero',
    'price',      // 가격 확인이 재방문 목적
    'product',
    'review',
    'faq',
    'finalcta',
  ],

  // SNS 광고 유입: 감성 후기 → 사회적 증명 → 전환
  sns: [
    'hero',
    'review',     // 후기가 가장 강력한 설득
    'recommend',
    'product',
    'whyus',
    'price',
    'faq',
    'finalcta',
  ],

  // 검색광고 (네이버/구글 키워드): 차별점 명확히 → 전환
  search: [
    'hero',
    'whyus',      // 차별점 먼저
    'product',
    'price',
    'review',
    'faq',
    'doctor',
    'finalcta',
  ],
}

export default LAYOUT_CONFIGS
