<script setup></script>

<template>
  <div class="community">
    <div class="c-title-h1">Description: balabalabalabalabalabala</div>
    <div class="c-title-h2">Description: balabalabalabalabalabala</div>
    <div class="image-container">
      <img class="photos" src="~@/assets/images/community/photos.png" alt="catddle_photos">
      <img class="say-hi" src="~@/assets/images/community/sayhi.png" alt="catddle_sayhi">
      <img class="video" src="~@/assets/images/community/video.png" alt="catddle_video">
    </div>
    <c-button>Join Our Community</c-button>
    <div class="c-title-h3">Catddle limited</div>
  </div>
</template>

<style lang="scss" scoped>
.community {
  height: 1117px;
  padding-top: 115px;
  box-sizing: border-box;
  font-family: 'Chalkboard';
  font-weight: 700;
  background: url('~@/assets/images/part5.png') top center no-repeat;
  background-size: 100% 100%;
  position: relative;

  .image-container {
    margin: 40px 0;
    height: 484px;
    position: relative;

    img {
      position: absolute;
    }

    .photos {
      width: 557px;
      left: 530px;
      z-index: 11;
    }

    .video {
      width: 353px;
      left: 990px;
      z-index: 10;
    }

    .say-hi {
      width: 364px;
      left: 916px;
      top: 120px;
      z-index: 12;
    }
  }

  .c-title-h3 {
    margin-top: 180px;
  }

  .c-button {
    font-size: 35px;
    margin: 0 auto;
  }
}

@media (max-width: 483px) {
  .community {
    height: 800px;
    padding-top: 100px;
    background: url('~@/assets/images/mobile/part5.png') center no-repeat;
    background-size: 100% 100%;

    .image-container {
      height: 400px;
      margin-top: 60px;

      .photos {
        width: 233px;
        left: 50%;
        transform: translateX(-50%);
      }

      .video {
        width: 177px;
        top: 138px;
        left: 41%;
        z-index: 13;
      }

      .say-hi {
        width: 203px;
        top: 200px;
        left: 20%;
        z-index: 14;
      }
    }

    .c-button {
      width: 228px;
      height: 40px;
      font-size: 18px;
    }

    .c-title-h3 {
      font-size: 14px;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
