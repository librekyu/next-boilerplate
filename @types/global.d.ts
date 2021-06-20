export {};
declare global {
  namespace NodeJS {
    export interface Process {
      browser: boolean;
    }

    export interface ProcessEnv {
      NEXT_PUBLIC_API_DOMAIN: string;
      NODE_ENV: 'production' | 'development' | 'test';
    }
  }
  interface Window {
    ga: any;
    Kakao: any;
  }
  interface process {
    env: any;
  }
}

// window.YTConfig = window.YTConfig || {};
// window.IMP = window.IMP || {};
// window.Kakao = window.Kakao || {};
// window.ga = window.ga || {};
// window.gapi = window.gapi || {};
// window.FB = window.FB || {};
