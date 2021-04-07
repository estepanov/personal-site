/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui'
import { keyframes } from '@emotion/react'
import { Fragment } from 'react'

const fadeIn = keyframes`
  0% {
    opacity:1;
    transform: translate(-50%, 50%);
  }
  17% {
    opacity:1;
    transform: translate(-50%, -50%);
  }
  25% {
    opacity:0;
    transform: translate(-50%, 50%);
  }
  92% {
    opacity:0;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity:1;
    transform: translate(-50%, 50%);
  }
`

export interface ImageSource {
  src: string,
  alt?: string,
}

interface ImageCyclerProps {
  imgSx?: SxStyleProp;
  time?: number;
  sources: ImageSource[];
}

const buildAnimation = (time: number, sources: ImageSource[], ind: number): SxStyleProp => {
  if (sources.length > 1) {
    return ({
      animationName: fadeIn,
      animationDuration: `${time * sources.length}s`,
      // animationFillMode: 'backwards',
      animationDelay: ind > 0 ? `-${ind * time}s` : undefined,
      animationIterationCount: 'infinite',
    })
  }
  return {}
}

const ImageCycler: React.FC<ImageCyclerProps> = ({ imgSx, sources, time = 3 }) => (
  <Fragment>
    {sources.map(({ src, alt }, ind) => {
      return (<img
        sx={{
          ...buildAnimation(time, sources, ind),
          ...imgSx
        }}
        src={src}
        alt={alt}
      />)
    })}
  </Fragment>
)

export default ImageCycler
