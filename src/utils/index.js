export const getImageUrl = (url) => url && new URL(`../assets/images/${url}`, import.meta.url).href

export const isMobile = () => {
    return window.innerWidth < 483
    // return navigator.userAgent.match(/(phone|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}
