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
        <div class="connect" @click.stop="connect" :title="connectText">{{connectText}}</div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import useImage from '@/hooks/useImage.js'
import { getMetaMaskInfo, goto } from '@/utils/index.js'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

defineProps(['visible'])
const emits = defineEmits(['expand', 'connect'])
const message = useMessage()

const nav_icons = useImage([
  'mobile/nav_twitter',
  'mobile/nav_medium',
  'mobile/nav_disable_discord',
  'mobile/nav_disable_instagram',
  'nav/nav_docs'
])
const connectText = ref('Connect')
async function connect () {
  const res = await getMetaMaskInfo(message)
  if (res?.address) {
    connectText.value = res.address
    sessionStorage.setItem('metaMask', JSON.stringify({
      address: res.address,
      chainId: res.chainId
    }))
  }
}
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
    margin-bottom: 10.93vw;
  }

  .login {
    width: 40%;
  }

  .connect {
    width: 35%;
    height: 8vw;
    line-height: 8vw;
    color: #67842B;
    text-align: center;
    font-size: 16px;
    background: #ffffff;
    outline: none;
    border: none;
    cursor: default;
    padding: 0 12px;
    border-radius: 12px;
    font-family: HelveticaBold;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      color: #ffffff;
      background: #67842B;
      transition: all .3s ease-in-out;
    }
  }
}
</style>
