import { useState, useEffect } from 'react'
import './FloatingCTA.css'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () =>
      setVisible(
        window.scrollY > 300 &&
        window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 500
      )
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`floating-cta ${visible ? 'floating-cta--visible' : ''}`}>
      <a
        href="https://pf.kakao.com/_xlAzxkxb/chat"
        className="floating-btn floating-btn--kakao"
        target="_blank"
        rel="noopener noreferrer"
      >
        천연 코팅 딸기맛 스틱, 오늘부터 시작하기
      </a>

    </div>
  )
}
