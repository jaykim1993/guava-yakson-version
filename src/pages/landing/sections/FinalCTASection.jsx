import { KakaoCTA, GoogleFormCTA, PhoneCTA } from '../../../components/cta/ButtonCTA'
import './FinalCTASection.css'

export default function FinalCTASection() {
  return (
    <section className="closing-wrap">
      <img
        className="closing-bg"
        src="./bg/bg5.png"
        alt=""
      />
      <div className="closing-inner">
        <h2 className="closing-title">
          다시 입고 싶은<br />
          <em>그 옷</em>을 위한<br />
          <em>약손 감비환스틱</em>
        </h2>
      </div>
    </section>


  );
}
