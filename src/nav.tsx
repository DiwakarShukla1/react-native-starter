import { StackNavigator } from "react-navigation";
import { Login, Registration, ForgotPassword, ResetPassword} from "./modules/auth";
import PlayGround from './playGround';

const RootStack = StackNavigator({
    
    Login: {
        screen: Login,
    },
    Registration : {
        screen : Registration
    },
    ForgotPassword : {
        screen:ForgotPassword
    },
    ResetPassword : {
        screen:ResetPassword
    }
});

export default RootStack;