import React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'
import { AccessibleIcon } from 'ui/svg/icons/types'

function OfferEventSvg({ size, testID, accessibilityLabel, color }: AccessibleIcon) {
  return (
    <AccessibleSvg
      width={size}
      height={size}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      viewBox="0 0 48 48">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.5918 5.67198C25.5112 4.75258 27.2208 4.73267 28.4207 5.93263L31.0673 8.57925C31.2706 8.78254 31.3278 9.11164 31.1731 9.40597C29.9527 11.6671 30.4568 14.6053 32.4307 16.5793C34.406 18.5545 37.3469 19.058 39.6087 17.8344L39.6117 17.8327C39.9005 17.6752 40.2214 17.7295 40.4241 17.9361L43.0774 20.5893C44.267 21.7789 44.2583 23.4897 43.3366 24.4196L43.3354 24.4207L23.4182 44.338C22.4988 45.2574 20.7893 45.2773 19.5893 44.0773L16.9427 41.4307C16.7394 41.2274 16.6823 40.8984 16.8369 40.6041C18.0573 38.3429 17.5532 35.4046 15.5793 33.4307C13.604 31.4555 10.6631 30.952 8.40138 32.1756L8.39835 32.1772C8.10952 32.3347 7.78866 32.2805 7.58591 32.0739L4.93268 29.4207C3.74315 28.2311 3.75177 26.5205 4.67319 25.5906L4.6746 25.5892L19.5888 10.695C19.9796 10.3048 19.9801 9.67159 19.5898 9.2808C19.1995 8.89001 18.5664 8.88959 18.1756 9.27985L3.25829 24.1771L3.25525 24.1801C1.43119 26.0175 1.68103 28.9975 3.51847 30.8349L6.16219 33.4786C7.02162 34.3509 8.32155 34.4963 9.35427 33.934C10.7616 33.1734 12.7523 33.4321 14.1651 34.8449C15.5783 36.2581 15.8367 38.2495 15.0753 39.657L15.0714 39.6643C14.5261 40.6926 14.6697 41.9862 15.5285 42.8449L18.1751 45.4915C20.0228 47.3392 23.005 47.5796 24.8324 45.7522L44.7522 25.8324L44.7548 25.8298C46.5788 23.9924 46.329 21.0125 44.4916 19.1751L41.8515 16.5351L41.8479 16.5314C40.9885 15.6591 39.6886 15.5137 38.6559 16.0759C37.2486 16.8366 35.2578 16.5779 33.845 15.165C32.4317 13.7518 32.1733 11.7604 32.9347 10.353L32.9386 10.3457C33.4839 9.31736 33.3403 8.02379 32.4816 7.16504L29.8349 4.51842C27.9873 2.67077 25.0051 2.43031 23.1776 4.25777C22.7871 4.64829 22.7871 5.28146 23.1776 5.67198C23.5681 6.06251 24.2013 6.06251 24.5918 5.67198ZM22.3563 17.2001C21.9658 16.8096 21.3326 16.8096 20.9421 17.2001C20.5515 17.5906 20.5515 18.2238 20.9421 18.6143L30.4558 28.1281C30.8464 28.5186 31.4795 28.5186 31.8701 28.1281C32.2606 27.7376 32.2606 27.1044 31.8701 26.7139L22.3563 17.2001Z"
        fill={color}
      />
    </AccessibleSvg>
  )
}

export const OfferEvent = styled(OfferEventSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
}))``