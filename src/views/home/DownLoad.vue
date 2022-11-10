<template>
	<div class="download-page">
		<header class="nav-bar" flex="dir:right">
			<c-button :width="101">...</c-button>
			<c-button :width="231">WALLET</c-button>
			<c-button :width="231">WALLET</c-button>
		</header>
		<main class="content">
			<div flex="dir:left main:center cross:bottom">
				<div class="logo">
					<img src="~@/assets/images/logo.png" alt="" />
				</div>
				<div class="logo-text">
					<img src="~@/assets/images/catddle.png" alt="" />
				</div>
			</div>
			<p class="description">Description: balabalabalabalabalabala</p>
			<div class="download-btn" flex="dir:left main:center">
				<c-button :width="250" :height="56">
					<span><i class="iconfont icon-apple"></i>IOS</span>
				</c-button>
				<c-button :width="250" :height="56">
					<span><i class="iconfont icon-android"></i>Android</span>
				</c-button>
			</div>
		</main>
	</div>
</template>

<style scoped>
.download-page {
	height: 1117px;
	font-family: 'Chalkboard';
	font-weight: 700;
	background: url('~@/assets/images/part1.png') center no-repeat;
	background-size: cover;
}
.nav-bar {
	padding: 25px 38px;
}

.c-button {
	margin-right: 25px;
}
.content {
	padding-top: 240px;
}

.content .logo {
	width: 378px;
	height: 349px;
}

.content img {
	width: 100%;
}

.logo-text {
	width: 647px;
	height: 195px;
}

.description {
	font-style: normal;
	font-weight: 700;
	font-size: 50px;
	line-height: 64px;
	text-align: center;
	color: #ffffff;
}

.download-btn {
	font-size: 35px;
}

.download-btn .iconfont {
	font-size: 44px;
	color: #3a2016;
	margin-right: 10px;
}
</style>
