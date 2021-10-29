import NextImage from 'next/image'
import { ComponentProps } from 'react'

const customImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export const Image = ({ ...rest }: ComponentProps<typeof NextImage>) => (
  <NextImage {...rest} loader={customImageLoader} />
)
