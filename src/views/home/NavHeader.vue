<template>
  <header class="nav-header" flex="main:justify cross:center">
    <div class="logo">
      <img :src="getImageUrl('nav/logo1.png')" alt="logo">
    </div>
    <div flex="cross:center">
      <img class="nav-item"
           v-for="(url, i) in urls"
           :key="url"
           :src="url"
           alt="catddle"
           :data-normal="url"
           :data-hover="urls_hover[i]"
           @mouseover.stop="hoverNav"
           @mouseleave.stop="leaveNav"
      />
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getImageUrl } from "@/utils";

const urls = ref([])
const urls_hover = ref([])

function getUrls () {
  const names = ['twitter', 'medium', 'discord', 'instagram', 'button']
  names.forEach(item => {
    urls.value.push(getImageUrl(`nav/nav_${item}.png`))
    urls_hover.value.push(getImageUrl(`nav/nav_hover_${item}.png`))
  })
}

function hoverNav (e) {
  e.target.src = e.target.dataset.hover
}

function leaveNav (e) {
  e.target.src = e.target.dataset.normal
}
onMounted(() => getUrls())
</script>

<style lang="scss" scoped>
.nav-header {
  height: 55px;
  padding: 0 411px;
  text-align: right;

  .nav-item {
    margin-right: 26px;
    object-fit: none;
  }

  .login {
    color: #67842B;
    background: #ffffff;
    outline: none;
    border: none;
    padding: 7px 12px;
    border-radius: 5px;
  }
}
</style>