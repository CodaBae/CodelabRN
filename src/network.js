import { useColorScheme, } from 'react-native';
// import { Ionicons, MaterialCommunityIcons, FontAwesome5, Feather, MaterialIcons, Entypo, EvilIcons, FontAwesome, Foundation } from '@expo/vector-icons';  
import Notify from './notify';
import AsyncStorage from '@react-native-async-storage/async-storage';
const base_url = 'https://niishcloud.com/task-api/api/task/v1/'; 
const ValidateEmail = (inputText) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputText)
}

const typeOfVar = (str, strType) => {
    var letters = /^[A-Za-z]+$/;
    if (!(str).match(letters)) {
        return false
    }
    return true;
}

const formatDate = (date) => {
    var newdate = new Date(date); //+ '  ' + newdate.getHours() + ':' + newdate.getMinutes()
    var newDate = newdate.getFullYear() + '-' + (newdate.getMonth() + 1) + '-' + newdate.getDate();
    return newDate;
}

const formatDateTime = (date) => {
    var newdate = new Date(date);
    var newDate = newdate.getFullYear() + '-' + (newdate.getMonth() + 1) + '-' + newdate.getDate() + '  ' + newdate.getHours() + ':' + newdate.getMinutes();
    return newDate;
}

const formatime = (date) => {
    var newdate = new Date(date);
    var newDate = newdate.getHours() + ':' + newdate.getMinutes();
    return newDate;
}

const numberWithCommas = (num) => {
    // let formatter = Intl.NumberFormat('en', { notation: 'compact' });
    // if(Math.abs(x) > 999999){ 
    //     return Math.sign(x)*((Math.abs(x)/1000000).toFixed(1))+ 'M';
    // }else if(Math.abs(x) > 999999999){ 
    //     return Math.sign(x)*((Math.abs(x)/1000000000).toFixed(1))+ 'B';
    // }else{
    //     var number = Number(x);
    //     return number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
    if (num >= 1000000000) {
        var amount = (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    } else if (num >= 1000000) {
        var amount = (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else {
        var amount = Number(num).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // if (num >= 1000) {
    //     var amount = (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    // }
    return amount;
}
const ValidatePhone = (inputText) => {
    return (inputText.length >= 8) && (inputText.length <= 14)
}

export {
    // Ionicons,
    // MaterialCommunityIcons,
    // FontAwesome5,
    // Entypo,
    // FontAwesome,
    // MaterialIcons,
    // Foundation,
    // EvilIcons,
    // Feather,
    base_url,
    ValidateEmail,
    typeOfVar,
    formatDate,
    formatDateTime,
    numberWithCommas,
    ValidatePhone, 
    formatime,
    Notify, 
    AsyncStorage,
}  