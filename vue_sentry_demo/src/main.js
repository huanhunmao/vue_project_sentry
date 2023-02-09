import Vue from "vue";
import App from './App.vue'
import Router from "vue-router";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

Vue.use(Router);

const router = new Router({
  // ...
});

Sentry.init({
  Vue,
  dsn: "https://4f3f6cf238394d34a455a7aa40bac565@o1407965.ingest.sentry.io/4504647894761472",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// ...

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");