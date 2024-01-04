<script lang="ts" setup>
import { DATA } from "@/api/interview/types/qsType"
import { defineProps, defineEmits, ref } from "vue"
interface Props {
  list: DATA[]
}

const props = defineProps<Props>()
const emit = defineEmits(["select"])
const activeQs = ref(0)

const select = (qs: DATA, index: number): void => {
  emit("select", qs)
  activeQs.value = index + 1
}
</script>

<template>
  <ul class="list">
    <li
      v-for="(i, index) in props.list"
      :key="i.title"
      :class="{ 'active-li': activeQs === index + 1 }"
      @click="select(i, index)"
    >
      {{ index + 1 }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style-type: none;
  margin: 0;
  padding: 20px;
  background-color: #eee;
  height: 30vh;
  overflow-y: overlay;
  grid-template-columns: repeat(auto-fill, 5%);
  display: grid;
  $size: 3vw;
  @mixin active {
    background-color: rgba(#000, 1);
    color: #fff;
  }

  > li {
    border: 1px solid #eee;
    text-align: center;
    width: $size;
    height: $size;
    background-color: #fff;
    line-height: $size;
    font-size: 0.5 * $size;
    cursor: pointer;
    transition: 1s;
    &:hover {
      @include active;
    }
  }
  > .active-li {
    @include active;
  }
}
</style>
