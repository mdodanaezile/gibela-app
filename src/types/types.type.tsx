import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {NavigatorScreenParams} from "@react-navigation/native";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>

export type AuthParamList = {
    Login: undefined;
};

export type RootStackParamList = {};
