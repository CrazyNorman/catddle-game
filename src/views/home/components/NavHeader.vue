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
        <div class="connect" @click="connect" :title="connectText">{{connectText}}</div>
      </div>
    </div>
    <div class="nav-bar-mobile">
      <img :src="getImageUrl('mobile/expand.png')" alt="expand" @click="showNavMenu" />
      <nav-menu :visible="isShow" @expand="showNavMenu" @connect="connect" />
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useMessage } from 'naive-ui'
import { getImageUrl, goto, getMetaMaskInfo } from "@/utils";
import useImage from '@/hooks/useImage.js'
import NavMenu from '@/views/home/components/NavMenu.vue'

const message = useMessage()

const urls = useImage([
  'nav/nav_twitter',
  'nav/nav_medium',
  'nav/nav_disable_discord',
  'nav/nav_disable_instagram',
  // 'nav/nav_button'
])
const urls_hover = useImage([
  'nav/nav_hover_twitter',
  'nav/nav_hover_medium',
  'nav/nav_disable_discord',
  'nav/nav_disable_instagram',
  // 'nav/nav_hover_button'
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
  document.documentElement.style.overflowY = isShow.value ? 'hidden' : 'scroll'
}

const connectText = ref('Connect')
async function connect () {
  const res = await getMetaMaskInfo(message)
  if (res?.address) {
    connectText.value = res.address
    sessionStorage.setItem('metaMask', JSON.stringify({
      address: res.address,
      chainId: res.chainId
    }))
    return true
  }
}
defineExpose({
  connectText,
  connect
})
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
    .nav-item {
      width: 60px;
      margin-right: 26px;
      object-fit: none;
    }

    .nav-disable {
      cursor: not-allowed;
    }

    .connect {
      width: 86px;
      color: #67842B;
      text-align: center;
      font-size: 16px;
      background: #ffffff;
      outline: none;
      border: none;
      cursor: default;
      padding: 0 12px;
      border-radius: 6px;
      font-family: HelveticaBold;
      overflow: hidden;
      text-overflow: ellipsis;

      &:hover {
        color: #ffffff;
        background: #67842B;
        transition: all .3s ease-in-out;
      }
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
