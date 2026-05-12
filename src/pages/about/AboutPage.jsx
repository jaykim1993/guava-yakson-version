import { useState, useEffect, useCallback } from "react";
import { KakaoCTA, GoogleFormCTA, PhoneCTA } from "../../components/cta/ButtonCTA";
import styles from "./AboutPage.module.css";

const PHILOSOPHY = [
  { title: "근본 치료", desc: "증상이 아닌 원인을 찾아 치료합니다. 표면적인 증상 완화에 그치지 않습니다." },
  { title: "1:1 맞춤", desc: "같은 병명이라도 체질과 생활 환경이 다르면 처방이 달라야 합니다." },
  { title: "과학적 접근", desc: "전통 한방 이론에 최신 임상 데이터를 접목해 처방합니다." },
  { title: "투명한 소통", desc: "치료 과정과 예상 기간을 솔직하게 안내드립니다." },
];

const UNDERSTAND = [
  { title: "바쁜 일상 속 지친 몸", desc: "직장·육아·가사로 자신을 돌볼 여유가 없는 분들의 어려움을 잘 알고 있습니다." },
  { title: "병원이 부담스럽던 경험", desc: "긴 대기, 짧은 진료, 이해하기 어려운 설명. 저희는 다릅니다." },
  { title: "빠른 효과보다 안전한 방법", desc: "무리한 감량 대신 몸이 받아들일 수 있는 속도로 함께 갑니다." },
  { title: "비용이 걱정되는 마음", desc: "합리적인 비용으로 지속 가능한 치료를 설계합니다." },
];

const PHOTOS = [
  { label: "2", wide: false },
  { label: "4", wide: false },
  { label: "1", wide: true },
  { label: "3", wide: false },
  { label: "5", wide: false },
];

