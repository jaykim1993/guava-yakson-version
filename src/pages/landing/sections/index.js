/**
 * sections/index.js
 *
 * 모든 섹션을 lazy로 등록합니다.
 * - 초기 번들에 포함되지 않고, 실제 렌더링 시점에 청크가 로드됩니다.
 * - 새 섹션 추가 시 여기에만 등록하면 App.jsx는 건드릴 필요 없습니다.
 */
import { lazy } from 'react'

const SECTION_MAP = {
  hero:      lazy(() => import('./HeroSection')),
  recommend: lazy(() => import('./RecommendSection')),
  intro:     lazy(() => import('./IntroSection')),
  whyus:     lazy(() => import('./WhyUsSection')),
  product:   lazy(() => import('./ProductSection')),
  review:    lazy(() => import('./ReviewSection')),
  doctor:    lazy(() => import('./DoctorSection')),
  faq:       lazy(() => import('./FAQSection')),
  price:     lazy(() => import('./PriceSection')),
  finalcta:  lazy(() => import('./FinalCTASection')),
}

export default SECTION_MAP
