import { t } from '@lingui/macro'
import React from 'react'
import styled from 'styled-components/native'

import { navigateToHome } from 'features/navigation/helpers'
import { ButtonPrimaryWhite } from 'ui/components/buttons/ButtonPrimaryWhite'
import { GenericInfoPage } from 'ui/components/GenericInfoPage'
import { ProfileDeletionIllustrationDeprecated as ProfileDeletionLight } from 'ui/svg/icons/ProfileDeletionIllustration_deprecated'
import { Spacer, Typo } from 'ui/theme'

export function DeleteProfileSuccess() {
  return (
    <GenericInfoPage
      title={t`Compte désactivé`}
      icon={ProfileDeletionLight}
      buttons={[
        <ButtonPrimaryWhite key={1} title={t`Retourner à l'accueil`} onPress={navigateToHome} />,
      ]}>
      <StyledBody>{t`Tu as 30 jours pour te rétracter par e-mail à\u00a0: support@passculture.app`}</StyledBody>
      <Spacer.Column numberOfSpaces={4} />
      <StyledBody>{t`Une fois ce délai écoulé, ton compte pass Culture sera définitivement supprimé.`}</StyledBody>
    </GenericInfoPage>
  )
}

const StyledBody = styled(Typo.Body)(({ color, theme }) => ({
  color: color ?? theme.colors.white,
  textAlign: 'center',
}))
