import { useState } from "react";
import styles from "./ReviewsPage.module.css";

// 로그인 상태: "idle" | "loading" | "kakao"
export default function ReviewsPage() {
  const [step, setStep] = useState("idle");

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
    <div className="page">

      {/* 히어로 */}
      <section className="page-hero page-hero--short">
        <p className="section-eyebrow">환자 후기</p>
        <h1 className="page-hero__title">실제 환자분들의 변화</h1>
      </section>

      {/* 로그인 게이트 */}
      <section className="page-section reviews-gate">

        {step === "idle" && (
          <div className="reviews-gate__box">
            <div className="reviews-gate__icon">⚖️</div>
            <h2 className="reviews-gate__title">의료법 안내</h2>
            <p className="reviews-gate__desc">
              의료법 제56조에 의거하여 환자 후기는<br />
              <strong>회원 로그인 후</strong> 확인하실 수 있습니다.
            </p>
            <p className="reviews-gate__sub">
              로그인은 카카오톡으로 1초 만에 가능합니다
            </p>
            <button className="btn btn--primary reviews-gate__btn" onClick={handleLoginClick}>
              로그인하고 후기 보기
            </button>
          </div>
        )}

        {step === "loading" && (
          <div className="reviews-gate__box">
            <div className="reviews-gate__spinner" />
            <p className="reviews-gate__loading-text">카카오톡으로 1초 만에<br />로그인할 수 있어요</p>
          </div>
        )}

        {step === "kakao" && (
          <div className="reviews-gate__box">
            <div className="kakao-login">
              <div className="kakao-login__header">
                <div className="kakao-login__logo">
                  <KakaoIcon />
                </div>
                <h2 className="kakao-login__title">카카오 로그인</h2>
                <p className="kakao-login__desc">
                  카카오 계정으로 간편하게 로그인하고<br />
                  실제 환자 후기를 확인해보세요
                </p>
              </div>

              <div className="kakao-login__benefits">
                <div className="kakao-benefit">
                  <span className="kakao-benefit__icon">⚡</span>
                  <span>1초 만에 가입 완료</span>
                </div>
                <div className="kakao-benefit">
                  <span className="kakao-benefit__icon">🔒</span>
                  <span>별도 회원가입 불필요</span>
                </div>
                <div className="kakao-benefit">
                  <span className="kakao-benefit__icon">📱</span>
                  <span>카카오톡 계정 그대로 사용</span>
                </div>
              </div>

              <button className="kakao-login__btn" onClick={handleKakaoLogin}>
                <KakaoIcon />
                카카오로 시작하기
              </button>

              <p className="kakao-login__privacy">
                로그인 시 <a href="#">개인정보처리방침</a> 및 <a href="#">이용약관</a>에 동의하게 됩니다.
              </p>
            </div>
          </div>
        )}

      </section>
    </div>
  );
}

function KakaoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3C6.477 3 2 6.477 2 10.8c0 2.7 1.636 5.07 4.1 6.51L5.1 21l4.68-2.46c.72.1 1.46.16 2.22.16 5.523 0 10-3.477 10-7.8S17.523 3 12 3z"
        fill="#3A1D1D"
      />
    </svg>
  );
}
