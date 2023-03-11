<script setup>
import { onMounted, ref } from "vue";
import { getImageUrl } from "@/utils";
import NavHeader from "@/views/home/NavHeader.vue";

const clouds = ref([])

function getClouds () {
  for (let i = 1; i < 5; i++) {
    clouds.value.push(getImageUrl(`bg_cloud${i}`))
  }
}

onMounted(() => getClouds())
</script>

<template>
  <div class="home">
    <div class="cats-top">
      <nav-header />
      <div class="cats-title">GENKI CATS</div>
      <div>
        <img v-for="url in clouds" :key="url" :src="url" alt="">
      </div>
      <div class="grass">
        <img class="grass-justify" :src="getImageUrl('bg03.png')" alt="grass" />
        <img class="grass_left" :src="getImageUrl('bg_Grass01.png')" alt="" />
        <img class="grass_right" :src="getImageUrl('bg_Grass03.png')" alt="" />
        <img class="mailbox" :src="getImageUrl('bg_mailbox.png')" alt="" />
        <img class="ball" :src="getImageUrl('bg_ball.png')" alt="" />
        <img class="cat-center" :src="getImageUrl('bg_cat.png')" alt="">
      </div>
    </div>
    <main class="cats-content">

    </main>
  </div>
</template>

<style lang="scss" scoped>
.home {
  min-width: 1280px;
}

.cats-top {
  position: relative;
  min-height: 660px;
  background: url("@/assets/images/bg01.png") no-repeat;
}

.cats-content {
  min-height: 1500px;
  background: url("@/assets/images/bg02.png") no-repeat;
}

.cats-title {
  width: 1109px;
  color: #ffffff;
  text-align: center;
  font-size: 140px;
  font-family: ModakRegular;
  margin: 94px auto 0;
}

.grass {
  width: 100%;
  height: 123px;
  position: absolute;
  bottom: 33px;

  .grass-justify {
    width: 100%;
  }

  .grass_left {
    position: absolute;
    top: 63px;
    left: 259px;
  }

  .grass_right {
    position: absolute;
    top: 26px;
    right: 156px;
  }

  .mailbox {
    position: absolute;
    right: 318px;
    top: 97px;
  }

  .ball {
    position: absolute;
    left: 609px;
    top: 198px;
  }
  .cat-center  {
    position: absolute;
    left: 50%;
    top: -106px;
    transform: translateX(-50%);
    margin: auto;
  }
}
</style>
