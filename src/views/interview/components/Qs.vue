<template>
  <div class="container">
    <div class="left content" :class="showAnswer ? 'hide' : 'show'">
      <article>
        {{ props.qs.question }}
      </article>
    </div>
    <div class="right content" :class="!showAnswer ? 'hide' : 'show'">
      <article>
        {{ props.qs.answer }}
      </article>
    </div>
    <span class="btn" @click="select(showAnswer)"> {{ text }} </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from "vue"
import { DATA } from "@/api/interview/types/qsType"
interface Props {
  qs: DATA
}
const showAnswer: boolean = ref(false)
const props = defineProps<Props>()
const text = computed(() => {
  return showAnswer.value ? "问题" : "答案"
})

const select = (show: boolean): void => {
  showAnswer.value = !show
}
</script>

<style lang="scss" scoped>
.container {
  height: calc(100% - 30vh);
  max-width: none;
  width: 100%;
  display: flex;
  position: relative;
  > .btn {
    z-index: 1;
    left: 50%;
    bottom: 0;
    background-color: #000;
    color: #fff;
    height: 3vw;
    width: 3vw;
    position: absolute;
    text-align: center;
    line-height: 3vw;
    cursor: pointer;
  }
  > .content {
    height: 100%;
    width: 100%;
    flex: 1;
    overflow-y: overlay;
    transition: 1s;
    border: 2px solid rgba(#000, 0.2);
    background-color: #676262;
    > article {
      padding: 20px;
      font-size: 1vw;
      color: #fff;
    }
  }

  > .show {
    flex: 1;
  }
  > .hide {
    flex: 0;
  }
}
</style>
