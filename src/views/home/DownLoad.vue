<template>
  <div class="download-module">
    <header class="nav-bar" flex="dir:right">
      <c-button :width="8">...</c-button>
      <c-button :width="15">WALLET</c-button>
      <c-button :width="15">WALLET</c-button>
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
      <p class="c-title-h1">Description: balabalabalabalabalabala</p>
      <div class="download-btn" flex="dir:left main:center">
        <c-button :width="8" :height="2">
          <span><i class="iconfont icon-apple"></i>IOS</span>
        </c-button>
        <c-button :width="8" :height="2">
          <span><i class="iconfont icon-android"></i>Android</span>
        </c-button>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.download-module {
  height: 1117px;
  font-family: $font-family;
  font-weight: 700;
  background: url('~@/assets/images/part1.png') center no-repeat;
  background-size: cover;

  .nav-bar {
    padding: 25px 38px;
  }

  .c-button {
    margin-right: 25px;
  }

  .content {
    padding-top: 170px;

    .logo {
      width: 378px;
      height: 349px;
    }

    .logo-text {
      width: 647px;
      height: 195px;
    }

    img {
      width: 100%;
    }
  }

  .download-btn {
    font-size: 35px;

    .iconfont {
      font-size: 44px;
      color: #3a2016;
      margin-right: 10px;
    }
  }
}
</style>
