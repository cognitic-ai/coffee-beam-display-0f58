import { ScrollView, View, Text, Pressable } from "react-native";
import { Stack, Link } from "expo-router";
import * as AC from "@bacons/apple-colors";

const coffeeBeans = [
  {
    id: "1",
    name: "Arabica",
    origin: "Ethiopia",
    roast: "Medium",
    flavor: "Sweet, fruity notes with hints of chocolate",
    color: "#6B4423",
  },
  {
    id: "2",
    name: "Robusta",
    origin: "Vietnam",
    roast: "Dark",
    flavor: "Strong, bitter taste with earthy undertones",
    color: "#3E2723",
  },
  {
    id: "3",
    name: "Colombian",
    origin: "Colombia",
    roast: "Medium",
    flavor: "Well-balanced with caramel sweetness",
    color: "#5D4037",
  },
  {
    id: "4",
    name: "Ethiopian Yirgacheffe",
    origin: "Ethiopia",
    roast: "Light",
    flavor: "Floral, tea-like with citrus notes",
    color: "#8D6E63",
  },
  {
    id: "5",
    name: "Sumatra Mandheling",
    origin: "Indonesia",
    roast: "Dark",
    flavor: "Full-bodied with herbal and spicy notes",
    color: "#4E342E",
  },
  {
    id: "6",
    name: "Brazilian Santos",
    origin: "Brazil",
    roast: "Medium",
    flavor: "Mild, smooth with nutty undertones",
    color: "#795548",
  },
];

export default function IndexRoute() {
  return (
    <>
      <Stack.Screen options={{ title: "Coffee Beans" }} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          backgroundColor: AC.systemGroupedBackground as any,
        }}
      >
        <View style={{ padding: 16, gap: 16 }}>
          <View style={{ gap: 8, marginBottom: 8 }}>
            <Text
              style={{
                fontSize: 34,
                fontWeight: "bold",
                color: AC.label as any,
              }}
            >
              Premium Coffee Beans
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: AC.secondaryLabel as any,
              }}
            >
              Explore our selection of finest coffee beans from around the world
            </Text>
          </View>

          {coffeeBeans.map((bean) => (
            <Pressable
              key={bean.id}
              style={({ pressed }) => ({
                backgroundColor: AC.secondarySystemGroupedBackground as any,
                borderRadius: 16,
                borderCurve: "continuous",
                padding: 16,
                opacity: pressed ? 0.7 : 1,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              })}
            >
              <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: bean.color,
                    borderCurve: "continuous",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  }}
                />
                <View style={{ flex: 1, gap: 4 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      color: AC.label as any,
                    }}
                  >
                    {bean.name}
                  </Text>
                  <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
                    <View
                      style={{
                        backgroundColor: AC.systemFill as any,
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 6,
                        borderCurve: "continuous",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: AC.secondaryLabel as any,
                          fontWeight: "500",
                        }}
                      >
                        {bean.origin}
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: AC.systemFill as any,
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 6,
                        borderCurve: "continuous",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: AC.secondaryLabel as any,
                          fontWeight: "500",
                        }}
                      >
                        {bean.roast} Roast
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: AC.tertiaryLabel as any,
                      marginTop: 4,
                    }}
                  >
                    {bean.flavor}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
