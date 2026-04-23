export default function HeroSection() {
  const scrollToCta = () =>
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__circle hero__circle--1" />
        <div className="hero__circle hero__circle--2" />
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">자연 치유의 힘</p>
        <h1 className="hero__title">
          몸이 스스로<br />
          <em>낫는 환경</em>을<br />
          만들어드립니다
        </h1>
        <p className="hero__sub">
          20년 임상 경험, 1:1 맞춤 한방 치료<br />
          만성 통증부터 체질 개선까지
        </p>
        <div className="hero__actions">
          <button className="btn btn--primary" onClick={scrollToCta}>
            무료 상담 신청
          </button>
          <button
            className="btn btn--ghost"
            onClick={() =>
              document
                .getElementById("treatments")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            치료 프로그램 보기
          </button>
        </div>
      </div>
    </div>
  );
}
