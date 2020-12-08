import React, { useState } from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, Button, Alert} from 'react-native';
import Firebase from '../firebaseConfig';

const Login = () => {
    const [email,setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const userSignIn = () =>{
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            Alert.alert("Login sucess");
        })
        .catch((error) => {
            Alert.alert(error.message)
        })
    }
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/user_signin.png')} style={styles.image}>
                <Text style={styles.title}>LOGIN</Text>
                <View style={styles.loginForm}>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText = {(value) =>{
                            setEmail(value)
                        }}
                    />
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        value = {password}
                        onChangeText = {(value) =>{
                            setPassword(value)
                        }}
                    />
                    <Button title="Login" color="#0e6cff" onPress={userSignIn} />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1
    },
    image: {
        height: null,
        width: null,
        top:100
    },
    loginForm:{
        margin:40,
        color:"#fff"
    },
    textinput: {
        backgroundColor: '#E8E8E8',
        padding: 10,
        marginBottom: 40,
        backgroundColor: 'rgba(255,255,255, 0.6)',
    },
    title:{
        textAlign:"center",
    }
});

export default Login;