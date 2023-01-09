<template>
  <div class="home">
    <hr />
    <img src="../assets/logo.png" id="myimg" alt="" />
    <img
      v-if="isCopyed.base64 != ''"
      :src="isCopyed.base64"
      id="myimg"
      alt=""
    />
    <hr />
    <input type="file" maxlength="1" @click="fileC" @input="fileI" />

    <video
      poster="../assets/Snipaste_2022-08-12_18-33-05.png"
      :ref="'myVideoDown'"
      :controls="true"
    >
      <source v-if="Boolean(vSource)" :src="vSource" type="video/mp4" />
    </video>

    <div class="videos">
      <el-carousel
        type="card"
        direction="vertical"
        height="320px"
        trigger="click"
        :autoplay="false"
      >
        <el-carousel-item v-for="item in videolist" :key="item">
          <!-- <h3 class="medium">{{ item }}</h3> -->
          <div>
            <video
              poster="../assets/Snipaste_2022-08-12_18-33-05.png"
              :ref="'myVideo' + item"
              :controls="isPlay"
            >
              <source :src="getUrl" type="video/mp4" />
            </video>
            <img
              src="../assets/zhuanlan_icon_play@2x.png"
              alt=""
              @click="playmethod('myVideo' + item)"
            />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <hr />
    <HelloWorld></HelloWorld>
    <HelloWorldBro :msg="msg"></HelloWorldBro>
    <input type="text" maxlength="12141" v-model="famsg" />
    <hr />
    <el-button type="primary" @click="isShow = !isShow">切换</el-button>
    <!-- <transition name="fade" appear enter-active-class="enter-active" enter-from-class="enter-from"
      leave-active-class="leave-active" leave-to-class="leave-to" @before-enter="be" @enter="en" @after-enter="ae"
      @enter-cancelled="ec">
      <div class="textarea" v-if="isShow">hello word</div>
    </transition> -->

    <transition
      appear
      enter-active-class="animate__animated animate__backInDown"
      leave-active-class="animate__animated animate__backOutDown"
    >
      <div class="textarea" v-if="isShow">hello nihao</div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorldBro from "@/components/HelloWorldBro.vue";
import {
  getCurrentInstance,
  provide,
  reactive,
  readonly,
  ref,
  toRaw,
  toRefs,
} from "vue";
import type { ComponentCustomOptions, ComponentInternalInstance } from "vue";
import type { Ref, UnwrapNestedRefs } from "vue";
import getImageBase64 from "../hooks/toBase64";

type base64 = {
  base64: string;
};

let isCopyed = reactive<base64>({ base64: "" });

let proIsCopyed = toRefs(isCopyed);
const getUrl64 = async () => {
  let res = await getImageBase64({ $el: "myimg" });
  isCopyed.base64 = res.base64;
  console.log(proIsCopyed, isCopyed, 1111);
};

getUrl64();

const isShow: Ref<boolean> = ref<boolean>(true);

const be = () => {
  console.log("be");
};
const en = () => {
  console.log("en");
};
const ae = () => {
  console.log("ae");
};
const ec = () => {
  console.log("ec");
};
const msg = ref<string>("");

const isPlay = ref<boolean>(false);

const videolist = [1, 2, 3, 4];

const arr: UnwrapNestedRefs<Array<Number>> = reactive<Array<number>>([]);

const famsg = ref<string>("211");

provide("famsg", readonly(famsg));

// 获取当前实例
let { appContext } = getCurrentInstance() as ComponentInternalInstance;
console.log(appContext?.config?.globalProperties?.$Bus, "11");
const obj = getCurrentInstance();

const playmethod = (name: string): void => {
  let target = obj?.proxy?.$refs[name] as Array<HTMLVideoElement>;
  console.log(target[0]?.play());
};

const fileC = (...args: any): void => {
  console.log(args, "c");
};

let vSource = ref<string>("");

const fileI = (event: any) => {
  let fileList = event?.target?.files as Array<File>;
  const file = new FileReader();
  const fileB = new FileReader();
  fileB.readAsArrayBuffer(fileList[0]);
  file.readAsDataURL(fileList[0]);

  vSource.value = window.URL.createObjectURL(fileList[0]);
  // file.onload = (e: any) => {
  //   const res = (e?.target?.result);
  //   console.log(res);

  // }
  // fileB.onload = (e: any) => {
  //   console.log(e?.target);
  //   vSource.value = window.URL.createObjectURL(e?.target?.result);
  // }
};

const getUrl = () => new URL(`../assets/video/1.mp4`, import.meta.url).href;
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  height: 100%;
}

.textarea {
  width: 200px;
  height: 200px;
  margin: 20px auto;
  background-color: aqua;
  text-align: center;
  font-size: 20px;
  color: red;
  font-weight: 800;
  font-style: italic;
}

.enter-from,
.leave-to {
  width: 0;
  height: 0;
  opacity: 0;
  font-size: 0;
  color: #fff;
}

.enter-active,
.leave-active {
  transition: all 2s;
}

el-button {
  border: 1px solid red;
  padding: 5px;
  cursor: pointer;
}

.videos {
  width: 460px;
  height: 460px;

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .el-carousel__item {
    width: 100%;
    height: 320px;

    div {
      width: 100%;
      height: 100%;
      display: relative;
    }

    video {
      width: 100%;
      height: 320px;
      object-fit: fill;
    }
  }

  .is-active {
    transform: translateY(0) !important;
  }

  .el-carousel__button {
    background-color: #ffffff;
    height: 24px;
  }
}

:v-deep {
  .is-active {
    img {
      display: inline-block;
      width: 40px;
      height: 40px;
      position: absolute;
      z-index: 999;
      top: calc(50% - 20px);
      left: calc(50% - 20px);
    }
  }
}
</style>
