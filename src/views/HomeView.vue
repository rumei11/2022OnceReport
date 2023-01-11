<template>
  <!-- <img src="../assets/logo_cop.png" class="fixed top-3 left-3 z-50 w-40" alt=""> -->
  <swiper id="swiperList2" v-if="list2" :slides-per-view="1" :direction="'horizontal'" :scrollbar="{ draggable: false }"
    :modules="data.modules" :createElements="true" @swiper="setControlledSwiper" navigation ref="newYearSwiper">
    <swiper-slide class="overflow-hidden" v-for="(item, index) in list2" :key="index">
      <component v-model="currentValueobj[index]" :contInfo="TextInfoArr[index]" :is="list2[index].components">
      </component>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { type ComponentCustomOptions } from 'vue'
//第三步-使用插件（同时在模板中swiper标签使用）
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import Review2022 from './components/Review2022.vue'
import ForFuture2023 from './components/ForFuture2023.vue'
import Summarize2022 from './components/Summarize2022.vue'
import Blessing from './components/Blessing.vue'
import StartPage from './components/StartPage.vue'

// 使用
SwiperCore.use([Pagination, Autoplay, Navigation])

const newYearSwiper = ref<any>()

onMounted(() => {
  window.addEventListener('keypress', (target: KeyboardEvent) => {
    let elementLeft = document.getElementById('swiperList2')?.children as any;
    let eventClick = new Event("click", { "bubbles": true, "cancelable": false });
    switch (target.charCode) {
      case 32:
        elementLeft = elementLeft[2]
        break;
      case 13:
        elementLeft = elementLeft[1]
        break;
      default:
        break;
    }
    elementLeft.dispatchEvent(eventClick)
  })
})

// 内容数据 数据格式
type ItemInfo = {
  title?: string,
  cont?: string
}
type CompInfo = {
  infoList: Array<ItemInfo>,
  totalLength: number
}
const TextInfoArr = reactive<Array<CompInfo>>([
  {
    infoList: [],
    totalLength: 0
  },
  {
    infoList: [
      { title: '参与项目：', cont: '康养招投标门户网、后台管理系统；维修资金公共服务门户网、综合查询；部分移动端交存H5;' },
      { title: '新增技能：', cont: 'APIJSON、Micro-app、TS、Tailwind CSS、Uni-app' }
    ],
    totalLength: 2
  },
  {
    infoList: [
      { title: '全局意识、专业水平不足', cont: '深入了解业务场景、深耕专业技术' },
      { title: '满足于常态、主动性不强', cont: '制定更高的目标和计划' },
      { title: '心态、脾气控制不佳', cont: '自我克制、换位思考、呼吸调整' },
    ],
    totalLength: 3
  },
  {
    infoList: [],
    totalLength: 0
  },
  {
    infoList: [],
    totalLength: 0
  }
])


const currentValueobj = reactive<{
  [a: number]: number
}>({
  0: 1,
  1: 1,
  2: 1,
  3: 1,
  4: 1,
})

const swiperInstance = ref<any>(null)

const setControlledSwiper = (swiper: any) => {
  swiperInstance.value = swiper
}

const data = ref<any>({
  modules: [Autoplay]
})

type Dynamic = {
  name: number
  components: ComponentCustomOptions
}

const list2 = reactive<Array<Dynamic>>([
  { name: 11, components: markRaw(StartPage) },
  { name: 1, components: markRaw(Review2022) },
  { name: 2, components: markRaw(Summarize2022) },
  // { name: 3, components: markRaw(ForFuture2023) },
  { name: 4, components: markRaw(Blessing) }
])
/**
 * 键盘敲击事件
 * @param keyInfo
 * @returns null
 */
</script>

<style lang="scss">
li.listItem,
.swiper,
.swiper-wrapper,
.swiper-slide,
section {
  height: 100%;
}

.swiper {
  [class*='swiper-button'] {
    display: block;
    width: 0;
    height: 0rem;
    overflow: hidden;
  }
}
</style>

