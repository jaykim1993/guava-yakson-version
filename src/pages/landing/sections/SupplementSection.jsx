import './SupplementSection.css'

const SUPPLEMENTS = [
    {
        name: '약손정',
        tag: '식욕 케어',
        emoji: '💊',
        situation: '감비환으로도 식욕이 잡히지 않을 때',
        desc: '특히 생리 전후 폭발하는 식욕을 빠르게 억제해줍니다.',
        when: '식욕이 강하게 올라올 때',
        color: 'rose',
    },
    {
        name: '폭식환',
        tag: '치팅데이 대비',
        emoji: '🛡️',
        situation: '폭식 후 영양분 배설 · 비만 방지',
        desc: '치팅데이나 과식 후 과잉 섭취된 영양분 배설을 도와줍니다.',
        when: '과식 직후',
        color: 'gold',
    },
    {
        name: '디톡스환',
        tag: '부종 · 변비',
        emoji: '🌿',
        situation: '체중감량 중 부종이 생기거나 변비가 심할 때',
        desc: '다이어트 중 생기는 부종과 변비를 완화해줍니다.',
        when: '부종·변비 증상 시',
        color: 'green',
    },
]

export default function SupplementSection() {
    return (
        <section className="supplement section">
            <div className="supp-inner">

                {/* 헤더 */}
                <p className="section-label">동봉 보조제품</p>
                <h2 className="section-title">
                    상황별 맞춤<br />
                    <em>3가지 보조제</em>
                </h2>
                <div className="divider" />

                {/* 이미지 */}
                <div className="supp-image">
                    <img src="./supplements.png" alt="보조제품 3종" />
                </div>

                {/* 카드 리스트 */}
                <ul className="supp-list">
                    {SUPPLEMENTS.map(({ name, tag, emoji, situation, desc, when, color }) => (
                        <li key={name} className={`supp-card supp-card--${color}`}>
                            <div className="supp-card__header">
                                <span className="supp-card__emoji">{emoji}</span>
                                <div className="supp-card__header-text">
                                    <span className="supp-card__tag">{tag}</span>
                                    <strong className="supp-card__name">{name}</strong>
                                </div>
                            </div>
                            <div className="supp-card__body">
                                <p className="supp-card__situation">{situation}</p>
                                <p className="supp-card__desc">{desc}</p>
                                <div className="supp-card__when">
                                    <span className="supp-card__when-label">복용 시점</span>
                                    <span className="supp-card__when-text">{when}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* 클로징 */}
                <div className="supp-closing">
                    <p className="supp-closing__text">
                        감비환스틱과 함께<br />
                        <em>3가지 보조제가 모두 동봉</em>됩니다
                    </p>
                </div>

            </div>
        </section>
    )
}