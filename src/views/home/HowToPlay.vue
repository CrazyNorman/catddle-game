<template>
	<div class="how-play">
		<div class="c-title-h1">Description: balabalabalabalabalabala</div>
		<div class="c-title-h2">Description: balabalabalabalabalabala</div>
		<swiper v-show="false"></swiper>
    <swiper
        :loop="true"
        :speed="3000"
        :freeMode="true"
        :autoplay="{
				delay: 0,
				disableOnInteraction: false
			}"
        :slidesPerView="isMobile() ? 4 : 6"
        :spaceBetween="2"
        :modules="modules"
    >
      <swiper-slide v-for="img in images">
        <img :src="img" alt="" />
      </swiper-slide>
    </swiper>
    <swiper
        v-if="isMobile()"
        :loop="true"
        :speed="3000"
        :freeMode="true"
        :autoplay="{
				delay: 0,
				disableOnInteraction: false
			}"
        :slidesPerView="4"
        :spaceBetween="2"
        :modules="modules"
    >
      <swiper-slide v-for="img in images">
        <img :src="img" alt="" />
      </swiper-slide>
    </swiper>
		<c-button> How to play </c-button>
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import { ref, onMounted } from 'vue'
import { getImageUrl } from "@/utils"
import { isMobile } from "@/utils";

const modules = ref([Autoplay])
const images = ref([])

function getImages () {
  for (let i = 1; i < 7; i++) {
    images.value.push(getImageUrl(`how-to-play/play-${i}.png`))
  }
}

onMounted(() => getImages())
</script>

<style lang="scss" scoped>
.how-play {
  height: 1038px;
  padding: 90px 0;
  font-family: 'Chalkboard';
  font-weight: 700;
  background: url('~@/assets/images/part2.png') no-repeat;
  background-size: 100% 100%;

  .swiper {
    width: 100%;
    height: 456px;
    margin: 45px 0 69px;
  }

  .swiper-slide img {
    width: auto;
    height: 100%;
  }

  .c-button {
    font-size: 35px;
    margin: 0 auto;
  }

  .swiper :deep(.swiper-wrapper) {
  	transition-timing-function: linear;
  }
}

@media (max-width: 483px) {
  .how-play {
    height: 650px;
    background: url('~@/assets/images/mobile/part2.png') center no-repeat;
    background-size: 100% 100%;

    .swiper {
      width: 100%;
      height: 150px;
      margin-top: 30px;
    }

    .c-button {
      width: 228px;
      height: 40px;
      font-size: 18px;
      margin-top: 70px;
    }
  }
}
</style>
