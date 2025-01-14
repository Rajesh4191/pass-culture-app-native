import React from 'react'
import { openInbox } from 'react-native-email-link'

import { contactSupport } from 'features/auth/helpers/contactSupport'
import { usePreviousRoute, openUrl } from 'features/navigation/helpers'
import { analytics } from 'libs/analytics'
import { act, fireEvent, render, screen } from 'tests/utils'

import { SignupConfirmationEmailSent } from './SignupConfirmationEmailSentV2'

const mockUsePreviousRoute = usePreviousRoute as jest.MockedFunction<typeof usePreviousRoute>
jest.mock('features/navigation/helpers')
const mockedOpenUrl = openUrl as jest.MockedFunction<typeof openUrl>

describe('<SignupConfirmationEmailSent />', () => {
  beforeEach(() => {
    mockUsePreviousRoute.mockReturnValue({ name: 'SomeScreen', key: 'key' })
  })

  it('should open faq webpage when clicking on consult help support', async () => {
    render(<SignupConfirmationEmailSent email="john.doe@gmail.com" />)

    const consultHelpSupportButton = screen.getByText('Consulter notre centre d’aide')
    await act(async () => fireEvent.press(consultHelpSupportButton))

    expect(analytics.logHelpCenterContactSignupConfirmationEmailSent).toBeCalledTimes(1)
    expect(mockedOpenUrl).toBeCalledWith(
      contactSupport.forSignupConfirmationEmailNotReceived.url,
      contactSupport.forSignupConfirmationEmailNotReceived.params,
      true
    )
  })

  it('should open mail app when clicking on check email button', () => {
    render(<SignupConfirmationEmailSent email="john.doe@gmail.com" />)

    const checkEmailsButton = screen.getByText('Consulter mes e-mails')
    fireEvent.press(checkEmailsButton)

    expect(openInbox).toHaveBeenCalledTimes(1)
  })

  it('should log analytics when clicking on check email button', async () => {
    render(<SignupConfirmationEmailSent email="john.doe@gmail.com" />)

    const checkEmailsButton = screen.getByText('Consulter mes e-mails')
    await act(async () => fireEvent.press(checkEmailsButton))

    expect(analytics.logEmailConfirmationConsultEmailClicked).toHaveBeenCalledTimes(1)
  })
})
