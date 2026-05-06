import { useState } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import styles from "./ReviewsPage.module.css";

export default function ReviewsPage() {
  const [step, setStep] = useState("idle"); // "idle" | "loading" | "kakao"

  const handleLoginClick = () => {
    setStep("loading");
    setTimeout(() => setStep("kakao"), 1000);
  };

  const handleKakaoLogin = () => {
    // TODO: 카카오 SDK 연동
    // window.Kakao.Auth.authorize({ redirectUri: "..." });
    alert("카카오 로그인 API 연동 예정");
  };

  return (
    <div className={styles.page}>

      {/* 히어로 */}
      <section className={styles.hero}>
        <p className={styles.heroEyebrow}>환자 후기</p>
        <h1 className={styles.heroTitle}>실제 환자분들의 변화</h1>
      </section>

      {/* 로그인 게이트 */}
      <section className={styles.gateSection}>

        {step === "idle" && (
          <div className={styles.gateBox}>
            <img className={styles.gateIcon} src="./icons/stethoscope.png" />
            <h2 className={styles.gateTitle}>의료법 안내</h2>
            <p className={styles.gateDesc}>
              의료법 제56조에 의거하여 환자 후기는<br />
              <strong>회원 로그인 후</strong> 확인하실 수 있습니다.
            </p>
            <span className={styles.gateSub}>
              로그인은 카카오톡으로 1초 만에 가능합니다
            </span>
            <button className={styles.gateBtn} onClick={handleLoginClick}>
              로그인하고 후기 보기
            </button>
          </div>
        )}

        {step === "loading" && (
          <div className={styles.gateBox}>
            <div className={styles.spinner} />
            <p className={styles.loadingText}>
              카카오톡으로 1초 만에<br />로그인할 수 있어요
            </p>
          </div>
        )}

        {step === "kakao" && (
          <div className={styles.gateBox}>
            <div className={styles.kakaoHeader}>
              <div className={styles.kakaoLogo}><RiKakaoTalkFill /></div>
              <h2 className={styles.kakaoTitle}>카카오 로그인</h2>
              <p className={styles.kakaoDesc}>
                카카오 계정으로 간편하게 로그인하고<br />
                실제 환자 후기를 확인해보세요
              </p>
            </div>

            <div className={styles.kakaoBenefits}>
              <div className={styles.kakaoBenefit}>
                <img className={styles.kakaoBenefitIcon} src="./icons/lightning.png" />
                <span>1초 만에 가입 완료</span>
              </div>
              <div className={styles.kakaoBenefit}>
                <img className={styles.kakaoBenefitIcon} src="./icons/lock.png" />
                <span>별도 회원가입 불필요</span>
              </div>
              <div className={styles.kakaoBenefit}>
                <img className={styles.kakaoBenefitIcon} src="./icons/device-mobile.png" />
                <span>카카오톡 계정 그대로 사용</span>
              </div>
            </div>

            <button className={styles.kakaoBtn} onClick={handleKakaoLogin}>
              <RiKakaoTalkFill />
              카카오로 시작하기
            </button>

            <p className={styles.kakaoPrivacy}>
              로그인 시 <a href="#">개인정보처리방침</a> 및 <a href="#">이용약관</a>에 동의하게 됩니다.
            </p>
          </div>
        )}

      </section>
    </div>
  );
}
