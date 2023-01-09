<template>
  <div class="about" v-memo="[' nore']">
    <h1>This is an about page</h1>

    {{ "计数开始" + count }}
    <hr />
    <span @click="add">按钮</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const nore = ref<string>("");

nore.value = "1";

const count = ref<number>(0);

const add = () => {
  count.value = count.value + 1;

  console.log(count);
};
</script>
