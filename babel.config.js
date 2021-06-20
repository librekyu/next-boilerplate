module.exports = function (api) {
  // console.log(process.env.NODE_ENV === 'development');

  api.cache(true);
  return {
    presets: [
      [
        'next/babel',
        {
          'preset-env': {
            useBuiltIns: 'usage',
            corejs: {
              version: 3,
              proposals: true,
            },
          },
        },
      ],
      '@babel/preset-react',
      [
        '@emotion/babel-preset-css-prop',
        {
          autoLabel: true,
          labelFormat: '[dirname]-[filename]--[local]',
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          regenerator: true,
          corejs: 3,
        },
      ],
      [
        'transform-remove-console',
        {
          exclude:
            process.env.NODE_ENV === 'development'
              ? ['error', 'warn', 'info', 'log']
              : ['error', 'warn'],
        },
      ],
    ],
  };
};
