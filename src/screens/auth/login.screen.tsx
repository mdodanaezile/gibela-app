import {StyleSheet, ImageBackground, ScrollView, View, Text, TouchableOpacity, Dimensions} from "react-native";
import * as React from "react";
import {Button, Snackbar, TextInput} from "react-native-paper";
import Theme from "../../shared/theme/theme";

const LoginScreen = (): JSX.Element => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [unauthorized, setUnauthorized] = React.useState(false);

    const clickLogin = async () => {};

    return(
        <><ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={require('../../assets/images/logo/logo.jpeg')}
                style={styles.image}>
            </ImageBackground>

            <View style={styles.bottomView}>
                <View style={{padding: 40}}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <View style={styles.formInputs}>
                        <TextInput
                            label="Email Address"
                            value={email}
                            mode='outlined'
                            onChangeText={text => setEmail(text)}
                            keyboardType={'email-address'}
                            style={{backgroundColor: '#ffffff', borderColor: Theme.colors.secondary}}
                            left={<TextInput.Icon icon='email'/>}
                            autoCapitalize='none'/>

                        <TextInput
                            label="Password"
                            value={password}
                            secureTextEntry={!passwordVisible}
                            mode='outlined'
                            onChangeText={text => setPassword(text)}
                            keyboardType={'visible-password'}
                            style={{backgroundColor: '#ffffff', borderColor: Theme.colors.secondary, marginTop: 20}}
                            left={<TextInput.Icon
                                onPress={() => setPasswordVisible(!passwordVisible)}
                                icon={passwordVisible ? 'eye-off' : 'eye'}/>}
                            autoCapitalize='none'/>
                    </View>
                    <View style={styles.loginButtonView}>
                        <TouchableOpacity onPress={clickLogin}>
                            <Button buttonColor={'primary'} mode={'outlined'} style={styles.loginButton}>
                                <Text style={styles.loginText}>Login</Text>
                            </Button>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView><View>
            <Snackbar style={{ backgroundColor: Theme.colors.primary }}
                      visible={unauthorized}
                      onDismiss={() => setUnauthorized(false)}
                      action={{
                          label: 'OK',
                          onPress: () => {
                              // Do something
                          },
                      }}>
                Wrong email or password, please try again...
            </Snackbar>
        </View></>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    image: {
        height: Dimensions.get('window').height / 2.5,
        backgroundColor: '#0F172A'
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#ffffff',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    welcomeText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    formInputs: {
        marginTop: 50
    },
    loginButtonView: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        alignSelf: 'center',
        backgroundColor: Theme.colors.primary,
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        borderColor: Theme.colors.primary
    },
    loginText: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
});
export default LoginScreen;
