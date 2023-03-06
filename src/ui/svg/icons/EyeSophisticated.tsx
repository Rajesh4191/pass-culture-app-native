import * as React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'

import { AccessibleIcon } from './types'

const EyeSophisticatedSvg: React.FC<AccessibleIcon> = ({
  size,
  color,
  accessibilityLabel,
  testID,
}) => {
  return (
    <AccessibleSvg
      width={size}
      height={size}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      fill="none"
      viewBox="0 0 18 12">
      <Path
        d="M3.03395 9.14135C2.35403 8.50221 1.29712 7.48575 0.9206 7.0275C0.732172 6.79817 0.585768 6.60821 0.485861 6.47471C0.435897 6.40794 0.397529 6.35525 0.371315 6.31876L0.341171 6.27644L0.333059 6.26488L0.330766 6.26159L0.329822 6.26023C0.223374 6.10642 0.223399 5.89417 0.32986 5.74036L0.330127 5.73998L0.33092 5.73884L0.33353 5.73509L0.342828 5.72186C0.350827 5.71053 0.362416 5.69423 0.377506 5.67329C0.407684 5.63142 0.451884 5.57097 0.509406 5.4946C0.624421 5.3419 0.792873 5.12532 1.00917 4.86615C1.4413 4.34835 2.06682 3.65764 2.841 2.96597C4.3783 1.59252 6.55575 0.166992 9 0.166992C11.4443 0.166992 13.6217 1.59252 15.159 2.96597C15.9332 3.65764 16.5587 4.34835 16.9908 4.86615C17.2071 5.12532 17.3756 5.3419 17.4906 5.4946C17.5481 5.57097 17.5923 5.63142 17.6225 5.67329C17.6376 5.69423 17.6492 5.71053 17.6572 5.72186L17.6665 5.73509L17.6691 5.73884L17.6699 5.73998L17.6701 5.74036C17.7766 5.89418 17.7766 6.10647 17.6701 6.26029L17.6699 6.26067L17.6691 6.26182L17.6665 6.26556L17.6572 6.27879C17.6492 6.29012 17.6376 6.30642 17.6225 6.32736C17.5923 6.36923 17.5481 6.42968 17.4906 6.50605C17.3756 6.65875 17.2071 6.87533 16.9908 7.13451C16.5587 7.6523 15.7402 8.44968 14.966 9.14135C13.4287 10.5148 11.4443 11.8337 9 11.8337C6.51702 11.8337 5.12009 10.7539 3.201 9.27043L3.03395 9.14135ZM12.75 6.00033C12.75 8.16375 11.0718 9.75033 9 9.75033C6.92821 9.75033 5.25 8.07211 5.25 6.00033C5.25 3.92854 7.125 2.25033 9 2.25033C10.875 2.25033 12.75 3.8369 12.75 6.00033ZM9.00002 7.66702C9.84631 7.66702 10.5453 7.03626 10.6525 6.21922C10.4809 6.34363 10.2698 6.41699 10.0417 6.41699C9.46637 6.41699 9 5.95062 9 5.37533C9 4.964 9.2384 4.60836 9.58457 4.43905C9.40267 4.37091 9.2057 4.33366 9.00002 4.33366C8.07953 4.33366 7.33333 5.07986 7.33333 6.00034C7.33333 6.92082 8.07953 7.66702 9.00002 7.66702Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </AccessibleSvg>
  )
}

export const EyeSophisticated = styled(EyeSophisticatedSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
}))``