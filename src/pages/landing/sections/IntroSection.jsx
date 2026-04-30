import { KakaoCTA, GoogleFormCTA, PhoneCTA } from '../../../components/cta/ButtonCTA'
import "./IntroSection.css";

const CARDS = [
  { icon: "🌊", title: "식욕 억제", desc: "과식 충동을 자연스럽게 조절" },
  { icon: "💧", title: "부종 감소", desc: "불필요한 수분 순환 개선" },
  { icon: "✨", title: "신진대사 촉진", desc: "체지방 연소 효율 향상" },
  { icon: "🌿", title: "건강한 감량", desc: "급격한 단기 감량 지양" },
];

const TRUST_STATS = [
  { num: "10만+", label: "누적 처방 건수" },
  { num: "딸기향", label: "천연 코팅 착향" },
  { num: "3종", label: "동봉 구성품" },
  { num: "무부담", label: "부드러운 목넘김" },
];

const POINTS = [
  {
    num: '01',
    title: '전국 유일 코팅·착향 감비환',
    desc: '독자 처방에 코팅·착향까지 적용된 유일한 감비환',
    highlight: '쓴맛·냄새 걱정 없이 복용',
  },
  {
    num: '02',
    title: '압도적인 가성비',
    desc: '부담 없는 가격으로 시작해 단계별 선택 가능',
    highlight: '7만 9천원부터 시작',
  },
  {
    num: '03',
    title: '다년간의 임상 노하우',
    desc: '5명의 한의사가 효과적인 다이어트에 대해 연구',
    highlight: '최선의 다이어트 한약 처방',
  },
  {
    num: '04',
    title: '비대면 간편 상담',
    desc: '방문 없이 상담부터 수령까지 한 번에',
    highlight: '집에서 편리하게',
  }
]

export default function IntroSection() {
  return (
    <section className="intro section">

      <div className="intro-product__content">
        <span className="intro-product__sub">Natural Diet Solution</span>
        <h2 className="intro-product__title">
          약손<br />감비환스틱
        </h2>
        <p className="intro-product__desc">
          한약 특유의 냄새와 복용 부담을 줄이고<br />
          상큼한 딸기향으로 맛있게, 간편하게
        </p>
      </div>
      {/* ① 제품 등장 */}
      <div className="intro-product__image">
        <img src="./gambihwan.png" alt="약손감비환스틱" />
      </div>

      {/* ② 핵심 기능 */}
      <div className="intro-cards">
        {CARDS.map(({ icon, title, desc }) => (
          <div className="intro-card" key={title}>
            <span className="intro-card__icon">{icon}</span>
            <strong className="intro-card__title">{title}</strong>
            <p className="intro-card__desc">{desc}</p>
          </div>
        ))}
      </div>

      {/* ③ 신뢰 지표 */}
      <div className="intro-trust">
        <p className="intro-trust__label">많은 분들이 이미 선택했습니다</p>
        <div className="intro-trust__stats">
          {TRUST_STATS.map(({ num, label }) => (
            <div className="intro-stat" key={label}>
              <span className="intro-stat__num">{num}</span>
              <span className="intro-stat__label">{label}</span>
            </div>
          ))}
        </div>
      </div>


      <div className="divider" />
      <h2 className="section-title">
        약손감비환이<br />
        <em>특별한 4가지 이유</em>
      </h2>
      <div className="whyus-list">
        {POINTS.map((p) => (
          <div key={p.num} className="whyus-card card">
            <span className="whyus-num">{p.num}</span>
            <h3 className="whyus-title">{p.title}</h3>
            <p className="whyus-desc">{p.desc}</p>
            <div className="whyus-highlight">
              <span>✦</span> {p.highlight}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="hero-ctas">
        <KakaoCTA />
        <GoogleFormCTA />
      </div>
    </section>
  );
}