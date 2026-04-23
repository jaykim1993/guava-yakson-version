const TREATMENTS = [
  {
    num: "01",
    title: "1:1 맞춤 침 치료",
    desc: "체질과 증상을 종합 분석해 개인에게 최적화된 경혈 자리에 침을 놓습니다. 통증 완화와 기혈 순환 개선에 탁월합니다.",
    tag: "통증·순환",
  },
  {
    num: "02",
    title: "추나 요법",
    desc: "틀어진 척추와 관절을 손으로 교정하는 도수 치료입니다. 허리·목 디스크, 골반 비틀림에 효과적입니다.",
    tag: "척추·골반",
  },
  {
    num: "03",
    title: "한약 처방",
    desc: "혈액·소변 검사 결과를 바탕으로 정밀 처방합니다. 면역력 강화, 소화 개선, 체질 개선을 목표로 합니다.",
    tag: "체질·면역",
  },
  {
    num: "04",
    title: "약침·봉침",
    desc: "한약 추출물을 정제한 주사제를 경혈에 직접 투여합니다. 염증 억제와 조직 재생 효과가 탁월합니다.",
    tag: "염증·재생",
  },
];

export default function TreatmentsSection() {
  return (
    <div className="treatments">
      <div className="section-header">
        <p className="section-eyebrow">치료 프로그램</p>
        <h2 className="section-title">
          근본 원인을 찾아<br />처음부터 바로잡습니다
        </h2>
      </div>
      <div className="treatments__list">
        {TREATMENTS.map(({ num, title, desc, tag }) => (
          <div className="treatment-item" key={num}>
            <span className="treatment-item__num">{num}</span>
            <div className="treatment-item__body">
              <div className="treatment-item__top">
                <h3>{title}</h3>
                <span className="tag">{tag}</span>
              </div>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
