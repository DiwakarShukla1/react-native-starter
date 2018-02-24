import { StackNavigator } from "react-navigation";
import { Login, Registration } from "./modules/auth";

const RootStack = StackNavigator({
    Login: {
        screen: Login,
    },
    Registration : {
        screen : Registration
    }
});

export default RootStack;