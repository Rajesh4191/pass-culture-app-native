import { t } from '@lingui/macro'
import React from 'react'
import styled from 'styled-components/native'

import { accessibilityAndTestId } from 'libs/accessibilityAndTestId'
import { analytics } from 'libs/analytics'
import { ButtonPrimaryWhite } from 'ui/components/buttons/ButtonPrimaryWhite'
import { TouchableLink } from 'ui/components/touchableLink/TouchableLink'
import { HeaderBackground } from 'ui/svg/HeaderBackground'
import { getSpacing, Spacer, Typo } from 'ui/theme'
import { getHeadingAttrs } from 'ui/theme/typographyAttrs/getHeadingAttrs'
export function LoggedOutHeader() {
  return (
    <Container>
      <Spacer.TopScreen />
      <HeaderBackground height="100%" />
      <Spacer.Column numberOfSpaces={6} />
      <HeaderContent>
        <Title>{t`Profil`}</Title>
        <Spacer.Column numberOfSpaces={7} />
        <Description>
          {t`Tu as entre 15 et 18 ans\u00a0? Crée-toi un compte pour bénéficier de ton crédit pass Culture`}
        </Description>
        <Spacer.Column numberOfSpaces={8} />
        <TouchableLink
          as={ButtonPrimaryWhite}
          testID="S'inscrire"
          wording={t`S'inscrire`}
          navigateTo={{ screen: 'SignupForm', params: { preventCancellation: true } }}
          onPress={() => {
            analytics.logProfilSignUp()
          }}
        />
        <Spacer.Column numberOfSpaces={5} />
        <LoginCta>
          <Body>{t`Tu as déjà un compte\u00a0?` + '\u00a0'}</Body>
          <TouchableLink
            navigateTo={{ screen: 'Login', params: { preventCancellation: true } }}
            {...accessibilityAndTestId(t`Connecte-toi`)}>
            <ButtonText>{t`Connecte-toi`}</ButtonText>
          </TouchableLink>
        </LoginCta>
        <Spacer.Column numberOfSpaces={7} />
      </HeaderContent>
    </Container>
  )
}

const Container = styled.View({
  overflow: 'hidden',
})

const HeaderContent = styled.View({
  alignItems: 'center',
  paddingHorizontal: getSpacing(5),
  width: '100%',
})

const LoginCta = styled.View({
  flexDirection: 'row',
})

const Description = styled(Typo.Body)(({ theme }) => ({
  textAlign: 'center',
  color: theme.colors.white,
}))

const Title = styled(Typo.Title4).attrs(() => getHeadingAttrs(1))(({ theme }) => ({
  color: theme.colors.white,
}))

const Body = styled(Typo.Body)(({ theme }) => ({
  color: theme.colors.white,
}))

const ButtonText = styled(Typo.ButtonText)(({ theme }) => ({
  color: theme.colors.white,
}))
