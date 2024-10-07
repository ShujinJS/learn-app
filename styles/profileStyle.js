import { StyleSheet } from "react-native";

export const chatBubblesStyle = StyleSheet.create({
  containerStyle: {
    // width: "100%",
    // height: "97%",
    flex: 3,
    paddingTop: 25,
    paddingBottom: 20,
    padding: 5,
  },
  flatlistContainerStyle: {
    width: "80%",
    height: "100%",
    margin: "auto",
    padding: 5,
    borderRadius: 10,
  },
  bubblesContainerStyle: { padding: 5 },
  bubbleContainerStyle: { position: "relative" },
  bubblesStyle: {
    width: "75%",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    right: 0,
  },
  chatBubble: {
    padding: 5,
    paddingHorizontal: 10,
    minWidth: 100,
    borderRadius: 5,
    backgroundColor: "gray",
  },
  bubbleStyle: {
    // width: "100%",
  },
  iconStyle: {
    padding: 4,
    color: "black",
    backgroundColor: "gray",
    marginRight: 10,
    borderRadius: 50,
  },
  chatUserNameStyle: {
    fontSize: 12,
    paddingHorizontal: 4,
  },
  chatTimeStyle: {
    fontSize: 12,
    alignSelf: "flex-end",
  },
  submitBtnContainer: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInputStyle: {
    width: "80%",
    height: 35,
    padding: 5,
    color: "gray",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
  },
  textSubmitBtnStyle: {
    color: "white",
    padding: 4,
    borderRadius: 50,
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
