import * as React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'
import { AccessibleIcon } from 'ui/svg/icons/types'
function ProfileDeletionSvg({
  size,
  color,
  testID,
  accessibilityLabel,
  opacity,
}: AccessibleIcon): JSX.Element {
  return (
    <AccessibleSvg
      width={size}
      height={size}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      viewBox="0 0 48 48"
      fill={color}>
      <Path
        opacity={opacity}
        d="M18 3.5C14.091 3.5 11 6.81762 11 10.8192V14.3163C11 18.3088 14.092 21.6254 18 21.6254C21.909 21.6254 25 18.3078 25 14.3062V10.8192C25 6.81762 21.909 3.5 18 3.5ZM13 10.8192C13 7.82673 15.289 5.50071 18 5.50071C20.711 5.50071 23 7.82673 23 10.8192V14.3062C23 17.2987 20.711 19.6247 18 19.6247C15.288 19.6247 13 17.2976 13 14.3163V10.8192ZM18 26.0093C12.1015 26.0093 7.15148 30.4027 6.06414 36.2772C8.82881 39.4532 12.725 41.5164 17.0894 41.7697C17.3908 41.7872 17.6944 41.7961 18 41.7961H18L18.0069 41.7961C18.993 41.7961 20.4011 41.7931 21.6769 41.5604C22.3142 41.4441 22.8701 41.2784 23.3011 41.0566C23.7298 40.836 23.9782 40.5902 24.1043 40.3361C24.1556 40.2327 24.2224 40.142 24.3005 40.0656C23.4717 38.5636 23 36.8369 23 35C23 29.201 27.701 24.5 33.5 24.5C34.0523 24.5 34.5 24.9477 34.5 25.5C34.5 26.0523 34.0523 26.5 33.5 26.5C28.8056 26.5 25 30.3056 25 35C25 39.6944 28.8056 43.5 33.5 43.5C38.1944 43.5 42 39.6944 42 35C42 32.9983 41.3094 31.1608 40.1526 29.7086C39.8085 29.2766 39.8797 28.6475 40.3117 28.3034C40.7437 27.9593 41.3729 28.0305 41.717 28.4625C43.1456 30.256 44 32.5296 44 35C44 40.799 39.299 45.5 33.5 45.5C30.3031 45.5 27.4398 44.0713 25.514 41.8174C25.1544 42.2592 24.6954 42.589 24.2161 42.8357C23.5456 43.1807 22.7796 43.3929 22.0356 43.5286C20.5651 43.7969 18.9918 43.7968 18.0258 43.7968H18C12.4702 43.7968 7.545 41.2277 4.22929 37.2158C4.0791 37.034 3.9989 36.8064 4.00001 36.5736C3.99968 36.503 4.00677 36.4326 4.02118 36.3634C5.09583 29.3929 10.9105 24.0085 18 24.0085C19.52 24.0085 20.9866 24.2585 22.3561 24.7149C22.8801 24.8895 23.1633 25.456 22.9887 25.9802C22.8142 26.5043 22.2479 26.7877 21.7239 26.613C20.5534 26.2229 19.3 26.0093 18 26.0093ZM30.537 30.7642C30.1859 30.4124 29.616 30.4119 29.2642 30.763C28.9124 31.1141 28.9119 31.684 29.263 32.0358L32.2242 35.0029L29.2814 37.9658C28.9311 38.3184 28.9331 38.8883 29.2857 39.2385C29.6384 39.5888 30.2082 39.5869 30.5585 39.2342L33.4993 36.2733L36.4657 39.2205C36.8183 39.5708 37.3881 39.569 37.7385 39.2164C38.0888 38.8638 38.0869 38.2939 37.7343 37.9436L34.7689 34.9973L37.7177 32.0552C38.0696 31.7041 38.0702 31.1343 37.7192 30.7824C37.3681 30.4305 36.7983 30.4299 36.4464 30.7809L33.4938 33.7268L30.537 30.7642Z"
      />
    </AccessibleSvg>
  )
}

export const ProfileDeletion = styled(ProfileDeletionSvg).attrs(
  ({ color, size, opacity, theme }) => ({
    color: color ?? theme.colors.black,
    size: size ?? theme.icons.sizes.standard,
    opacity: opacity ?? 1,
  })
)``