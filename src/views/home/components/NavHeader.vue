<template>
  <header class="nav-header" flex="main:justify cross:center">
    <div class="logo" flex="cross:center">
      <img :src="getImageUrl('nav/logo1.png')" alt="logo" />
    </div>
    <div class="nav-bar">
      <div flex="cross:center">
        <img class="nav-item"
             v-for="(item, i) in urls"
             :key="item.url"
             :src="item.url"
             alt="catddle"
             :class="{'nav-disable': item.url.includes('disable')}"
             :title="item.url.includes('disable') ? '暂未开通' : ''"
             :data-normal="item.url"
             :data-hover="urls_hover[i].url"
             @click="goto(item.name)"
             @mouseover.stop="hoverNav"
             @mouseleave.stop="leaveNav"
        />
      </div>
    </div>
    <div class="nav-bar-mobile">
      <img :src="getImageUrl('mobile/expand.png')" alt="expand" @click="showNavMenu" />
      <nav-menu :visible="isShow" @expand="showNavMenu" />
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { getImageUrl, goto } from "@/utils";
import useImage from '@/hooks/useImage.js'
import NavMenu from '@/views/home/components/NavMenu.vue'

const urls = useImage([
  'nav/nav_twitter',
  'nav/nav_medium',
  'nav/nav_disable_discord',
  'nav/nav_disable_instagram',
  'nav/nav_button'
])
const urls_hover = useImage([
  'nav/nav_hover_twitter',
  'nav/nav_hover_medium',
  'nav/nav_disable_discord',
  'nav/nav_disable_instagram',
  'nav/nav_hover_button'
])

function hoverNav (e) {
  e.target.src = e.target.dataset.hover
}

function leaveNav (e) {
  e.target.src = e.target.dataset.normal
}

const isShow = ref(false)

function showNavMenu () {
  isShow.value = !isShow.value
  if (isShow.value) document.documentElement.style.overflowY = 'hidden'
  else document.documentElement.style.overflowY = 'scroll'
}
</script>

<style lang="scss" scoped>
.nav-header {
  height: 55px;
  padding: 6px 14vw;
  text-align: right;
  position: relative;
  z-index: 2;

  .logo {
    width: 60px;

    img {
      width: 100%;
    }
  }
  .nav-bar {
    .nav-item:not(:last-child) {
      width: 60px;
      margin-right: 26px;
      object-fit: none;
    }

    .nav-disable {
      cursor: not-allowed;
    }
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

.nav-bar-mobile {
  display: none;
}

@import "../mobile/nav-header.scss";
</style>
