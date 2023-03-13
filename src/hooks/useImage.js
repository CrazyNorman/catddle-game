import { getImageUrl } from '@/utils/index.js'
import { onMounted, ref } from 'vue'

export default function useImage (name, len) {
  const urls = ref([])
  const isString = typeof name === 'string'
  const isArray = Array.isArray(name)

  function getUrls () {
    if (isString) {
      for (let i = 1; i < len + 1; i++) {
        urls.value.push({
          name: name + i,
          url: getImageUrl(`${name + i}.png`)
        })
      }
    } else if (isArray) {
      name.forEach(item => {
        urls.value.push({
          name: item,
          url: getImageUrl(`${item}.png`)
        })
      })
    }
  }

  onMounted(() => getUrls())

  return urls
}
