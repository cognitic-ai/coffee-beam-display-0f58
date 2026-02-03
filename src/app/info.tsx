import { ScrollView, View, Text } from "react-native";
import { Stack } from "expo-router";
import * as AC from "@bacons/apple-colors";

export default function InfoRoute() {
  return (
    <>
      <Stack.Screen options={{ title: "About Coffee" }} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          backgroundColor: AC.systemGroupedBackground as any,
        }}
      >
        <View style={{ padding: 16, gap: 24 }}>
          <View style={{ gap: 8 }}>
            <Text
              style={{
                fontSize: 34,
                fontWeight: "bold",
                color: AC.label as any,
              }}
            >
              About Coffee Beans
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: AC.secondaryLabel as any,
                lineHeight: 24,
              }}
            >
              Coffee beans are the seeds of the Coffea plant, roasted and ground to create the beloved beverage enjoyed worldwide.
            </Text>
          </View>

          <View
            style={{
              backgroundColor: AC.secondarySystemGroupedBackground as any,
              borderRadius: 16,
              borderCurve: "continuous",
              padding: 16,
              gap: 12,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
                color: AC.label as any,
              }}
            >
              Main Varieties
            </Text>

            <View style={{ gap: 16 }}>
              <View style={{ gap: 4 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "600",
                    color: AC.label as any,
                  }}
                >
                  Arabica
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: AC.secondaryLabel as any,
                    lineHeight: 20,
                  }}
                >
                  Accounts for 60-70% of global production. Known for its sweet, delicate flavor and higher acidity. Grows at higher altitudes.
                </Text>
              </View>

              <View style={{ gap: 4 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "600",
                    color: AC.label as any,
                  }}
                >
                  Robusta
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: AC.secondaryLabel as any,
                    lineHeight: 20,
                  }}
                >
                  Makes up 30-40% of production. Has a stronger, more bitter taste with higher caffeine content. More disease-resistant.
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: AC.secondarySystemGroupedBackground as any,
              borderRadius: 16,
              borderCurve: "continuous",
              padding: 16,
              gap: 12,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
                color: AC.label as any,
              }}
            >
              Roast Levels
            </Text>

            <View style={{ gap: 16 }}>
              <View style={{ gap: 4 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "600",
                    color: AC.label as any,
                  }}
                >
                  Light Roast
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: AC.secondaryLabel as any,
                    lineHeight: 20,
                  }}
                >
                  Roasted for the shortest time. Retains most origin characteristics with bright acidity and light body.
                </Text>
              </View>

              <View style={{ gap: 4 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "600",
                    color: AC.label as any,
                  }}
                >
                  Medium Roast
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: AC.secondaryLabel as any,
                    lineHeight: 20,
                  }}
                >
                  Balanced flavor with moderate acidity and body. Most popular roast level in the United States.
                </Text>
              </View>

              <View style={{ gap: 4 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "600",
                    color: AC.label as any,
                  }}
                >
                  Dark Roast
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: AC.secondaryLabel as any,
                    lineHeight: 20,
                  }}
                >
                  Roasted longest with oils visible on surface. Bold, smoky flavor with low acidity and full body.
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: AC.secondarySystemGroupedBackground as any,
              borderRadius: 16,
              borderCurve: "continuous",
              padding: 16,
              gap: 8,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
                color: AC.label as any,
              }}
            >
              Fun Facts
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: AC.secondaryLabel as any,
                lineHeight: 20,
              }}
            >
              • Coffee is the second most traded commodity in the world after crude oil{'\n'}
              • A coffee tree can live up to 100 years{'\n'}
              • It takes about 42 coffee beans to make an espresso{'\n'}
              • Brazil is the world's largest coffee producer{'\n'}
              • Coffee was discovered in Ethiopia around 850 AD
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
