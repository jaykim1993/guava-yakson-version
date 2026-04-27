import { getIcon } from "../../../components/icons/Icons";
import './RecommendSection.css'

const ICON_STYLE = {
  size: 24,
  weight: "regular",
  color: "var(--color-primary)",
};

const TARGETS = [
  { icon: "Scales",          text: '붓기·체중감량 고민\n있으신 30~60대 여성분' },
  { icon: "Pill",            text: '한약이 쓰고 냄새날까봐\n걱정되셨던 분' },
  { icon: "CurrencyKrw",    text: '비싼 다이어트 한약이\n부담스러웠던 분' },
  { icon: "ArrowsClockwise", text: '다른 한의원 감비환\n효과가 없었던 분' },
  { icon: "Package",         text: '직접 방문하기 어려워\n비대면으로 받고 싶은 분' },
];

export default function RecommendSection() {
  return (
    <section className="recommend section--cream">
      <h1>**흐름 / 문장 수정중**</h1>
      <div className="section recommend-inner">
        <h2 className="section-title">
          "혹시 이런 고민<br />
          <em>요즘 자주 하고 계신가요?"</em>
        </h2>
        <div className="divider" />

        <ul className="recommend-list">
          {TARGETS.map((target, idx) => {
            const Icon = getIcon(target.icon);
            return (
              <li key={idx} className="recommend-item">
                <span className="recommend-emoji">{Icon && <Icon {...ICON_STYLE} />}</span>
                <span className="recommend-text">{target.text}</span>
                <span className="recommend-check">✓</span>
              </li>
            );
          })}
        </ul>

        {/* 클로징 — 다음 섹션 전환 브리지 */}
        <div className="recommend-closing">
          <span className="recommend-closing__line" aria-hidden="true" />
          <p className="recommend-closing__eyebrow">약손한의원의 약속</p>
          <h2 className="recommend-closing__title">
            혼자 고민하지 마세요<br />
            <em>저희가 함께하겠습니다</em>
          </h2>
          <p className="recommend-closing__desc">
            25년 임상경력의 원장이 직접 설계한<br />
            부담 없고 꾸준한 방법으로
          </p>
        </div>

      </div>
    </section>
  );
}
