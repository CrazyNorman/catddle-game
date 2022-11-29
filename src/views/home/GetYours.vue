<script setup>
import {onMounted, ref} from 'vue'
import {getImageUrl} from '@/utils/index.js'
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Autoplay, FreeMode} from 'swiper'
import {isMobile} from "@/utils/index.js";

const modules = ref([Autoplay, FreeMode])

const urls = ref([])
function getUrls() {
  const baseUrl = isMobile() ? 'get-yours/mobile/' : 'get-yours/'
  for (let i = 1; i< 6; i++) {
    urls.value.push(getImageUrl(`${baseUrl}cats${i}.png`))
  }
}
onMounted(() => getUrls())
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
      :slidesPerView="isMobile() ? 1 : 3"
      :spaceBetween="2"
      :modules="modules"
    >
      <swiper-slide v-for="url in urls">
        <img :src="url" alt="" />
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
  background: url('~@/assets/images/part3.png')top center no-repeat;
  background-size: 100% 100%;

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

@media (max-width: 483px) {
  .get-yours {
    height: 650px;
    background: url('~@/assets/images/mobile/part3.png') center no-repeat;
    background-size: 100% 100%;

    .swiper {
      width: 100%;
      height: 356px;
    }
    .c-button {
      width: 228px;
      height: 40px;
      font-size: 18px;
    }
  }
}
</style>
