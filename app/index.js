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
  signupBtn: {
    backgroundColor: "yellow",
    borderRadius: 25,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    width: "94%",
    marginTop: 13,
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
  iconRight: {
    left: "40px",
    right: "auto",
  },
  buttonContainer: {
    flexDirection: "row",
    borderRadius: 25,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 13,
    marginTop: 13,
    backgroundColor: "#5865F2",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    width: "94%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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

        <View style={styles.signupBtn}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
            Sign Up
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Icon name="discord" size={20} color="white" style={styles.icon2} />
          <Text style={styles.buttonText}>Sign Up with Discord</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
