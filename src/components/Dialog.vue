<template>
  <n-modal
      v-model:show="isShow"
      preset="card" size="huge"
      :style="bodyStyle"
      :bordered="false"
  >
    <n-card
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <n-input
          v-if="!isAccess"
          round
          size="large"
          v-model:value="email"
          :input-props="{ type: 'email' }"
          placeholder="email"
          @keyup.enter="access"
      />
      <div v-if="isAccess" class="success-text" style="text-align: center">
        <p>Thank you for joining our Early Access to the game!</p>
        <p>We will notify you as we roll out invites in coming weeks!</p>
        <n-button @click="shareTwitter">share to twitter</n-button>
      </div>
      <template #footer>
        <div v-if="!isAccess" style="text-align: center">
          <n-button
              strong
              secondary
              round
              type="success"
              :loading="loading"
              @click="access">
            Access
          </n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup>
import { NModal, NCard, NInput, NButton, useMessage } from 'naive-ui'
import { ref, watch } from 'vue'
import { applyInvitation } from '@/service/index.js'

const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])
const message = useMessage()

const isShow = ref(props.modelValue)
watch(isShow, val => emit('update:modelValue', val))
watch(() => props.modelValue, val => isShow.value = val)

const bodyStyle = { width: '500px' }
const email = ref(null)
const loading = ref(false)
const isAccess = ref(false)
async function access () {
  let params
  const metaMaskInfo = sessionStorage.getItem('metaMask')
  loading.value = true
  if (metaMaskInfo) {
    params = {
      email: email.value,
      ...JSON.parse(metaMaskInfo)
    }
  } else {
    params = {
      email: email.value
    }
  }
  const res = await applyInvitation(params)
  if (res.code === 1 && res.msg === 'success') {
    isAccess.value = true
  } else {
    message.error(res.msg)
  }
  loading.value = false
}

function shareTwitter () {
  const tweetContent = "Just applied the early access of #Genki Cats. Claim your first #Web3 Pet for free on #Arbitrum! Come and join me!";
  const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetContent)
  window.open(tweetUrl)
}
</script>

<style lang="scss" scoped>
.success-text {
  p {
    white-space: nowrap;
  }
}
:deep(.n-card__content) {
  display: flex;
  justify-content: center;
}
</style>
