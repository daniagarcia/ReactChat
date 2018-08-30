'use strict'

import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight,Alert,StyleSheet} from 'react-native';

class LoginView extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>LOGIN CHAT</Text>
                    <TouchableHighlight onPress={(this.OnLogin.bind(this))} style={styles.boton}>
                     <Text style={styles.textobonton}>LOGIN</Text>   
                    </TouchableHighlight>
            </View> 

        )
    }

    OnLogin(){
        Alert.alert(
            'Acceso',
            'te has logeado'
            [
                {
                    text:'Aceptar',
                    onPress:(this.aceptar.bind(this))
                },
                {
                    text:'Cancelar',
                    onPress:(this.cancelar.bind(this))

                }
            ]
        )
    }
    aceptar(){
        console.log('Login aceptado')
    }
    cancelar(){
        console.log('Login cancelado')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',        
      },
    boton:{
        width:300,
        height:30,
        backgroundColor:'blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:60,
        marginBottom:10,
        borderRadius:8,
        borderWidth:1     
     },
    textobonton:{
        color:'white'

    },
    title:{
        marginTop:50,
        fontSize:25
    }
})

module.exports =  LoginView