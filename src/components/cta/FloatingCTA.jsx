import { useState, useEffect } from 'react'
import './FloatingCTA.css'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () =>
      setVisible(
        window.scrollY > 300 &&
        window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 300
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
        카카오로 무료 상담받기
      </a>

    </div>
  )
}
