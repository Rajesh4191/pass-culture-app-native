import * as React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'
import { AccessibleIcon } from 'ui/svg/icons/types'

const EmptyFavoritesSvg: React.FunctionComponent<AccessibleIcon> = ({
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
        d="M71.113 133.998C67.456 136.105 62.1959 134.676 59.5451 130.092L53.9135 120.352C53.3689 119.41 53.5084 118.173 54.3173 117.331L54.3295 117.318C59.4686 111.889 60.2971 103.213 56.1932 96.1152C52.0893 89.0175 44.1498 85.3958 36.8721 87.1256L36.8549 87.1297C35.7123 87.4097 34.5863 86.9256 34.0328 85.9683L28.4012 76.2285C25.7502 71.6436 27.1411 66.3799 30.7982 64.2716L104.118 22.0028C107.776 19.8945 113.036 21.3235 115.687 25.9084L121.319 35.6482C121.863 36.5902 121.724 37.8268 120.915 38.6693L120.903 38.6821C115.764 44.1106 114.935 52.787 119.039 59.8848C123.141 66.9782 131.057 70.619 138.363 68.8738L138.377 68.8703C139.52 68.5902 140.646 69.0744 141.2 70.0317L144.015 74.9016L145.878 78.1223C146.443 79.0994 147.585 79.586 148.681 79.3164C150.334 78.9099 151.126 77.0235 150.259 75.5589L148.38 72.3856L145.564 67.5157C143.851 64.5534 140.423 63.1914 137.184 63.9813C132.272 65.1518 126.507 62.7365 123.403 57.3688C120.302 52.0054 121.105 45.7981 124.56 42.1437C126.868 39.7329 127.379 36.0656 125.683 33.1322L120.052 23.3924C116.252 16.8213 108.067 13.9161 101.599 17.6449L28.2785 59.9138C21.8104 63.6426 20.2375 72.1734 24.0369 78.7446L29.6685 88.4843C31.3809 91.4459 34.8082 92.808 38.0458 92.0192C42.9427 90.8588 48.7278 93.268 51.8289 98.6312C54.9298 103.994 54.1269 110.201 50.6725 113.856C48.3639 116.266 47.853 119.934 49.5492 122.868L55.1808 132.608C58.9803 139.179 67.1655 142.084 73.6336 138.355L121.793 110.395C123.54 114.68 126.407 118.617 129.691 121.972C135.13 127.53 142.058 131.854 148.098 133.868C148.614 134.04 149.171 134.044 149.689 133.88C153.894 132.548 156.533 130.905 159.401 128.988C160.585 128.197 160.904 126.595 160.115 125.41C159.325 124.225 157.725 123.905 156.541 124.696C154.031 126.373 151.995 127.635 148.935 128.695C143.904 126.849 138.041 123.132 133.371 118.36C128.422 113.304 125.153 107.423 125.153 101.696C125.153 95.9019 129.893 91.1602 135.788 91.1602C141.683 91.1602 146.424 95.9019 146.424 101.696C146.424 103.121 147.577 104.276 149 104.276C150.423 104.276 151.576 103.121 151.576 101.696C151.576 95.9019 156.317 91.1602 162.212 91.1602C168.107 91.1602 172.847 95.9019 172.847 101.696C172.847 108.326 168.957 112.773 165.598 116.563L165.595 116.567C165.331 116.865 165.07 117.159 164.816 117.449C163.879 118.521 163.986 120.151 165.056 121.09C166.126 122.029 167.754 121.921 168.692 120.85C168.94 120.566 169.203 120.27 169.483 119.956L169.542 119.89C172.827 116.2 178 110.391 178 101.696C178 93.0112 170.912 86 162.212 86C156.69 86 151.823 88.8221 149 93.1006C146.177 88.8221 141.31 86 135.788 86C127.088 86 120 93.0112 120 101.696C120 102.961 120.117 104.211 120.338 105.442C120.243 105.482 120.149 105.529 120.057 105.582L71.113 133.998ZM110.811 93.6585C109.606 94.3533 108.065 93.941 107.369 92.7376L87.1482 57.7659C86.4524 56.5625 86.8653 55.0237 88.0705 54.3289C89.2757 53.6342 90.8167 54.0465 91.5125 55.2499L111.733 90.2216C112.429 91.425 112.016 92.9637 110.811 93.6585Z"
      />
    </AccessibleSvg>
  )
}

export const EmptyFavorites = styled(EmptyFavoritesSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.illustrations.sizes.medium,
}))``