export const mapImage = (image) => {
  if (Array.isArray(image.data)) {
    return image.data.map((image) => {
      return image.attributes.url
    })
  } else {
    const { data: { attributes: { url: srcImg = image } = {} } = {} } = image
    console.log(srcImg)
    return srcImg
  }
}
