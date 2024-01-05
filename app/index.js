import TouchableOpacity from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
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
    justifyContent: "space-around",
    width: "94%",
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
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", marginLeft: 2 }}>
            <Icon
              name="check-square"
              size={20}
              color="yellow"
              style={{ padding: 5, margin: 5 }}
            />
            I agree to the terms and conditions of
            <Text style={{ color: "yellow" }}> Privacy Policy.</Text>
          </Text>
        </View>
        <View style={styles.signupBtn}>
            <Text style={{ color: "black", fontWeight: "bold" , fontSize: 20}}>
              Sign Up
            </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
