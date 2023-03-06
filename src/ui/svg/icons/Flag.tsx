import * as React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'

import { AccessibleIcon } from './types'

const FlagSvg: React.FunctionComponent<AccessibleIcon> = ({
  size,
  color,
  accessibilityLabel,
  testID,
}) => (
  <AccessibleSvg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    accessibilityLabel={accessibilityLabel}
    testID={testID}>
    <Path
      fill={color}
      clipRule="evenodd"
      fillRule="evenodd"
      d="M30.9538 6.50046C31.4197 6.48637 31.8336 6.79968 31.9527 7.25647L34.9667 18.819C35.034 19.0771 34.9984 19.3516 34.8676 19.5833C34.8678 19.583 34.8676 19.5833 33.9977 19.0786L34.8676 19.5833L34.8661 19.5859L34.8642 19.5893L34.8589 19.5985L34.8425 19.6265C34.8291 19.6493 34.8105 19.6801 34.7869 19.7181C34.7397 19.7941 34.6722 19.8989 34.585 20.0246C34.4112 20.275 34.1557 20.6135 33.8236 20.9736C33.1712 21.6809 32.1591 22.5409 30.8263 22.9086C29.6681 23.2281 28.3852 23.1235 27.2156 23.0282H27.2155C27.0821 23.0173 26.9502 23.0066 26.8201 22.9966C25.4777 22.8935 24.14 22.839 22.7244 23.2278C22.6004 23.2618 22.4756 23.2707 22.3552 23.2575C22.3225 23.2668 22.2903 23.276 22.2586 23.2853C21.0283 23.6447 20.0127 24.8774 19.2191 26.0058L23.191 41.2238C23.3326 41.7663 23.0136 42.3224 22.4785 42.466C21.9434 42.6095 21.3948 42.2861 21.2532 41.7436L14.0336 14.082C13.9886 13.9095 13.9901 13.7357 14.0303 13.5742C14.0502 13.4942 14.0799 13.4157 14.1199 13.3406C14.1407 13.3015 14.164 13.2637 14.1896 13.2276L14.2061 13.2041C14.2228 13.1804 14.2459 13.1482 14.2753 13.1087C14.334 13.0297 14.4179 12.9209 14.5268 12.79C14.744 12.5287 15.0627 12.1766 15.4793 11.7984C16.3085 11.0459 17.5544 10.1639 19.1856 9.7143C20.7816 9.27438 22.1917 9.4101 23.4381 9.53007L23.5332 9.53921C24.7811 9.65893 25.8911 9.75244 27.1614 9.4285C27.2017 9.41139 27.2437 9.39676 27.2871 9.38484C28.6037 9.02325 29.2781 8.42946 29.6212 7.99407C29.7976 7.77035 29.8979 7.57376 29.9518 7.44568C29.9787 7.38157 29.9939 7.33488 30.001 7.31106L30.0053 7.296C30.1044 6.84286 30.4946 6.51434 30.9538 6.50046Z"
    />
  </AccessibleSvg>
)

export const Flag = styled(FlagSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.smaller,
}))``