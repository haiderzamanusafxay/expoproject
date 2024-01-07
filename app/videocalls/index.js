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
                style={{ width: 105, height: 105, borderRadius: 10 }}
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
                  Welcome to STARGATES first ever Accelerator {'\n'}
                  Course where you get the opportunity to learn {'\n'}
                  about the history of money, the opportunity or {'\n'}
                </Text>
              </Text>
              <View style={Styles.infoFooter}>
                <View style={Styles.compBtn}>
                  <Text style={Styles.compBtnText}>Completed</Text>
                </View>
                <Text style={{ fontSize: 10, color: "#FFFFFF" }}>30 min</Text>
              </View>
            </View>
          </View>

          <View style={Styles.card}>
            <View style={Styles.imageArea}>
              <Image
                style={{ width: 105, height: 105, borderRadius: 10 }}
                source={{
                  uri: "https://media.istockphoto.com/id/1331493599/photo/shot-of-a-businessman-using-a-computer-while-working-in-a-call-center.jpg?s=612x612&w=0&k=20&c=ocaFzVRnDARFnANjyd6CMrwAI0Ua6I0Na_MKej8IysA=",
                }}
              />
            </View>
            <View style={Styles.info}>
              <Text style={{ fontSize: 15, color: "white" }}>
                ONBOARDING 1 ON 1 SESSION
              </Text>
              <Text style={Styles.infoPar}>
                <Text style={Styles.par}>
                  Welcome to STARGATE’S first ever Accelerator  {'\n'}
                  Course where you get the opportunity to learn  {'\n'}
                  about the history of money, the opportunity of  {'\n'}
                </Text>
              </Text>
              <View style={Styles.infoFooter}>
                <View style={Styles.compBtn}>
                  <Text style={Styles.compBtnText}>Completed</Text>
                </View>
                <Text style={{ fontSize: 10, color: "#FFFFFF" }}>30 min</Text>
              </View>
            </View>
          </View>
          <View style={Styles.card}>
            <View style={Styles.imageArea}>
              <Image
                style={{ width: 105, height: 105, borderRadius: 10 }}
                source={{
                  uri: "https://previews.123rf.com/images/vgstudio/vgstudio1905/vgstudio190500099/122464860-call-center-service-photo-of-customer-support-agent-female-caller-or-receptionist-phone-operator.jpg",
                }}
              />
            </View>
            <View style={Styles.info}>
              <Text style={{ fontSize: 15, color: "white" }}>
                ONBOARDING 1 ON 1 SESSION
              </Text>
              <Text style={Styles.infoPar}>
                <Text style={Styles.par}>
                  Welcome to STARGATE’S first ever Accelerator {'\n'}
                  Course where you get the opportunity to learn {'\n'}
                  about the history of money, the opportunity of {'\n'}
                </Text>
              </Text>
              <View style={Styles.infoFooter}>
                <View style={Styles.compBtn}>
                  <Text style={Styles.compBtnText}>Completed</Text>
                </View>
                <Text style={{ fontSize: 10, color: "#FFFFFF" }}>30 min</Text>
              </View>
            </View>
          </View>
          <Text style={Styles.btwText}>
            NEED MORE HELP? YOU CAN BOOK MORE CALLS WITH US.
          </Text>
          <View style={Styles.card}>
            <View style={Styles.imageArea}>
              <Image
                style={{ width: 105, height: 105, borderRadius: 10 }}
                source={{
                  uri: "https://static.independent.co.uk/2021/01/06/10/bitcoin%20price%20latest%20today.jpg?quality=75&width=1200&auto=webp",
                }}
              />
            </View>
            <View style={Styles.info}>
              <Text style={{ fontSize: 15, color: "white" }}>
                VIP MEMBER 1 ON 1 SESSION
              </Text>
              <Text style={Styles.infoPar}>
                <Text style={Styles.par}>
                  Welcome to STARGATE’S first ever Accelerator {'\n'}
                  Course where you get the opportunity to learn {'\n'}
                  about the history of money, the opportunity of {'\n'}
                </Text>
              </Text>
              <View style={Styles.infoFooter}>
                <View style={Styles.compBtn}>
                  <Text style={Styles.compBtnText}>Completed</Text>
                </View>
                <Text style={{ fontSize: 10, color: "#FFFFFF" }}>30 min</Text>
              </View>
            </View>
          </View>
          <View style={Styles.card}>
            <View style={Styles.imageArea}>
              <Image
                style={{ width: 105, height: 105, borderRadius: 10 }}
                source={{
                  uri: "https://img.freepik.com/premium-photo/bitcoin-crypto-currency-paying-online-pay-digital-money-cryptocurrency-business-finances-square_770123-1439.jpg",
                }}
              />
            </View>
            <View style={Styles.info}>
              <Text style={{ fontSize: 15, color: "white" }}>
                1 ON 1 TECH SUPPORT SESSION
              </Text>
              <Text style={Styles.infoPar}>
                <Text style={Styles.par}>
                  Welcome to STARGATE’S first ever Accelerator {'\n'}
                  Course where you get the opportunity to learn {'\n'}
                  about the history of money, the opportunity of {'\n'}
                </Text>
              </Text>
              <View style={Styles.infoFooter}>
                <View style={Styles.compBtn}>
                  <Text style={Styles.compBtnText}>Completed</Text>
                </View>
                <Text style={{ fontSize: 10, color: "#FFFFFF" }}>30 min</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
