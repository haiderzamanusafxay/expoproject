import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  main: {
    backgroundColor: "#131313",
    height: "100",
    paddingTop: 30,
    alignContent: "center",
  },
  TextColor: {
    fontSize: 20,
    color: "white",
    marginLeft: 25,
  },
  cards: {
    paddingLeft: 30,
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    width: "100%",
    backgroundColor: "131313",
  },
  card: {
    overflow: "hidden",
    marginTop: 15,
    marginBottom: 11,
    alignContent: "center",
    width: 350,
    height: 119,
    backgroundColor: "#1d1d1d",
    borderRadius: 15,
    flexDirection: "row",
  },
  imageArea: {
    width: "33%",
  },
  info: {
    marginTop: 10,
    marginLeft: 3,
    flexDirection: "column",
  },
  infoPar: {
    overflow: "hidden",
  },
  par: {
    color: "#888789",
    fontSize: 10,
    lineHeight: 1,
  },
  infoFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  compBtn: {
    width: 80,
    height: 16,
    backgroundColor: "#262626",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 6,
  },
  compBtnText: {
    display: "flex",
    fontSize: 5,
    color: "yellow",
    fontWeight: "normal",
  },
  btwText: {
    color: "white",
    marginTop: 10,
    margingBottom: 6,
    fontSize: 12,
    paddingLeft: 10,
  },
});

export default Styles;
