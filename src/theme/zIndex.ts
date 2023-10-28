export type ZIndex = keyof typeof zIndex;

const zIndex = {
  weak: 1,
  normal: 10,
  strong: 99,
  stronger: 999,
};

export default zIndex;
