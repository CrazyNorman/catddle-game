<template>
	<div class="c-button">
		<div class="c-button-container">
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
	width: {
		type: Number,
		default: 200
	},
	height: {
		type: Number,
		default: 33
	}
})

const w = computed(() => props.width + 'px')
const h = computed(() => props.height + 'px')
</script>

<style scoped>
.c-button {
	width: v-bind(w);
	cursor: pointer;
	background: linear-gradient(#ffc700 78%, #f4af00 22%);
	border: 6px solid #431e13;
	border-radius: 20px;
	box-sizing: border-box;
	font-family: 'Chalkboard';
}

.c-button-container {
	height: v-bind(h);
	line-height: v-bind(h);
	border: 6px solid #ffffff;
	border-radius: 15px;
	text-align: center;
	position: relative;
}
</style>
