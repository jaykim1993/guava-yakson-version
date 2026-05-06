import './CTA.css'
const KAKAO_URL = "https://pf.kakao.com/_xlAzxkxb/chat";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/16D6tjTxBdkDnno9i0UQk5kU6Qbqw6uLkq1uRQQzpcd8/edit";
import { RiKakaoTalkFill } from "react-icons/ri";

export function KakaoCTA({ text = "약손한의원 카카오톡" }) {
  return (
    <a
      href={KAKAO_URL}
      className="btn btn-kakao cta-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      {/* <img src="./icons/chat-circle-dots.png" /> */}
      <RiKakaoTalkFill size={24}/>
    </a>
  );
}

export function GoogleFormCTA({ text = "지금 바로 접수하기" }) {
  return (
    <a
      href={GOOGLE_FORM_URL}
      className="btn btn-outline cta-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <img src="./icons/clipboard-text.png" />
    </a>
  );
}


export function PhoneCTA({ text = "031-338-2299" }) {
  return (
    <a
      href="tel:031-338-2299"
      className="btn btn-outline cta-button"
    >
      {text}
      <img src="./icons/phone.png" />
    </a>
  );
}