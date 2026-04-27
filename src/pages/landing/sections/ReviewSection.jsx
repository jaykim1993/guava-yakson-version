import './ReviewSection.css'

// 실제 후기 사진/내용으로 교체 필요
const REVIEWS = [
  {
    id: 1,
    name: '30대 직장인 김○○',
    tag: '2개월 복용',
    text: '다른 한의원 감비환은 너무 써서 못 먹었는데, 약손감비환스틱은 딸기 맛이라 부담 없이 먹을 수 있었어요. 2달 만에 8kg 빠졌습니다!',
    kg: '-8kg',
  },
  {
    id: 2,
    name: '40대 주부 이○○',
    tag: '3개월 복용',
    text: '비대면으로 카톡 상담만으로 진행했는데 정말 편리했어요. 가격도 부담 없고 효과도 확실했습니다.',
    kg: '-11kg',
  },
  {
    id: 3,
    name: '20대 대학생 박○○',
    tag: '1개월 복용',
    text: '첫 달부터 확실히 효과를 느꼈어요. 붓기가 먼저 빠지고 체중이 따라 내려왔어요. 지금 2단계 도전 중!',
    kg: '-5kg',
  },
]

export default function ReviewSection() {
  return (
    <section className="review section">
      <h1>**신뢰형 후기 구조 전환필요**</h1>
      <h1>**실 후기 자료 대기중**</h1>
      <p className="section-label">실제 후기</p>
      <h2 className="section-title">
        복용하신 분들의<br />
        <em>진짜 변화</em>
      </h2>
      <div className="divider" />

      <div className="review-list">
        {REVIEWS.map((r) => (
          <div key={r.id} className="review-card card">
            <div className="review-header">
              <div>
                <span className="review-name">{r.name}</span>
                <span className="review-tag">{r.tag}</span>
              </div>
              <div className="review-result">{r.kg}</div>
            </div>
            <p className="review-text">"{r.text}"</p>
          </div>
        ))}
      </div>

      <div className="review-more">
        <div className="review-more__overlay">
          <div className="review-more__icon">🔒</div>
          <p className="review-more__text">
            더 많은 실제 후기는<br />
            로그인 후 확인하실 수 있습니다
          </p>
          <button className="review-more__btn">
            1초 로그인하고 전체 후기 보기
          </button>
        </div>
      </div>
    </section>
  )
}
