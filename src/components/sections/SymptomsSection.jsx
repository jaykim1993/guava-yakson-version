const SYMPTOMS = [
  { icon: "🔥", title: "만성 허리 통증", desc: "오래 앉아 있으면 허리가 끊어질 것 같으신 분" },
  { icon: "⚡", title: "목·어깨 결림", desc: "컴퓨터 작업 후 목·어깨가 늘 뻐근하신 분" },
  { icon: "🦵", title: "무릎 관절염", desc: "계단 오르내릴 때 무릎이 시리고 아프신 분" },
  { icon: "😴", title: "만성 피로·수면장애", desc: "자도 자도 피곤하고 숙면을 취하지 못하시는 분" },
  { icon: "🌿", title: "체질 개선", desc: "냉증·소화불량·면역력 저하로 힘드신 분" },
  { icon: "💊", title: "양약 부작용 우려", desc: "장기 복용 없이 근본 원인을 해결하고 싶은 분" },
];

export default function SymptomsSection() {
  return (
    <div className="symptoms">
      <div className="section-header">
        <p className="section-eyebrow">이런 분들께</p>
        <h2 className="section-title">
          혹시 이런 불편함이<br />있으신가요?
        </h2>
      </div>
      <div className="symptoms__grid">
        {SYMPTOMS.map(({ icon, title, desc }) => (
          <div className="symptom-card" key={title}>
            <span className="symptom-card__icon">{icon}</span>
            <h3 className="symptom-card__title">{title}</h3>
            <p className="symptom-card__desc">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
