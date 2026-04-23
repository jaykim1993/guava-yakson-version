import './WhyUsSection.css'

const POINTS = [
  {
    num: '01',
    title: '전국 유일 코팅·착향 감비환',
    desc: '타 한의원 감비환은 대부분 동일 원탕에서 공급받습니다. 약손감비환스틱은 독자 처방에 코팅과 착향까지 된 전국 유일한 제품입니다.',
    highlight: '쓴맛·냄새 걱정 없이 복용 가능',
  },
  {
    num: '02',
    title: '압도적인 가성비',
    desc: '1단계 79,000원부터 시작. 고가 한약 대비 부담 없이 시작하고, 효과를 직접 확인한 뒤 단계를 높여갈 수 있습니다.',
    highlight: '7만 9천원부터 시작',
  },
  {
    num: '03',
    title: '비대면 구글폼 접수 후 카톡 상담',
    desc: '직접 방문 없이 구글폼 접수 → 전화/카톡 상담 → 택배 수령까지. 바쁜 일상 속에서 편리하게 시작할 수 있습니다.',
    highlight: '집에서 편리하게',
  },
]

export default function WhyUsSection() {
  return (
    <section className="whyus section">
      
      <br /><br />
      <h1 style={{background: "#888"}}>
        * 소개 섹션
      </h1>
      <br />

      <p className="section-label">우리가 다른 이유</p>
      <h2 className="section-title">
        약손감비환이<br />
        <em>특별한 3가지 이유</em>
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
