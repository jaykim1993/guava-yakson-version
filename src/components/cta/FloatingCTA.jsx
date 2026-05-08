import { useState, useEffect } from 'react'
import './CTA.css'

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
        className="floating-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./icons/chat-circle-dots.png" /> 나에게 맞는지 상담하기
      </a>

    </div>
  )
}
