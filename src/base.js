import firebase from 'firebase';
import 'firebase/storage';

export const app = firebase.initializeApp({
  "projectId": "image-uploader-store",
  "appId": "1:675425934914:web:b27ebf0048e35ed4f6d7db",
  "storageBucket": "image-uploader-store.appspot.com",
  "locationId": "australia-southeast1",
  "apiKey": "AIzaSyDUEa7Cn_u-1xHc10AOtkoKiSIwUYbSn60",
  "authDomain": "image-uploader-store.firebaseapp.com",
  "messagingSenderId": "675425934914",
  "measurementId": "G-GN09VENMRM"
});