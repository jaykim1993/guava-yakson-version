import './CTA.css'
const KAKAO_URL = "https://pf.kakao.com/_xlAzxkxb/chat";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/16D6tjTxBdkDnno9i0UQk5kU6Qbqw6uLkq1uRQQzpcd8/edit";


export function KakaoCTA({ text = "카카오 문의" }) {
  return (
    <a
      href={KAKAO_URL}
      className="btn-kakao"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="./icons/chat-circle-dots.png" />
      {text}
    </a>
  );
}

export function GoogleFormCTA({ text = "구글 폼 접수" }) {
  return (
    <a
      href={GOOGLE_FORM_URL}
      className="btn-google"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="./icons/clipboard-text.png" />
      {text}
    </a>
  );
}

export function PhoneCTA({ text = "031-338-2299" }) {
  return (
    <a
      href="tel:031-338-2299"
      className="btn-call"
    >
      <img src="./icons/phone.png" />
      {text}
    </a>
  );
}
