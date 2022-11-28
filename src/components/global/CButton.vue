<template>
	<div class="c-button">
		<div class="c-button-container" flex="main:center cross:center">
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
	width: {
		type: Number,
		default: 600
	},
	height: {
		type: Number,
		default: 80
	}
})

const w = computed(() => (props.width / 19.2).toFixed(2) + 'vw')
const h = computed(() => (props.height / 19.2).toFixed(2)  + 'vw')
</script>

<style lang="scss" scoped>
.c-button {
	width: v-bind(w);
  height: v-bind(h);
	cursor: pointer;
	//border: 6px solid #431e13;
  padding: 6px;
	border-radius: 29px;
	box-sizing: border-box;
  //font-size: 28px;
	font-family: $font-family;
  background: #431e13;
}

.c-button-container {
  height: 100%;
  line-height: 100%;
  box-sizing: border-box;
	border: 6px solid #ffffff;
	border-radius: 22px;
	text-align: center;
	position: relative;
  background: linear-gradient(#ffc700 82%, #f4af00 18%);
}
</style>
