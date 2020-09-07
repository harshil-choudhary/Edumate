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
import { Tab, Tabs } from 'native-base';
import { Picker } from '@react-native-community/picker';
import { Images } from '../../utils';
import styles from './style';
import { Ionicons } from 'react-native-vector-icons';

import { connect } from 'react-redux';
import { classes } from '../../redux/actions/classes';
import { subjects } from '../../redux/actions/subjects';
import { topics } from '../../redux/actions/topics';
import { queryform } from '../../redux/actions/queryform';

import DateTimePicker from '@react-native-community/datetimepicker';




class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_date:false,
      date_placeholder:true,
      selectedValue:'',
      date:new Date(),
    }
    this.props.classes()
  }
  state = {
    class: 'Select Class',
    subClass: 'Select Subject',
    topics: 'Select Topic',
    name:'',phoneNo:'',adress:'',email:'',school:'',class:'',subject:'',topic:'',date:'',
  };
  onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === 'ios')
      this.setState({ show_date: true })
    else
      this.setState({ show_date: false })
    this.setState({ date: currentDate, date_placeholder: false });
  };

  formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()}`;
  };

  showDatepicker = () => {
    this.setState({ show_date: true });
  };

  submitForm(){
    console.log(this.state)
    // console.log('hi')
    this.props.queryform(this.state)
   
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <KeyboardAvoidingView behavior="padding">
            <ScrollView
              contentContainerStyle={styles.scrollWrapper}
              showsVerticalScrollIndicator={false}>
              <View style={styles.upperCont}>
                <TouchableOpacity
                  style={styles.arrowCont}
                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={Images.BackIcon} />
                </TouchableOpacity>
                <View>
                <Text style={styles.headerText}>APPLICATION FORM</Text>
                <Text style={styles.textStyle1}>Fill out below Information so that we can help u better</Text>
                </View>
              </View>

              <View style={styles.TabView}>
              {/* <Text style={styles.textStyle1}>Fill out below Information so that we can help u better</Text> */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>Name</Text>
                  <TextInput style={styles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChangeText={name => this.setState({name})}
                    placeholderTextColor="#808080"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>Phone-No</Text>
                  <TextInput style={styles.textinput}
                    underlineColorAndroid="transparent"
                    keyboardType='numeric'
                    maxLength={10}
                    placeholder="Enter Phone-No "
                    value={this.state.phoneNo}
                    onChangeText={phoneNo => this.setState({phoneNo})}
                    placeholderTextColor="#808080"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>Adress</Text>
                  <TextInput style={styles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Adress"
                    value={this.state.adress}
                    onChangeText={adress => this.setState({adress})}
                    placeholderTextColor="#808080"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>Email</Text>
                  <TextInput style={styles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    placeholderTextColor="#808080"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>School</Text>
                  <TextInput style={styles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter School"
                    value={this.state.school}
                    onChangeText={school => this.setState({school})}
                    placeholderTextColor="#808080"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}> Board</Text>
                  <View style={styles.pickerBox}>
                    <Picker
                      selectedValue={this.state.topics}
                      style={styles.pickerStyle}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ topics: itemValue })
                      }>
                      <Picker.Item label="Select Board" value="st"  color="#808080"/>
                      <Picker.Item label="C.B.S.E" value="algeb" />
                      <Picker.Item label="I.C.S.C" value="numbr" />
                      <Picker.Item label="State Board" value="geomtry" />
                    </Picker>
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}> Class</Text>
                  <View style={styles.pickerBox}>
                    <Picker
                   
                      selectedValue={this.state.class}
                      style={styles.pickerStyle}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ class: itemValue })
                      }>
                      <Picker.Item label="Select Class" value="sc" color="#808080"/>
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
                  <Text style={styles.textStyle}> Subject</Text>
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

                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>Chapter</Text>
                  <TextInput style={styles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Chapter"
                    value={this.state.school}
                    onChangeText={school => this.setState({school})}
                    placeholderTextColor="#808080"
                  />
                </View>
               
                <View style={styles.inputWrapper2}>
                <Text style={styles.textStyle}>Select Date</Text>
                  <View style={styles.formBox}>
                    <Image source={Images.Calender} style={styles.searchIcon} />
                    <TouchableOpacity style={styles.formshortInput}
                      onPress={this.showDatepicker}>
                      <Text style={styles.placeholderText}>{(this.state.date_placeholder) ? ("Date") : (this.formatDate(this.state.date))}</Text>
                      {this.state.show_date && (
                        <DateTimePicker
                          onPress={this.showDatepicker}
                          style={styles.formshortInput}
                          testID="dateTimePicker"
                          value={this.state.date}
                          mode='date'
                          is24Hour={true}
                          display="default"
                          onChange={this.onChangeDate}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                  style={styles.boxBtn2}
                  onPress={() => this.submitForm()}>
                  <Text
                    style={styles.btnText}>
                    SUBMIT
                          </Text>
                </TouchableOpacity>
                </View>
             
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
   
  return {
    classes1:state.classes.classes,
    subjects1:state.subjects.subjects,
    topics1:state.topics.topics,
    queryform:state.queryform.queryform,
  };
};

export default connect(mapStateToProps, { classes, subjects, topics ,queryform})(ClassForm);
