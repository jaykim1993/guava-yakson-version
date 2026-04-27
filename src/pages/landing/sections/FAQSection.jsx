import { useState } from 'react'
import './FAQSection.css'

const FAQS = [
  {
    q: '감비환은 어떤 분들에게 적합한가요?',
    a: '체지방 감소, 식욕억제, 부종감소, 신진대사 촉진에 대한 효과가 있습니다.',
  },
  {
    q: '살은 보통 얼마나, 어떻게 빠지나요?',
    a: '통상적으로 60kg정도 여성의 경우, 보통 3개월에 6~8킬로입니다. 그러나 요요가 있으셨거나, 다이어트제(양약/한약) 복용 경험, 식습관이 불규칙 등에 따라 차이가 납니다.',
  },
  {
    q: '식사는 무조건 굶어야 하나요?',
    a: '감비환은 식전 30분~1시간 안에 복용을 하는데, 식사를 안하셔도 복용하시면 좋습니다. 제품은 식욕억제 이외에 신진대사를 촉진해서 체지방을 감소히키는 효과가 있습니다. 그리고 식사는 소량이라도 하루 3끼, 적어도 2끼는 드시기 바랍니다.',
  },
  {
    q: '복용 시 부작용이나 몸에 무리가 없나요?',
    a: '부작용이라기보다는 복용 초기 신진대사가 올라가면서 적응 현상이 나타날 수 있습니다. 이는 부작용이 아니라 몸이 약에 적응하는 정상적인 과정입니다. 저용량 1단계부터 시작해 몸의 반응을 보며 단계를 높이기 때문에 대부분 큰 무리 없이 적응합니다.',
  },
  {
    q: '다른 병원 약이나 영양제와 같이 먹어도 되나요?',
    a: '내용 파악 필요',
  },
  {
    q: '택배 배송은 어떻게 진행되나요?',
    a: '① 구글폼 접수 → ② 카카오 채널 또는 전화 상담 → ③ 처방 발행 → ④ 택배 수령 순서로 진행됩니다. 2개월분 이상은 택배비 없이 발송됩니다.',
  },
  {
    q: '요요를 방지하려면 어떻게 해야 하나요?',
    a: '목표체중까지 감량하신 후 약을 바로 끊는것이 아니라, 3개월~6개월간은 하루 식욕이 가장 좋을 때 한포 드시면서 서서히 끊어야 몸이 적응할 시간을 가질 수 있습니다. 알려드리는 생활수칙을 습관화하는것도 중요합니다.',
  },
  {
    q: '비대면 진료 및 상담 절차는 어떻게 되나요?',
    a: '① 구글폼 접수 → ② 카카오 채널 또는 전화 상담 → ③ 처방 발행 → ④ 택배 수령 순서로 진행됩니다.',
  },
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="faq section--cream">
      <h1>**질문 많다**</h1>
      <h1>**하단 주의사항 내용 필요**</h1>
      <div className="section faq-inner">
        <p className="section-label">자주 묻는 질문</p>
        <h2 className="section-title">
          FAQ
        </h2>
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
          <div>
            주의사항 복용초기에는 신진대사가 증진되면서 두통, 어지럼증, 가슴 두근거림, 손떨림, 입마름, 변비, 수면장애 등이 있을 수 있습니다. 이러한 불편증상은 물을 출분히 섭취(1리터가량)하면서 약 일주일 정도 지나면 대부분 소실됩니다.
          </div>
        </div>
      </div>
    </section>
  )
}
