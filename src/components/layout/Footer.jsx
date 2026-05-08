import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  // 1. 데이터를 배열로 관리 (명칭, 내용, 노출여부, 로고 등)
  const footerData = {
    hospital: {
      logo: "",
      name: "용인약손한의원",
      show: true
    },
    details: [
      { id: 1, label: "대표원장", value: "이관형", show: false },
      { id: 2, label: "사업자등록번호", value: "000-00-00000", show: false },
      { id: 3, label: "주소", value: "경기도 용인시 처인구", show: true },
      { id: 4, label: "대표번호", value: "031-338-2299", show: true },
    ],
    businessHours: [
      { id: 1, label: "진료시간", value: "09:00 ~ 20:30 (평일·주말)", show: true },
      { id: 2, label: "점심시간", value: "13:00 ~ 14:00", show: false },
    ]
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* 브랜드 로고 섹션 */}
        {footerData.hospital.show && (
          <div className={styles.hospital}>
            <span className={styles.logoName}>{footerData.hospital.name}</span>
          </div>
        )}

        {/* 상세 정보 섹션: filter로 show가 true인 것만 뿌리기 */}
        <div className={styles.info}>
          {footerData.details
            .filter(item => item.show)
            .map((item, index) => (
              <span key={item.id} className={styles.infoItem}>
                {item.value}
                {index < footerData.details.filter(i => i.show).length - 1 && (
                  <span className={styles.divider}>|</span>
                )}
              </span>
            ))}
        </div>
        <div className={styles.info}>
          {footerData.businessHours
            .filter(item => item.show)
            .map((item, index) => (
              <span key={item.id} className={styles.infoItem}>
                {item.label}: {item.value}
                {index < footerData.businessHours.filter(i => i.show).length - 1 && (
                  <span className={styles.divider}>|</span>
                )}
              </span>
            ))}
        </div>
        <div className={styles.copy}>
          © 2026 약손한의원. All rights reserved.<br />
          본 사이트의 정보는 의료 조언을 대체하지 않습니다.
        </div>
      </div>
    </footer>
  );
}