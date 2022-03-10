import * as React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'

import { AccessibleIcon } from '../types'

function MuseumSvg({ size, color, accessibilityLabel, testID }: AccessibleIcon): JSX.Element {
  return (
    <AccessibleSvg
      width={size}
      height={size}
      testID={testID}
      fill={color}
      viewBox="0 0 96 96"
      accessibilityLabel={accessibilityLabel}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.0609 8.82854C49.1616 7.73049 46.8382 7.73049 44.9389 8.82854L44.9304 8.83345L11.0321 28.6524C5.67653 31.7766 7.86944 40 14.0999 40H18.1259C18.0445 40.2179 18 40.4537 18 40.7V74H16C12.6954 74 10 76.6954 10 80V82C10 85.3046 12.6954 88 16 88H80C83.3046 88 86 85.3046 86 82V80C86 76.6954 83.3046 74 80 74H78V40H81.8999C88.0958 40 90.3358 31.7839 84.9676 28.6524L51.0694 8.83342L51.0609 8.82854ZM74 74V38.7C74 38.4598 74.0423 38.2295 74.12 38.0161L74.1199 38C74.1199 36.8954 75.0153 36 76.1199 36H81.8999C84.0239 36 84.784 33.1761 82.9521 32.1076L49.0589 12.2915L49.0553 12.2894C48.3965 11.9102 47.6032 11.9102 46.9444 12.2894L46.9409 12.2915L13.0493 32.1066C11.205 33.1824 11.9703 36 14.0999 36H67.9999C69.1045 36 69.9999 36.8954 69.9999 38C69.9999 39.1046 69.1045 40 67.9999 40H21.8741C21.9555 40.2179 22 40.4537 22 40.7V75.9999C22 77.1045 21.1046 77.9999 20 77.9999L16 78C14.9046 78 14 78.9046 14 80V82C14 83.0954 14.9046 84 16 84H80C81.0954 84 82 83.0954 82 82V80C82 78.9046 81.0954 78 80 78H62H29.1C27.9954 78 27.1 77.1046 27.1 76C27.1 74.8954 27.9954 74 29.1 74H32V46.7C32 45.5954 32.8954 44.7 34 44.7C35.1046 44.7 36 45.5954 36 46.7V74H46V44.7C46 43.5954 46.8954 42.7 48 42.7C49.1046 42.7 50 43.5954 50 44.7V74H60V48C60 46.8954 60.8954 46 62 46C63.1046 46 64 46.8954 64 48V74H74ZM48 27C49.6569 27 51 25.6569 51 24C51 22.3431 49.6569 21 48 21C46.3431 21 45 22.3431 45 24C45 25.6569 46.3431 27 48 27Z"
      />
    </AccessibleSvg>
  )
}

export const MuseumIcon = styled(MuseumSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
}))``
