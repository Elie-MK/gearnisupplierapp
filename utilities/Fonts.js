import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    "Gotham-Bold": require("../assets/font/GothamBold.otf"),
    "Gotham-Book": require("../assets/font/GothamBook.otf"),
    "Gotham-Medium": require("../assets/font/GothamMedium.otf"),
    "Gotham-Regular": require("../assets/font/GothamLight.otf"),
  });

  return {
    fontsLoaded,
    fontGotham: {
      regular: "Gotham-Regular",
      medium: "Gotham-Medium",
      book: "Gotham-Book",
      bold: "Gotham-Bold",
    },
  };
};
