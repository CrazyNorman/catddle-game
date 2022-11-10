<script setup>
import { ref } from 'vue'

const technology_info = ref([
	{
		title: 'Free To Play',
		desc: 'No fee to claim your first NFT',
		img: '../../assets/images/learn-more/play.png'
	},
	{
		title: 'Fully on-Chain',
		desc: 'Your pets will live on\n blockchain forever',
		img: '../../assets/images/learn-more/chain.png'
	},
	{
		title: 'Ominichain Support',
		desc: 'Your pets can travel arround\n different metaverses',
		img: '../../assets/images/learn-more/support.png'
	}
])
const getImageUrl = (url) => url && new URL(url, import.meta.url).href
</script>

<template>
	<div class="learn-more">
		<div class="description">Our Technology</div>
		<div class="description-second">Description: balabalabalabalabalabala</div>
		<div class="technology-info" flex="dir:left main:justify">
			<div class="technology-item" v-for="item in technology_info">
				<div class="title">{{ item.title }}</div>
				<div class="description-second" v-text="item.desc"></div>
				<img :src="getImageUrl(item.img)" alt="" />
			</div>
		</div>
		<c-button :width="20" :height="2">Learn More</c-button>
	</div>
</template>

<style scoped>
.learn-more {
	height: 1117px;
	font-family: 'Chalkboard';
	font-weight: 700;
	background: url('~@/assets/images/part4.png') center no-repeat;
	background-size: cover;
}

.description {
	padding: 110px 0 20px;
}

.technology-info {
	padding: 0 177px;
	flex-wrap: wrap;
}
.technology-item {
	width: 30%;
	text-align: center;
}
.technology-item .title {
	font-style: normal;
	font-weight: 700;
	font-size: 50px;
	line-height: 64px;
	text-align: center;
	color: #ffffff;
	margin-top: 20px;
}
.technology-item img {
	width: 90%;
	margin: 0 auto;
}
.c-button {
	font-size: 35px;
	margin: 0 auto;
}
</style>
