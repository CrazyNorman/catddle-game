export const getImageUrl = (url) => url && new URL(`../assets/images/${url}`, import.meta.url).href
