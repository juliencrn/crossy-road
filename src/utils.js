export const colors = {
  background: 0x282a36,
  selection: 0x44475a,
  white: 0xf8f8f2,
  cyan: 0xf8f8f2,
  green: 0x50fa7b,
  orange: 0x50fa7b,
  pink: 0x50fa7b,
  purple: 0x50fa7b,
  red: 0x50fa7b,
  yellow: 0xf1fa8c
}

export function getRandomBetween (min = -500, max = 450) {
  return (Math.random() * (max - min + 1)) + min
}

export const CASE = 50
