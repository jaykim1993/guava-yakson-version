import "./IntroSection.css";

const CARDS = [
  { icon: "🌊", title: "식욕 억제" },
  { icon: "💧", title: "부종 감소" },
  { icon: "✨", title: "신진대사 촉진" },
  { icon: "🌿", title: "단기 감량 지양" },
];


export default function IntroSection() {
  return (
    <section className="intro section">
      <h1>**제품 등장 위치 조정중**</h1>
      {/* ③ 해결 선언 + 제품 등장 */}
      <div className="intro-solution">
        <div className="intro-product">
          <div className="intro-product__image">
            <span>제품 이미지</span>
          </div>
          <div className="intro-product__content">
            <h3 className="intro-product__title">약손감비환스틱</h3>
            <p className="intro-product__desc">
              부담 없이, 꾸준히 이어지는 다이어트
            </p>
          </div>
        </div>

        {/* ④ 기능 카드 */}
        <div className="intro-cards">
          {CARDS.map(({ icon, title }) => (
            <div className="intro-card" key={title}>
              <span className="intro-card__icon">{icon}</span>
              <h3 className="intro-card__title">{title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* ⑤ 신뢰 */}
      <div className="intro-trust-box">
        <span className="intro-trust-box__mark">✦</span>
        <p className="intro-trust-box__text">
          빠르게가 아니라,<br />
          제대로 바뀌는 다이어트
        </p>
      </div>
    </section>
  );
}
