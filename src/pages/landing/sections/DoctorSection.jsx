import './DoctorSection.css'

export default function DoctorSection() {
  return (
    <section className="doctor section">

    
      <br /><br />
      <h1 style={{ background: "#888" }}>
        * 의사소개
      </h1>
      <br />

      <p className="section-label">대표원장 소개</p>
      <h2 className="section-title">
        <em>25년 임상경력</em><br />
        이관형 대표원장
      </h2>
      <div className="divider" />

      {/* 원장 카드 */}
      <div className="doctor-card card">
        <div className="doctor-avatar">
          {/* 실제 원장 사진 또는 AI 의사 이미지로 교체 */}
          <div className="doctor-avatar-placeholder">
            <span>👨‍⚕️</span>
            <span className="doctor-avatar-label">AI 의사 이미지</span>
          </div>
        </div>
        <div className="doctor-info">
          <h3 className="doctor-name">이관형 원장</h3>
          <p className="doctor-career">한의학과 · 임상 25년</p>
        </div>
      </div>

      {/* 철학 메시지 */}
      <blockquote className="doctor-quote">
        <p className="doctor-quote-text">
          "빨리"보다 "안전하게, 꾸준히"
        </p>
        <p className="doctor-quote-sub">
          저용량부터 시작해 몸의 반응을 보면서 서서히 증량하도록 설계되어,
          대부분의 분들이 큰 무리 없이 적응할 수 있도록 가이드합니다.
        </p>
      </blockquote>

      {/* 진료 철학 */}
      <div className="doctor-philosophy">
        <div className="philosophy-item">
          <span className="philosophy-icon">⚖️</span>
          <div>
            <strong>가성비 + 효율적인 다이어트</strong>
            <p>불필요한 과정 없이 효과에만 집중합니다</p>
          </div>
        </div>
        <div className="philosophy-item">
          <span className="philosophy-icon">🌱</span>
          <div>
            <strong>정상 체중 = 건강 + 자신감</strong>
            <p>육체적 건강과 자신감 있는 생활을 함께 추구합니다</p>
          </div>
        </div>
        <div className="philosophy-item">
          <span className="philosophy-icon">🔬</span>
          <div>
            <strong>독자 처방 감비환</strong>
            <p>전국 유일 코팅·착향 처방으로 꾸준한 복용을 돕습니다</p>
          </div>
        </div>
      </div>
    </section>
  )
}