/* ─── 라이트박스 ─────────────────────────────────── */
function Lightbox({ photos, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % photos.length), [photos.length]);

  // 키보드 이벤트
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  // 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className={styles.lbOverlay} onClick={onClose}>
      {/* 이미지 영역 — 클릭 버블 방지 */}
      <div className={styles.lbContent} onClick={(e) => e.stopPropagation()}>

        {/* 닫기 */}
        <button className={styles.lbClose} onClick={onClose} aria-label="닫기"><img src="./icons/x.png" /></button>

        {/* 이미지 */}
        <img
          className={styles.lbImg}
          src={`./${photos[current].label}.jpg`}
          alt={`한의원 사진 ${current + 1}`}
        />

        {/* 이전 / 다음 */}
        <button className={`${styles.lbArrow} ${styles.lbArrowLeft}`} onClick={prev} aria-label="이전">
          <img src="./icons/arrow-left.png" />
        </button>
        <button className={`${styles.lbArrow} ${styles.lbArrowRight}`} onClick={next} aria-label="다음">
          <img src="./icons/arrow-right.png" />
        </button>

        {/* 카운터 + 도트 */}
        <div className={styles.lbFooter}>
          <span className={styles.lbCounter}>{current + 1} / {photos.length}</span>
          <div className={styles.lbDots}>
            {photos.map((_, i) => (
              <button
                key={i}
                className={`${styles.lbDot} ${i === current ? styles.lbDotActive : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`${i + 1}번 사진`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 메인 페이지 ────────────────────────────────── */
export default function AboutPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null); // null = 닫힘

  return (
    <div className={styles.page}>

      {/* ① 히어로 */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          365일<br />5인의 한의사가 진료하는<br />
          <em>용인약손한의원</em>입니다
        </h1>
        <p className={styles.heroSub}>
          25년 전의 초심을 잃지 않고,<br />
          언제나 가장 부지런한 한의원,<br />
          가장 성실한 한의사가 되겠습니다.
        </p>
      </section>

      {/* ② 원장 소개 */}
      {/* <section className={styles.doctorSection}>
        <div className={styles.doctorGrid}>
          <div className={styles.profileContainer}>
            <img className={styles.profile} src="./about/profile.png" alt="이관형 원장" />
          </div>
          <div>
            <p className={styles.doctorEyebrow}>대표원장</p>
            <h2 className={styles.doctorName}>이관형 원장</h2>
            <blockquote className={styles.doctorQuote}>
              "환자 한분 한분의 말씀에 귀 기울이고,<br />
              바른 진료와 좋은 한약재로 정직한 치료를 이어가겠습니다."
            </blockquote>
          </div>
        </div>
      </section> */}

      {/* ③ 병원 철학 */}
      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
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
            {PHOTOS.map(({ label, wide }, idx) => (
              <div
                key={label}
                className={`${styles.photoSlot}${wide ? " " + styles["photoSlot--wide"] : ""}`}
                onClick={() => setLightboxIndex(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(idx)}
                aria-label={`한의원 사진 ${idx + 1} 크게 보기`}
              >
                <img src={`./about/${label}.jpg`} alt={`한의원 사진 ${idx + 1}`} />
                <div className={styles.photoOverlay}>
                  <img src="./icons/magnifying-glass.png" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ 상담 CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>

          {/* 상단 헤딩 */}
          <div className={styles.ctaHead}>
            <h2 className="section-title">비대면 진료 순서 안내</h2>
            <div className={styles.ctaSteps}>
              <span>1. 설문지 작성</span>
              <span className={styles.ctaArrow}>→</span>
              <span>2. 비대면 상담</span>
              <span className={styles.ctaArrow}>→</span>
              <span>3. 택배 처방</span>
            </div>
          </div>

          {/* 안내 박스 */}
          <div className={styles.ctaNotice}>
            <ul>
              <li>- <b>안전한 감량</b>을 위해 무분별한 처방은 하지 않습니다.</li>
              <li>- 설문 및 진료 결과에 따라 처방이 <b>제한</b>될 수 있습니다.</li>
              <li>- 꼼꼼히 작성 주시면 면밀히 분석 후 연락드립니다.</li>
            </ul>
          </div>

          {/* CTA 버튼 */}
          <div className={styles.ctaButtons}>
            <GoogleFormCTA />
            <KakaoCTA />
            <PhoneCTA />
          </div>
          <b>
            건강하게 지속가능한 다이어트 하실 수 있도록 꼼꼼하게 상담하겠습니다
          </b>
        </div>
      </section>

      {/* 라이트박스 */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={PHOTOS}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <div className={styles.infoInner}>
        <h2 className="section-title">찾아오시는 길</h2>
        <a
          className={styles.map}
          href="https://map.naver.com/p/search/%EC%9A%A9%EC%9D%B8%EC%95%BD%EC%86%90%ED%95%9C%EC%9D%98%EC%9B%90/place/13230592?c=18.30,0,0,0,dh&placePath=/home?bk_query=%EC%9A%A9%EC%9D%B8%EC%95%BD%EC%86%90%ED%95%9C%EC%9D%98%EC%9B%90&entry=bmp&from=map&fromPanelNum=2&timestamp=202605070959&locale=ko&svcName=map_pcv5&searchText=%EC%9A%A9%EC%9D%B8%EC%95%BD%EC%86%90%ED%95%9C%EC%9D%98%EC%9B%90"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./about/지도.PNG"
            alt="용인약손한의원 위치"
          />
        </a>
        <div className={styles.infoGroup}>
          <ul>
            <li><span>주소</span>: 경기도 용인시 처인구 금령로71번길 16 대흥빌딩 2층</li>
            <li><span>TEL</span>: 031-338-2299</li>
          </ul>
        </div>

        <div className={styles.infoGroup}>
          <h3>주차 안내</h3>
          <ul>
            <li>건물 뒤편에 1층 대형주차장이 있습니다.</li>
            <li>* 5/10일은 장날이어서 주차장이 혼잡하오니 참고 바랍니다.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
