import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { IconInterface } from './types'

const IdeaSvg: React.FunctionComponent<IconInterface> = ({ size, color, testID }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" testID={testID} aria-hidden>
    <Path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3512 8.72046C16.8231 6.01764 20.4719 4.36529 24.5044 4.51384C31.3978 4.77383 37.0137 10.5295 36.9475 17.2737C36.9189 20.0522 35.9781 22.6126 34.3923 24.6813L34.3908 24.6832C32.3188 27.3999 31.1199 30.6844 31.1199 34.1123V34.2025C31.1199 34.9347 30.5298 35.4954 29.8169 35.4954H18.1824C17.4666 35.4954 16.8795 34.9218 16.8795 34.2225V34.1123C16.8795 30.7104 15.7151 27.4237 13.627 24.7105C12.0108 22.6019 11.0519 19.995 11.0519 17.1535C11.0519 16.5999 10.5926 16.1512 10.026 16.1512C9.45934 16.1512 9 16.5999 9 17.1535C9 20.4456 10.1134 23.4713 11.9851 25.9129L11.9863 25.9145C13.817 28.2928 14.8275 31.1599 14.8275 34.1123V34.2225C14.8275 36.0289 16.3333 37.5 18.1824 37.5H29.8169C31.669 37.5 33.1719 36.0361 33.1719 34.2025V34.1123C33.1719 31.1458 34.2093 28.2766 36.0356 25.8818C37.876 23.4804 38.9663 20.5086 38.9993 17.2938L38.9993 17.2934C39.0765 9.46463 32.5863 2.81227 24.583 2.51073L24.5821 2.5107C19.9146 2.33863 15.684 4.25442 12.821 7.38486C12.4435 7.79765 12.48 8.43127 12.9025 8.80008C13.3251 9.16889 13.9736 9.13325 14.3512 8.72046ZM18.2335 40C17.5522 40 17 40.4477 17 41C17 41.5523 17.5522 42 18.2335 42H29.7665C30.4478 42 31 41.5523 31 41C31 40.4477 30.4478 40 29.7665 40H18.2335ZM18 45.5C18 44.9477 18.5917 44.5 19.3216 44.5H28.6784C29.4083 44.5 30 44.9477 30 45.5C30 46.0523 29.4083 46.5 28.6784 46.5H19.3216C18.5917 46.5 18 46.0523 18 45.5ZM23.9998 7.5C23.4332 7.5 22.9738 7.94772 22.9738 8.5C22.9738 9.05228 23.4332 9.5 23.9998 9.5C28.5322 9.5 32.2076 13.0823 32.2076 17.5C32.2076 18.0523 32.6669 18.5 33.2335 18.5C33.8002 18.5 34.2595 18.0523 34.2595 17.5C34.2595 11.9777 29.6655 7.5 23.9998 7.5Z"
    />
  </Svg>
)

export const Idea = styled(IdeaSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
}))``
