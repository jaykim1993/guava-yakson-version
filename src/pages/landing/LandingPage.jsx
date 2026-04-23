import { Suspense } from 'react'

import SECTION_MAP from './sections/index.js';
import LAYOUT_CONFIGS from './config/layouts.js';
import { useSourceParam } from './hooks/useSourceParam';

// ─── 섹션 로딩 중 fallback
function SectionSkeleton() {
  return <div className="section-skeleton" aria-hidden="true" />
}

export default function LandingPage() {
  const src          = useSourceParam()
  const sectionOrder = LAYOUT_CONFIGS[src] ?? LAYOUT_CONFIGS.default

  const sections = sectionOrder.map((key) => {
      const Component = SECTION_MAP[key]
      if (!Component) return null
      return (
        // 각 섹션을 개별 Suspense로 감싸 섹션 단위로 독립 로딩
        <Suspense key={key} fallback={<SectionSkeleton />}>
          <Component />
        </Suspense>
      )
    })
  
  return (
    <>
      {sections}
    </>
  );
}
