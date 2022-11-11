<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/utils/index.js'

const technology_info = ref([
  {
    title: 'Free To Play',
    desc: 'No fee to claim your first NFT',
    img: 'learn-more/play.png',
    free: true,
    width: '331px'
  },
  {
    title: 'Fully on-Chain',
    desc: 'Your pets will live on<br /> blockchain forever',
    img: 'learn-more/chain.png',
    width: '348px'
  },
  {
    title: 'Ominichain Support',
    desc: 'Your pets can travel around<br /> different metaverses',
    img: 'learn-more/support.png',
    width: '320px'
  }
])
</script>

<template>
  <div class="learn-more">
    <div class="c-title-h1">Our Technology</div>
    <div class="c-title-h3">Description: balabalabalabalabalabala</div>
    <div class="technology-info" flex="dir:left main:justify">
      <div class="technology-item" v-for="item in technology_info">
        <div class="c-title-h2">{{ item.title }}</div>
        <div class="c-title-h3" v-html="item.desc"></div>
        <img :src="getImageUrl(item.img)" alt="catddle" :style="{width: item.width}" />
        <img class="free-image" v-if="item?.free" src="~@/assets/images/learn-more/free.png" alt="catddle">
      </div>
    </div>
    <c-button :width="20" :height="2">Learn More</c-button>
  </div>
</template>

<style lang="scss" scoped>
.learn-more {
  height: 1117px;
  font-family: $font-family;
  font-weight: 700;
  background: url('~@/assets/images/part4.png') center no-repeat;
  background-size: cover;

  .c-title-h1 {
    padding: 110px 0 20px;
  }

  .technology-info {
    padding: 51px 177px 0;
    flex-wrap: wrap;

    .technology-item {
      width: 30%;
      text-align: center;
      position: relative;

      .c-title-h2 {
        white-space: nowrap;
        margin-bottom: 47px;
      }

      .c-title-h3 {
        margin-bottom: 36px;
      }

      img {
        display: inline-block;
        margin: 0 auto;
      }

      .free-image {
        width: 129px;
        position: absolute;
        top: 120px;
        left: -30px;
      }
    }
  }

  .c-button {
    font-size: 35px;
    margin: 0 auto;
  }
}
</style>
