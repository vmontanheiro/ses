import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
} from 'react-native';

import {useTranslation} from 'react-i18next';
import useSign from '../hooks/useSign';
import theme from '../theme';
import BACKGROUND_IMG from '../../assets/img/background-login.png';
import LOGO_SIGNIN from '../../assets/img/logo-signin.png';
import GOOGLE from '../../assets/img/google.png';

const SignInScreen = () => {
  const {t} = useTranslation(`sign`);
  const {handleGoogleSignIn} = useSign();

  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <ImageBackground style={styles.imgBackground} resizeMode="cover" source={BACKGROUND_IMG}>
          <View
            style={{
              flex: 0.07,
              // backgroundColor: `red`,
              justifyContent: `flex-end`,
              alignItems: `center`,
            }}>
            <Image source={LOGO_SIGNIN} />
          </View>

          <View
            style={{
              backgroundColor: theme.color.blue1,
              flex: 0.15,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              padding: 10,
              alignItems: `center`,
              justifyContent: `flex-start`,
            }}>
            {/* <Text style={{color: theme.color.white, fontSize: 22, fontWeight: `bold`}}>
              {t(`join`)}
            </Text> */}
            <View style={styles.body}>
              <TouchableHighlight
                style={{
                  backgroundColor: `white`,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 5,
                }}
                onPress={handleGoogleSignIn}>
                <View
                  style={{justifyContent: `center`, alignItems: `center`, flexDirection: `row`}}>
                  <Image source={GOOGLE} width={60} height={60} />

                  <Text style={{marginLeft: 5, fontSize: 16}}>Entrar com o Google</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
      <View style={styles.borderEffect} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: theme.color.white,
  },
  container: {
    flexGrow: 1,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  body: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },
  imgBackground: {
    width: `100%`,
    height: `80%`,
    flex: 1,
    flexDirection: `column`,
    justifyContent: `space-between`,
  },
});

export default SignInScreen;
