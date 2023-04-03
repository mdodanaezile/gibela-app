import {AuthParamList} from "../types/types.type";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/login.screen";

const AuthStack = createNativeStackNavigator<AuthParamList>();

const AuthNavigation = (): JSX.Element => {
    return(
        <AuthStack.Navigator initialRouteName='Login'>
            <AuthStack.Screen name={'Login'} component={LoginScreen} options={{ headerShown: false }}/>
        </AuthStack.Navigator>
    );
}
export default AuthNavigation;
