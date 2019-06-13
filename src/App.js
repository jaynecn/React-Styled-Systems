import React from 'react';
import { View } from './components/~reusables/atoms/View';
import {Card} from './components/~reusables/atoms/Card';
import {Container} from './components/~reusables/atoms/Container';
import {H3} from './components/~reusables/atoms/Text';
import {Text} from './components/~reusables/atoms/Text';
import {Button} from './components/~reusables/atoms/Buttons';
import {ButtonPrimary} from './components/~reusables/atoms/Buttons';
import {Form} from './components/~reusables/molecules/Form';
import {Input} from './components/~reusables/atoms/Inputs';
import {SmallText} from './components/~reusables/atoms/Text';
import { theme_secondary, theme_primary } from './components/~reusables/variables/colors';
import { medium_space, extra_large_space, normal_space } from './components/~reusables/variables/spacing';
import { desktop_width } from './components/~reusables/variables/media-queries';


function App() {
  return (
    <View hCenter vCenter bgColor={theme_secondary}>
      <Card nopadding fullWidth maxWidth={desktop_width} margin={normal_space}>
        <Container padding={medium_space} vCenter column width="35%" bgColor={theme_primary}>
          <H3 light>Welcome Back!</H3>
          <Text light>To keep connected with us please login with your personal info.</Text>
          <Button>Sign In</Button>
        </Container>
        <Container column vCenter width="65%" padding={[medium_space, extra_large_space]}>
          <H3 color={theme_secondary}>Create Account</H3>
          <SmallText>or use your email for registration</SmallText>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Name"/>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <ButtonPrimary>Sign Up</ButtonPrimary>
          </Form>
        </Container>
      </Card>
    </View>
  );
}

export default App;
