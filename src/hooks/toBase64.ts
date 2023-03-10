import { onMounted } from 'vue'

type imgObj = {
  $el: string
}

const imgBase64 = (obj: imgObj): Promise<{ base64: string }> => {
  return new Promise((resolve, reject) => {
    onMounted(() => {
      const imgDom = document.getElementById(obj.$el) as HTMLImageElement

      imgDom.onload = () => {
        try {
          const canavsEl = document.createElement('canvas')
          const ctx = canavsEl.getContext('2d')
          canavsEl.width = imgDom.width
          canavsEl.height = imgDom.height
          ctx?.drawImage(imgDom, 0, 0, imgDom.width, imgDom.height)

          resolve({
            base64: canavsEl.toDataURL('image/png')
          })
        } catch (err) {
          reject(err)
        }
      }
    })
  })
}

export default imgBase64
