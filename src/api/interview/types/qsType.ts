const QS_TYPE = {
  JAVASCRIPT: "javascript",
  CSS: "css",
  NODEJS: "nodejs",
  REACT: "react",
  VUE: "vue"
}
interface DATA {
  type: string
  title: string
  id?: number
  question: string
  answer: string
}

export { QS_TYPE, type DATA }
