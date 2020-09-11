import React from "react";
import { View, Image, StatusBar, SafeAreaView } from "react-native";
import AppleHeader from "react-native-apple-header";
import BottomSearchBar from "react-native-bottom-search-bar";
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import BouncyCheckbox from "./lib/BouncyCheckbox"

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppleHeader />
        <View style={{ margin: 16 }}>
          <BouncyCheckbox
            borderColor="red"
            borderWidth={2}
            borderRadius={5}
            fillColor="red"
            unfillColor="#FFFFFF"
            // iconComponent={<IconDog color={"red"} width={12} strokeWidth={3} />}
            textColor="#333"
            size={10}
            disableTextDecoration={true}
            fontSize={16}
            text="asdasd"
          />
          <BouncyCheckbox
            isChecked={false}
            textColor="#000"
            unfillColor="white"
            fontFamily="JosefinSans-Regular"
            // iconComponent={
            //   <Image
            //     style={{ height: 10, width: 10 }}
            //     source={require("./assets/checkmark.png")}
            //   />
            // }
            text="Custom Icon Example"
          />
          <BouncyCheckbox
            fontFamily="JosefinSans-Regular"
            onPress={(checked) => {
              alert(checked);
            }}
          />
          <BouncyCheckbox
            text="Get groceries"
            fontFamily="JosefinSans-Regular"
          />
          <BouncyCheckbox
            isChecked
            text="Pay the bills"
            fontFamily="JosefinSans-Regular"
          />
          <BouncyCheckbox
            fontFamily="JosefinSans-Regular"
            text="Take out of the trash 💩"
          />
          <BouncyCheckbox
            fontFamily="JosefinSans-Regular"
            text="Buy tickets for concert 🎉 🎊"
          />
          <BouncyCheckbox
            isChecked
            disableTextDecoration
            text="Try new gym routine"
            fontFamily="JosefinSans-Regular"
          />
          <BouncyCheckbox
            isChecked
            text="Do a load of laundry"
            fontFamily="JosefinSans-Regular"
          />
        </View>
        <BottomSearchBar />
      </SafeAreaView>
    </View>
  );
};

export default App;