import { buildImageUrl } from 'cloudinary-build-url'

const src = buildImageUrl('website/amste', {
  cloud: {
    cloudName: 'kissu',
  },
  transformations: {
    resize: {
      type: 'scale',
      width: 500,
      height: 500,
    },
  },
})
console.log('nice', src)
