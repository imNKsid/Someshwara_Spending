import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../constants";
import { IMAGES } from "../assets/images";
import { useNavigation } from "@react-navigation/native";
import SpendSelector from "../redux/ducks/spend/spend-selector";
import { dispatch } from "../redux/store/store";
import SpendThunk from "../redux/ducks/spend/spend-thunk";

const Login = () => {
  const navigation: any = useNavigation();
  const isLoggedIn = SpendSelector.isLoggedIn();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [secure, setSecure] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("Home");
    }
  }, [navigation, isLoggedIn]);

  const validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    return true;
  };

  const validatePassword = () => {
    if (password === "SOM@React@1") {
      setPasswordError(false);
      return true;
    }
    setPasswordError(true);
    return false;
  };

  const submit = () => {
    const validEmail = validateEmail();
    const validPassword = validatePassword();

    if (validEmail && validPassword) {
      dispatch<any>(SpendThunk.login({ email: email, password: password }));
      navigation.navigate("Home");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={-100}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.text}>Enter Your Login Credentials</Text>
      <View style={styles.textNfield}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          keyboardType={"email-address"}
          value={email}
          onChangeText={(t) => {
            setEmail(t);
            setEmailError(false);
          }}
          style={[styles.inputField, { marginLeft: 40 }]}
        />
      </View>
      {emailError ? (
        <Text style={styles.errorText}>Email is not correct</Text>
      ) : null}
      <View style={styles.textNfield}>
        <Text style={styles.text}>Password</Text>
        <View style={styles.passWordField}>
          <TextInput
            style={styles.passWordInput}
            onChangeText={(t) => {
              setPassword(t);
              setPasswordError(false);
            }}
            value={password}
            keyboardType="default"
            secureTextEntry={secure}
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Image
              style={styles.eyeImage}
              source={secure ? IMAGES.eyeOff : IMAGES.eye}
            />
          </TouchableOpacity>
        </View>
      </View>
      {passwordError ? (
        <View style={{ marginLeft: 140 }}>
          <Text style={styles.errorText}>Password is not correct</Text>
          <Text style={styles.errorText}>
            Password should only be 'SOM@React@1'
          </Text>
        </View>
      ) : null}
      <View style={styles.btn}>
        <Button title="Submit" onPress={submit} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: COLORS.black },
  textNfield: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    width: 250,
    marginLeft: 10,
  },
  passWordField: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 250,
    marginLeft: 10,
    height: Platform.OS === "ios" ? 32 : 42,
  },
  passWordInput: { flex: 1 },
  eyeImage: {
    width: Platform.OS === "ios" ? 20 : 25,
    height: Platform.OS === "ios" ? 20 : 25,
  },
  errorText: { color: "red", marginLeft: -50 },
  btn: { marginTop: Platform.OS === "ios" ? 20 : 30, borderRadius: 10 },
});
