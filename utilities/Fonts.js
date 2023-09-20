import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    "Gotham-Bold": require("../assets/font/GothamBold.ttf"),
    "Gotham-Book": require("../assets/font/GothamBook.ttf"),
    "Gotham-Medium": require("../assets/font/GothamMedium.ttf"),
    "Gotham-Regular": require("../assets/font/GothamLight.ttf"),
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
