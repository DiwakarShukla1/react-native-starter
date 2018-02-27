import { StackNavigator } from "react-navigation";
import { Login, Registration, ForgotPassword, ResetPassword} from "./modules/auth";
import ProfileWizard from './modules/profile';

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
    },
    ProfileWizard : {
        screen: ProfileWizard
    }
});

export default RootStack;