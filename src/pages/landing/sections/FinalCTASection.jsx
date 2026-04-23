import './FinalCTASection.css'

export default function FinalCTASection() {
  return (
    <section className="finalcta">

      <br /><br />
      <h1 style={{ background: "#888" }}>
        * 최종 CTA
      </h1>
      <br />

      <div className="finalcta-bg" />
      <div className="section finalcta-content">
        <p className="finalcta-label">지금 바로 시작하세요</p>

        <h2 className="finalcta-headline">
          천연 코팅 딸기맛 스틱<br />
          <em>오늘부터 시작하기</em>
        </h2>

        <p className="finalcta-sub">
          상담 가능 시간: 오전 9시 ~ 오후 7시<br />
          비대면 접수 후 빠르게 연락드립니다
        </p>

        <div className="finalcta-buttons">
          <a
            href="https://pf.kakao.com/_your_channel/chat"
            className="btn btn-kakao finalcta-btn-kakao"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 카카오로 무료 상담받기
          </a>
          <a
            href="tel:031-338-2299"
            className="btn finalcta-btn-phone"
          >
            📞 031-338-2299
          </a>
        </div>

        <div className="finalcta-trust">
          <span>✓ 25년 임상경력</span>
          <span>✓ 전국 유일 독자 처방</span>
          <span>✓ 비대면 편리 상담</span>
        </div>

        {/* 한의원 정보 */}
        <div className="finalcta-info">
          <p><strong>용인약손한의원</strong></p>
          <p>경기 용인시 처인구 금령로71번길 16 대흥빌딩 2층</p>
          <p>월~금 09:00–20:30 · 토~일 09:00–15:00</p>
        </div>
      </div>
    </section>
  )
}
