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
  </div>
</template>

<script setup>
import useImage from '@/hooks/useImage.js'
import { ref } from 'vue'

const catPhotos = useImage('cat_img', 3)
const descriptions = ref([
  'meet your first web3 pet like a charm',
  'dreams built on reality',
  'a cat can be with you for a lifetime'
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
}

@media (max-width: 800px) {
  .cat-content {
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
    }
  }
}
</style>
