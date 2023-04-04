export const getImageUrl = (url) => url && new URL(`../assets/images/${url}`, import.meta.url).href

export const isMobile = () => {
  return window.innerWidth < 483
  // return navigator.userAgent.match(/(phone|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}

export const goto = name => {
  Object.keys(CAT_CONFIG.links).forEach(key => {
    if (name.includes(key)) window.open(CAT_CONFIG.links[key])
  })
}

export const getMetaMaskInfo = async (message) => {
  try {
    const provider = await detectEthereumProvider()
    if (!provider) {
      message.error("MetaMask not installed")
      return
    }
    const accounts = await provider.request({
      method: "eth_requestAccounts"
    });

    const network = await provider.request({ method: "eth_chainId" })
    const chainId = parseInt(network)

    return {
      account: accounts[0],
      address: network,
      chainId
    }
  } catch (e) {
    // console.log(e)
  }
}
