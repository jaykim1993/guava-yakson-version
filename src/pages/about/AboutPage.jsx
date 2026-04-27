import styles from "./AboutPage.module.css";

const PHILOSOPHY = [
  { title: "근본 치료",   desc: "증상이 아닌 원인을 찾아 치료합니다. 표면적인 증상 완화에 그치지 않습니다." },
  { title: "1:1 맞춤",   desc: "같은 병명이라도 체질과 생활 환경이 다르면 처방이 달라야 합니다." },
  { title: "과학적 접근", desc: "전통 한방 이론에 최신 임상 데이터를 접목해 처방합니다." },
  { title: "투명한 소통", desc: "치료 과정과 예상 기간을 솔직하게 안내드립니다." },
];

const UNDERSTAND = [
  { title: "바쁜 일상 속 지친 몸",     desc: "직장·육아·가사로 자신을 돌볼 여유가 없는 분들의 어려움을 잘 알고 있습니다." },
  { title: "병원이 부담스럽던 경험",   desc: "긴 대기, 짧은 진료, 이해하기 어려운 설명. 저희는 다릅니다." },
  { title: "빠른 효과보다 안전한 방법", desc: "무리한 감량 대신 몸이 받아들일 수 있는 속도로 함께 갑니다." },
  { title: "비용이 걱정되는 마음",     desc: "합리적인 비용으로 지속 가능한 치료를 설계합니다." },
];

const PHOTOS = [
  { label: "한의원 외관", wide: false },
  { label: "진료실",     wide: false },
  { label: "원장 진료",  wide: true  },
  { label: "상담실",     wide: false },
  { label: "약재실",     wide: false },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>

      {/* ① 히어로 */}
      <section className={styles.hero}>
        <p className={styles.heroEyebrow}>한의원 소개</p>
        <h1 className={styles.heroTitle}>
          365일 6인의 한의사가 협진하는<br />
          <em>용인약손한의원</em>입니다
        </h1>
        <p className={styles.heroSub}>
          25년 전의 초심을 잃지 않고,<br />
          언제나 가장 부지런한 한의원,<br />
          가장 성실한 한의사가 되겠습니다.
        </p>
      </section>

      {/* ② 원장 소개 */}
      <section className={styles.doctorSection}>
        <div className={styles.doctorGrid}>
          <div className={styles.doctorPhoto}>
            
          </div>
          <div>
            <p className={styles.doctorEyebrow}>대표원장</p>
            <h2 className={styles.doctorName}>이관형 원장</h2>
            <blockquote className={styles.doctorQuote}>
              "환자 한분 한분의 말씀에 귀 기울이고,<br />
              바른 진료와 좋은 한약재로 정직한 치료를 이어가겠습니다."
            </blockquote>
            <ul className={styles.doctorCareer}>
              <li>OO대학교 한의과대학 졸업</li>
              <li>OO의료원 한방병원 전공의 수료</li>
              <li>OO의학회 정회원</li>
              <li>임상경력 25년차, 누적 진료 환자 6만 명</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ③ 병원 철학 */}
      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <p className="section-eyebrow">병원 철학</p>
          <h2 className="section-title">치료의 원칙</h2>
          <div className={styles.philosophyGrid}>
            {PHILOSOPHY.map(({ title, desc }) => (
              <div className={styles.philosophyCard} key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ 환자에 대한 이해 */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <p className="section-eyebrow">환자에 대한 이해</p>
          <h2 className="section-title">
            환자분의 마음을<br />먼저 이해합니다
          </h2>
          <ul className={styles.understandList}>
            {UNDERSTAND.map(({ title, desc }, idx) => (
              <li key={idx} className={styles.understandItem}>
                <span className={styles.understandNum}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className={styles.understandBody}>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ⑤ 실제 사진 */}
      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <p className="section-eyebrow">한의원 공간</p>
          <h2 className="section-title">직접 눈으로 확인하세요</h2>
          <div className={styles.photoGrid}>
            {PHOTOS.map(({ label, wide }) => (
              <div
                key={label}
                className={`${styles.photoSlot}${wide ? " " + styles["photoSlot--wide"] : ""}`}
              >
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ 상담 CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaEyebrow}>지금 바로 시작하세요</p>
          <h2 className={styles.ctaTitle}>
            궁금한 점은<br />
            <em>편하게 물어보세요</em>
          </h2>
          <p className={styles.ctaSub}>
            비대면 상담 가능 · 오전 9시 ~ 오후 7시<br />
            접수 후 빠르게 연락드립니다
          </p>
          <div className={styles.ctaButtons}>
            <a
              href="https://pf.kakao.com/_xlAzxkxb/chat"
              className={styles.ctaBtnKakao}
              target="_blank"
              rel="noopener noreferrer"
            >
              카카오로 무료 상담받기
            </a>
            <a href="tel:031-338-2299" className={styles.ctaBtnPhone}>
              031-338-2299
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
