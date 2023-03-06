import * as React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'
import { AccessibleIcon } from 'ui/svg/icons/types'

const NoBookingsSvg: React.FunctionComponent<AccessibleIcon> = ({
  size,
  color,
  accessibilityLabel,
  testID,
}) => {
  const height = typeof size === 'string' ? size : ((size as number) * 156) / 200
  return (
    <AccessibleSvg
      width={size}
      height={height}
      viewBox="0 0 200 156"
      accessibilityLabel={accessibilityLabel}
      testID={testID}>
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71.1842 133.998C67.5218 136.105 62.2542 134.676 59.5995 130.092L53.9597 120.352C53.4143 119.41 53.554 118.173 54.3641 117.331L54.3763 117.318C59.5229 111.889 60.3526 103.213 56.2427 96.1152C52.1328 89.0175 44.1819 85.3958 36.8936 87.1256L36.8764 87.1297C35.7322 87.4097 34.6046 86.9256 34.0502 85.9683L28.4105 76.2285C25.7556 71.6436 27.1486 66.3799 30.8109 64.2716L104.237 22.0028C107.9 19.8945 113.168 21.3235 115.823 25.9084L121.463 35.6482C122.008 36.5902 121.868 37.8268 121.058 38.6693L121.046 38.6821C115.9 44.1106 115.07 52.787 119.18 59.8848C123.287 66.9782 131.215 70.619 138.532 68.8738L138.546 68.8703C139.69 68.5902 140.818 69.0744 141.372 70.0317L145.062 76.4042C131.8 78.6671 121.711 90.1591 121.711 104C121.711 119.466 134.309 132 149.855 132C165.402 132 178 119.466 178 104C178 99.1754 176.767 94.6258 174.595 90.6512C174.005 89.5725 172.649 89.1735 171.564 89.7599C170.48 90.3462 170.079 91.696 170.668 92.7747C172.494 96.1158 173.531 99.9376 173.531 104C173.531 117.011 162.934 127.554 149.855 127.554C136.777 127.554 126.18 117.011 126.18 104C126.18 90.989 136.777 80.446 149.855 80.446C153.885 80.446 157.681 81.4449 160.988 83.213C162.075 83.7942 163.43 83.3887 164.014 82.3072C164.598 81.2257 164.19 79.8779 163.103 79.2967C159.393 77.3128 155.176 76.1457 150.713 76.0127L148.563 72.3856L145.743 67.5157C144.028 64.5534 140.594 63.1914 137.351 63.9813C132.431 65.1518 126.658 62.7365 123.55 57.3688C120.445 52.0054 121.249 45.7981 124.709 42.1437C127.02 39.7329 127.532 36.0656 125.833 33.1322L120.194 23.3924C116.389 16.8213 108.191 13.9161 101.714 17.6449L28.2875 59.9138C21.8101 63.6426 20.2349 72.1734 24.0399 78.7446L29.6796 88.4843C31.3945 91.4459 34.8268 92.808 38.069 92.0192C42.973 90.8588 48.7666 93.268 51.8721 98.6312C54.9775 103.994 54.1735 110.201 50.714 113.856C48.4021 116.266 47.8904 119.934 49.5891 122.868L55.2289 132.608C59.0338 139.179 67.2309 142.084 73.7084 138.355L112.454 115.993C113.66 115.297 114.072 113.758 113.374 112.555C112.677 111.352 111.133 110.941 109.927 111.637L71.1842 133.998Z"
      />
      <Path
        fill={color}
        d="M110.94 93.6585C109.733 94.3533 108.19 93.941 107.493 92.7376L87.2426 57.7659C86.5458 56.5625 86.9593 55.0237 88.1662 54.3289C89.3731 53.6342 90.9164 54.0465 91.6132 55.2499L111.863 90.2216C112.56 91.425 112.147 92.9637 110.94 93.6585Z"
      />
      <Path
        fill={color}
        d="M142.741 93.3368C141.746 92.3459 140.133 92.3443 139.137 93.3333C138.141 94.3223 138.139 95.9274 139.134 96.9184L146.246 104.008L139.179 111.086C138.187 112.08 138.192 113.685 139.191 114.671C140.189 115.658 141.803 115.652 142.794 114.659L149.855 107.587L156.977 114.627C157.976 115.613 159.589 115.608 160.581 114.615C161.573 113.622 161.568 112.017 160.569 111.03L153.45 103.993L160.529 96.9666C161.525 95.9778 161.527 94.3727 160.533 93.3816C159.539 92.3905 157.925 92.3886 156.929 93.3775L149.84 100.414L142.741 93.3368Z"
      />
    </AccessibleSvg>
  )
}

export const NoBookings = styled(NoBookingsSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.illustrations.sizes.medium,
}))``