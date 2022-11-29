<script setup>
import { ref } from 'vue'
import { getImageUrl, isMobile } from '@/utils/index.js'

const technology_info = ref([
  {
    title: 'Free To Play',
    desc: 'No fee to claim your first NFT',
    img: isMobile() ? 'learn-more/mobile/play.png' : 'learn-more/play.png',
    free: true,
    width: '331px'
  },
  {
    title: 'Fully on-Chain',
    desc: 'Your pets will live on blockchain forever',
    img: isMobile() ? 'learn-more/mobile/chain.png' : 'learn-more/chain.png',
    width: '348px'
  },
  {
    title: 'Ominichain Support',
    desc: 'Your pets can travel around different metaverses',
    img: isMobile() ? 'learn-more/mobile/support.png' : 'learn-more/support.png',
    width: '320px'
  }
])
</script>

<template>
  <div class="learn-more">
    <div class="c-title-h1">Our Technology</div>
    <div class="c-title-h3">Description: balabalabalabalabalabala</div>
    <div class="technology-info" flex="dir:left main:justify box:mean">
      <div class="technology-item" v-for="item in technology_info">
        <div class="c-title-h2">{{ item.title }}</div>
        <div class="c-title-h3" v-html="item.desc"></div>
        <img :src="getImageUrl(item.img)" alt="catddle" />
        <img class="free-image" v-if="item?.free && !isMobile()" src="~@/assets/images/learn-more/free.png" alt="catddle">
      </div>
    </div>
    <c-button>Learn More</c-button>
  </div>
</template>

<style lang="scss" scoped>
.learn-more {
  height: 1117px;
  font-family: $font-family;
  font-weight: 700;
  background: url('~@/assets/images/part4.png') center no-repeat;
  background-size: 100% 100%;

  .c-title-h1 {
    padding: 110px 0 20px;
  }

  .technology-info {
    padding: 51px 177px 0;
    //flex-wrap: wrap;

    .technology-item {
      //width: 30%;
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
        width: 100%;
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

@media (max-width: 483px) {
  .learn-more {
    height: 650px;
    background: url('~@/assets/images/mobile/part4.png') center no-repeat;
    background-size: 100% 100%;

    .technology-info {
      flex-direction: column;

      .technology-item {
        width: 100%;
        margin-bottom: 10px;
        &:first-child img{
          width: 92px;
        }
        &:nth-child(2) img{
          width: 125px;
        }
        &:nth-child(3) img{
          width: 131px;
        }
      }
    }

    .c-button {
      width: 228px;
      height: 40px;
      font-size: 18px;
    }
  }
}
</style>
