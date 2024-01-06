import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../../assets/css/videoCallsStyles";

const Main = () => {
  return (
    <SafeAreaView style={Styles.mainContent}>
      <View style={Styles.main}>
        <Text style={Styles.TextColor}>Your Calls</Text>

        <View style={Styles.cards}>
          <View style={Styles.card}>
            <View style={Styles.imageArea}>
              <Image
                source={{
                  uri: "https://as2.ftcdn.net/v2/jpg/03/05/72/59/1000_F_305725989_cYvV092wRhCPfIiyblw0gpaY34uMOcvq.jpg",
                }}
              />
            </View>
            <View style={Styles.info}>
              <Text style={{ fontSize: 15, color: "white" }}>
                FREE INFO SESSION 1 ON 1
              </Text>
              <Text style={Styles.infoPar}>
                <Text style={Styles.par}>
                  Welcome to STARGATE’S first ever Accelerator <br />
                  Course where you get the opportunity to learn <br />
                  about the history of money, the opportunity of <br />
                </Text>
              </Text>
              <View style={Styles.infoFooter}></View>
            </View>
          </View>

          <View style={Styles.card}></View>
          <View style={Styles.card}></View>
          <Text style={Styles.btwText}>
            NEED MORE HELP? YOU CAN BOOK MORE CALLS WITH US.
          </Text>
          <View style={Styles.card}></View>
          <View style={Styles.card}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
