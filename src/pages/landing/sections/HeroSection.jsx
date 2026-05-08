import { KakaoCTA, GoogleFormCTA, PhoneCTA } from '../../../components/cta/ButtonCTA'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero">
      <img className="hero-bg" src='./bg/bg1.png'/>

      <div className="hero-content">
        <div className="section-badge"><b>·</b>&nbsp;전국 유일 코팅·착향 감비환</div>

        <h1 className="hero-headline">
          다시 입고 싶은<br />
          <em>그 옷</em>을 위한<br />
          <strong>약손 감비환스틱</strong>
        </h1>

        <p className="hero-sub">
          체지방·붓기로 힘드신 분들이<br />
          부담 없이 가볍게 시작할 수 있도록<br />
          약손감비환이 돕겠습니다
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">10만건+</span>
            <span className="stat-label">감비환</span>
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

        <div className="ctas">
          <KakaoCTA />
          <GoogleFormCTA />
          <PhoneCTA />
        </div>
      </div>
    </section>
  )
}
