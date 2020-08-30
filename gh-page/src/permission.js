import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) =>  {
  NProgress.start();
  next();
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
});

