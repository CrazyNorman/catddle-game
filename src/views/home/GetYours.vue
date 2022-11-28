<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/utils/index.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper'

const modules = ref([Autoplay, FreeMode])

const urls = ref([
  'get-yours/cats1.png',
  'get-yours/cats2.png',
  'get-yours/cats3.png',
  'get-yours/cats4.png',
  'get-yours/cats5.png',
])

</script>

<template>
  <div class="get-yours">
    <div class="c-title-h1">Description: balabalabalabalabalabala</div>
    <div class="c-title-h2">Description: balabalabalabalabalabala</div>
    <swiper
        :loop="true"
        :speed="3000"
        :freeMode="true"
        :autoplay="{delay: 1000, disableOnInteraction: false}"
        :slidesPerView="3"
        :spaceBetween="2"
        :modules="modules">
      <swiper-slide v-for="url in urls">
        <img :src="getImageUrl(url)" alt="" />
      </swiper-slide>
    </swiper>
    <c-button> Get Your catddle</c-button>
  </div>
</template>

<style lang="scss" scoped>
.get-yours {
  height: 1117px;
  font-family: $font-family;
  font-weight: 700;
  background: url('~@/assets/images/part3.png') center no-repeat;
  background-size: cover;

  .c-title-h1 {
    padding: 100px 0 20px;
  }

  .c-button {
    font-size: 35px;
    margin: 0 auto;
  }

  .swiper {
    width: 100%;
    height: 456px;
    margin: 45px 0 69px;
  }

  .swiper-slide img {
    width: auto;
    height: 100%;
  }
}
</style>
