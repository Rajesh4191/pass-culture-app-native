import React from 'react'
import { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import styled, { useTheme } from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'
import { svgIdentifier } from 'ui/svg/utils'

import { AccessibleIcon } from '../types'

const PuzzlePieceSvg: React.FunctionComponent<AccessibleIcon> = ({
  size,
  color,
  color2,
  accessibilityLabel,
  testID,
}) => {
  const { id: gradientId, fill: gradientFill } = svgIdentifier()
  const {
    colors: { primary, secondary },
  } = useTheme()
  return (
    <AccessibleSvg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      accessibilityLabel={accessibilityLabel}
      testID={testID}>
      <Defs>
        <LinearGradient id={gradientId} x1="28.841%" x2="71.159%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor={color ?? primary} />
          <Stop offset="100%" stopColor={color2 ?? color ?? secondary} />
        </LinearGradient>
      </Defs>
      <Path
        fill={gradientFill}
        clipRule={'evenodd'}
        fillRule={'evenodd'}
        d="M13.5152 28.5424C14.025 29.0585 14.7092 29.3333 15.447 29.3333C15.4872 29.3333 15.5207 29.3333 15.561 29.3199C16.3189 29.2864 17.0433 28.9714 17.6 28.4151L20.3031 25.7541C20.4708 26.5048 20.8397 27.1818 21.3763 27.718C22.2348 28.5826 23.4489 29.0049 24.7032 28.8843C26.0849 28.7502 27.3392 27.9928 28.1508 26.793C29.1502 25.3117 29.1837 23.3747 28.238 21.9671C27.6544 21.1025 26.769 20.5059 25.7361 20.2848L28.4325 17.5903C29.5861 16.4307 29.6398 14.6009 28.5465 13.5084L26.0379 11.0016C25.6959 10.6598 25.1995 10.5324 24.73 10.6598C24.2605 10.7871 23.9117 11.1491 23.7977 11.6182C23.6099 12.3823 23.1336 13.0727 22.4629 13.5486C21.4367 14.2792 20.0952 14.3596 19.1293 13.743C18.4116 13.2872 17.9622 12.57 17.8683 11.7255C17.761 10.7804 18.1232 9.79512 18.8342 9.08464C19.2568 8.65567 19.7866 8.35405 20.3635 8.2066C20.833 8.08595 21.2086 7.724 21.3361 7.26152C21.4702 6.79234 21.3361 6.30304 20.994 5.96121L18.4854 3.45442C17.6939 2.66351 16.4866 2.44902 15.4067 2.8981C15.0646 3.03885 14.9037 3.43431 15.0445 3.77615C15.1921 4.11798 15.5878 4.27884 15.9232 4.13809C16.5 3.89679 17.1372 4.00403 17.5397 4.40619L20.0415 6.91298C19.2299 7.11406 18.4854 7.54303 17.8885 8.13957C16.8756 9.14496 16.386 10.5056 16.5336 11.8729C16.6744 13.133 17.3384 14.1988 18.4049 14.8757C19.8269 15.7806 21.772 15.6867 23.2342 14.6411C24.1666 13.9776 24.8239 13.0191 25.0855 11.9534L27.5941 14.4602C28.1642 15.0299 28.1172 16.0085 27.48 16.6452L24.7837 19.3397C24.4416 19.6815 24.3141 20.1842 24.4483 20.6534C24.5891 21.1293 24.9782 21.4845 25.4678 21.5918C26.152 21.7392 26.7288 22.128 27.1245 22.7178C27.7684 23.6763 27.7349 25.0101 27.0373 26.0423C26.4538 26.907 25.5483 27.4566 24.569 27.5504C23.7172 27.6309 22.8922 27.3494 22.3153 26.7729C21.9598 26.4177 21.7184 25.9686 21.6044 25.4659C21.497 24.9699 21.1281 24.5745 20.6519 24.4337C20.1824 24.2996 19.6927 24.427 19.344 24.7755L16.6476 27.47C16.3323 27.785 15.9299 27.966 15.5073 27.9794C15.1116 27.9928 14.7293 27.852 14.461 27.5839L11.9591 25.0839C12.7707 24.8828 13.5152 24.4538 14.1122 23.8573C14.3738 23.5959 14.3738 23.1736 14.1122 22.9122C13.8506 22.6508 13.428 22.6508 13.1665 22.9122C12.7439 23.3412 12.214 23.6428 11.6372 23.7902C11.1676 23.9042 10.792 24.2728 10.6646 24.7353C10.5304 25.2045 10.6646 25.6938 11.0067 26.0356L13.5152 28.5424ZM5.9627 20.995C6.21758 21.2497 6.56637 21.3905 6.91515 21.3905C7.03588 21.3905 7.15662 21.3703 7.28406 21.3435C7.74687 21.2162 8.10236 20.8542 8.21639 20.3851C8.40419 19.621 8.88042 18.9306 9.55116 18.4547C10.5774 17.7241 11.9122 17.6437 12.8847 18.2603C13.6628 18.7563 14.1256 19.5673 14.1591 20.499C14.1793 20.8676 14.4945 21.1492 14.8567 21.1425C15.2256 21.1291 15.514 20.814 15.5006 20.4454C15.447 19.0713 14.7561 17.8582 13.6024 17.1276C12.1805 16.2227 10.2353 16.3166 8.7731 17.3622C7.84077 18.0257 7.18345 18.9842 6.92186 20.0499L4.41329 17.5431C4.145 17.2683 4.00414 16.8997 4.01756 16.4975C4.03097 16.0753 4.21207 15.6731 4.52732 15.3581L7.22369 12.6636C7.57248 12.3151 7.69321 11.8258 7.55906 11.3566C7.41821 10.8807 7.02247 10.5121 6.52612 10.4048C6.02307 10.2976 5.57367 10.0496 5.21818 9.69434C4.64135 9.11791 4.35964 8.29348 4.44012 7.44225C4.53403 6.45696 5.08403 5.55881 5.94929 4.97568C6.97552 4.2786 8.317 4.24509 9.28286 4.88184C9.87311 5.27729 10.2621 5.84702 10.4097 6.53739C10.517 7.02668 10.8725 7.41544 11.3487 7.55619C11.8115 7.69695 12.3146 7.5629 12.6634 7.22106L13.978 5.90734C14.2396 5.64594 14.2396 5.22367 13.978 4.96227C13.7164 4.70087 13.2939 4.70087 13.0323 4.96227L11.7176 6.26258C11.4963 5.24378 10.8926 4.35903 10.0274 3.7759C8.61883 2.82413 6.68039 2.86434 5.19806 3.86304C3.99744 4.67406 3.2395 5.93415 3.10535 7.3149C2.99133 8.56829 3.41389 9.78147 4.27244 10.6394C4.80903 11.1756 5.48648 11.5443 6.27124 11.7185L3.57487 14.413C3.01816 14.9626 2.6962 15.6865 2.66937 16.4506C2.63584 17.2281 2.91755 17.952 3.45414 18.4882L5.9627 20.995Z"
      />
    </AccessibleSvg>
  )
}

export const PuzzlePiece = styled(PuzzlePieceSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
}))``