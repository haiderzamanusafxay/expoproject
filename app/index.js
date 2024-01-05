import { Text, View, StyleSheet, TextInput } from "react-native";
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
  },
  twoInputs: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "94%",
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
        </View><View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Email"
            placeholderTextColor={"#FFFFFF99"}
          />
          <Icon name="lock" size={20} color="yellow" style={styles.icon} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
