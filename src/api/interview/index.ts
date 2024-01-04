import { data } from "@/mock/interview"

interface API_DATA {
  code: number
  message: string
  data: any
}

export const getQs = async (type?: string | undefined): Promise<API_DATA> => {
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

export default {
  getQs
} as const
