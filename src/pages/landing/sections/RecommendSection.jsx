import { getIcon } from "../../../components/icons/Icons";
import './RecommendSection.css'

const ICON_STYLE = {
  size: 24,
  weight: "regular",
  color: "var(--color-primary)",
};

const TARGETS = [
  { icon: "Scales", bold: '20대~40대', text: '과체중 여성분' },
  { icon: "Pill", bold: '한약이 쓰고 냄새날까봐', text: '걱정되셨던 분' },
  { icon: "CurrencyKrw", bold: '비싼 다이어트 한약이', text: '부담스러웠던 분' },
  { icon: "ArrowsClockwise", bold: '다른 한의원 감비환', text: '효과가 없었던 분' },
  { icon: "Package", bold: '직접 방문하기 어려워', text: '비대면으로 받고 싶은 분' },
];

export default function RecommendSection() {
  return (
    <>
      {/* ① 질문 + 리스트 */}
      <section className="section-wrap">
        <img className="recommend-bg1" src="./bg/bg2.png" />
        <div className="section-inner">
          <div className="section-badge"><b>·</b>&nbsp;추천대상</div>
          <h2 className="section-title">
            혹시 이런 고민<br />
            <em>요즘 자주 하시나요?</em>
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
                  <span className="recommend-text"><b>{target.bold}</b>&nbsp;{target.text}</span>
                  <span className="recommend-check">✓</span>
                </li>
              );
            })}
          </ul>
          <a
            href="https://pf.kakao.com/_xlAzxkxb/chat"
            className="full-CTA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./icons/chat-circle-dots.png" />
            나에게 맞는지 무료 상담하기
          </a>
        </div>
      </section>

      {/* ② 클로징 */}
      <section className="section-wrap">
        <img className="recommend-bg2" src='./bg/bg3.png' />
        <div className="section-inner">
          <div className="recommend-closing">
            <div className="section-badge"><b>·</b>&nbsp;천연 다이어트</div>
            <h2 className="section-title">
              혼자 고민하지 마세요<br />
              <em>저희가 함께하겠습니다</em>
            </h2>
          </div>
          <a
            href="https://pf.kakao.com/_xlAzxkxb/chat"
            className="full-CTA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./icons/chat-circle-dots.png" />
            나에게 맞는지 무료 상담하기
          </a>

        </div>
      </section>
    </>
  );
}
