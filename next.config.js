const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');

const AppModes = {
  LocalDev: 'LOCAL_DEV',
  STAGING: 'STAGING',
  Production: 'PROD',
  Dev: 'DEV',
};

module.exports = (phase, config) => {
  let mode = '';
  const isLocalDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isDevBuild = PHASE_PRODUCTION_BUILD && process.env.DEV === '1';
  const isStagingBuild =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';
  const isProdBuild =
    phase === PHASE_PRODUCTION_BUILD && process.env.PRODUCTION === '1';
  const isProd =
    phase === PHASE_PRODUCTION_SERVER && process.env.PRODUCTION === '1';
  const isStaging =
    phase === PHASE_PRODUCTION_SERVER && process.env.STAGING === '1';
  if (isLocalDev) {
    mode = AppModes.LocalDev;
  } else if (isStagingBuild) {
    mode = AppModes.STAGING;
  } else if (isProdBuild) {
    mode = AppModes.Production;
  } else {
    mode = AppModes.Dev;
  }
  const env = {
    NEXT_PUBLIC_CURRENT_MODE: mode,
    NEXT_PUBLIC_API_DOMAIN: (() => {
      if (isStagingBuild || isStaging) {
        return 'http://127.0.0.1:4000';
      }
      if (isProd || isProdBuild) {
        return 'http://127.0.0.1:4000';
      }
      if (isLocalDev || isDevBuild) {
        return 'http://127.0.0.1:4000';
      }
      return 'http://127.0.0.1:4000';
    })(),
  };
  // next.config.js object
  return {
    env,
    webpack: (webpackConfig, { dev, isServer }) => {
      /**
       * NODE_ENV=production, development 에 따라 개발자 모드의 webpack 표시 여부가 달라짐.
       * */
      if (!(isProdBuild || isProd)) {
        webpackConfig.devtool = 'source-map';
      }
      return webpackConfig;
    },
    productionBrowserSourceMaps: !(isProdBuild || isProd),
  };
};
