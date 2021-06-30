import  React from 'react';
import { Button, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home,Profile} from './src/screen';
import 'react-native-gesture-handler';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigation.navigate('SignIn')}
      style={{color:"blue",}}>Sign in</Text>
      <Text onPress={() => navigation.navigate('SignIn')}
      style={{color:"blue",}}>CreateAccount</Text>
    </View>
  );
}
function SignIn ({navigation}) 
{
    return (
        <View>
        
            <Button title="signIn" onPress={() => navigation.navigate('SignUp',{name:"sign in page is ready"})} options={{title:"SIGN IN"}} />
            <Button title="CreateAccount"  onPress={() => navigation.navigate('SignUp')} options={{title:"Create Account"}}/>
        </View>
    );
}
const SignUp =({route}) =>
{
    return (
        <View>
          {route.params.name && <Text>{route.params.name}</Text>}
            <Button onPress={()=>navigation.navigate("signUp")}/>
        </View>
    );
}
const Stack = createStackNavigator();
const tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () =>{

  return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen}/>
        <HomeStack.Screen name="SignIn" component={SignIn}/>
        <HomeStack.Screen name="SignUp" component={SignUp}/>

      </HomeStack.Navigator>
    
  )
}
const ProfileStackScreen = () =>{

  return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={Profile}/>
      </ProfileStack.Navigator>
    
  )
}

function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name="Home" component={HomeStackScreen} />
        <tab.Screen name="profile" component={ProfileStackScreen} />
      </tab.Navigator>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
export default App;
