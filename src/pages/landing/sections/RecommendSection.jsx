import { getIcon } from "../../../components/icons/Icons";
import './RecommendSection.css'

const ICON_STYLE = {
  size: 24,
  weight: "regular",
  color: "var(--color-primary)",
};

const TARGETS = [
  { icon: "Scales",          text: '붓기·체중감량 고민 있으신 30~60대 여성분' },
  { icon: "Pill",            text: '한약이 쓰고 냄새날까봐 걱정되셨던 분' },
  { icon: "CurrencyKrw",    text: '비싼 다이어트 한약이 부담스러웠던 분' },
  { icon: "ArrowsClockwise", text: '다른 한의원 감비환 효과가 없었던 분' },
  { icon: "Package",         text: '직접 방문수령 대신 비대면으로 받고 싶은 분' },
];

export default function RecommendSection() {
  return (
    <section className="recommend section">
      <div className="recommend-inner">

        <h2 className="section-title">
          "혹시 이런 고민<br />
          요즘 자주 하시나요?"
        </h2>
        <div className="divider" />

        <ul className="recommend-list">
          {TARGETS.map((target) => {
            const Icon = getIcon(target.icon);
            return (
              <li key={target.icon} className="recommend-item">
                <span className="recommend-icon">
                  {Icon && <Icon {...ICON_STYLE} />}
                </span>
                <span className="recommend-text">{target.text}</span>
                <span className="recommend-check">✓</span>
              </li>
            );
          })}
        </ul>

        {/* 클로징 */}
        <div className="recommend-closing">
          <span className="recommend-closing__line" aria-hidden="true" />
          <p className="recommend-closing__eyebrow">약손한의원의 약속</p>
          <h2 className="recommend-closing__title">
            혼자 고민하지 마세요<br />
            저희가 함께하겠습니다
          </h2>
          <p className="recommend-closing__desc">
            25년 임상경력의 원장과<br />
            5인의 전문의가 직접 설계하였습니다
          </p>
        </div>
      {/* ④ 마무리 카피 */}
      <div className="intro-closing">
        <p className="intro-closing__text">
          이제 다이어트할 때마다<br />
          한약 냄새 걱정은 끝!
        </p>
        
        <span className="intro-closing__sub">
          더욱 맛있게 · 간편하게 · 효과있게
        </span>
      </div>
      </div>
    </section>
  );
}