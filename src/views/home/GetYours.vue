<script setup></script>

<template>
	<div class="get-yours">
		<div class="description">Description: balabalabalabalabalabala</div>
		<div class="description-second">Description: balabalabalabalabalabala</div>
		<c-button :width="20" :height="2"> Get Your catddle </c-button>
	</div>
</template>

<style scoped>
.get-yours {
	height: 1117px;
	font-family: 'Chalkboard';
	font-weight: 700;
	background: url('~@/assets/images/part3.png') center no-repeat;
	background-size: cover;
}

.description {
	padding: 56px 0;
}

.c-button {
	font-size: 35px;
	margin: 0 auto;
}
</style>
