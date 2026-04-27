import './WhyUsSection.css'

const POINTS = [
  {
    num: '01',
    title: '전국 유일 코팅·착향 감비환',
    desc: '독자 처방에 코팅·착향까지 적용된 유일한 감비환',
    highlight: '쓴맛·냄새 걱정 없이 복용',
  },
  {
    num: '02',
    title: '압도적인 가성비',
    desc: '부담 없는 가격으로 시작해 단계별 선택 가능',
    highlight: '7만 9천원부터 시작',
  },
  {
    num: '03',
    title: '다년간의 임상 노하우',
    desc: '5명의 한의사가 효과적인 다이어트에 대해 연구',
    highlight: '최선의 다이어트 한약 처방',
  },
  {
    num: '04',
    title: '비대면 간편 상담',
    desc: '방문 없이 상담부터 수령까지 한 번에',
    highlight: '집에서 편리하게',
  }
]

export default function WhyUsSection() {
  return (
    <section className="whyus section">
      <h2 className="section-title">
        약손감비환이<br />
        <em>특별한 4가지 이유</em>
      </h2>
      <div className="divider" />

      <div className="whyus-list">
        {POINTS.map((p) => (
          <div key={p.num} className="whyus-card card">
            <span className="whyus-num">{p.num}</span>
            <h3 className="whyus-title">{p.title}</h3>
            <p className="whyus-desc">{p.desc}</p>
            <div className="whyus-highlight">
              <span>✦</span> {p.highlight}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
