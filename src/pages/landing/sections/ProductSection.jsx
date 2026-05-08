import { KakaoCTA, GoogleFormCTA } from '../../../components/cta/ButtonCTA'
import { getIcon } from "../../../components/icons/Icons";
import './ProductSection.css'

const ICON_STYLE = { size: 40, weight: "regular", color: "var(--color-primary)" };

const PLANS = [
  { name: '1단계', price: '79,000', tag: '입문', desc: '처음 시작하시는 분께 추천', included: ['감비환스틱 90포', '디톡스환 3포', '폭식환 3포', '약손정 3포'], highlight: false },
  { name: '2단계', price: '84,000', tag: '인기 🔥', desc: '효과를 확인하고 올라온 분께', included: ['감비환스틱 100포', '디톡스환 3포', '폭식환 3포', '약손정 3포'], highlight: true },
  { name: '3단계', price: '87,000', tag: '집중', desc: '집중 감량이 목표인 분께', included: ['감비환스틱 110포', '디톡스환 3포', '폭식환 3포', '약손정 3포'], highlight: false },
];

const INCLUDES = [
  { icon: "TestTube", name: '감비환스틱', qty: '90포 · ', detail: '독자처방·코팅·딸기맛착향' },
  { icon: "Leaf", name: '디톡스환', qty: '3포 · ', detail: '다이어트 중 변비 해결' },
  { icon: "ShieldCheck", name: '폭식환', qty: '3포 · ', detail: '과식 시 과잉영양분 배설' },
  { icon: "Lightning", name: '약손정', qty: '3포 · ', detail: '식욕 올라올 때 함께 복용' },
];

const PRICE_ROWS = [
  { period: '1개월', p1: '7.9만원', p2: '8.4만원', p3: '8.7만원' },
  { period: '2개월', p1: '15만원', p2: '16.4만원', p3: '16.6만원' },
  { period: '3개월', p1: '22만원', p2: '24만원', p3: '24.2만원' },
  { period: '6개월', p1: '40만원', p2: '45만원', p3: '46만원' },
  { period: '9개월', p1: '60만원', p2: '66.9만원', p3: '68만원' },
  { period: '12개월', p1: '77만원', p2: '87만원', p3: '89만원' },
];

const PROCESS = [
  { n: '01', label: '구글폼 접수' },
  { n: '02', label: '전화·카톡 상담' },
  { n: '03', label: '처방 발행' },
  { n: '04', label: '택배 수령' },
];

const FEATURES = [
  {
    icon: "./icons/scales.png",
    title: "가성비 + 효율적인 다이어트",
    desc: "불필요한 과정 없이 효과에만 집중합니다",
  },
  {
    icon: "./icons/leaf.png",
    title: "정상 체중 = 건강 + 자신감",
    desc: "육체적 건강과 자신감 있는 생활을 함께 추구합니다",
  },
  {
    icon: "./icons/pill.png",
    title: "독자 처방 감비환",
    desc: "전국 유일 코팅·착향 처방으로 꾸준한 복용을 돕습니다",
  },
];

export default function ProductSection() {
  return (
    <>
      {/* ① 헤더 + 패키지 구성 — 기본 배경 */}
      <section className="section-wrap">
        <img className="product-bg" src="./bg/bg4.png" />
        <div className="section-inner">
          <p className="section-badge"><b>·</b>&nbsp;상품 안내·1개월 패키지 구성</p>
          <h2 className="section-title">
            약손감비환스틱<br />
            <em>패키지 구성</em>
          </h2>
          <div className="divider" />

          <div className="product-block">
            <ul className="include-list">
              {INCLUDES.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <li key={item.name} className="include-item">
                    <span className="include-icon">{Icon && <Icon {...ICON_STYLE} />}</span>
                    <div>
                      <strong>{item.name}</strong>
                      <span className='include-qty'>{item.qty}</span>
                      <span>{item.detail}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ② 단계 선택 — 크림 배경 */}
      <section className="section-wrap">
        <img className="product-bg" src="./bg/bg4.png" />
        <div className="section-inner">
          <p className="section-badge"><b>·</b>&nbsp;상품 안내·1개월 패키지 구성</p>
          <h2 className="section-title">
            약손감비환스틱<br />
            <em>패키지 구성</em>
          </h2>
          <div className="divider" />
          <div className="product-block">
            <div className="plan-list">
              {PLANS.map((plan) => (
                <div key={plan.name} className={`plan-card${plan.highlight ? ' plan-card--highlight' : ''}`}>
                  <div className="plan-top">
                    <div className="plan-name-row">
                      <span className="plan-name">{plan.name}</span>
                      <span className={`plan-tag${plan.highlight ? ' plan-tag--hot' : ''}`}>{plan.tag}</span>
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
                    target="_blank" rel="noopener noreferrer"
                  >
                    {plan.name} 상담 신청
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ③ 기간별 가격표 — 기본 배경 */}
      <section className="section-wrap">
        <div className="section-inner">
          <div className="product-block">
            <div className="price-notice">
              기간별 가격표
              <span>2026년 3월 23일 기준</span>
            </div>
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
              <li><img src='./icons/package.png' alt="" /> <b>2개월 이상</b><br />무료배송 + 감비환 10포 추가</li>
              <li><img src='./icons/package.png' alt="" /> <b>3개월 이상</b><br />무료배송 + 감비환 20포 추가</li>
              <li><img src='./icons/package.png' alt="" /> <b>6개월 이상</b><br />무료배송 + 감비환 50포 추가</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-wrap">
        <div className="section-inner about-layout">

          {/* 좌측: 제품 이미지 */}
          <div className="about__image">
            <img src="./landing/약손감비환.png" alt="프리미엄 약손감비환" />
          </div>

          {/* 우측: 텍스트 + 피처 */}
          <div className="about__content">
            <div className="section-badge"><b>·</b>&nbsp;감비환 소개</div>

            <h2 className="section-title">
              10만건 이상 판매된<br />
              <em>약손한의원 감비환</em>
            </h2>
            <div className="divider" />

            {/* 인용 카드 */}
            <div className="about__quote">
              <p className="about__quote-title">
                "빨리"보다 "안전하게, 꾸준히"
              </p>
              <p className="about__quote-desc">
                저용량부터 시작해 몸의 반응을 보면서 서서히 증량하도록 설계되어,<br />
                대부분의 분들이 큰 무리 없이 적응할 수 있도록 가이드합니다.
              </p>
            </div>

            {/* 피처 리스트 */}
            <ul className="about__features">
              {FEATURES.map(({ icon, title, desc }) => (
                <li className="about__feature" key={title}>
                  <div className="about__feature-icon">
                    <img src={icon} alt={title} />
                  </div>
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </>
  );
}
