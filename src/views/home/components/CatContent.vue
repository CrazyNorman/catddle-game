<template>
  <div class="cat-content">
    <h2 class="cat-content-title">FEATURES</h2>
    <section class="description">
      You are going to adopt your first Web3 pet!
    </section>
    <div class="cat-photos" flex="main:center">
      <section class="cat-photo" v-for="(item, i) in catPhotos" :key="item.name">
        <img :src="item.url" :class="item.name" alt="cat-photos" />
        <p class="cat-description">{{ descriptions[i] }}</p>
      </section>
    </div>
    <div class="mailbox">
      <img :src="getImageUrl('bg_mailbox.png')" alt="mailbox" />
    </div>
  </div>
  <div class="copyright">CatddleLabs Copyright ©2022-2023</div>
</template>

<script setup>
import { ref } from 'vue'
import useImage from '@/hooks/useImage.js'
import { getImageUrl } from '@/utils/index.js'

const catPhotos = useImage('cat_img', 3)
const descriptions = ref([
  'Meet your first web3 pet like a charm',
  'Dreams built on reality',
  'A cat can be with you for a lifetime'
])
</script>

<style lang="scss" scoped>
.cat-content {

  .cat-content-title {
    color: #ffffff;
    font-size: 66px;
    text-align: center;
    font-family: ModakRegular;
  }

  .description {
    color: #ffffff;
    margin-top: 32px;
    font-size: 24px;
    text-align: center;
    font-family: HelveticaBold, Helvetica;;
  }

  .cat-photos {
    margin-top: 115px;

    .cat-description {
      color: #ffffff;
      font-size: 28px;
      font-family: ModakRegular;
      text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    }

    .cat-photo {
      width: 338px;
      margin-right: 33px;
      transition: .4s all ease;

      &:hover {
        transform: scale(1.1);
      }

      img {
        width: 100%;
      }
    }
  }

  .mailbox {
    display: none;
  }
}

.copyright {
  color: #ffffff;
  font-size: 12px;
  white-space: nowrap;
  text-align: center;
  position: absolute;
  bottom: 2vw;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

@media (max-width: 820px) {
  .cat-content {
    position: relative;

    .cat-content-title {
      font-size: 8.8vw;
    }

    .description {
      font-size: 2.7vw;
    }

    .cat-photos {
      margin-top: 88px;
      align-items: center;
      flex-direction: column;

      .cat-photo {
        width: 49%;
        margin-bottom: 31px;
      }

      .cat-description {
        font-size: 4.3vw;
      }
    }

    .mailbox {
      width: 48vw;
      height: 200px;
      display: block;
      margin-top: 40px;
      overflow: hidden;
      position: absolute;
      right: 0;

      img {
        width: 100%;
        position: absolute;
        right: -34px;
      }
    }
  }
}
</style>
