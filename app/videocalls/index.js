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
    backgroundColor: "black",
  },
});

const Main = () => {
  return <SafeAreaView style={styles.mainContent}>
    <View>
        <Text style={{color: "black"}}>
            Hello
        </Text>
    </View>
  </SafeAreaView>;
};

export default Main;
