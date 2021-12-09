import { t } from '@lingui/macro'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import styled, { useTheme } from 'styled-components/native'

import { openUrl } from 'features/navigation/helpers'
import { UseNavigationType } from 'features/navigation/RootNavigator'
import { ButtonPrimary } from 'ui/components/buttons/ButtonPrimary'
import { ButtonTertiaryBlack } from 'ui/components/buttons/ButtonTertiaryBlack'
import { AppModal } from 'ui/components/modals/AppModal'
import { OrSeparator } from 'ui/components/OrSeparator'
import { ArrowPrevious } from 'ui/svg/icons/ArrowPrevious'
import { Close } from 'ui/svg/icons/Close'
import { EditPen } from 'ui/svg/icons/EditPen'
import { InfoPlain } from 'ui/svg/icons/InfoPlain'
import { Typo, getSpacing } from 'ui/theme'

const FAQ_EDUCONNECT_URL =
  'https://aide.passculture.app/fr/articles/5707982-jeune-15-17-ans-ou-trouver-mes-identifiants-educonnect'

interface FastEduconnectConnectionRequestModalProps {
  visible: boolean
  hideModal: () => void
}

export const FastEduconnectConnectionRequestModal: React.FC<FastEduconnectConnectionRequestModalProps> =
  ({ visible, hideModal }) => {
    const { colors } = useTheme()
    const { navigate } = useNavigation<UseNavigationType>()
    return (
      <AppModal
        title={t`Identifie-toi en 2 minutes`}
        visible={visible}
        leftIconAccessibilityLabel={'leftIconButton'}
        leftIcon={ArrowPrevious}
        onLeftIconPress={hideModal}
        rightIconAccessibilityLabel={'rightIconButton'}
        rightIcon={Close}
        onRightIconPress={hideModal}>
        <MainContent color={colors.greyDark}>
          {t`Tu peux vérifier ton identité en moins de 2 minutes en utilisant ton compte ÉduConnect. Si tu n'as pas d'identifiants ÉduConnect rapproche toi de ton établissement. `}
        </MainContent>

        <TextQuestion
          onPress={() => openUrl(FAQ_EDUCONNECT_URL)}
          icon={InfoPlain}
          title={t`C’est quoi ÉduConnect ?`}
        />

        <ButtonPrimary
          title={t`Identification avec ÉduConnect`}
          onPress={() => {
            hideModal()
            navigate('IdentityCheckEduConnect')
          }}
        />

        <OrSeparator />

        <ButtonTertiaryBlack
          icon={EditPen}
          title={t`Identification manuelle`}
          onPress={() => {
            hideModal()
            navigate('IdentityCheckStart')
          }}
        />
        <DurationInfoText color={colors.greyDark}>{t`Environ 3 heures`}</DurationInfoText>
      </AppModal>
    )
  }

const MainContent = styled(Typo.Body)({
  textAlign: 'center',
})

const DurationInfoText = styled(Typo.Body)({
  textAlign: 'center',
})

const TextQuestion = styled(ButtonTertiaryBlack)({
  marginBottom: getSpacing(4),
})
