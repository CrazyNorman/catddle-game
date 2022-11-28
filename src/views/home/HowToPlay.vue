<template>
	<div class="how-play">
		<div class="c-title-h1">Description: balabalabalabalabalabala</div>
		<div class="c-title-h2">Description: balabalabalabalabalabala</div>
		<swiper
			:loop="true"
			:speed="3000"
			:freeMode="true"
			:autoplay="{
				delay: 1000,
				disableOnInteraction: false
			}"
			:slidesPerView="6"
			:spaceBetween="2"
			:modules="modules"
		>
			<swiper-slide v-for="i in 8">
				<img src="~@/assets/images/game1.png" alt="" />
			</swiper-slide>
		</swiper>
		<c-button> How to play </c-button>
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper'
import { ref } from 'vue'

const modules = ref([Autoplay, FreeMode])
</script>

<style scoped>
.how-play {
	height: 1038px;
	padding: 90px 0;
	font-family: 'Chalkboard';
	font-weight: 700;
	background: url('~@/assets/images/part2.png') no-repeat;
	background-size: cover;
}

.description {
	font-style: normal;
	font-weight: 700;
	font-size: 50px;
	line-height: 64px;
	text-align: center;
	color: #ffffff;
}

.description-second {
	font-size: 25px;
	text-align: center;
	color: #ffffff;
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
.c-button {
	font-size: 35px;
	margin: 0 auto;
}

/*.swiper :deep(.swiper-wrapper) {*/
/*	transition-timing-function: linear;*/
/*}*/
</style>
