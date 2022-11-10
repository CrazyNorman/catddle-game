<script setup></script>

<template>
	<div class="community">
		<div class="description">Description: balabalabalabalabalabala</div>
		<div class="description-second">Description: balabalabalabalabalabala</div>
		<c-button :width="20" :height="2">Join Our Community</c-button>
	</div>
</template>

<style scoped>
.community {
	height: 1117px;
	font-family: 'Chalkboard';
	font-weight: 700;
	background: url('~@/assets/images/part5.png') center no-repeat;
	background-size: cover;
}

.description {
	padding: 115px 0 10px;
}

.c-button {
	font-size: 35px;
	margin: 0 auto;
}
</style>
