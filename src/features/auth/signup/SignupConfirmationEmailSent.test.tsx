import { StackScreenProps } from '@react-navigation/stack'
import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { Alert, Linking } from 'react-native'
import { openInbox } from 'react-native-email-link'
import waitForExpect from 'wait-for-expect'

import { useNavigation } from '__mocks__/@react-navigation/native'
import { RootStackParamList } from 'features/navigation/RootNavigator'

import { SignupConfirmationEmailSent } from './SignupConfirmationEmailSent'

describe('<SignupConfirmationEmailSent />', () => {
  it('should go back to accept CGUs page when clicking on left icon of modal header', async () => {
    const { findByTestId } = renderPage()

    const leftIconButton = await findByTestId('leftIconButton')
    fireEvent.press(leftIconButton)

    await waitForExpect(() => {
      expect(Alert.alert).toHaveBeenCalledTimes(1)
    })
  })

  it('should go to home page when clicking on right icon', async () => {
    const { navigate } = useNavigation()
    const { findByTestId } = renderPage()

    const rightIconButton = await findByTestId('rightIconButton')
    fireEvent.press(rightIconButton)

    await waitForExpect(() => {
      expect(navigate).toHaveBeenCalledTimes(1)
      expect(navigate).toHaveBeenCalledWith('Home', { shouldDisplayLoginModal: false })
    })
  })

  it('should open mail app when clicking on contact support button', async () => {
    jest.spyOn(Linking, 'canOpenURL').mockResolvedValue(true)

    const { findByText } = renderPage()

    const contactSupportButton = await findByText('Contacter le support')
    fireEvent.press(contactSupportButton)

    await waitForExpect(() => {
      expect(Linking.openURL).toHaveBeenCalledWith('mailto:support@test.passculture.app')
    })
  })

  it('should open mail app when clicking on check email button', async () => {
    const { findByText } = renderPage()

    const checkEmailsButton = await findByText('Consulter mes e-mails')
    fireEvent.press(checkEmailsButton)

    await waitForExpect(() => {
      expect(openInbox).toHaveBeenCalled()
    })
  })
})

function renderPage() {
  const navigationProps = {
    route: { params: { email: 'john.doe@gmail.com' } },
  } as StackScreenProps<RootStackParamList, 'SignupConfirmationEmailSent'>
  return render(<SignupConfirmationEmailSent {...navigationProps} />)
}
