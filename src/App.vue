<template>
  打开加载 <el-button @click="showLoading">加载</el-button>
  <hr>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/">Eltabel</router-link>
  </nav>
  <router-view />

  <span>{{ $filter.format<string>('真的') }}</span>

  <AppTsx @get-cP="getSon" :title="mySonValue"></AppTsx>
</template>

<script setup lang="ts">
import { getCurrentInstance, reactive, ref, useSlots } from 'vue';

import AppTsx from './App';

const mySonValue = ref<number>(0)

const getSon = (numb: number): any => mySonValue.value = numb;

console.log(useSlots(), 1);

const instance = getCurrentInstance();



const showLoading = () => {

  instance?.proxy?.$myloading?.show()
}


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
