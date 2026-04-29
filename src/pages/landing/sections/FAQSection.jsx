import { useState } from 'react'
import './FAQSection.css'

const FAQS = [
  {
    q: '감비환은 어떤 분들에게 적합한가요?',
    a: '체지방 감소, 식욕억제, 부종 감소, 신진대사 촉진 효과가 필요하신 분께 적합합니다.',
  },
  {
    q: '살은 보통 얼마나, 어떻게 빠지나요?',
    a: `60kg 여성 기준 3개월에 6~8kg 감량이 통상적입니다.\n\n다만 아래 요인에 따라 개인차가 있습니다.\n• 요요 경험 여부\n• 다이어트약(양약/한약) 복용 이력\n• 불규칙한 식습관`,
  },
  {
    q: '식사는 무조건 굶어야 하나요?',
    a: `굶지 않아도 됩니다. 식전 30분~1시간 전 복용을 권장합니다.\n\n감비환은 식욕억제 외에도 신진대사를 촉진해 체지방을 감소시킵니다.\n하루 최소 2끼, 가능하면 3끼 소량이라도 드시는 것을 권장합니다.`,
  },
  {
    q: '복용 시 부작용이나 몸에 무리가 없나요?',
    a: `부작용보다는 초기 적응 반응이 나타날 수 있습니다.\n\n신진대사가 올라가며 몸이 약에 적응하는 정상적인 과정으로,\n저용량 1단계부터 시작해 몸의 반응을 보며 단계를 높이기 때문에 대부분 무리 없이 적응합니다.`,
  },
  {
    q: '다른 병원 약이나 영양제와 같이 먹어도 되나요?',
    a: '내용 파악 필요',
  },
  {
    q: '택배 배송은 어떻게 진행되나요?',
    a: `1. 구글폼 접수\n2. 카카오 채널 또는 전화 상담\n3. 처방 발행\n4. 택배 수령\n\n• 2개월분 이상 주문 시 택배비 무료\n• 수령까지 최대 5일 소요 (주말 포함 시 2~3일 추가)`,
  },
  {
    q: '요요를 방지하려면 어떻게 해야 하나요?',
    a: `목표 체중 달성 후 바로 끊지 말고, 3~6개월간 하루 식욕이 가장 좋을 때 한 포씩 복용하며 서서히 줄여야 합니다.\n\n몸이 적응할 시간을 주는 것이 요요 방지의 핵심입니다.\n안내드리는 생활 수칙을 꾸준히 습관화하는 것도 중요합니다.`,
  },
  {
    q: '비대면 진료 및 상담 절차는 어떻게 되나요?',
    a: `1. 구글폼 접수\n2. 카카오 채널 또는 전화 상담\n3. 처방 발행\n4. 택배 수령`,
  },
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="faq section--cream">
      <div className="section faq-inner">
        <h2 className="section-title">FAQ</h2>
        <div className="divider" />

        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIdx === i ? 'faq-item--open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="faq-q-mark">Q</span>
                <span className="faq-q-text">{item.q}</span>
                <span className="faq-toggle">{openIdx === i ? '−' : '+'}</span>
              </button>
              {openIdx === i && (
                <div className="faq-answer">
                  <span className="faq-a-mark">A</span>
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 주의사항 */}
        <div className="faq-notice">
          <div className="faq-notice__body">
            <strong className="faq-notice__title">
              <span className="faq-notice__bang">!</span> 복용 시 주의사항
            </strong>
            <p className="faq-notice__text">
              <strong>[복용 금지]</strong><br />
              - 결핵·출혈성질환·정신질환 / 암 치료 중·갑상선기능 항진증<br />
              - 간·심장·신장질환 / 영유아·고령자·임신부·모유수유 중<br />
              - 심각한 피부질환·알러지 심한 분 / 혈소판감소증
              <br /><br />

              <strong>[권장하지 않는 경우]</strong><br />
              - 소식하는 분으로 기존 양약·한약으로도 체중감량이 안된 분<br />
              (신진대사 저하)
              <br /><br />

              <strong>[주의]</strong><br />
              - 당뇨약 복용 중인 경우 금식 시 저혈당 쇼크 주의<br />
              - 신지로이드 복용 중인 경우 오전 감비환은 식후 복용<br />
              - 속 쓰림 증상 있을 시 식후 복용 권장
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}