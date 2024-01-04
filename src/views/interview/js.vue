<template>
  <ul>
    <li v-for="i in list" :key="i.title">
      {{ i.title }}
    </li>
  </ul>
  <div>middle</div>
</template>

<script setup lang="ts">
import qsApi from "@/api/interview/index"
import { DATA, QS_TYPE } from "@/api/interview/types/qsType"
import { onMounted, ref } from "vue"

const list = ref<DATA[]>([])
const type = QS_TYPE.JAVASCRIPT

const fetch = async () => {
  const response = await qsApi.getQs(type)
  const { data } = response
  return data
}

onMounted(async () => {
  list.value = await fetch()
})
</script>
