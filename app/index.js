import {
  Text,
  View,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";
import Styles from "../assets/css/homeStyles";
import { Link } from "expo-router";
const Home = () => {
  return (
    <SafeAreaView style={Styles.mainContent}>
      <View style={Styles.mainContent}>
        <View style={Styles.twoInputs}>
          <TextInput
            style={Styles.inputFieldDbl}
            placeholder="First Name"
            placeholderTextColor={"#FFFFFF99"}
          />
          <TextInput
            style={Styles.inputFieldDbl}
            placeholder="Last Name"
            placeholderTextColor={"#FFFFFF99"}
          />
        </View>

        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.inputField}
            placeholder="Email"
            placeholderTextColor={"#FFFFFF99"}
          />
          <Icon name="envelope" size={20} color="yellow" style={Styles.icon} />
        </View>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.inputField}
            placeholder="Discord Username"
            placeholderTextColor={"#FFFFFF99"}
          />
          <Icon name="discord" size={20} color="yellow" style={Styles.icon} />
        </View>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.inputField}
            placeholder="Password"
            placeholderTextColor={"#FFFFFF99"}
          />
          <Icon name="lock" size={20} color="yellow" style={Styles.icon} />
        </View>
        <View style={Styles.privacyPolicyText}>
          <Icon
            name="check-square"
            size={20}
            color="yellow"
            style={{ marginRight: 6 }}
          />

          <Text style={{ color: "white" }}>
            Agree to terms and conditions of{" "}
            <Text style={{ color: "yellow" }}>Privacy Policy.</Text>
          </Text>
        </View>
        <View style={Styles.signupBtn}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
            Sign Up
          </Text>
        </View>
        <View style={Styles.title}>
          <Text
            style={{ padding: "5px 10px", color: "white", marginTop: "10px" }}
          >
            OR
          </Text>
        </View>
        <View style={Styles.signupWithbtnDis}>
          <Icon name="discord" size={20} color="white" style={Styles.disIcon} />
          <Text style={{ color: "white", fontSize: 20, marginRight: 10 }}>
            Sign Up With Discord
          </Text>
          <View style={{ width: "20%" }}></View>
        </View>
        <View style={Styles.signupWithbtnFb}>
          <Icon
            name="facebook"
            size={20}
            color="white"
            style={Styles.disIcon}
          />
          <Text style={{ color: "white", fontSize: 20, marginRight: 10 }}>
            Sign Up With Discord
          </Text>
          <View style={{ width: "20%" }}></View>
        </View>
        <View style={Styles.signupWithbtnG}>
          <Icon name="google" size={20} color="black" style={Styles.disIcon} />
          <Text style={{ color: "black", fontSize: 20, marginRight: 10 }}>
            Sign Up With Google
          </Text>
          <View style={{ width: "20%" }}></View>
        </View>
        <View style={Styles.forgetText}>
          <Text style={{ color: "#676D75", fontSize: 15 }}>
            Already have an account?{" "}
            <Text style={{ color: "yellow" }}>
              <Link href="videocalls">
                <Text>Sign In</Text>
              </Link>
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
