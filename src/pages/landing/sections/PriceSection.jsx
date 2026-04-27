import './PriceSection.css'

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

export default function PriceSection() {
  return (
    <section className="price section">
      <h1>----보조환/구성 소개로 내용 집중필요----</h1>
      <p className="section-label">가격 안내</p>
      <h2 className="section-title">
        부담 없이 시작하는<br />
        <em>합리적인 가격</em>
      </h2>
      <div className="divider" />

      <p className="price-notice">
        ✓ 1단계부터 순차적으로 진행 · 카카오 상담 후 처방
      </p>

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
    </section>
  )
}
