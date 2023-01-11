<template>
  <div class="review-2022 w-full h-full pt-5 overflow-hidden relative capitalize bg-black text-center  line text-9xl">
    <span>工作回顾</span>
    <div class="right-cont text-5xl text-blue-800 cont-col absolute right-40 top-1/4  w-1/3 text-left leading-normal">
      <template v-for="(k, index) in datalist">
        <div class="item mb-10 animate__animated animate__fadeInUp" v-if="index <= currentIndex - 2">
          <p :style="{ color: '#f7f89e' }" >{{ k.title }}</p>
          <div>{{ k.cont }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

type ItemInfo = {
  title?: string,
  cont?: string
}

type CompInfo = {
  infoList: Array<ItemInfo>,
  totalLength: number
}


let info = defineProps<{
  contInfo: CompInfo,
  modelValue: number
}>()

const datalist = info.contInfo.infoList;

const emits = defineEmits(['update:modelValue'])

// 更新值 


let { modelValue: currentIndex } = toRefs(info);


let currentEvent = (target: KeyboardEvent): void => {
  switch (target.charCode) {
    case 48:
      emits('update:modelValue', info.modelValue + 1)
      break;
    default:
      break;
  }
};

onMounted(() => {
  window.addEventListener('keypress', currentEvent, false)
})

onBeforeUnmount(() => {
  window.removeEventListener('keypress', currentEvent)
})
</script>

<styke lang="scss">
.review-2022 {
  background: url('../../assets/61459592403cb1631950226636.jpg') no-repeat center;
  background-size: 100% 100%;
  color: #f7f89e;

  .cont-col {
    color: #FFFFFF;
  }
}
</styke>
