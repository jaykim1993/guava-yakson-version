import { useState } from "react";

export default function CtaSection() {
  const [form, setForm] = useState({ name: "", phone: "", concern: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: POST /api/inquiry
    console.log("상담 신청:", form);
    setSubmitted(true);
  };

  return (
    <div className="cta">
      <div className="section-header">
        <p className="section-eyebrow">예약 · 상담</p>
        <h2 className="section-title">
          지금 바로<br />무료 상담을 신청하세요
        </h2>
        <p className="cta__desc">
          24시간 내 담당 코디네이터가 연락드립니다
        </p>
      </div>

      {submitted ? (
        <div className="cta__thanks">
          <p>✓ 상담 신청이 완료되었습니다.</p>
          <p>빠른 시간 내에 연락드리겠습니다.</p>
        </div>
      ) : (
        <form className="cta__form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="홍길동"
              value={form.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">연락처</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="010-0000-0000"
              value={form.phone}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="concern">주요 증상 / 문의 내용</label>
            <textarea
              id="concern"
              name="concern"
              rows={4}
              placeholder="예: 허리 통증 3년째, 디스크 진단 받음"
              value={form.concern}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn--primary btn--full">
            무료 상담 신청하기
          </button>
          <p className="cta__privacy">
            개인정보는 상담 목적 외 사용되지 않습니다.
          </p>
        </form>
      )}
    </div>
  );
}
