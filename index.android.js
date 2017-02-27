import React, { Component } from 'react'
import {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    Dimensions,
    TouchableHighlight,
    Modal,
    ViewPagerAndroid
}   from 'react-native'
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window')

// const width = 720
// const height = 1280
const styles = {
    wrapper: {
        // backgroundColor: '#f00'
    },
    wrapper_2:{
        
    },

    slide: {
       
        backgroundColor: 'transparent'
    },

    slide_1: {
        
        backgroundColor: 'transparent'
    },

    image: {
        width,
        height,
       
    }

}

const INNER_SWIPER_HEIGHT = 170

var swiper = React.createClass({

    componentWillMount: function(){
        this.state={
          modalVisible: false,
          modalVisible_2: false,
          innerSwiperHeight: 0
        };
    },
    // state change for Splash screen on Icon Press
    // componentWillMount: function(){
    //     this.state={modalVisible: false};
    // },

    setModalVisible: function(visible) {
        this.setState({modalVisible: visible});
    },

    // state change for Data Free toggle
    // componentWillMount: function(){
    //     this.state={modalVisible_2: false};
    // },

    setModalVisible_2: function(visible_2) {
        this.setState({modalVisible_2: visible_2});
    },

    componentDidMount: function() {
      setTimeout(() => {
        this.setState({
          innerSwiperHeight: INNER_SWIPER_HEIGHT,
        });
      }, 0);
    },
   
   // state change for Refresh Card
    // componentWillMount: function(){
    //     this.state={modalVisible_3: false};
    // },

    // setModalVisible_3: function(visible_3) {
    //     this.setState({modalVisible_3: visible_3});
    // },
    
    // iconLongPress: function() {
    //         alert ("Long press working");    
    // },


    render: function() {
        return (
            <View>
                <StatusBar backgroundColor="#66A29C" barStyle="light-content" />
                <Image style={{height:640}} source={require('./img/AppScreen_1.png')}>
                    <Swiper style={styles.wrapper}
                        dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 8, height: 8, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                    
                        activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
             

                        paginationStyle={{
                            bottom:140
                        }}
                        loop={false}>

                          
                    <View style={styles.slide} style={{backgroundColor: "#00423c"}}>
                        <Image style={{height: 650, width:360}} source={require('./img/ServicesScreenBG.png')}> 
                            <Modal
                              animationType={"none"}
                              transparent={true}
                              visible={this.state.modalVisible_2}
                              onRequestClose={() => {alert("App will now exit")}}
                              >
                                 <View>
                                      <View>
                                            <TouchableHighlight onPress={() => {
                                                    this.setModalVisible_2(!this.state.modalVisible_2)
                                                }} underlayColor='#003732' style={{backgroundColor: "#00423c"}}>
                                            <Image style={{marginLeft:20, marginTop:15, marginBottom:15}} source={require('./img/HeaderDataFree.png')}/>
                                            </TouchableHighlight>
                                            <Image style={{left:0,top:0, width: 360 }} source={require('./img/DataFreeScreen.png')} />

                                      </View>
                                 </View>
                            </Modal>

                            <TouchableHighlight underlayColor='rgba(255,255,255,.01)' onPress={()=>this.setModalVisible_2(true)}>
                                <Image style={{marginLeft:20, marginTop:15, marginBottom:20}} source={require('./img/HeaderServiceScreen.png')} />
                            </TouchableHighlight> 


                            <ScrollView style={{marginTop:-10}}>
                                    <Swiper style={styles.wrapper_2}
                                        dot={<View style={{backgroundColor: '#d1d3d4', width: 7, height: 7, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                                    
                                        activeDot={<View style={{backgroundColor: '#b1b3b6', width: 7, height: 7, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                                        
                                         paginationStyle={{
                                            bottom: 0
                                        }}

                                        height= {this.state.innerSwiperHeight}
                                       
                                        loop={true}>

                                        <View style={styles.slide_1} ><Image style={{marginLeft:10, marginTop:20}} source={require('./img/CommChannelCard_4.png')} /></View>
                                        
                                        <View style={styles.slide_1} ><Image style={{marginLeft:10, marginTop:20}} source={require('./img/CommChannelCard_2.png')} /></View>
                                        
                                        <View style={styles.slide_1} ><Image style={{marginLeft:10, marginTop:20}} source={require('./img/CommChannelCard_3.png')} /></View>

                                        <View style={styles.slide_1} ><Image style={{marginLeft:10, marginTop:20}} source={require('./img/CommChannelCard_1.png')} /></View>

                                    </Swiper>

                                    <Modal
                                      animationType={"slide"}
                                      transparent={false}
                                      visible={this.state.modalVisible}
                                      onRequestClose={() => {alert("App will now exit")}}
                                      >
                                         <View>
                                              <View>
                                                    <TouchableHighlight style={{width:50}} onPress={() => {
                                                            this.setModalVisible(!this.state.modalVisible)
                                                        }} underlayColor="#fff">
                                                    <Image style={{margin: 20}} source={require('./img/BackIconSplashScreen.png')}/>
                                                    </TouchableHighlight>
                                                    <Image style={{left:50,top:0 }} source={require('./img/SplashScreen.png')} />

                                              </View>
                                         </View>
                                    </Modal>
                                     <TouchableHighlight underlayColor='rgba(255,255,255,.01)' style={{}} onPress={()=>this.setModalVisible(true)} onLongPress={this.iconLongPress}>
                                        <Image id="myImage" style={{marginLeft:12, marginTop:10, marginBottom:50}} source={require('./img/ServicesIconSet.png')} />
                                    </TouchableHighlight> 

                            </ScrollView> 
                        </Image> 
                    </View>  

                                             
                        <View style={styles.slide}>
                            <TouchableHighlight underlayColor='rgba(255,255,255,.01)' style={{}} onPress={()=>this.setModalVisible(true)} onLongPress={this.iconLongPress}>
                                <Image style={{marginLeft:20, marginRight:20, marginTop: 30}}source={require('./img/HomeScreen.png')} />
                            </TouchableHighlight>
                        </View>
                      

                        <View style={styles.slide}>
                            <TouchableHighlight underlayColor='rgba(255,255,255,.01)' style={{}} onPress={()=>this.setModalVisible(true)} onLongPress={this.iconLongPress}>
                                <Image style={{margin: 25}} source={require('./img/GoogleScreen.png')} />
                            </TouchableHighlight>
                        </View>

                    </Swiper>
                </Image>
            </View>
        )
    }
})

AppRegistry.registerComponent('swiperProject', () => swiper);


