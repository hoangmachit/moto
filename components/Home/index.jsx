import { Text, View } from "../Themed";
import { Image } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
export default function Home() {
  return (
    <>
      <View
        style={{
          height: 100,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 54,
            paddingTop: 19,
            backgroundColor: "red",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 91,
            }}
          >
            <Image
              source={{
                uri: "https://salt.tikicdn.com/ts/brickv2og/db/eb/7c/a926af0ba3dc2802148bfc39563180c2.png",
              }}
              style={{
                width: 91,
                height: 34,
              }}
            />
          </View>
          <View>
            <Image
              source={{
                uri: "https://salt.tikicdn.com/ts/upload/d4/ca/89/28d85ed27396c1beebad8a3fec18bfe4.png",
              }}
              style={{
                width: 80,
                height: 54,
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              flexDirection: "row",
            }}
          >
            <AntDesign name="shoppingcart" size={24} color="black" />
            <AntDesign
              style={{
                marginRight: 10,
              }}
              name="notification"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
      <View>
        <Text>Title Home 12</Text>
      </View>
    </>
  );
}
