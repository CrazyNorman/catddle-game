<template>
	<div class="how-play">
		<div class="description">Description: balabalabalabalabalabala</div>
		<div class="description-second">Description: balabalabalabalabalabala</div>
		<swiper
			:loop="true"
			:speed="2500"
			:autoplay="{
				delay: 1500,
				disableOnInteraction: false
			}"
			:slidesPerView="5"
			:spaceBetween="43"
			:modules="modules"
		>
			<swiper-slide v-for="i in 5">
				<img src="~@/assets/images/game1.png" alt="" />
			</swiper-slide>
		</swiper>
		<c-button :width="600" :height="80"> How to play </c-button>
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { ref } from 'vue'

const modules = ref([Autoplay])
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

.c-button {
	font-size: 35px;
	margin: 0 auto;
}
</style>
