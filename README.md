# 🌿 Yakson — 용인약손한의원 랜딩페이지

> 용인약손한의원 **약손감비환스틱** 홍보를 위한 모바일 최우선 전환형 랜딩페이지

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev)

---

## 📌 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 클라이언트 | 용인약손한의원 |
| 목적 | 약손감비환스틱 상담 전환 유도 (카카오 문의 / 접수폼) |
| 타깃 | 광고 / SNS(인스타) 유입 모바일 사용자 |
| 1차 목표 | 다이어트 단일 전환형 랜딩페이지 |
~~| 2차 목표 | GUAVA 플랫폼 기반 조립형 풀 홈페이지 확장 |~~

---

## 🛠 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | React 18 + Vite |
| 라우팅 | react-router-dom |
| 아이콘 | phosphor-react, react-icons/ri |
| 배포 | Vercel |
| 반응형 | Mobile First (320px~) / Tablet (768px~) / Desktop (1280px~) |

---

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── cta/                   # 하단 고정 CTA 버튼바
│   ├── icons/
│   │   └── Icons.js           # 아이콘 모음
│   └── layout/
│       ├── Header.jsx         # 공통 헤더
│       ├── Header.module.css
│       ├── Footer.jsx         # 공통 풋터
│       └── Footer.module.css
├── hooks/
│   └── useScrollHeader.js     # 스크롤 헤더 훅
├── pages/
│   ├── about/
│   │   ├── AboutPage.jsx
│   │   └── AboutPage.module.css
│   ├── landing/
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx        # 히어로
│   │   │   ├── IntroSection.jsx       # 공감형 문제 제시
│   │   │   ├── ProductSection.jsx     # 제품 소개
│   │   │   ├── RecommendSection.jsx   # 추천 대상
│   │   │   ├── ReviewSection.jsx      # 후기
│   │   │   ├── FAQSection.jsx         # FAQ 아코디언
│   │   │   └── FinalCTASection.jsx    # 최종 CTA
│   │   └── LandingPage.jsx
│   ├── reviews/
│   │   ├── ReviewsPage.jsx
│   │   └── ReviewsPage.module.css
│   └── treatments/
├── App.jsx                    # 라우팅 설정
└── App.css                    # 전역 공통 스타일
```

---

## 📄 페이지 구성 (섹션)

| 순서 | 섹션 | 목적 |
|------|------|------|
| 1 | Hero | 이탈 방지 및 타깃 확인, 즉각 CTA |
| 2 | 공감형 문제 제시 | 붓기 / 요요 / 식욕 고민 공감 |
| 3 | 약손 방식 소개 | 솔루션 제시 (아이콘 4구 카드) |
| 4 | 신뢰/가이드 | 병원 철학 어필, 과장 광고 탈피 |
| 5 | 후기 | 의심 해소 (로그인 후 열람) |
| 6 | FAQ | 전환 저항 해소 (아코디언) |
| 7 | 보조환 소개 | 추가 관리 방안 서브 안내 |
| 8 | 최종 CTA | 접수폼 / 카카오 상담 / 전화 |

---

## 🔗 주요 링크

| 항목 | 링크 |
|------|------|
| 카카오톡 채널 | [카카오 상담 채널](https://pf.kakao.com/_xlAzxkxb/chat) |
| 접수  Google Form | (https://docs.google.com/forms/d/16D6tjTxBdkDnno9i0UQk5kU6Qbqw6uLkq1uRQQzpcd8/edit) |

---

## ⚙️ 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

---

## 🚀 배포

Vercel을 통해 자동 배포됩니다. `main` 브랜치에 push 시 자동으로 배포됩니다.

```bash
# Vercel CLI로 수동 배포 시
vercel --prod

| 환경 | URL |
|------|-----|
| Production | https://yakson.vercel.app (예시, 확정 후 업데이트) |

---

## ✅ 개발 체크리스트

### 콘텐츠 수급 대기
- [✔️] 약손감비환스틱 고해상도 제품 이미지
- [ ] 병원 공식 로고 (AI/PNG)
- [✔️] 실제 텍스트 후기 원문
- [✔️] 병원 내부/외부 인테리어 사진
- [✔️] 감비환 단계별 가격표

### 기능
- [✔️] 모바일 하단 고정 CTA 바
- [✔️] 후기 섹션 로그인 게이트
- [✔️] FAQ 아코디언 UI
- [✔️] 카카오 채널 연동
- [✔️] 접수폼 연동
- [ ] SEO 메타태그 설정
- [ ] Google Analytics / 전환 트래킹

---

## 📐 디자인 가이드

- **톤앤매너**: 여성 웰니스 + 한의원 신뢰감 + 상담 유도형
- **우선순위**: 신뢰 > 전환 > 정돈감 (화려함 지양)
- **레이아웃**: 모바일 세로형 스크롤 최우선
- **CTA 배치**: 히어로 / 주요 섹션 하단 / 최하단 반복 배치

---

## 📅 일정

| 단계 | 내용 | 기간 |
|------|------|------|
| 1차 | 랜딩페이지 | 1주 이내 |
~~| 2차 | 풀 홈페이지 (GUAVA 기반) | 1개월 이내 |~~

---

## 🤝 기여 및 인수인계

본 프로젝트는 **초기 개발 및 퍼블리싱 완료 후 클라이언트(또는 담당팀)에게 운영 권한이 이전**됩니다.

- 초기 개발자는 배포 완료 시점 이후 **유지보수 및 추가 개발에 관여하지 않습니다.**
- 이후 고도화, 콘텐츠 업데이트, 기능 추가는 **권한을 인수받은 담당자가 직접 진행**합니다.
- 문의 사항은 인수인계 시점에 전달된 연락처를 통해 확인하세요.

---

## 📋 인수인계 체크리스트

- [ ] Vercel 프로젝트 소유권 이전
- [ ] GitHub 레포지토리 접근 권한 이전
- [ ] 카카오 채널 연동 정보 전달
- [ ] Google Form 접수폼 최종 링크 확정
- [ ] 도메인 연결 확인
- [ ] Google Analytics 계정 이전

---

~~> 본 프로젝트는 GUAVA 플랫폼의 한의원 AI 홈페이지 자동화 기능 실증 및 첫 도입 사례입니다.~~
