export type FontFamily = keyof typeof fontFamily;

const fontFamily = {
  logo: 'Allison, cursive',
} as const;

export default fontFamily;
