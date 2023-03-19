<template>
  <div class="cat-content">
    <h2 class="cat-content-title">GENKI CATS</h2>
    <section class="description">
      contentcontentcontentcontentcontentcontent <br />
      contentcontentcontent <br />
      contentcontent <br />
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
    font-size: 60px;
    text-align: center;
    font-family: ModakRegular;
  }

  .description {
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    font-family: Helvetica-Regular;
  }

  .cat-photos {
    margin-top: 115px;

    .cat-description {
      color: #ffffff;
      font-size: 28px;
      font-family: ModakRegular;
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

@media (max-width: 800px) {
  .cat-content {
    position: relative;

    .cat-content-title {
      font-size: 1.2em;
    }

    .description {
      font-size: .1em;
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
        font-size: 16px;
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
