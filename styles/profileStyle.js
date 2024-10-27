import { StyleSheet } from "react-native";

export const profileStyle = StyleSheet.create({
  containerStyle: {
    height: "100%",
  },
  topSideStyle: {
    height: 200,
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    padding: 20,
  },
  ppStyle: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "cyan",
    borderRadius: 50,
  },
  addPhotoBtnStyle: {
    position: "relative",
    zIndex: 1,
  },
  userNameStyle: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
});
