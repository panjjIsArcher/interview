import { data } from "@/mock/interview"

interface API_DATA {
  code: number
  message: string
  data: any
}

const getQs = async (type?: string | undefined): Promise<API_DATA> => {
  const response: API_DATA = {
    code: 0,
    message: type ? `获取${type}面试题成功` : "获取面试题成功",
    data: null
  }
  if (!type) {
    response.data = data
  }
  response.data = data.filter((e) => e.type === type)
  return response
}

const getQsById = async (id: number): Promise<API_DATA> => {
  const response: API_DATA = {
    code: 0,
    message: "获取单个问题",
    data: null
  }
  const qs = data.find((e) => e.id === id)
  if (qs) {
    response.data = qs
  } else {
    response.message = "空问题"
    response.data = { id: 0, type: "", title: "空问题", answer: "空问题", question: "空问题" }
  }
  return response
}

const getQsByTitle = async (title: string): Promise<API_DATA> => {
  const response: API_DATA = {
    code: 0,
    message: "获取单个问题",
    data: null
  }
  const qs = data.find((e) => e.title === title)
  if (qs) {
    response.data = qs
  } else {
    response.message = "空问题"
    response.data = { id: 0, type: "", title: "空问题", answer: "空问题", question: "空问题" }
  }
  return response
}

export default {
  getQs,
  getQsById,
  getQsByTitle
} as const
