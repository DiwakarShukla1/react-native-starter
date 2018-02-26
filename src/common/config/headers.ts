import Colors from "./colors";

export function headers (title) {
    return ({
        headerTitle: title,
        headerStyle: { backgroundColor: Colors.colorPrimary },
        headerTitleStyle : { color : Colors.white },
        headerTintColor : Colors.white
    });
}