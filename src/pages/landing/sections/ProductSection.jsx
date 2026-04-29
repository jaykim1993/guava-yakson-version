import { KakaoCTA, GoogleFormCTA, PhoneCTA } from '../../../components/cta/ButtonCTA'
import { getIcon } from "../../../components/icons/Icons";
import './ProductSection.css'

const ICON_STYLE = {
  size: 20,
  weight: "regular",
  color: "var(--color-primary)",
};

const PLANS = [
  {
    name: '1단계',
    price: '79,000',
    tag: '입문',
    desc: '처음 시작하시는 분께 추천',
    included: ['감비환스틱 90포', '디톡스환', '폭식환', '약손정'],
    highlight: false,
  },
  {
    name: '2단계',
    price: '84,000',
    tag: '인기 🔥',
    desc: '효과를 확인하고 올라온 분께',
    included: ['감비환스틱 90포', '디톡스환', '폭식환', '약손정'],
    highlight: true,
  },
  {
    name: '3단계',
    price: '87,000',
    tag: '집중',
    desc: '집중 감량이 목표인 분께',
    included: ['감비환스틱 90포', '디톡스환', '폭식환', '약손정'],
    highlight: false,
  },
]

const INCLUDES = [
  { icon: "TestTube",   name: '감비환스틱', detail: '90포 · 독자처방·코팅·딸기맛착향' },
  { icon: "Leaf",       name: '디톡스환',   detail: '3포 · 다이어트 중 변비 해결' },
  { icon: "ShieldCheck",name: '폭식환',     detail: '3포 · 과식 시 과잉영양분 배설' },
  { icon: "Lightning",  name: '약손정',     detail: '3포 · 식욕 올라올 때 함께 복용' },
];

const PRICE_ROWS = [
  { period: '1개월',  p1: '7.9만원',  p2: '8.4만원',  p3: '8.7만원'  },
  { period: '2개월',  p1: '15만원',   p2: '16.4만원', p3: '16.6만원' },
  { period: '3개월',  p1: '22만원',   p2: '24만원',   p3: '24.2만원' },
  { period: '6개월',  p1: '40만원',   p2: '45만원',   p3: '46만원'   },
  { period: '9개월',  p1: '60만원',   p2: '66.9만원', p3: '68만원'   },
  { period: '12개월', p1: '77만원',   p2: '87만원',   p3: '89만원'   },
];

const PROCESS = [
  { n: '01', label: '구글폼 접수' },
  { n: '02', label: '전화·카톡 상담' },
  { n: '03', label: '처방 발행' },
  { n: '04', label: '택배 수령' },
];

export default function ProductSection() {
  return (
    <section className="product">
      <div className="section product-inner">

        {/* 헤더 */}
        <p className="section-label">상품 안내</p>
        <h2 className="section-title">
          약손감비환스틱<br />
          <em>패키지 구성</em>
        </h2>
        <div className="divider" />

        {/* ① 패키지 구성 */}
        <div className="product-block">
          <h3 className="product-subtitle">1개월 패키지 구성</h3>
          <ul className="include-list">
            {INCLUDES.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <li key={item.name} className="include-item">
                  <span className="include-icon">
                    {Icon && <Icon {...ICON_STYLE} />}
                  </span>
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
          <h3 className="product-subtitle">
            단계 선택 <span className="subtitle-note">(1개월 기준)</span>
          </h3>
          <div className="plan-list">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`plan-card${plan.highlight ? ' plan-card--highlight' : ''}`}
              >
                <div className="plan-top">
                  <div className="plan-name-row">
                    <span className="plan-name">{plan.name}</span>
                    <span className={`plan-tag${plan.highlight ? ' plan-tag--hot' : ''}`}>
                      {plan.tag}
                    </span>
                  </div>
                  <div className="plan-price">
                    <span className="plan-price-num">{plan.price}</span>
                    <span className="plan-price-unit">원</span>
                  </div>
                  <p className="plan-desc">{plan.desc}</p>
                </div>

                <ul className="plan-includes">
                  {plan.included.map((i) => (
                    <li key={i}><span>✓</span>{i}</li>
                  ))}
                </ul>

                <a
                  href="https://pf.kakao.com/_xlAzxkxb/chat"
                  className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.name} 상담 신청
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ③ 기간별 가격표 */}
        <div className="product-block">
          <h3 className="product-subtitle">기간별 가격표</h3>
          <p className="price-notice">※ 2026년 3월 23일 기준</p>
          <div className="price-table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th>기간</th>
                  <th>1단계</th>
                  <th className="col-recommended">2단계</th>
                  <th>3단계</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map(({ period, p1, p2, p3 }) => (
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
        <div className="hero-ctas">
          <KakaoCTA />
          <GoogleFormCTA />
        </div>

      </div>
    </section>
  );
}