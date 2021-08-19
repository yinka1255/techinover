import { StyleSheet } from "react-native"
import { ceil } from "react-native-reanimated"
export default styles = StyleSheet.create ({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    
  },
  container: {
      width: '90%',
      height: '100%',
      alignSelf: 'center',
      marginTop: 20,
      
  },
  searchInput: {
      backgroundColor: '#F4F5F7',
      height: 50,
      borderRadius: 25,
      width: '100%',
      paddingLeft: 25,
  },
  categoriesView: {
    marginTop: 20
  },
  categoriesHeaderText: {
      color: '#3E5481',
      fontSize: 15,
      fontWeight: '700'
  },
  categoriesListView: {
      flexDirection: 'row',
      width: '100%',
      alignContent: 'center',
      marginTop: 20,
  },
  
  categoriesList: {
      width: 70,
      //alignSelf: 'center',
      backgroundColor: '#1FCC79',
      height: 40,
      borderRadius: 20,
      marginRight: 20,
  },
  categoriesListText: {
      textAlign: 'center',
      paddingTop: 8,
      color: '#fff',
      fontWeight: '600'
  },

  categoriesList2: {
    width: 70,
    //alignSelf: 'center',
    backgroundColor: '#F4F5F7',
    height: 40,
    borderRadius: 20,
    marginRight: 20,
},
categoriesListText2: {
    textAlign: 'center',
    paddingTop: 8,
    color: '#9FA5C0',
    fontWeight: '600'
},
categoriesList3: {
    width: 70,
    //alignSelf: 'center',
    backgroundColor: '#F4F5F7',
    height: 40,
    borderRadius: 20,
},
categoriesListText3: {
    textAlign: 'center',
    paddingTop: 8,
    color: '#9FA5C0',
    fontWeight: '600'
},

divider: {
    marginTop: 25,
    height: 8,
    backgroundColor: '#F4F5F7',
    marginLeft: -20,
    marginRight: -20
},
topLinkView: {
    height: 60,
    marginLeft: -20,
    marginRight: -20,
    borderBottomWidth: 1,
    borderColor: '#D0DBEA',
    flexDirection: 'row'
},
linkCol1: {
    height: 60,
    width: '50%',
    borderBottomWidth: 3,
    borderColor: '#1FCC79'
},
colText1: {
    textAlign: 'center',
    marginRight: 10,
    marginTop: 17,
    color: '#3E5481',
    fontWeight: '600'
},
linkCol2: {
    height: 60,
    width: '50%',
    // borderBottomWidth: 3,
    // borderColor: '#1FCC79'
},
colText2: {
    textAlign: 'center',
    marginRight: 10,
    marginTop: 17,
    color: '#9FA5C0',
    fontWeight: '600'
},
productView: {
    marginTop: 20,
    width: '100%',
    //flexDirection: 'row',
},
productAuthorView: {
    flexDirection: 'row',
    width: '100%',
},
product1: {
    width: '50%',
    flexDirection: 'row',
    
},
userImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
},
authorName: {
    paddingLeft: 15,
    color: '#2E3E5C',
    paddingTop: 8,
},
productImageView: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
},
productImage1: {
    width: '50%',
    //height: 100
},
foodImage2: {
    width: '96%',
    height: 180,
    alignSelf: 'flex-end',
},

foodImage1: {
    width: '96%',
    height: 180
},
productText1: {
    color: '#3E5481',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 20,
},
productText2: {
    color: '#9FA5C0',
    fontSize: 12,
},
tabView: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0
  },
  tabHomeView: {
    width: '20%'
  },
  tabIcon1: {
    width: 17,
    height: 17,
    marginTop: 12, 
    alignSelf: 'center'
  },
  iconText1: {
    color: '#1FCC79',
    fontSize: 11,
    marginTop: 8,
    textAlign: 'center'
  },
  tabUploadView: {
    width: '20%'
  },
  tabIcon2: {
    width: 15,
    height: 17,
    marginTop: 12, 
    alignSelf: 'center'
  },
  iconText: {
    color: '#9FA5C0',
    fontSize: 11,
    marginTop: 8,
    textAlign: 'center'
  },


  tabNotificationView: {
    width: '20%'
  },
  tabIcon3: {
    width: 15,
    height: 17,
    marginTop: 12, 
    alignSelf: 'center'
  },
 
  tabProfileView: {
    width: '20%'
  },
  tabIcon4: {
    width: 14,
    height: 17,
    marginTop: 12, 
    alignSelf: 'center'
  },
  

  scanIconView: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 4,
    backgroundColor: '#1FCC79',
    alignContent: 'center',
    marginTop: -29
  },
  tabScanView: {
    width: '20%'
  },
  tabIcon5: {
    width: 17,
    height: 20,
    marginTop: 18, 
    alignSelf: 'center'
  },
  iconText5: {
    color: '#9FA5C0',
    fontSize: 11,
    marginTop: 10,
    textAlign: 'center',
    //marginTop: 7
  },
  mb: {
    marginBottom: 200,
  }

})