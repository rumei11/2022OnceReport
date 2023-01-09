<template>
  {{ 'paraaaaaaa' + famsg }}
  <h1>{{ famsg }}</h1>
</template>

<script lang="ts" setup>
import { inject, readonly, ref, toRefs, watch } from 'vue';
import type { Ref } from 'vue'

const famsg = inject<Ref<string>>('famsg')

famsg!.value = '12';
// const msg: Ref<string> = ref<string>('');
let msg = ref<string>('');

</script>
