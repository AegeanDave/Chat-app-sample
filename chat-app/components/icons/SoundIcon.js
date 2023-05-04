import React from 'react'
import { Icon } from 'native-base'
import { Path } from 'react-native-svg'

const SoundIcon = props => {
  return (
    <Icon size={props.size || '2xl'} viewBox='0 0 40 40'>
      <Path
        d='M20.3 25.8h-.7c-3.2 0-5.9-2.6-5.9-5.9v-8.1c0-3.2 2.6-5.9 5.9-5.9h.7c3.2 0 5.9 2.6 5.9 5.9 0 .6-.4 1-1 1s-1-.4-1-1c0-2.1-1.7-3.9-3.9-3.9h-.7c-2.1 0-3.9 1.7-3.9 3.9v8.1c0 2.1 1.7 3.9 3.9 3.9h.7c2.1 0 3.9-1.7 3.9-3.9v-3.4c0-.6.4-1 1-1s1 .4 1 1v3.4c0 3.3-2.6 5.9-5.9 5.9z'
        fill={props.color || '#4286f4'}
      ></Path>
      <Path
        d='M20 .1c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 38c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z'
        fill={props.color || '#4286f4'}
      ></Path>
      <Path
        d='M21 29.8v2.6h3c.5 0 1 .4 1 1s-.5 1-1 1h-8c-.5 0-1-.4-1-1s.5-1 1-1h3v-2.6c-5.1-.3-9.2-4.6-9.2-9.9 0-.6.5-1 1-1 .6 0 1 .4 1 1 0 4.3 3.5 7.9 7.9 7.9h.7c4.4 0 7.9-3.5 7.9-7.9 0-.6.5-1 1-1s1 .4 1 1c-.1 5.2-4.2 9.5-9.3 9.9z'
        fill={props.color || '#4286f4'}
      ></Path>
    </Icon>
  )
}

export default SoundIcon
