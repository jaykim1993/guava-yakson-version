import { getIcon } from "../../../components/icons/Icons";
import './ProductSection.css'

const ICON_STYLE = {
  size: 20,
  weight: "regular",
  color: "var(--color-primary)",
};

// 단계 정보
const STEPS = [
  { step: '1단계', price: '79,000원', desc: '감량 입문 · 저자극 시작', sub: '택배비 3,500원 별도' },
  { step: '2단계', price: '84,000원', desc: '효과 본격화 · 중간 단계', sub: '택배비 3,500원 별도', recommended: true },
  { step: '3단계', price: '87,000원', desc: '집중 감량 · 고효율 단계', sub: '택배비 3,500원 별도' },
];

// 1개월 패키지 구성
const INCLUDES = [
  { icon: "TestTube", name: '감비환스틱', detail: '90포 · 독자처방·코팅·딸기맛착향' },
  { icon: "Leaf",     name: '디톡스환',  detail: '3포 · 다이어트 중 변비 해결' },
  { icon: "ShieldCheck",   name: '폭식환',   detail: '3포 · 과식 시 과잉영양분 배설' },
  { icon: "Lightning",name: '약손정',   detail: '3포 · 식욕 올라올 때 함께 복용' },
];

// 기간별 가격표
const PRICE_ROWS = [
  { period: '1개월',  p1: '7.9만원',  p2: '8.4만원',  p3: '8.7만원',  note: '택배비 3,500원 별도' },
  { period: '2개월',  p1: '15만원',   p2: '16.4만원', p3: '16.6만원', note: '무료배송 · +감비환 10포' },
  { period: '3개월',  p1: '22만원',   p2: '24만원',   p3: '24.2만원', note: '무료배송 · +감비환 20포' },
  { period: '6개월',  p1: '40만원',   p2: '45만원',   p3: '46만원',  note: '무료배송 · +감비환 50포' },
  { period: '9개월',  p1: '60만원',   p2: '66.9만원', p3: '68만원',  note: '무료배송 · (3개월+6개월)' },
  { period: '12개월', p1: '77만원',   p2: '87만원',   p3: '89만원',  note: '무료배송 · (6개월+6개월)' },
];

// 비대면 프로세스
const PROCESS = [
  { n: '01', label: '구글폼 접수' },
  { n: '02', label: '전화·카톡 상담' },
  { n: '03', label: '처방 발행' },
  { n: '04', label: '택배 수령' },
];

export default function ProductSection() {
  return (
    <section className="product section--cream">
      <div className="section product-inner">
      <h1>**구성 복잡 / 명료하게**</h1>
        {/* 헤더 */}
        <p className="section-label">상품 안내</p>
        <h2 className="section-title">
          약손감비환스틱<br />
          <em>패키지 구성</em>
        </h2>
        <div className="divider" />

        {/* ① 1개월 구성 */}
        <div className="product-block">
          <h3 className="product-subtitle">1개월 패키지 구성</h3>
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
              );
            })}
          </ul>
        </div>

        {/* ② 단계 선택 */}
        <div className="product-block">
          <h3 className="product-subtitle">단계 선택 <span className="subtitle-note">(1개월 기준)</span></h3>
          <div className="product-steps">
            {STEPS.map((s) => (
              <div key={s.step} className={`step-card${s.recommended ? ' step-card--recommended' : ''}`}>
                {s.recommended && <span className="step-badge">추천</span>}
                <span className="step-label">{s.step}</span>
                <span className="step-price">{s.price}</span>
                <span className="step-desc">{s.desc}</span>
                <span className="step-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ③ 기간별 가격표 */}
        <div className="product-block">
          <h3 className="product-subtitle">기간별 가격표</h3>
          <p className="price-notice">※ 2026년 3월 23일 기준 인상된 가격입니다</p>
          <div className="price-table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th>기간</th>
                  <th>1단계</th>
                  <th className="col-recommended">2단계 <span className="th-badge">추천</span></th>
                  <th>3단계</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map(({ period, p1, p2, p3, note }) => (
                  <tr key={period}>
                    <td className="period-cell">{period}</td>
                    <td>{p1}</td>
                    <td className="col-recommended">{p2}</td>
                    <td>{p3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* 기간별 혜택 요약 */}
          <ul className="price-benefits">
            <li>📦 2개월 이상 — 무료배송 + 감비환 10포 추가</li>
            <li>📦 3개월 이상 — 무료배송 + 감비환 20포 추가</li>
            <li>📦 6개월 이상 — 무료배송 + 감비환 50포 추가</li>
          </ul>
        </div>

        {/* ④ 비대면 프로세스 */}
        <div className="product-block">
          <h3 className="product-subtitle">비대면 수령 절차</h3>
          <div className="process-steps">
            {PROCESS.map(({ n, label }, idx) => (
              <div key={n} className="process-step">
                <div className="process-num">{n}</div>
                <span className="process-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://pf.kakao.com/_xlAzxkxb/chat"
          className="btn btn-kakao product-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 천연 코팅 딸기맛 스틱, 오늘부터 시작하기
        </a>

      </div>
    </section>
    
  );
}
