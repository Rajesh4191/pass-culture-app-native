import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import styled, { useTheme } from 'styled-components/native'

import { extractApiErrorMessage } from 'api/apiHelpers'
import { MaintenancePageType, SubscriptionStep } from 'api/gen'
import { useAuthContext } from 'features/auth/context/AuthContext'
import { FastEduconnectConnectionRequestModal } from 'features/identityCheck/components/modals/FastEduconnectConnectionRequestModal'
import { QuitIdentityCheckModal } from 'features/identityCheck/components/modals/QuitIdentityCheckModal'
import { StepButton } from 'features/identityCheck/components/StepButton'
import { useSubscriptionContext } from 'features/identityCheck/context/SubscriptionContextProvider'
import { getStepState } from 'features/identityCheck/pages/helpers/getStepState'
import { useSetSubscriptionStepAndMethod } from 'features/identityCheck/pages/helpers/useSetCurrentSubscriptionStep'
import { useSubscriptionSteps } from 'features/identityCheck/pages/helpers/useSubscriptionSteps'
import { IdentityCheckStep, StepConfig } from 'features/identityCheck/types'
import { UseNavigationType } from 'features/navigation/RootNavigator/types'
import { amplitude } from 'libs/amplitude'
import { analytics } from 'libs/firebase/analytics'
import { hasOngoingCredit } from 'shared/user/useAvailableCredit'
import { useGetDepositAmountsByAge } from 'shared/user/useGetDepositAmountsByAge'
import { ButtonTertiaryBlack } from 'ui/components/buttons/ButtonTertiaryBlack'
import { Li } from 'ui/components/Li'
import { useModal } from 'ui/components/modals/useModal'
import { SNACK_BAR_TIME_OUT, useSnackBarContext } from 'ui/components/snackBar/SnackBarContext'
import { VerticalUl } from 'ui/components/Ul'
import { Invalidate } from 'ui/svg/icons/Invalidate'
import { getSpacing, Spacer, Typo } from 'ui/theme'
import { getHeadingAttrs } from 'ui/theme/typographyAttrs/getHeadingAttrs'

export const IdentityCheckStepper = () => {
  const theme = useTheme()
  const { navigate } = useNavigation<UseNavigationType>()

  const steps = useSubscriptionSteps()
  const context = useSubscriptionContext()
  const currentStep = context.step

  const { subscription } = useSetSubscriptionStepAndMethod()
  const { showErrorSnackBar } = useSnackBarContext()
  const { refetchUser, user } = useAuthContext()
  const credit = useGetDepositAmountsByAge(user?.birthDate)

  const { visible, showModal, hideModal } = useModal(false)
  const {
    visible: isEduConnectModalVisible,
    showModal: showEduConnectModal,
    hideModal: hideEduConnectModal,
  } = useModal(false)

  useEffect(() => {
    const showMaintenance = () => {
      if (subscription?.nextSubscriptionStep === SubscriptionStep.maintenance) {
        navigate('IdentityCheckUnavailable', {
          withDMS: subscription?.maintenancePageType === MaintenancePageType['with-dms'],
        })
      }
    }
    showMaintenance()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscription])

  function showQuitIdentityCheckModal() {
    if (context.step) analytics.logQuitIdentityCheck(context.step)
    showModal()
  }
  // TODO(yorickeando): this bit was done to ensure that DMS orphans did not have to go through the identity
  // check process twice if they submitted and validated through DMS before signing up on the app. In the future, after PC-14445,
  // we will prevent these users from even having to go through the Stepper process, so this extra navigation logic
  // can be removed.

  useEffect(() => {
    if (subscription?.nextSubscriptionStep === null) {
      refetchUser()
        .then(({ data: userProfile }) => {
          const hasUserOngoingCredit = userProfile ? hasOngoingCredit(userProfile) : false
          if (hasUserOngoingCredit) {
            navigate('BeneficiaryAccountCreated')
          }
        })
        .catch((error) => {
          showErrorSnackBar({
            message: extractApiErrorMessage(error),
            timeout: SNACK_BAR_TIME_OUT,
          })
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscription])

  async function navigateToStep(step: StepConfig) {
    analytics.logIdentityCheckStep(step.name)

    if (step.name === IdentityCheckStep.IDENTIFICATION && context.identification.method === null) {
      showEduConnectModal()
    }
  }

  return (
    <React.Fragment>
      <CenteredContainer>
        <Container>
          <Spacer.TopScreen />
          {theme.isDesktopViewport ? (
            <Spacer.Column numberOfSpaces={2} />
          ) : (
            <Spacer.Column numberOfSpaces={4} />
          )}

          <StyledTitle1>C’est très rapide&nbsp;!</StyledTitle1>
          <Spacer.Column numberOfSpaces={2} />
          <Typo.Body>
            Pour débloquer tes {credit} tu dois suivre les étapes suivantes&nbsp;:
          </Typo.Body>

          {theme.isDesktopViewport ? <Spacer.Column numberOfSpaces={2} /> : <Spacer.Flex />}

          <VerticalUl>
            {steps.map((step) => (
              <Li key={step.name}>
                <StepButtonContainer>
                  <StepButton
                    step={step}
                    state={getStepState(steps, step.name, currentStep)}
                    navigateTo={
                      step.name === IdentityCheckStep.IDENTIFICATION &&
                      context.identification.method === null
                        ? undefined
                        : { screen: step.screens[0] }
                    }
                    onPress={() => {
                      amplitude.logEvent('stepper_clicked', { step: step.name })
                      return navigateToStep(step)
                    }}
                  />
                </StepButtonContainer>
              </Li>
            ))}
          </VerticalUl>

          {theme.isDesktopViewport ? (
            <Spacer.Column numberOfSpaces={10} />
          ) : (
            <Spacer.Flex flex={2} />
          )}

          <ButtonTertiaryBlack
            icon={Invalidate}
            wording="Abandonner"
            onPress={showQuitIdentityCheckModal}
          />
        </Container>
      </CenteredContainer>
      <QuitIdentityCheckModal
        visible={visible}
        hideModal={hideModal}
        testIdSuffix="quit-identity-check-stepper"
      />
      <FastEduconnectConnectionRequestModal
        visible={isEduConnectModalVisible}
        hideModal={hideEduConnectModal}
      />
    </React.Fragment>
  )
}

const StyledTitle1 = styled(Typo.Title1).attrs(() => getHeadingAttrs(1))``

const CenteredContainer = styled.View({
  flex: 1,
  alignItems: 'center',
})

const Container = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  padding: getSpacing(5),
  width: '100%',
  maxWidth: theme.contentPage.maxWidth,
}))

const StepButtonContainer = styled.View({
  alignItems: 'center',
})
