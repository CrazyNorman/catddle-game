<template>
  <n-modal
      :bordered="false"
      v-model:show="isShow"
  >
    <div class="n-modal-main">
      <div class="modal-header">
        <img v-if="!isAccess" class="email-img" :src="getImageUrl('email.png')" alt="email" />
        <img v-else class="email-img" :src="getImageUrl('succeed.png')" alt="succeed" />
        <img class="close-img" :src="getImageUrl('close.png')" @click="isShow=false" alt="close" />
      </div>
      <div v-if="!isAccess" class="email-input">
        <n-input
            round
            size="large"
            v-model:value="email"
            :options="options"
            :input-props="{ autocomplete: 'disable' }"
            placeholder="Email"
            @keyup.enter="access"
        />
        <div style="text-align: center">
          <n-button
              strong
              type="success"
              :loading="loading"
              @click="access">
            Apply
          </n-button>
        </div>
      </div>
      <div v-else class="success-text">
        <p class="title">Thank You For Joining Our Early Access!</p>
        <p class="content">We Will Notify You in Coming Weeks!</p>
        <img
            class="icon-twitter"
            :src="twitterIcon"
            @mouseover="hoverTwitter"
            @mouseleave="leaveTwitter"
            @click="shareTwitter" alt="twitter" />
        <p class="share" @click="shareTwitter">Share</p>
      </div>
    </div>
  </n-modal>
</template>

<script setup>
import { NModal, NInput, NButton, useMessage } from 'naive-ui'
import { computed, ref, watch } from 'vue'
import { applyInvitation } from '@/service/index.js'
import { getImageUrl } from '@/utils/index.js'

const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])
const message = useMessage()

const isShow = ref(props.modelValue)
watch(isShow, val => emit('update:modelValue', val))
watch(() => props.modelValue, val => isShow.value = val)

const email = ref('')
const loading = ref(false)
const isAccess = ref(false)

async function access () {
  if (!email.value) {
    message.error('email is empty!')
    return
  }
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

const options = computed(() => {
  return ['@gmail.com', 'yahoo.com'].map(suffix => {
    const prefix = email.value.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})

function shareTwitter () {
  const tweetContent = "Just applied the early access of #GenkiCats. Claim your first #Web3 Pet for free on #Arbitrum! Come and join me!"
  const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetContent)
  window.open(tweetUrl)
}

const twitterIcon = ref(getImageUrl('ic_twitter.png'))

function hoverTwitter () {
  twitterIcon.value = getImageUrl('ic_twitter_hover.png')
}

function leaveTwitter () {
  twitterIcon.value = getImageUrl('ic_twitter.png')
}
</script>

<style lang="scss" scoped>
.n-modal {
  width: 500px;
  height: 300px;
  background: #ffffff;
  border-radius: 16px;
}

.n-modal-main {
  display: flex;
  flex-direction: column;
  .modal-header {
    height: 114px;
    background: #CED995;
    margin-bottom: 45px;
    border-radius: 16px 16px 0 0;

    .email-img {
      position: absolute;
      top: 22px;
      left: 50%;
      transform: translateX(-50%);
    }

    .close-img {
      position: absolute;
      top: 22px;
      right: 26px;
      cursor: pointer;
    }

    &::after {
      width: 0;
      content: '';
      position: absolute;
      top: 114px;
      left: 50%;
      transform: translateX(-50%);
      border: 14px solid transparent;
      border-top-color: #CED995;
    }
  }

  .email-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .n-input {
      text-align: center;
      width: calc(100% - 80px);
      margin-bottom: 33px;
      font-size: 17px;
      border-radius: 12px;

      //:deep(.n-input) {
      //
      //}
    }
  }

  .n-button {
    width: 220px;
    height: 46px;
    text-align: center;
    cursor: default;
    margin: 0 auto;
    color: #ffffff;
    font-size: 26px;
    font-weight: bold;
    font-family: Helvetica-Bold, Helvetica;
    background: #67842b;
    border-radius: 20px;
    transition: all .3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.2) 0 5px 15px;

    &:hover {
      background: #8ab139;
    }
  }

  .success-text {
    flex: 1;
    text-align: center;
    padding: 0 51px;
    margin-top: -5px;
    background: url("@/assets/images/cat-bg.png") right -130px no-repeat;

    p {
      margin-bottom: 19px;
    }

    .title {
      font-size: 20px;
      line-height: 23px;
      font-family: HelveticaBold;
      font-weight: bold;
      color: #67842B;
    }

    .content {
      padding: 0 50px;
      font-size: 14px;
      line-height: 16px;
      font-family: HelveticaRegular;
      font-weight: 400;
      color: #868686;
    }

    .icon-twitter {
      cursor: pointer;
    }

    .share {
      width: 100px;
      cursor: pointer;
      font-size: 16px;
      font-family: HelveticaRegular;
      font-weight: bold;
      color: #67842B;
      margin: -15px auto 0;

      &:hover {
        color: #8ab139;
      }
    }
  }
}

@media (max-width: 820px) {
  .n-modal {
    width: 73.3vw;
    height: 55.7vw;
    background: #ffffff;
    border-radius: 16px;

    .modal-header {
      height: 15.2vw;
      margin-bottom: 10vw;

      .email-img {
        width: 10vw;
        top: 3vw;
      }

      .close-img {
        top: 2.4vw;
        right: 2.6vw;
      }

      &::after {
        top: 15.2vw;
        border: 3vw solid transparent;
        border-top-color: #CED995;
      }
    }
  }
  .n-modal-main {
    .email-input {
      .n-input {
        width: calc(100% - 9.3vw);
        margin-bottom: 1.02vw;
      }
    }

    .n-button {
      width: 29.3vw;
      height: 8.13vw;
      font-size: 3.4vw;
    }

    .success-text {
      padding: 0 4.06vw;

      p {
        margin-bottom: 1vw;
      }

      .title {
        font-size: 3.6vw;
        line-height: 3.8vw;
      }

      .content {
        padding: 0 7.7vw;
        font-size: 2.6vw;
        line-height: 3vw;
      }

      .share {
        font-size: 2.6vw;
        line-height: 2vw;
        margin: -4vw auto 0;
      }
    }
  }
}
</style>
