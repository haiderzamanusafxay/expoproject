import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: "#131313",
    paddingTop: "30px",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 0,
    margin: 0,
  },
  twoInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: "10px",
  },
  inputFieldDbl: {
    paddingLeft: "10px",
    height: "70px",
    width: "47%",
    backgroundColor: "#1d1d1d",
    borderRadius: "25px",
  },

  icon: {
    left: "auto",
    right: "40px",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10, // Added paddingRight to create space on the right
    marginVertical: 10,
    marginTop: 13,
  },
  inputField: {
    paddingLeft: "15px",
    flex: 1,
    height: 40,
    marginLeft: 10,
    backgroundColor: "#1d1d1d",
    height: 70,
    borderRadius: 25,
    width: "100%",
  },
  privacyPolicyText: {
    marginVertical: "10px",
    flexDirection: "row"
  },
  signupBtn: {
    backgroundColor: "yellow",
    borderRadius: 25,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    width: "94%",
    marginTop: 13,
  },
  title: {
    borderBottom: "none",
    borderLeft: "none",
    borderRright: "none",
    display: "block",
    textAlign: "center",
    borderColor: "#aaa",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 10,
    marginTop: 13,
  },
  inputField: {
    paddingLeft: 15,
    flex: 1,
    height: 70,
    marginLeft: 10,
    backgroundColor: "#1d1d1d",
    borderRadius: 25,
    width: "100%",
    color: "white", // Added text color
  },
  signupWithbtnDis: {
    backgroundColor: "#5865F2",
    borderRadius: 25,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    width: "94%",
    marginTop: 13,
    flexDirection: "row", // Align items in a row
  },
  signupWithbtnFb: {
    backgroundColor: "#1877F2",
    borderRadius: 25,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    width: "94%",
    marginTop: 13,
    flexDirection: "row",
  },
  signupWithbtnG: {
    backgroundColor: "white",
    borderRadius: 25,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    width: "94%",
    marginTop: 13,
    flexDirection: "row",
  },
  disIcon: {
    marginRight: 60,
  },
  signupWithbtnFb: {
    backgroundColor: "#1877F2",
    borderRadius: 25,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    width: "94%",
    marginTop: 13,
    flexDirection: "row",
  },
  signupWithbtnG: {
    backgroundColor: "white",
    borderRadius: 25,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    width: "94%",
    marginTop: 13,
    flexDirection: "row",
  },
  forgetText: {
    position: "absolute",
    bottom: 35,
  },
});

const Home = () => {
  return (
    <SafeAreaView style={styles.mainContent}>
      <View style={styles.mainContent}>
        <View style={styles.twoInputs}>
          <TextInput
            style={styles.inputFieldDbl}
            placeholder="First Name"
            placeholderTextColor={"#FFFFFF99"}
          />
          <TextInput
            style={styles.inputFieldDbl}
            placeholder="Last Name"
            placeholderTextColor={"#FFFFFF99"}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Email"
            placeholderTextColor={"#FFFFFF99"}
          />
          <Icon name="envelope" size={20} color="yellow" style={styles.icon} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Discord Username"
            placeholderTextColor={"#FFFFFF99"}
          />
          <Icon name="discord" size={20} color="yellow" style={styles.icon} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Email"
            placeholderTextColor={"#FFFFFF99"}
          />
          <Icon name="lock" size={20} color="yellow" style={styles.icon} />
        </View>
        <View style={styles.privacyPolicyText}>
          <Text style={{ color: "white" }}>
            Agree to terms and conditions of{" "}
            <Text style={{ color: "yellow" }}>Privacy Policy.</Text>
          </Text>
        </View>
        <View style={styles.signupBtn}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
            Sign Up
          </Text>
        </View>
        <View style={styles.title}>
          <legend
            style={{ padding: "5px 10px", color: "white", marginTop: "10px" }}
          >
            OR
          </legend>
        </View>
        <View style={styles.signupWithbtnDis}>
          <Icon name="discord" size={20} color="white" style={styles.disIcon} />
          <Text style={{ color: "white", fontSize: 20, marginRight: 10 }}>
            Sign Up With Discord
          </Text>
          <View style={{ width: "20%" }}></View>
        </View>
        <View style={styles.signupWithbtnFb}>
          <Icon
            name="facebook"
            size={20}
            color="white"
            style={styles.disIcon}
          />
          <Text style={{ color: "white", fontSize: 20, marginRight: 10 }}>
            Sign Up With Discord
          </Text>
          <View style={{ width: "20%" }}></View>
        </View>
        <View style={styles.signupWithbtnG}>
          <Icon name="google" size={20} color="black" style={styles.disIcon} />
          <Text style={{ color: "black", fontSize: 20, marginRight: 10 }}>
            Sign Up With Google
          </Text>
          <View style={{ width: "20%" }}></View>
        </View>
        <View style={styles.forgetText}>
          <Text style={{ color: "#676D75", fontSize: 15 }}>
            Already have an account?{" "}
            <Text style={{ color: "yellow" }}>Sign in</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
