import * as React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'

import { AccessibleIcon } from './types'

function EyeSlashSvg({ size, color, accessibilityLabel, testID }: AccessibleIcon): JSX.Element {
  return (
    <AccessibleSvg
      width={size}
      height={size}
      testID={testID}
      fill={color}
      accessibilityLabel={accessibilityLabel}
      viewBox="0 0 48 48">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.2669 8.78299C40.6574 9.16031 40.6574 9.77206 40.2669 10.1494L24.7071 25.1829L14.9735 34.5874C14.9621 34.5989 14.9504 34.6102 14.9385 34.6211L9.1468 40.217C8.75628 40.5943 8.12312 40.5943 7.73259 40.217C7.34207 39.8396 7.34207 39.2279 7.73259 38.8506L12.6227 34.1258C9.6724 32.3906 7.19694 30.2886 5.40869 28.5598C4.39849 27.5831 3.60112 26.7192 3.05454 26.0973C2.78112 25.7862 2.57009 25.5352 2.4262 25.3604C2.35424 25.273 2.29904 25.2047 2.26119 25.1573L2.2175 25.1023L2.20554 25.0871L2.20206 25.0826L2.20025 25.0803L2.99977 24.5L2.201 23.9187L2.20167 23.9179L2.20366 23.9153L2.21022 23.9069L2.2336 23.8774C2.25371 23.852 2.28285 23.8156 2.32079 23.7687C2.39666 23.6751 2.50779 23.5399 2.65242 23.3692C2.94159 23.0277 3.36512 22.5435 3.90894 21.964C4.99542 20.8061 6.56811 19.2617 8.5146 17.7151C12.3797 14.644 17.8543 11.4565 23.9998 11.4565C27.4629 11.4565 30.7154 12.4717 33.5643 13.8925L38.8526 8.78299C39.2432 8.40567 39.8763 8.40567 40.2669 8.78299ZM32.0738 15.3326C29.5751 14.1634 26.8403 13.3889 23.9998 13.3889C18.5452 13.3889 13.5198 16.24 9.78494 19.2076C7.93143 20.6803 6.42912 22.1552 5.39061 23.2619C4.92018 23.7632 4.54616 24.1876 4.27906 24.5003C4.36745 24.6038 4.46758 24.7197 4.57907 24.8465C5.09655 25.4354 5.85731 26.2599 6.82335 27.1938C8.62948 28.94 11.1308 31.0469 14.0812 32.7167L16.9755 29.9203C16.9455 29.8915 16.917 29.8605 16.8904 29.8274C15.7092 28.3602 14.9998 26.5106 14.9998 24.5C14.9998 19.6958 19.0275 15.8043 23.9998 15.8043C26.1274 15.8043 28.0803 16.5221 29.619 17.7044L32.0738 15.3326ZM28.193 19.0821C27.0212 18.2394 25.5717 17.7367 23.9998 17.7367C20.132 17.7367 16.9998 20.763 16.9998 24.5C16.9998 26.0221 17.521 27.4222 18.3956 28.5482L21.2892 25.7525C20.7095 24.5876 20.9977 23.1504 22.0698 22.2778C22.7056 21.7602 23.4969 21.5429 24.2629 21.6089C24.0955 21.8915 23.9998 22.2188 23.9998 22.5677C23.9998 22.7408 24.0233 22.9085 24.0675 23.0681L28.193 19.0821ZM2.201 23.9187C2.20075 23.919 2.20054 23.9193 2.99977 24.5C2.20025 25.0803 2.20009 25.0801 2.20025 25.0803C1.93284 24.7364 1.93341 24.2625 2.201 23.9187ZM40.284 18.3684C39.8664 18.0192 39.2348 18.0633 38.8735 18.4668C38.5121 18.8703 38.5577 19.4805 38.9754 19.8296C40.6059 21.1928 41.9178 22.5122 42.8212 23.49C43.1929 23.8923 43.4946 24.236 43.7202 24.5C43.4531 24.8126 43.0791 25.2369 42.6088 25.7381C41.5703 26.8448 40.068 28.3196 38.2145 29.7924C34.4796 32.7599 29.4542 35.6111 23.9997 35.6111C22.4342 35.6111 20.906 35.3757 19.4211 34.971C18.8896 34.8262 18.3371 35.1251 18.1872 35.6386C18.0373 36.1522 18.3467 36.686 18.8782 36.8308C20.5133 37.2764 22.2251 37.5434 23.9997 37.5434C30.1451 37.5434 35.6197 34.3559 39.4848 31.2849C41.4313 29.7383 43.004 28.1938 44.0905 27.036C44.6343 26.4565 45.0579 25.9722 45.347 25.6308C45.4917 25.46 45.6028 25.3249 45.6787 25.2312C45.7166 25.1844 45.7457 25.1479 45.7658 25.1226L45.7892 25.093L45.7958 25.0847L45.7985 25.0812C46.0661 24.7373 46.0662 24.2627 45.7985 23.9188L45.7962 23.9158L45.7904 23.9084L45.77 23.8826C45.7525 23.8605 45.7272 23.8287 45.6942 23.7879C45.6283 23.7064 45.5319 23.5885 45.4062 23.4392C45.155 23.1407 44.7869 22.716 44.3132 22.2032C43.3665 21.1785 41.9935 19.7975 40.284 18.3684ZM45.7985 23.9188L44.9997 24.5C45.799 23.9193 45.7986 23.9189 45.7985 23.9188ZM44.9997 24.5L45.7985 25.0812C45.7987 25.0809 45.7989 25.0807 44.9997 24.5ZM32.9999 24.5C32.9999 23.9664 32.5522 23.5338 31.9999 23.5338C31.4476 23.5338 30.9999 23.9664 30.9999 24.5C30.9999 28.2369 27.8676 31.2633 23.9999 31.2633C23.2747 31.2633 22.5734 31.1536 21.9131 30.9579C21.3851 30.8015 20.8258 31.0882 20.6638 31.5984C20.5019 32.1085 20.7987 32.6489 21.3267 32.8053C22.1663 33.0541 23.0651 33.1956 23.9999 33.1956C28.9722 33.1956 32.9999 29.3041 32.9999 24.5Z"
      />
    </AccessibleSvg>
  )
}

export const EyeSlash = styled(EyeSlashSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
}))``