import comp from "C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/services/consulting.html.vue"
const data = JSON.parse("{\"path\":\"/services/consulting.html\",\"title\":\"💡 Consulting Services\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1759092231000,\"contributors\":[{\"name\":\"Daban asaad\",\"username\":\"\",\"email\":\"dabanasaaddaban@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"e4cafd9fbf6eefe7b6ef434200f7e7002bed42e5\",\"time\":1759092231000,\"email\":\"dabanasaaddaban@gmail.com\",\"author\":\"Daban asaad\",\"message\":\"Initial commit - VuePress site\"}]},\"filePathRelative\":\"services/consulting.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
