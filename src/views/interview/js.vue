<template>
  <ListComp :list="list" @select="select" />
  <QsContent :qs="qs" />
</template>

<script setup lang="ts">
import ListComp from "./components/list.vue"
import QsContent from "./components/Qs.vue"
import qsApi from "@/api/interview/index"
import { DATA, QS_TYPE } from "@/api/interview/types/qsType"
import { ref, onBeforeMount } from "vue"

const list = ref<DATA[]>([])
const type = QS_TYPE.JAVASCRIPT
const qs = ref<DATA>({ title: "", answer: "", question: "", type })

const fetch = async () => {
  const response = await qsApi.getQs(type)
  const { data } = response
  return data
}

const select = async (e: DATA): Promise<void> => {
  const { id, title } = e
  let data = null
  if (id) {
    const response = await qsApi.getQsById(id)
    data = response.data
  } else {
    const response = await qsApi.getQsByTitle(title)
    data = response.data
  }
  qs.value = data
}

onBeforeMount(async () => {
  list.value = await fetch()
})
</script>

<style lang="scss" scoped></style>
