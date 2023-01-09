<template>
  <input type="text" maxlength="52" v-model="helloWord" @input="toSend">
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue';
import type { ComponentInternalInstance } from 'vue'
import btns from '../utils/btnss'

let helloWord = ref<string>('');

let { appContext, proxy } = getCurrentInstance() as ComponentInternalInstance;

const toSend = (): void => {
  btns.emit('c-msg', helloWord.value)
  console.log(appContext?.config?.globalProperties, proxy?.$Bus, appContext?.config?.globalProperties.$Bus);
}

</script>
