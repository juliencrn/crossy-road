export const colors = {
  background: 0x282a36,
  selection: 0x44475a,
  white: 0xf8f8f2,
  cyan: 0x8be9fd,
  green: 0x50fa7b,
  orange: 0xffb86c,
  pink: 0xff79c6,
  purple: 0xbd93f9,
  red: 0xff5555,
  yellow: 0xf1fa8c
}

export function getRandomBetween (min = -500, max = 450) {
  return (Math.random() * (max - min + 1)) + min
}

export const CASE = 50
