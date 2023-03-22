<template>
  <Teleport to="body">
    <div v-if="visible" class="nav-mask" @click="emits('expand')">
      <div class="nav-icons" flex="dir:top cross:center">
        <img class="nav-icon"
             v-for="icon in nav_icons"
             :key="icon.url"
             :src="icon.url"
             @click="goto(icon.name)"
             alt="catddle" />
        <img class="login" :src="getImageUrl('mobile/login.png')" alt="Sign in" />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import useImage from '@/hooks/useImage.js'
import { getImageUrl, goto } from '@/utils/index.js'

defineProps(['visible'])
const emits = defineEmits(['expand'])

const nav_icons = useImage([
  'mobile/nav_twitter',
  'mobile/nav_medium',
  'mobile/nav_disable_discord',
  'mobile/nav_disable_instagram'
])
</script>

<style lang="scss" scoped>
@media (max-width: 820px) {
  .nav-mask {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(40px);
    background: rgba(0, 0, 0, 0.2);
  }

  .nav-icons {
    padding-top: 18%;
  }
  .nav-icon {
    width: 8%;
    margin-bottom: 82px;
  }

  .login {
    width: 40%;
  }
}
</style>
