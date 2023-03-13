<template>
  <div class="music-player">
    <div :class="{'music-icon': true, 'is-play': isPlaying}" @click="play"></div>
    <audio ref="audioPlayer" :src="musicUrl" loop>
      你的浏览器不兼容
    </audio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import musicUrl from '@/assets/music/untilYou.ogg'

const audioPlayer = ref(null)
const isPlaying = ref(false)

function play () {
  if (audioPlayer.value.paused) {
    audioPlayer.value.play()
    isPlaying.value = true
  } else {
    audioPlayer.value.pause()
    isPlaying.value = false
  }
}
</script>

<style lang="scss" scoped>
.music-player {
  position: fixed;
  left: 0;
  bottom: 0;

  .music-icon {
    width: 55px;
    height: 55px;
    background: url("@/assets/images/ic_music.png");
    background-size: cover;
    transition: .3s background ease-in-out;

    &.is-play, &:hover {
      background: url("@/assets/images/ic_music_hover.png");
      background-size: cover;
    }

    &.is-play {
      animation: 15s rotateLoop linear infinite;
    }
  }
}

@keyframes rotateLoop {
  0% {
    rotate: 0
  }
  100% {
    rotate: 720deg
  }
}
</style>
