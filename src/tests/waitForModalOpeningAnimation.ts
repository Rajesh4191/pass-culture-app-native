import { AccessibilityRole } from 'libs/accessibilityRole/accessibilityRole'
import { screen, waitFor } from 'tests/utils'

export const waitForModalOpeningAnimation = async () => {
  await waitFor(() => {
    // We are searching for the translateY to be 0 to finish the animation of the modal in the snapshot
    expect(screen.getAllByRole(AccessibilityRole.DIALOG)[1]).toHaveStyle({
      transform: [{ translateY: 0 }],
    })
  })
}
