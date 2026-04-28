import { getIcon } from "../../../components/icons/Icons";
import './ProductSection.css'

const ICON_STYLE = {
  size: 20,
  weight: "regular",
  color: "var(--color-primary)",
};

// 단계 정보
const PLANS = [
  {
    name: '1단계',
    period: '1개월',
    price: '79,000',
    unit: '원',
    tag: '입문',
    desc: '처음 시작하시는 분께 추천',
    included: ['감비환스틱 90포', '디톡스환', '폭식환', '약손정'],
    highlight: false,
  },
  {
    name: '2단계',
    period: '1개월',
    price: '84,000',
    unit: '원',
    tag: '인기 🔥',
    desc: '효과를 확인하고 올라온 분께',
    included: ['감비환스틱 90포', '디톡스환', '폭식환', '약손정'],
    highlight: true,
  },
  {
    name: '3단계',
    period: '1개월',
    price: '87,000',
    unit: '원',
    tag: '집중',
    desc: '집중 감량이 목표인 분께',
    included: ['감비환스틱 90포', '디톡스환', '폭식환', '약손정'],
    highlight: false,
  },
]

// 1개월 패키지 구성
const INCLUDES = [
  { icon: "TestTube", name: '감비환스틱', detail: '90포 · 독자처방·코팅·딸기맛착향' },
  { icon: "Leaf", name: '디톡스환', detail: '3포 · 다이어트 중 변비 해결' },
  { icon: "ShieldCheck", name: '폭식환', detail: '3포 · 과식 시 과잉영양분 배설' },
  { icon: "Lightning", name: '약손정', detail: '3포 · 식욕 올라올 때 함께 복용' },
];

// 기간별 가격표
const PRICE_ROWS = [
  { period: '1개월', p1: '7.9만원', p2: '8.4만원', p3: '8.7만원', note: '택배비 3,500원 별도' },
  { period: '2개월', p1: '15만원', p2: '16.4만원', p3: '16.6만원', note: '무료배송 · +감비환 10포' },
  { period: '3개월', p1: '22만원', p2: '24만원', p3: '24.2만원', note: '무료배송 · +감비환 20포' },
  { period: '6개월', p1: '40만원', p2: '45만원', p3: '46만원', note: '무료배송 · +감비환 50포' },
  { period: '9개월', p1: '60만원', p2: '66.9만원', p3: '68만원', note: '무료배송 · (3개월+6개월)' },
  { period: '12개월', p1: '77만원', p2: '87만원', p3: '89만원', note: '무료배송 · (6개월+6개월)' },
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
        {/* 헤더 */}
        <p className="section-label">상품 안내</p>
        <h2 className="section-title">
          약손감비환스틱<br />
          <em>패키지 구성</em>
        </h2>
        <div className="divider" />

        {/* ① 1개월 구성 */}
        <div className="product-block">
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
        <div className="price-cards">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`price-card ${plan.highlight ? 'price-card--highlight' : ''}`}
          >
            <div className="price-card-top">
              <div className="price-tag-row">
                <span className="price-name">{plan.name}</span>
                <span className={`price-tag ${plan.highlight ? 'price-tag--hot' : ''}`}>
                  {plan.tag}
                </span>
              </div>
              <div className="price-amount">
                <span className="price-num">{plan.price}</span>
                <span className="price-unit">{plan.unit}</span>
              </div>
              <p className="price-desc">{plan.desc}</p>
            </div>

            <ul className="price-includes">
              {plan.included.map((i) => (
                <li key={i}><span>✓</span> {i}</li>
              ))}
            </ul>

            <a
              href="https://pf.kakao.com/_your_channel/chat"
              className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {plan.name} 상담 신청
            </a>
          </div>
        ))}
      </div>

        {/* ③ 기간별 가격표 */}
        <div className="product-block">
          <h3 className="product-subtitle">기간별 가격표</h3>
          <p className="price-notice">※ 2026년 3월 23일 기준</p>
          <div className="price-table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th></th>
                  <th>1단계</th>
                  <th>2단계</th>
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
          <div className="process-block">
            <div className="process-steps">
              {PROCESS.map(({ n, label }) => (
                <div key={n} className="process-step">
                  <div className="process-num">{n}</div>
                  <span className="process-label">{label}</span>
                </div>
              ))}
            </div>
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
