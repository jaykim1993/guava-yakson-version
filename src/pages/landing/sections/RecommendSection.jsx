import './RecommendSection.css'
import { Pill, CurrencyKrw, Package, ArrowsClockwise, Scales } from "phosphor-react"

const ICON_STYLE = {
  size: 24,
  weight: "regular",
  color: "var(--color-primary)",
};

const TARGETS = [
  { emoji: <Pill {...ICON_STYLE} />, text: '한약이 쓰고 냄새날까봐\n걱정되셨던 분' },
  { emoji: <CurrencyKrw {...ICON_STYLE} />, text: '비싼 다이어트 한약이\n부담스러웠던 분' },
  { emoji: <Package {...ICON_STYLE} />, text: '직접 방문하기 어려워\n비대면으로 받고 싶은 분' },
  { emoji: <ArrowsClockwise {...ICON_STYLE} />, text: '다른 한의원 감비환\n효과가 없었던 분' },
  { emoji: <Scales {...ICON_STYLE} />, text: '20대~40대\n과체중 여성분' },
]

export default function RecommendSection() {
  return (
    <section className="recommend section--cream">
      <h1 style={{background: "#888"}}>
        * 공감형 문제 제시
      </h1>
      <br />
      <div className="section recommend-inner">
        <p className="section-label">추천 대상</p>
        <h2 className="section-title">
          이런 분들께<br />
          <em>딱 맞는 선택</em>입니다
        </h2>
        <div className="divider" />

        <ul className="recommend-list">
          {TARGETS.map((t, i) => (
            <li key={i} className="recommend-item">
              <span className="recommend-emoji">{t.emoji}</span>
              <span className="recommend-text">{t.text}</span>
              <span className="recommend-check">✓</span>
            </li>
          ))}
        </ul>

        <a
          href="https://pf.kakao.com/_xlAzxkxb/chat"
          className="btn btn-primary"
          style={{ marginTop: 32 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 나에게 맞는지 무료 상담하기
        </a>
      </div>
    </section>
  )
}
