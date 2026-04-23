// 1. 원장 소개
// 2. 우리 한의원의 방식
// 3. 환자에 대한 이해
// 4. 실제 사진
// 5. 상담 CTA
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <>

      {/* 히어로 */}
      <section className="page-hero">
        <p className="section-eyebrow">한의원 소개</p>
        <h1 className="page-hero__title">
          365일 6인의 한의사가 협진하는<br />
          <em>약손한의원</em> 입니다
        </h1>
        <p className="page-hero__sub">
          23년 전의 초심을 잃지 않고,<br />
          언제나 가장 부지런한 한의원,<br />
          가장 성실한 한의사가 되겠습니다.
        </p>
      </section>

      {/* 원장 소개 */}
      <section className="page-doctor">
        <div className="doctor">
          <div className="doctor__photo-wrap">
            <div className="doctor__photo-placeholder" aria-label="원장 사진">
              <span>원장사진</span>
            </div>
          </div>
          <div className="doctor__content">
            <p className="section-eyebrow">원장 소개</p>
            <h2 className="section-title">
              대표원장 이관형
            </h2>
            <p className="doctor__quote">
              "환자 한분 한분의 말씀에 귀 기울이고,<br />
              바른 진료와 좋은 한약재로 정직한 치료를 이어가겠습니다."
            </p>
            <ul className="doctor__career">
              <li>oo대학교 한의과대학 졸업</li>
              <li>oo의료원 한방병원 전공의 수료</li>
              <li>oo의학회 정회원</li>
              <li>임상경력 25년차, 누적 진료 환자 6만 명</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 우리 한의원의 방식 */}
      <section className="page-section page-section--alt">
        <div className="page-section__inner">
          <p className="section-eyebrow">병원 철학</p>
          <h2 className="section-title">치료의 원칙</h2>
          <div className="philosophy-grid">
            {[
              { title: "근본 치료", desc: "증상이 아닌 원인을 찾아 치료합니다. 표면적인 증상 완화에 그치지 않습니다." },
              { title: "1:1 맞춤", desc: "같은 병명이라도 체질과 생활 환경이 다르면 처방이 달라야 합니다." },
              { title: "과학적 접근", desc: "전통 한방 이론에 최신 임상 데이터를 접목해 처방합니다." },
              { title: "투명한 소통", desc: "치료 과정과 예상 기간을 솔직하게 안내드립니다." },
            ].map(({ title, desc }) => (
              <div className="philosophy-card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 환자에 대한 이해 */}
      <section className={styles.section}>
        <div className="page-section__inner">
          <p className="section-eyebrow">환자에 대한 이해</p>
          <h2 className="section-title">환자에 대한 이해</h2>
          
        </div>
      </section>

      {/* 실제 사진 */}
      <section className={styles.section}>
        <div className="page-section__inner">
          <p className="section-eyebrow">실제 사진</p>
          <h2 className="section-title">실제 사진</h2>
          
        </div>
      </section>

      {/* 상담 CTA */}
      <section className={styles.section}>
        <div className="page-section__inner">
          <p className="section-eyebrow">상담 CTA</p>
          <h2 className="section-title">상담 CTA</h2>
          
        </div>
      </section>

    </>
  );
}
