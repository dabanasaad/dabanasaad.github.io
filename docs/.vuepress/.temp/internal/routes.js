export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"👋 About Us"} }],
  ["/blog/getting-started.html", { loader: () => import(/* webpackChunkName: "blog_getting-started.html" */"C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/blog/getting-started.html.js"), meta: {"title":"🚀 Getting Started with Modern Web Development"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"📝 Blog"} }],
  ["/blog/web-development-tips.html", { loader: () => import(/* webpackChunkName: "blog_web-development-tips.html" */"C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/blog/web-development-tips.html.js"), meta: {"title":"💡 Web Development Tips for Beginners"} }],
  ["/contact/", { loader: () => import(/* webpackChunkName: "contact_index.html" */"C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/contact/index.html.js"), meta: {"title":"📞 Contact Us"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guide"} }],
  ["/services/consulting.html", { loader: () => import(/* webpackChunkName: "services_consulting.html" */"C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/services/consulting.html.js"), meta: {"title":"💡 Consulting Services"} }],
  ["/services/design.html", { loader: () => import(/* webpackChunkName: "services_design.html" */"C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/services/design.html.js"), meta: {"title":"🎨 Design Services"} }],
  ["/services/web-development.html", { loader: () => import(/* webpackChunkName: "services_web-development.html" */"C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/services/web-development.html.js"), meta: {"title":"💻 Web Development Services"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
