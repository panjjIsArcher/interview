import { QS_TYPE, DATA } from "@/api/interview/types/qsType"

export const data: DATA[] = [
  {
    type: QS_TYPE.JAVASCRIPT,
    question: "写一个深拷贝的函数",
    title: "深拷贝",
    answer: ``
  },
  {
    type: QS_TYPE.JAVASCRIPT,
    question: "写一个防抖和截流",
    title: "防抖和截流",
    answer: ""
  }
]

if (data.length >= 50) {
  data.forEach((qs, index) => (qs.id = index + 1))
}
