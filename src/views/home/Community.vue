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
    <c-button :width="20" :height="2">Join Our Community</c-button>
    <div class="c-title-h3">Catddle limited</div>
  </div>
</template>

<style lang="scss" scoped>
.community {
  height: 1117px;
  font-family: 'Chalkboard';
  font-weight: 700;
  background: url('~@/assets/images/part5.png') center no-repeat;
  background-size: cover;

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
    margin-top: 240px;
  }
}

.description {
  padding: 115px 0 10px;
}

.c-button {
  font-size: 35px;
  margin: 0 auto;
}
</style>
