import * as React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'
import { AccessibleIcon } from 'ui/svg/icons/types'

const ProfileDeletionIllustrationSvg: React.FunctionComponent<AccessibleIcon> = ({
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
        d="M83.55 19C72.5071 19 63.775 28.3999 63.775 39.7378V49.6461C63.775 60.9584 72.5099 70.3553 83.55 70.3553C94.5929 70.3553 103.325 60.9554 103.325 49.6175V39.7378C103.325 28.3999 94.5929 19 83.55 19ZM69.425 39.7378C69.425 31.2591 75.8914 24.6687 83.55 24.6687C91.2086 24.6687 97.675 31.2591 97.675 39.7378V49.6175C97.675 58.0962 91.2086 64.6866 83.55 64.6866C75.8886 64.6866 69.425 58.0932 69.425 49.6461V39.7378ZM83.55 82.7762C66.8868 82.7762 52.9029 95.2244 49.8312 111.869C58.1807 121.489 70.1836 127.506 83.5501 127.506L83.571 127.506C86.3568 127.506 90.3337 127.497 93.9372 126.838C95.7376 126.508 97.3079 126.039 98.5257 125.41C99.7368 124.785 100.438 124.089 100.795 123.369C100.94 123.076 101.128 122.819 101.349 122.603C99.0075 118.347 97.675 113.454 97.675 108.25C97.675 91.8195 110.955 78.5 127.337 78.5C128.898 78.5 130.162 79.7685 130.162 81.3333C130.162 82.8981 128.898 84.1667 127.337 84.1667C114.076 84.1667 103.325 94.9491 103.325 108.25C103.325 121.551 114.076 132.333 127.337 132.333C140.599 132.333 151.35 121.551 151.35 108.25C151.35 102.579 149.399 97.3722 146.131 93.2577C145.159 92.0337 145.36 90.2511 146.581 89.2762C147.801 88.3012 149.578 88.5031 150.55 89.727C154.586 94.8086 157 101.25 157 108.25C157 124.68 143.72 138 127.337 138C118.306 138 110.217 133.952 104.777 127.566C103.761 128.818 102.464 129.752 101.11 130.451C99.2163 131.429 97.0523 132.03 94.9507 132.414C90.7964 133.174 86.3518 133.174 83.623 133.174H83.55C67.9282 133.174 54.0146 125.895 44.6478 114.528C44.2235 114.013 43.9969 113.368 44 112.709C43.9991 112.509 44.0191 112.309 44.0598 112.113C47.0957 92.3631 63.5223 77.1076 83.55 77.1076C87.8441 77.1076 91.9873 77.8157 95.856 79.1089C97.3362 79.6037 98.1363 81.2087 97.6432 82.6938C97.15 84.1789 95.5503 84.9817 94.0701 84.4869C90.7633 83.3816 87.2225 82.7762 83.55 82.7762ZM118.967 96.2486C117.975 95.2518 116.365 95.2503 115.371 96.2451C114.378 97.24 114.376 98.8546 115.368 99.8514L123.734 108.258L115.42 116.653C114.43 117.652 114.436 119.267 115.432 120.259C116.428 121.252 118.038 121.246 119.028 120.247L127.336 111.858L135.716 120.208C136.712 121.201 138.322 121.195 139.311 120.196C140.301 119.197 140.296 117.583 139.299 116.59L130.922 108.242L139.253 99.9063C140.247 98.9116 140.248 97.2971 139.257 96.3001C138.265 95.3031 136.655 95.3012 135.661 96.2959L127.32 104.643L118.967 96.2486Z"
      />
    </AccessibleSvg>
  )
}

export const ProfileDeletionIllustration = styled(ProfileDeletionIllustrationSvg).attrs(
  ({ color, size, theme }) => ({
    color: color ?? theme.colors.black,
    size: size ?? theme.illustrations.sizes.medium,
  })
)``