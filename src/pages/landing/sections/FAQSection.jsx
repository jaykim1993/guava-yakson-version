import { useState } from 'react'
import './FAQSection.css'

const FAQS = [
  {
    q: '한약이 써서 복용하기 힘들지 않나요?',
    a: '약손감비환스틱은 전국 유일하게 코팅과 딸기맛 착향이 되어 있어 쓴맛과 냄새 없이 드실 수 있습니다. 타 한의원 감비환과 가장 큰 차별점입니다.',
  },
  {
    q: '초기에 부작용이 있나요?',
    a: '복용 초기 신진대사가 올라가면서 적응 현상이 나타날 수 있습니다. 이는 부작용이 아니라 몸이 약에 적응하는 정상적인 과정입니다. 저용량 1단계부터 시작해 몸의 반응을 보며 단계를 높이기 때문에 대부분 큰 무리 없이 적응합니다.',
  },
  {
    q: '비대면으로 진행하면 어떻게 받나요?',
    a: '① 구글폼 접수 → ② 카카오 채널 또는 전화 상담 → ③ 처방 발행 → ④ 택배 수령 순서로 진행됩니다. 직접 방문 없이 집에서 편리하게 받으실 수 있습니다.',
  },
  {
    q: '1, 2, 3단계 차이는 무엇인가요?',
    a: '단계가 높아질수록 감량 효과가 강해집니다. 처음에는 반드시 1단계부터 시작하여 몸의 반응을 확인한 후 단계를 높여갑니다. 단계 조절은 카카오 상담을 통해 안내받으실 수 있습니다.',
  },
  {
    q: '상담 가능 시간은 언제인가요?',
    a: '오전 9시부터 오후 7시까지 상담 가능합니다. 카카오 채널로 문의 주시면 순차적으로 답변드립니다.',
  },
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="faq section--cream">

      <br /><br />
      <h1 style={{ background: "#888" }}>
        * FAQ 섹션
      </h1>
      <br />

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
        </div>
      </div>
    </section>
  )
}
