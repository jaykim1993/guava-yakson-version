import { useNavigate } from 'react-router-dom';
import './ReviewSection.css'

const REVIEWS = [
  { id: 1, name: '30대 직장인 최', tag: '2년 복용',  text: '약손감비환은 환 타입이랑 스틱형이라 먹기 편하고 다른 다이어트 약들보다 생활에 부담이 거의 없었습니다. 알려주신대로 생활수칙도 적용하며 요요없이 감량 상태를 유지중입니다.', kg: '-18kg' },
  { id: 2, name: '40대 주부 김', tag: '5개월 복용', text: '처음에는 반신반의하며 시작했으나, 생각보다 변화가 빨랐어요. 제일 크게 느낀 건 식욕이 확 줄었다는 점입니다. 체중이 서서히 빠지는 느낌이라 오히려 더 믿음이 갔습니다.', kg: '-8kg'  },
  { id: 3, name: '20대 대학생 이', tag: '3개월 복용', text: '원장님과 간호사 선생님 모두 친절하셔서 전혀 부담이 없었습니다. 첫 달부터 확실히 효과를 느꼈어요. 붓기가 먼저 빠지고 체중이 따라 내려왔어요.', kg: '-6kg'  },
  { id: 4, name: '60대 주부 박', tag: '1년 복용',  text: '저는 부정맥 증상이 있어서 내심 걱정했는데 지금까지 신체적 부작용 없어 믿음이 생깁니다. 순하면서도 효과가 좋아 장기복용 할 수 있는것 같아요.', kg: '-10kg' },
];

export default function ReviewSection() {
  const navigate = useNavigate(); 

  const toLoginPage =()=> {
    navigate('/reviews');
  };

  return (
    <>
      {/* ② 후기 목록 — 크림 배경 */}
      <section className="section-wrap">
        <div className="section-inner">
          <h2 className="section-title">
            복용하신 분들의<br />
            <em>진짜 변화</em>
          </h2>

          <div className="divider" />

          <div className='review-imgWrapper'>
            <img src='./landing/review.png' alt='감비환 리뷰' />
          </div>
          
          <div className="review-list">
            {REVIEWS.map((r) => (
              <div key={r.id} className="card">
                <div className="review-header">
                  <div>
                    <span className="review-name">{r.name}<b>○○</b></span>
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
              <div className="review-more__icon"><img src='./icons/lock-simple.png' alt="lock" /></div>
              <p className="review-more__text">
                더 많은 실제 후기는 로그인 후 확인하실 수 있습니다
              </p>
              <button className="review-more__btn" onClick={toLoginPage}>
                1초 로그인하고 전체 후기 보기
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
