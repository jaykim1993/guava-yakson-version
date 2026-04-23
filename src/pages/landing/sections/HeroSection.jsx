import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero">
      
      {/* 배경 그라디언트 */}
      <div className="hero-bg" />
      <div className="hero-content section">

        {/* 뱃지 */}
        <div className="hero-badge">전국 유일 코팅·착향 감비환</div>

        {/* 메인 헤드라인 */}
        <h1 className="hero-headline">
          다시 입고 싶은<br />
          <em>그 옷</em>을 위한<br />
          <strong>약손 감비환스틱</strong>
        </h1>

        {/* 서브카피 */}
        <p className="hero-sub">
          체지방 · 붓기로 힘드신 분들이<br />
          부담 없이 가볍게 시작할 수 있도록<br />
          약손감비환이 돕겠습니다
        </p>

        {/* 신뢰 수치 */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">25년</span>
            <span className="stat-label">임상경력</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">전국유일</span>
            <span className="stat-label">독자처방</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">비대면</span>
            <span className="stat-label">편리한 상담</span>
          </div>
        </div>

        {/* CTA */}
        <div className="hero-ctas">
          <a
            href="https://pf.kakao.com/_xlAzxkxb/chat"
            className="btn btn-kakao"
            target="_blank"
            rel="noopener noreferrer"
          >
            카카오 문의
          </a>

          <a
            href="https://docs.google.com/forms/d/16D6tjTxBdkDnno9i0UQk5kU6Qbqw6uLkq1uRQQzpcd8/edit"
            className="btn btn-outline"
          >
            구글 폼 접수
          </a>

          <a
            href="tel:031-338-2299"
            className="btn btn-outline"
          >
            📞 031-338-2299
          </a>
        </div>
      </div>
    </section>
  )
}
