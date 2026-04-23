import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiKakaoTalkFill } from "react-icons/ri";
import styles from "./Header.module.css";

import { useScrollHeader } from "../../hooks/useScrollHeader";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // 커스텀 훅: 헤더 스크롤
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const scrolled = useScrollHeader(40, closeMenu);

  // 1. 네비게이션 메뉴 데이터 (확장 내용 여기 추가)
  const navMenu = [
    { id: 1, label: "병원소개", target: "/about", show: true },
    { id: 2, label: "진료안내", target: "/treatments", show: true },
    // { id: 3, label: "진료후기", target: "/reviews", show: true },
    // { id: 4, label: "오시는 길", target: "#location", show: true },
    // { id: 5, label: "공지사항", target: "#notice", show: false },
  ];

  // 2. 우측 액션 버튼 데이터
  const actions = {
    kakao: {
      label: "카카오 채널",
      url: "https://pf.kakao.com/_xlAzxkxb/chat",
      icon: <RiKakaoTalkFill />,
      show: false
    },
    cta: {
      label: "간편접수",
      url: "https://docs.google.com/forms/d/16D6tjTxBdkDnno9i0UQk5kU6Qbqw6uLkq1uRQQzpcd8/edit",
      show: true
    }
  };

  // 네이게이션 랜더링 함수 (기본 헤더 / 반응형 버거 리스트용)
  const renderNav = () => {
    return navMenu
      .filter((item) => item.show)
      .map((item) => (
        <Link
          key={item.id}
          to={item.target}
          className={styles.navLink}
          onClick={closeMenu}
        >
          {item.label}
        </Link>
      ));
  };

  return (
    <>
      <header
        className=
        {`${styles.header} ${scrolled && !menuOpen ? styles.scrolled : ""}`}
      >
        <div className={styles.inner}>
          {/* 로고 영역 */}
          <Link to="/" className={styles.logo}>
            {/* <span className={styles.logoMark}></span> */}
            <span className={styles.logoText}>용인약손한의원</span>
          </Link>

          {/* 메뉴 영역 (PC & 테블릿) */}
          <nav
            className=
            {`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          >
            {renderNav()}
          </nav>

          {/* 액션 버튼 영역 */}
          <div className={styles.actions}>
            {actions.kakao.show && (
              <a
                href={actions.kakao.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.kakaoIcon}
                aria-label="카카오톡 상담"
              >
                {/* {actions.kakao.label} */}
                {actions.kakao.icon}
              </a>
            )}
            {actions.cta.show && (
              <a
                href={actions.cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
              >
                {actions.cta.label}
              </a>
            )}
          </div>

          {/* 햄버거 버튼 (모바일) */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <div
              className=
              {`${styles.burgerLines} ${menuOpen ? styles.burgerActive : ""}`}
            >
              <span></span><span></span><span></span>
            </div>
          </button>
        </div>
      </header>
      <nav
        className=
        {`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        {renderNav()}

      </nav>
    </>
  );
}