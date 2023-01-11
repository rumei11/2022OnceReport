<template>
  <div
    class="blessing overflow-hidden w-full h-full capitalize bg-blue-300 text-center text-white line text-9xl leading-snug tracking-wide">
    <div class="text-5xl mt-56 text-red-600 w-1/2 ml-auto mr-auto animate__animated animate__fadeInUp"
      v-if="currentIndex > 6">
      <div class="mb-10 border-b pb-4 border-red-600  shadow-purple-300">
        <span>新年寄语</span>
        <p class="text-left mt-4 leading-snug">我的2022一地鸡毛，2023争取把一地鸡毛扎成漂亮的鸡毛掸子。</p>
      </div>
      <div>
        <span>新年祝福</span>
        <p class="text-left mt-4 leading-snug">祝大家，新的一年，天天精神百倍，月月喜气扬扬，年年财源广进。</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

let { modelValue: currentIndex } = toRefs(info);

const emits = defineEmits(['update:modelValue'])

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
.blessing {
  background: url('../../assets/5dc3d5792fa88157311525743.jpg') no-repeat center;
  background-size: 100% 100%;
}
</styke>
