import React from 'react'

import { navigate } from '__mocks__/@react-navigation/native'
import { analytics } from 'libs/analytics'
import { mockServer } from 'tests/mswServer'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { render, fireEvent, waitFor } from 'tests/utils'
import { theme } from 'theme'
import { showSuccessSnackBar } from 'ui/components/snackBar/__mocks__/SnackBarContext'
import { SNACK_BAR_TIME_OUT, useSnackBarContext } from 'ui/components/snackBar/SnackBarContext'

import { ChangePassword } from './ChangePassword'

const mockedUseSnackBarContext = useSnackBarContext as jest.Mock

const mockshowSuccessSnackBar = jest.fn()
jest.mock('ui/components/snackBar/SnackBarContext', () => ({
  useSnackBarContext: jest.fn(() => ({
    showSuccessSnackBar: mockshowSuccessSnackBar,
  })),
}))

function renderChangePassword() {
  // eslint-disable-next-line local-rules/no-react-query-provider-hoc
  const wrapper = render(reactQueryProviderHOC(<ChangePassword />))
  return wrapper
}

describe('ChangePassword', () => {
  it('should enable the submit button when passwords are equals and filled and current password is correct', async () => {
    const { getByPlaceholderText, getByTestId } = renderChangePassword()

    const currentPasswordInput = getByPlaceholderText('Ton mot de passe actuel')
    const passwordInput = getByPlaceholderText('Ton nouveau mot de passe')
    const confirmationInput = getByPlaceholderText('Confirmer le mot de passe')

    fireEvent.changeText(currentPasswordInput, 'user@Dfdf56Moi')
    fireEvent.changeText(passwordInput, 'user@AZERTY123')
    fireEvent.changeText(confirmationInput, 'user@AZERTY123')

    await waitFor(() => {
      const continueButton = getByTestId('Enregistrer les modifications')
      expect(continueButton).toBeEnabled()
    })
  })

  it('should display the matching error when the passwords dont match', async () => {
    const { getByPlaceholderText, getByText } = renderChangePassword()

    const passwordInput = getByPlaceholderText('Ton nouveau mot de passe')
    const confirmationInput = getByPlaceholderText('Confirmer le mot de passe')

    fireEvent.changeText(passwordInput, '123456')

    fireEvent.changeText(confirmationInput, '123456--')

    await waitFor(() => {
      const notMatchingErrorText = getByText('Les mots de passe ne concordent pas')
      const color = notMatchingErrorText.props.style[0].color
      expect(color).toEqual(theme.colors.error)
    })
  })

  it('should display success snackbar and navigate to Profile when the password is updated', async () => {
    mockServer.post('/native/v1/change_password', {})

    mockedUseSnackBarContext.mockImplementationOnce(() => ({
      showSuccessSnackBar,
    }))
    const { getByPlaceholderText, getByTestId } = renderChangePassword()

    const currentPasswordInput = getByPlaceholderText('Ton mot de passe actuel')
    const passwordInput = getByPlaceholderText('Ton nouveau mot de passe')
    const confirmationInput = getByPlaceholderText('Confirmer le mot de passe')

    fireEvent.changeText(currentPasswordInput, 'user@Dfdf56Moi')
    fireEvent.changeText(passwordInput, 'user@AZERTY123')
    fireEvent.changeText(confirmationInput, 'user@AZERTY123')

    await waitFor(() => {
      fireEvent.press(getByTestId('Enregistrer les modifications'))
      expect(mockshowSuccessSnackBar).toHaveBeenCalledWith({
        message: 'Ton mot de passe est modifié',
        timeout: SNACK_BAR_TIME_OUT,
      })
      expect(navigate).toHaveBeenCalledWith('TabNavigator', { screen: 'Profile' })
      expect(analytics.logHasChangedPassword).toHaveBeenCalledWith('changePassword')
    })
  })

  it('display error when the password failed to updated', async () => {
    mockServer.post('/native/v1/change_password', {
      responseOptions: { statusCode: 400, data: {} },
    })

    const { getByPlaceholderText, getByTestId, getByText } = renderChangePassword()

    const currentPasswordInput = getByPlaceholderText('Ton mot de passe actuel')
    const passwordInput = getByPlaceholderText('Ton nouveau mot de passe')
    const confirmationInput = getByPlaceholderText('Confirmer le mot de passe')

    fireEvent.changeText(currentPasswordInput, 'user@Dfdf56Moi')
    fireEvent.changeText(passwordInput, 'user@AZERTY123')
    fireEvent.changeText(confirmationInput, 'user@AZERTY123')

    await waitFor(() => {
      const continueButton = getByTestId('Enregistrer les modifications')
      fireEvent.press(continueButton)
      expect(getByText('Mot de passe incorrect')).toBeTruthy()
    })
  })
})
