<template>
  {{ 'bro的：' + msg }}
  <h1>124</h1>
  <HelloInject></HelloInject>


</template>

<script lang="ts" setup>
import { inject, readonly, ref, toRefs, watch } from 'vue';

import HelloInject from './HelloInject.vue'

import btns from '../utils/btnss'


import type { Ref } from 'vue';

const famsg = inject('famsg')

// const msg: Ref<string> = ref<string>('');
let msg = ref<string>('');

btns.on('c-msg', (e: string) => {
  msg.value = e;
}
);

</script>
