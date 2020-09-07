import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { Images } from '../../utils';
import { Tab, Tabs, Card } from 'native-base';
import { Picker } from '@react-native-community/picker';
import styles from './style';
import { connect } from 'react-redux';
import { classes } from '../../redux/actions/classes';


const Classes = [
  {
    id: '1',
    name: 'Class I',
  },
  {
    id: '2',
    name: 'Class II',
  },
  {
    id: '3',
    name: 'Class III',
  },
  {
    id: '4',
    name: 'Class IV',
  },
  {
    id: '5',
    name: 'Class V',
  },
  {
    id: '6',
    name: 'Class VI',
  },
  {
    id: '7',
    name: 'Class VII',
  },
  {
    id: '8',
    name: 'Class VIII',
  },
  {
    id: '9',
    name: 'Class IX',
  },
  {
    id: '10',
    name: 'Class X',
  },
];
const Banner = [
  {
    banner_id: '1',
    view: (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Edumate</Text>
        <Image style={styles.headerImage} source={Images.Logo} />
      </View>
    )
  },
  {
    banner_id: '2',
    view: (
      <View style={styles.headerContainer}>
        <Image style={styles.bannerImg} source={Images.Home_Old_tuition} />
      </View>
    )
  },
];
class Home_Old extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.props.classes()
  }
  state = {
    class: 'Select Class',
    subClass: 'Select Subject',
  };
  // bannerRender(id){
  //   if (id=='1')
  //   return(
  //     <View style={styles.headerContainer}>
  //         <Text style={styles.headerText}>Edumate</Text>
  //         <Image style={styles.headerImage} source={require("../../assets/logo.png")} />
  //     </View>  
  //   )
  //   else
  //   return(
  //     <Image style={styles.bannerImg} source={require("../../assets/logo.png")} />
  //   )
  // }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.headerContainer}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={Banner}
              renderItem={({ item }) => (
                <View>
                  {item.view}
                </View>
                /*<View style={styles.bannerImgWrapper}>
                  <Image source={item.image} style={styles.bannerImg} />
                </View>*/
              )}
              keyExtractor={item => item.banner_id}
            />
          </View>
          <Tabs tabBarUnderlineStyle={styles.tabBarUnderLine} tabBarTextStyle={{ color: "black" }}>
            
            <Tab heading="Teacher"
              tabStyle={{ backgroundColor: '#ffffff' }}
              activeTabStyle={{ backgroundColor: '#ffffff', padding: 2 }}
              activeTextStyle={{ color: '#6271f7', fontWeight: 'bold' }}>
              <KeyboardAvoidingView behavior="padding">
                <ScrollView
                  contentContainerStyle={styles.scrollWrapper}
                  showsVerticalScrollIndicator={false}>
                  <View style={styles.TabView}>
                    <View style={styles.inputWrapper}>
                      <Text style={styles.textStyle}>Name</Text>
                      <TextInput style={styles.textinput}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Name"
                        placeholderTextColor="#808080"
                      />
                    </View>
                    <View style={styles.inputWrapper}>
                      <Text style={styles.textStyle}>Mobile</Text>
                      <TextInput style={styles.textinput}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Mobile"
                        placeholderTextColor="#808080"
                      />
                    </View>
                    <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>Select Class</Text>
                  <View style={styles.pickerBox}>
                    <Picker
                      selectedValue={this.state.class}
                      style={styles.pickerStyle}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ class: itemValue })
                      }>
                      <Picker.Item label="Select Class" value="sc" color="#808080" />
                      <Picker.Item label="Class 1" value="c1" />
                      <Picker.Item label="Class 2" value="c2" />
                      <Picker.Item label="Class 3" value="c3" />
                      <Picker.Item label="Class 4" value="c4" />
                      <Picker.Item label="Class 5" value="c5" />
                      <Picker.Item label="Class 6" value="c6" />
                      <Picker.Item label="Class 7" value="c7" />
                      <Picker.Item label="Class 8" value="c8" />
                      <Picker.Item label="Class 9" value="c9" />
                      <Picker.Item label="Class 10" value="c10" />
                    </Picker>
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>Select Subject</Text>
                  <View style={styles.pickerBox}>
                    <Picker
                      selectedValue={this.state.subClass}
                      style={styles.pickerStyle}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ subClass: itemValue })
                      }>
                      <Picker.Item label="Select Subject" value="ss" color="#808080" />
                      <Picker.Item label="Hindi" value="hs" />
                      <Picker.Item label="English" value="es" />
                      <Picker.Item label="Maths" value="ms" />
                      <Picker.Item label="Science" value="ss" />
                      <Picker.Item label="Computer" value="cs" />
                    </Picker>
                  </View>
                </View>
                    <View style={styles.inputWrapper1}>
                      <Text style={styles.textStyle}>Bio Upload :</Text>
                      <TouchableOpacity
                        style={styles.uploadBtn}
                        onPress={() => { console.log("Upload") }}>
                        <Image style={styles.uploadImage} source={require("../../assets/upload.png")} />
                        <Text style={styles.uploadTxt}>Upload</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={styles.boxBtn2}
                      onPress={() => { }}>
                      <Text
                        style={styles.btnText}>
                        SUBMIT
                          </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </Tab>
            <Tab heading="Class"
              tabStyle={{ backgroundColor: '#ffffff' }}
              activeTabStyle={{ backgroundColor: '#ffffff', padding: 2 }}
              activeTextStyle={{ color: '#6271f7' , fontWeight: 'bold'}}>
              <View style={styles.TabView}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={Classes}
                  numColumns={2}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                    <View>
                      <View style={styles.cardWrapper}>
                        <Card style={styles.classBox}>
                          <TouchableOpacity
                            style={styles.classWrapper}
                            onPress={() => { this.props.navigation.navigate("ClassForm") }}>
                            <Text style={styles.class}>{item.name}</Text>
                          </TouchableOpacity>
                        </Card>
                      </View>
                    </View>
                  )} />
              </View>
            </Tab>
          </Tabs>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
   
  return {
    classes1:state.classes.classes,
  };
};

export default connect(mapStateToProps, { classes})(Home_Old);
