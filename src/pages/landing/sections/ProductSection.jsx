import { getIcon } from "../../../components/icons/icons";
import './ProductSection.css'

const ICON_STYLE = {
  size: 24,
  weight: "regular",
  color: "var(--color-primary)",
};

const STEPS = [
  { step: '1단계', price: '79,000원', desc: '감량 입문 · 저자극 시작' },
  { step: '2단계', price: '84,000원', desc: '효과 본격화 · 중간 단계' },
  { step: '3단계', price: '87,000원', desc: '집중 감량 · 고효율 단계' },
]

const INCLUDES = [
  { icon: "TestTube", name: '감비환스틱', detail: '1개월 90포 (독자처방·코팅·딸기맛착향)' },
  { icon: "Leaf", name: '디톡스환', detail: '다이어트 중 변비 해결' },
  { icon: "ShieldCheck", name: '폭식환', detail: '과식 시 과잉영양분 배설' },
  { icon: "Lightning", name: '약손정', detail: '식욕 올라올 때 감비환과 함께 복용' },
];


const PROCESS = [
  { n: '01', label: '구글폼 접수' },
  { n: '02', label: '전화/카톡 상담' },
  { n: '03', label: '처방 발행' },
  { n: '04', label: '택배 수령' },
]

export default function ProductSection() {
  return (
    <section className="product section--cream">

      <br /><br />
      <h1 style={{ background: "#888" }}>
        * 보조환/구성 소개
      </h1>
      <br />

      <div className="section product-inner">
        <p className="section-label">상품 안내</p>
        <h2 className="section-title">
          약손감비환스틱<br />
          <em>패키지 구성</em>
        </h2>
        <div className="divider" />

        {/* 단계별 가격 */}
        <div className="product-steps">
          {STEPS.map((s) => (
            <div key={s.step} className="step-card">
              <span className="step-label">{s.step}</span>
              <span className="step-price">{s.price}</span>
              <span className="step-desc">{s.desc}</span>
            </div>
          ))}
        </div>

        {/* 포함 항목 */}
        <h3 className="product-subtitle">패키지 포함 항목</h3>
        <ul className="include-list">
          {INCLUDES.map((item) => {
            const Icon = getIcon(item.icon);
            return (
            <li key={item.name} className="include-item">
              <span className="include-icon">{Icon && <Icon {...ICON_STYLE} />}</span>
              <div>
                <strong>{item.name}</strong>
                <p>{item.detail}</p>
              </div>
            </li>
          )})}
        </ul>

        {/* 진행 과정 */}
        <h3 className="product-subtitle" style={{ marginTop: 40 }}>진행 방식</h3>
        <div className="process-flow">
          {PROCESS.map((p, i) => (
            <div key={p.n} className="process-step">
              <div className="process-num">{p.n}</div>
              <div className="process-label">{p.label}</div>
              {i < PROCESS.length - 1 && <div className="process-arrow">→</div>}
            </div>
          ))}
        </div>

        <a
          href="https://pf.kakao.com/_xlAzxkxb/chat"
          className="btn btn-primary"
          style={{ marginTop: 32 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          천연 코팅 딸기맛 스틱, 오늘부터 시작하기
        </a>
      </div>
    </section>
  )
}
