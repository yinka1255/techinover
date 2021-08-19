import React, { Component  } from 'react';
import { AppState, View, Share, Text, Alert, Image, Button,ActivityIndicator,PermissionsAndroid, TextInput,BackHandler, StyleSheet, Linking, ScrollView, ImageBackground, StatusBar, TouchableOpacity, AsyncStorage } from 'react-native';
import {NavigationActions} from 'react-navigation';
import styles from './Style';

export class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      
    }
    console.log('entered');
    
  }

  static navigationOptions = {
    header: null
  }


  render () {
      return (
        <View style={styles.body}>
           <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}  />
          <View style={styles.container}>
            
            <TextInput
                style={styles.searchInput}
                placeholder="Search"
                onChangeText={(text) => this.setState({searchText: text})}
                underlineColorAndroid="transparent"
                value={this.state.searchText}
                autoCapitalize = "none"
            />

            <View style={styles.categoriesView}>
              <Text style={styles.categoriesHeaderText}>Categories</Text>
              <View style={styles.categoriesListView}>
                  <View style={styles.categoriesList}>
                    <Text style={styles.categoriesListText}>All</Text>
                  </View>
                  <View style={styles.categoriesList2}>
                    <Text style={styles.categoriesListText2}>Food</Text>
                  </View>
                  <View style={styles.categoriesList3}>
                    <Text style={styles.categoriesListText3}>Drink</Text>
                  </View>
              </View>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.topLinkView}>
              <View style={styles.linkCol1}>
                <Text style={styles.colText1}>Left</Text>
              </View>
              <View style={styles.linkCol2}>
                <Text style={styles.colText2}>Right</Text>
              </View>
            </View>

            {/* <Image source = {require('./imgs/no.png')} style = {styles.noImage} ></Image>*/}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.mb}>
                <View style={styles.productView}>
                  <View style={styles.productAuthorView}>
                    <View style={styles.product1}>
                      <Image source = {require('../assets/imgs/user1.png')} style = {styles.userImage} ></Image>
                      <Text style={styles.authorName}>Calum Lewis</Text>
                    </View>
                    <View style={styles.product1}>
                      <Image source = {require('../assets/imgs/user2.png')} style = {styles.userImage} ></Image>
                      <Text style={styles.authorName}>Elif Sonas</Text>
                    </View>
                  </View>
                  <View style={styles.productImageView}>
                    <View style={styles.productImage1}>
                      <Image source = {require('../assets/imgs/food1.png')} style = {styles.foodImage1} ></Image>
                      <Text style={styles.productText1}>Pancakes</Text>
                      <Text style={styles.productText2}>Food {`>`} 60 mins</Text>
                    </View>
                    <View style={styles.productImage1}>
                      <Image source = {require('../assets/imgs/food2.png')} style = {styles.foodImage2} ></Image>
                      <Text style={styles.productText1}>Salad</Text>
                      <Text style={styles.productText2}>Food {`>`} 60 mins</Text>
                    </View>
                  </View>

                </View>
                <View style={styles.productView}>
                  <View style={styles.productAuthorView}>
                    <View style={styles.product1}>
                      <Image source = {require('../assets/imgs/user1.png')} style = {styles.userImage} ></Image>
                      <Text style={styles.authorName}>Calum Lewis</Text>
                    </View>
                    <View style={styles.product1}>
                      <Image source = {require('../assets/imgs/user2.png')} style = {styles.userImage} ></Image>
                      <Text style={styles.authorName}>Elif Sonas</Text>
                    </View>
                  </View>
                  <View style={styles.productImageView}>
                    <View style={styles.productImage1}>
                      <Image source = {require('../assets/imgs/food1.png')} style = {styles.foodImage1} ></Image>
                      <Text style={styles.productText1}>Pancakes</Text>
                      <Text style={styles.productText2}>Food {`>`} 60 mins</Text>
                    </View>
                    <View style={styles.productImage1}>
                      <Image source = {require('../assets/imgs/food2.png')} style = {styles.foodImage2} ></Image>
                      <Text style={styles.productText1}>Salad</Text>
                      <Text style={styles.productText2}>Food {`>`} 60 mins</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.tabView}>
            <View style={styles.tabHomeView}>
              <TouchableOpacity>
                <Image style={styles.tabIcon1} source={require("../assets/imgs/home.png")} />
                <Text style={styles.iconText1}>Home</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabUploadView}>
              <TouchableOpacity>
                <Image style={styles.tabIcon2} source={require("../assets/imgs/upload.png")} />
                <Text style={styles.iconText}>Upload</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabScanView}>
              <View style={styles.scanIconView}>
                <TouchableOpacity  >
                  <Image style={styles.tabIcon5} source={require("../assets/imgs/scan.png")} />
                  
                </TouchableOpacity>
              </View>
              <Text style={styles.iconText5}>Scan</Text>
            </View>
            <View style={styles.tabNotificationView}>
              <TouchableOpacity>
                <Image style={styles.tabIcon3} source={require("../assets/imgs/notification.png")} />
                <Text style={styles.iconText}>Notification</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabProfileView}>
              <TouchableOpacity>
                <Image style={styles.tabIcon4} source={require("../assets/imgs/profile.png")} />
                <Text style={styles.iconText}>Profile</Text>
              </TouchableOpacity>
            </View>
            
        </View>
        </View>
      )
  }

}
export default Home