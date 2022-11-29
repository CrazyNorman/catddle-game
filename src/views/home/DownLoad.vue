<template>
  <div class="download-module">
    <header class="nav-bar" flex="dir:right">
      <c-button :width="101" :height="56">···</c-button>
      <c-button :width="231" :height="56">
        <div class="icon-list" flex="cross:stretch box:mean">
          <span class="icon-item"><i class="iconfont icon-twitter"></i></span>
          <span class="line-left"></span>
          <span class="icon-item"><i class="iconfont icon-opensea"></i></span>
          <span class="line-right"></span>
          <span class="icon-item"></span>
        </div>
      </c-button>
<!--      <c-button :width="231" :height="56">WALLET</c-button>-->
    </header>
    <main class="content">
      <div class="logo-content" flex>
        <div class="logo">
          <img src="~@/assets/images/logo.png" alt="" />
        </div>
        <div class="logo-text">
          <img src="~@/assets/images/catddle.png" alt="" />
        </div>
      </div>
      <p class="c-title-h1">Description: balabalabalabalabalabala</p>
      <div class="download-btn" flex="dir:left main:center">
        <c-button :width="250" :height="80">
          <span><i class="iconfont icon-apple"></i>IOS</span>
        </c-button>
        <c-button :width="250" :height="80">
          <span><i class="iconfont icon-android"></i>Android</span>
        </c-button>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.download-module {
  height: 1117px;
  font-size: 28px;
  font-family: $font-family;
  font-weight: 700;
  background: url('~@/assets/images/part1.png') center no-repeat;
  background-size: cover;

  .nav-bar {
    padding: 25px 38px;

    .icon-list {
      width: 100%;
    }

    .icon-item {
      position: relative;

      .iconfont {
        font-size: 1em;
      }
    }

    .line-left {
      position: absolute;
      width: 6px;
      height: 150%;
      top: -10px;
      left: 33%;
      background: #431e13;
    }

    .line-right {
      position: absolute;
      width: 6px;
      height: 150%;
      top: -10px;
      right: 30%;
      background: #431e13;
    }
  }

  .c-button {
    margin-right: 25px;
  }

  .content {
    padding-top: 170px;

    .logo-content {
      align-items: flex-end;
      justify-content: center;
    }

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
    .iconfont {
      font-size: 44px;
      color: #3a2016;
      margin-right: 10px;
    }
  }
}

@media (max-width: 483px) {
  .download-module {
    height: 650px;
    background: url('~@/assets/images/mobile/part1.png') center no-repeat;
    background-size: 100% 100%;

    .nav-bar {
      height: 109px;
      display: block;
      position: relative;

      .c-button {
        position: absolute;

        &:first-child {
          width: 50px;
          height: 24px;
          left: 40px;
          top: 40px;
        }

        //&:nth-child(2) {
        //  width: 99px;
        //  height: 24px;
        //  top: 83px;
        //  right: 40px;
        //}

        &:nth-child(2) {
          width: 99px;
          height: 24px;
          top: 40px;
          right: 40px;
        }
      }

      .line-left,.line-right {
        width: 3px;
        height: 180%;
        top: -5px;
      }
    }

    .content {
      font-size: 30px;
      .logo-content {
        font-size: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
      .logo {
        width: 229px;
        height: 212px;
      }
      .logo-text {
        width: 277px;
        height: 83px;
      }
      .download-btn {
        width: 277px;
        margin: 0 auto;
        font-size: .5em;
        .iconfont {
          font-size: 1em;
        }
        .c-button {
          &:first-child {
            width: 40%;
            height: 40px;
          }
          &:nth-child(2) {
            width: 40%;
            height: 40px;
          }
        }
      }
    }
  }
}
</style>
