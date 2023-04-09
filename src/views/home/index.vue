<script setup>
import NavHeader from "@/views/home/components/NavHeader.vue"
import CatContent from "@/views/home/components/CatContent.vue"
import MusicPlayer from '@/components/MusicPlayer.vue'
import CDialog from '@/components/Dialog.vue'
import useImage from '@/hooks/useImage.js'
import { getImageUrl, getMetaMaskInfo } from '@/utils/index.js'
import { ref } from 'vue'

const cloud = useImage('bg_cloud', 4)
const grass = useImage(['bg01', 'bg_grass1', 'bg_grass2', 'bg_grass3', 'bg_mailbox', 'bg_ball'])

const navHeaderRef = ref(null)
const visible = ref(false)

async function showEmailDialog () {
  if (window.ethereum) {
    await navHeaderRef.value.connect()
  }
  visible.value = true
}
</script>

<template>
  <div class="home">
    <div class="cats-top">
      <nav-header ref="navHeaderRef" />
      <h2 class="cats-title">GENKI CATS</h2>
      <div class="cloud-box">
        <div class="cloud">
          <img v-for="item in cloud" :key="item.name" :src="item.url" :class="item.name" alt="cloud" />
        </div>
        <div class="cloud cloud-copy">
          <img v-for="item in cloud" :key="item.name + 'copy'" :src="item.url" :class="item.name" alt="cloud" />
        </div>
      </div>
      <div class="grass">
        <img v-for="item in grass" :key="item.name" :src="item.url" :class="item.name" alt="grass" />
        <div class="bg_cat">
          <img :src="getImageUrl('bg_cat.png')" alt="cat" />
        </div>
      </div>
      <button class="access-btn" @click="showEmailDialog">Early Access</button>
    </div>
    <main class="cats-content">
      <cat-content />
    </main>
    <music-player />
    <c-dialog v-model="visible" />
  </div>
</template>

<style lang="scss" scoped>
.cats-top {
  position: relative;
  z-index: 2;
  height: 660px;
  //background-image: url("@/assets/images/bg01.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  background-color: #c7e9eb;
}

.cats-content {
  height: 1500px;
  padding-top: 453px;
  box-sizing: border-box;
  background: url("@/assets/images/bg02.png") no-repeat;
  background-size: cover;
  position: relative;
}

.cats-title {
  //width: 1109px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 140px;
  font-weight: normal;
  font-family: ModakRegular;
  margin: 94px auto 0;
}

@keyframes move {
  0% {
    left: 0;
  }

  100% {
    left: -100%;
  }
}

@keyframes move2 {
  0% {
    left: 100%;
  }

  100% {
    left: 0;
  }
}

.cloud-box {
  width: 100%;
  position: absolute;
  top: 110px;
  height: 500px;
  overflow: hidden
}

.cloud {
  width: 100%;
  height: 276px;
  position: absolute;
  top: 0;
  animation: 30s move infinite linear;

  .bg_cloud1 {
    position: absolute;
    width: 299px;
    top: 89px;
    left: 196px;
  }

  .bg_cloud2 {
    position: absolute;
    width: 252px;
    top: 169px;
    left: 1043px;
  }

  .bg_cloud3 {
    position: absolute;
    width: 299px;
    top: 89px;
    right: 255px;
    z-index: -1;
  }

  .bg_cloud4 {
    position: absolute;
    width: 198px;
    top: 0;
    left: 590px;
  }
}

.cloud-copy {
  left: 100%;
  animation: 30s move2 infinite linear;
}

.grass {
  width: 100%;
  height: 123px;
  position: absolute;
  bottom: 33px;

  .bg01 {
    width: 100%;
    position: absolute;
    bottom: -33px;
  }

  .bg_grass2 {
    width: 100%;
    position: absolute;
  }

  .bg_grass1 {
    width: 409px;
    position: absolute;
    top: 63px;
    left: 259px;
  }

  .bg_grass3 {
    width: 530px;
    position: absolute;
    top: 26px;
    right: 156px;
  }

  .bg_mailbox {
    width: 364px;
    position: absolute;
    right: 318px;
    top: 97px;
  }

  .bg_ball {
    width: 106px;
    position: absolute;
    left: 609px;
    top: 198px;
  }

  .bg_cat {
    width: 337px;
    position: absolute;
    left: 50%;
    top: -106px;
    transform: translateX(-50%);
    margin: auto;

    img {
      width: 100%;
    }
  }
}

.access-btn {
  width: 280px;
  height: 60px;
  line-height: 55px;
  position: absolute;
  bottom: -228px;
  left: 50%;
  transform: translateX(-50%);
  color: #67842B;
  font-size: 30px;
  font-family: HelveticaBold;
  background: #ffffff;
  outline: none;
  border: none;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  transition: .4s all ease-in-out;

  &:hover {
    color: #ffffff;
    background: #67842B;
  }
}

@import "mobile/home.scss";
</style>
