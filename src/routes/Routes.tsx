import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../pages/Home";
import ShowInfor from "../pages/ShowInfor";

export default function Router() {
    const Stack = createNativeStackNavigator();


    const routerOpcionts = {        
        headerShown:false
    }

    return (  
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={routerOpcionts} />
                <Stack.Screen name="Details" component={ShowInfor}  options={routerOpcionts}/>
            </Stack.Navigator>            
        </NavigationContainer>
    );
}

