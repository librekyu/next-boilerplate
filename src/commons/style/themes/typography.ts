const FAMILY = ['Spoqa Han Sans', 'sans-serif'].join(',');

const WEIGHTS: { [key: number]: string } = {
  [6]: 'bold', // bold
  [5]: 'bold', // bold
  // [4]: 600, // bold
  [3]: 'bold', // bold
  [2]: 'normal', // normal
  // [1]: 400, // normal
  [0]: 'normal', // normal
  // [-1]: 400, // normal
  // [-2]: 600, // bold
};

const SIZES: { [key: number]: string } = {
  [6]: '1.875rem', // 30px
  [5]: '1.5rem', // 24px
  // [4]: '2.25rem', // 36px
  [3]: '1.5rem', // 24px
  [2]: '1.125rem', // 18px
  // [1]: '1rem', // 16px
  [0]: '0.9375rem', //15px
  // [-1]: '0.75rem', // 12px
  // [-2]: '0.625rem', // 10px
};

const HEIGHTS: { [key: number]: number } = {
  [6]: 1,
  [5]: 1,
  // [4]: 1.4,
  [3]: 1,
  [2]: 1.33,
  // [1]: 1.4,
  [0]: 1.47,
  // [-1]: 1.4,
  // [-2]: 1.4,
};

const SPACING: { [key: number]: string } = {
  [6]: '-1px',
  [5]: '-1px',
  // [4]: 1.4,
  [3]: '-0.5px',
  [2]: '-0.5px',
  // [1]: 1.4,
  [0]: '-0.5px',
  // [-1]: 1.4,
  // [-2]: 1.4,
};

const typography = ({ level }: { level: number }): string => {
  return `
    margin: 0;
    padding: 0;
    font-family: ${FAMILY};
    font-weight: ${WEIGHTS[level]};
    font-size: ${SIZES[level]};
    line-height: ${HEIGHTS[level]};
    letter-spacing: ${SPACING[level]}
  `;
};

export default typography;
