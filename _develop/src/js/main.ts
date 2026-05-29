import DeviceWatcher from './utils/logic/device-watcher';
import ScrollController from './utils/logic/scroll-controller';

new DeviceWatcher();
new ScrollController();

const getComponent = async () => {
  const pathname = window.location.pathname;
  /*
    To avoid confusion, Unique JS names are better. [Under the esBuild environment]

    [bad]
      /index.ts
      /news/index.ts

    [good]
      /index.ts
      /news/news-index.ts
  */
  if (pathname === '/') {
    const module = await import('./pages/index/index');
    new module.default();
  }
};

export default class Main {
  constructor() {
    /*
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0,0);
      };
    */

    getComponent();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Main();
});
