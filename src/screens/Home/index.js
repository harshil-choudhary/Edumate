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


class Home extends Component {
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
 
  render() {
    return (
      <View style={styles.container}>
          <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.headerContainer}>
            <View style={styles.headerTextContainer}>
              
              <Text style={styles.headerText}>knowledge is power</Text>
              <Text style={styles.headerSubText}>Quick View</Text>
            </View>
            <Image source={Images.books} style={styles.bookImg}/>
          </View>

          <View style={styles.gridContainer}>
            <View >
            <FlatList
              data={this.props.classes1}
              numColumns={2}
              renderItem={({item}) => (

              <TouchableOpacity onPress={() =>{ console.log('here'); this.props.navigation.navigate("ClassForm")}} style={styles.categoryWrapper1}>
                <View style={styles.imgWrapper}>
                  <Image source={Images.basic_grammar} style={styles.basic_grammar}/>
                </View>
                <Text style={styles.topic}>{item.class_name}</Text>
                <Text style={styles.course}>{item.course_number} Course</Text>
              </TouchableOpacity>

              )}
              keyExtractor={item => item.banner_id}
            />

              
            </View>


          </View>
          
          <View style={styles.learningContainer}>
            <Text style={styles.learning}>Teach With Us</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() =>{this.props.navigation.navigate("Home_Old")}} style={styles.buttonBox}>
                <Image source={Images.articles} style={styles.article_icon}/>
                {/* <Text style={styles.iconText}>Teacher</Text> */}
                <Text style={styles.iconText}>Ragistration</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>{this.props.navigation.navigate("Video")}} style={styles.buttonBox}>
                <Image source={Images.videos} style={styles.article_icon}/>
                <Text style={styles.iconText}>Videos</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() =>{this.props.navigation.navigate("Audio")}} style={styles.buttonBox}>
                <Image source={Images.audios} style={styles.article_icon}/>
                <Text style={styles.iconText}>Audio</Text>
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() =>{this.props.navigation.navigate("FeedBack")}} style={styles.buttonBox}>
                <Image source={Images.articles} style={styles.article_icon}/>
                <Text style={styles.iconText}>FeedBack</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
            </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
   
  return {
    classes1:state.classes.classes,
  };
};

export default connect(mapStateToProps, { classes})(Home);
