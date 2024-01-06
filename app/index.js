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
    height: "60px",
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
    height: 60,
    borderRadius: 25,
    width: "100%",
  },
  privacyPolicyText: {
    marginVertical: "10px",
  },
  signupBtn: {
    backgroundColor: "yellow",
    borderRadius: 25,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    width: "94%",
    marginTop: 13,
  },
  title: {
    borderTop: "1px solid #aaa",
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
    height: 60,
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
  },
  signupWithbtnFb: {
    backgroundColor: "#1877F2",
    borderRadius: 25,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    width: "94%",
    marginTop: 13,
  },
  signupWithbtnG: {
    backgroundColor: "white",
    borderRadius: 25,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    width: "94%",
    marginTop: 13,
  }
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
          <Text style={{ color: "white", fontSize: 20 }}>
            Sign Up With Discord
          </Text>
        </View>
        <View style={styles.signupWithbtnFb}>
          <Text style={{ color: "white", fontSize: 20 }}>
            Sign Up With Facebook
          </Text>
        </View>
        <View style={styles.signupWithbtnG}>
          <Text style={{ color: "black", fontSize: 20 }}>
            Sign Up With Google
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
