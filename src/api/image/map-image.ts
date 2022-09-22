export type typeArrayImages = Array<{ srcImg: string }>

export const mapImage = (image: any): typeArrayImages | string | [] => {
  if (Array.isArray(image.data)) {
    return image.data.map((image: any) => {
      if (image?.attributes?.url) return image.attributes.url
      return { srcImg: '' }
    })
  } else {
    const { data: { attributes: { url: srcImg = image } = {} } = {} } = image
    return srcImg
  }
}
