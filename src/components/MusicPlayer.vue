<template>
  <div :class="{'music-player': true, 'music-player-mobile': isMobile}">
    <div :class="{'music-icon': true, 'is-play': isPlaying}" @click="play"></div>
    <audio ref="audioPlayer" :src="musicUrl" loop>
      你的浏览器不兼容
    </audio>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { isMobile } from '@/utils/index.js'
import musicUrl from '@/assets/music/genki_main_theme.mp3'

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

onMounted(() => document.addEventListener('click', play, { once: true }))
</script>

<style lang="scss" scoped>
.music-player {
  position: fixed;
  left: 1vw;
  bottom: 1vw;

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
      -webkit-animation: 15s rotateLoop linear infinite;
    }
  }
}

@keyframes rotateLoop {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(720deg);
  }
}

@media (max-width: 820px) {
  .music-player-mobile {
    position: fixed;
    left: 90vw;
    bottom: 2vw;
    z-index: 10;

    .music-icon {
      width: 7vw;
      height: 7vw;
    }
  }
}
</style>
