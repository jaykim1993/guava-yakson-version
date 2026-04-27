// src/components/icons.js
import {
  Pill,
  CurrencyKrw,
  Package,
  ArrowsClockwise,
  Scales,
  TestTube, 
  Leaf, 
  ShieldCheck, 
  Lightning,
  Heartbeat,
  FireSimple,
  Phone
} from "phosphor-react";

const icons = {
  Pill,
  CurrencyKrw,
  Package,
  ArrowsClockwise,
  Scales,
  TestTube, 
  Leaf, 
  ShieldCheck, 
  Lightning,
  Heartbeat,
  FireSimple,
  Phone
};

// 👉 "컴포넌트"가 아니라 "컴포넌트를 반환하는 함수"
export function getIcon(name) {
  return icons[name] || null;
}