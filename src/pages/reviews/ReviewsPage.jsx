import { useState } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import styles from "./ReviewsPage.module.css";

const REVIEWS = [
  { id: 1, name: '30대 직장인 최', tag: '2년 복용', text: '약손감비환은 환 타입이랑 스틱형이라 먹기 편하고 다른 다이어트 약들보다 생활에 부담이 거의 없었습니다. 알려주신대로 생활수칙도 적용하며 요요없이 감량 상태를 유지중입니다.', kg: '-18kg' },
  { id: 2, name: '40대 주부 김', tag: '5개월 복용', text: '처음에는 반신반의하며 시작했으나, 생각보다 변화가 빨랐어요. 제일 크게 느낀 건 식욕이 확 줄었다는 점입니다. 체중이 서서히 빠지는 느낌이라 오히려 더 믿음이 갔습니다.', kg: '-8kg' },
  { id: 3, name: '20대 대학생 이', tag: '3개월 복용', text: '원장님과 간호사 선생님 모두 친절하셔서 전혀 부담이 없었습니다. 첫 달부터 확실히 효과를 느꼈어요. 붓기가 먼저 빠지고 체중이 따라 내려왔어요.', kg: '-6kg' },
  { id: 4, name: '60대 주부 박', tag: '1년 복용', text: '저는 부정맥 증상이 있어서 내심 걱정했는데 지금까지 신체적 부작용 없어 믿음이 생깁니다. 순하면서도 효과가 좋아 장기복용 할 수 있는것 같아요.', kg: '-10kg' },
];

export default function ReviewsPage() {


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

        {/* 후기 게시판 */}
        <div className={styles.reviewBoard}>
          {/* 헤더 */}
          <div className={styles.boardHeader}>
            <span className={`${styles.boardCol} ${styles.boardColTitle}`}>내용</span>
            <span className={styles.boardCol}>복용기간</span>
            <span className={styles.boardCol}>감량</span>
          </div>

          {/* 목록 */}
          <ul className={styles.boardList}>
            {REVIEWS.map((r) => (
              <li key={r.id} className={styles.boardRow}>
                <div className={`${styles.boardCol} ${styles.boardColTitle}`}>
                  <span className={styles.boardName}>{r.name}○○</span>
                  <p className={styles.boardText}>{r.text}</p>
                </div>
                <span className={styles.boardCol}>{r.tag}</span>
                <span className={`${styles.boardCol} ${styles.boardKg}`}>{r.kg}</span>
              </li>
            ))}
          </ul>

          {/* 잠금 오버레이 */}
          <div className={styles.boardOverlay}>
            <img src="./icons/lock-simple.png" alt="lock" />
            <p>로그인 후 전체 후기를 확인하실 수 있습니다</p>
          </div>
        </div>
      </section>

      {/* 의료법 안내 */}
      <section className={styles.gateSection}>
        <div className={styles.gateBox}>
          <img className={styles.gateIcon} src="./icons/stethoscope.png" />
          <h2 className={styles.gateTitle}>의료법 안내</h2>
          <p className={styles.gateDesc}>
            의료법 제56조에 의거하여 환자 후기는<br />
            <strong>회원 로그인 후</strong> 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      {/* 로그인 게이트 */}
      <section className={styles.gateSection}>
        <div className={styles.gateBox}>

          {/* ID / PW 입력 */}
          {/* <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="text"
              placeholder="아이디"
            />
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호"
            />
          </div> */}

          {/* 일반 로그인 버튼 */}
          {/* <button className={styles.loginBtn}>
            로그인
          </button> */}

          {/* <div className={styles.divider}>
            <span>또는</span>
          </div> */}

          {/* 카카오 버튼 2개 */}
          <div className={styles.kakaoButtons}>
            <button className={styles.kakaoBtn}>
              <RiKakaoTalkFill />
              카카오로 로그인하기
            </button>
            {/* <button className={styles.kakaoSignupBtn}>
              <RiKakaoTalkFill />
              카카오로 회원가입하기
            </button> */}
          </div>

        </div>
      </section>



    </div>
  );
}
