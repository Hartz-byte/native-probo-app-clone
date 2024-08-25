import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PieChart, BarChart } from "react-native-gifted-charts";

const MarketPredict = () => {
  const pieData = [
    { value: 64, color: "#144CC7", text: "Yes" },
    { value: 36, color: "#06C270", text: "No" },
  ];

  const barData = [
    {
      value: 2500,
      frontColor: "#144CC7",
      gradientColor: "#144CC7",
      spacing: 10,
      label: "1:30AM",
    },
    { value: 2400, frontColor: "#06C270", gradientColor: "#06C270" },

    {
      value: 3500,
      frontColor: "#144CC7",
      gradientColor: "#144CC7",
      spacing: 10,
      label: "2:00AM",
    },
    { value: 3000, frontColor: "#06C270", gradientColor: "#06C270" },

    {
      value: 4500,
      frontColor: "#144CC7",
      gradientColor: "#144CC7",
      spacing: 10,
      label: "2:30AM",
    },
    { value: 4000, frontColor: "#06C270", gradientColor: "#06C270" },

    {
      value: 5200,
      frontColor: "#144CC7",
      gradientColor: "#144CC7",
      spacing: 10,
      label: "3:00AM",
    },
    { value: 4900, frontColor: "#06C270", gradientColor: "#06C270" },

    {
      value: 3000,
      frontColor: "#144CC7",
      gradientColor: "#144CC7",
      spacing: 10,
      label: "3:30AM",
    },
    { value: 2800, frontColor: "#06C270", gradientColor: "#06C270" },
  ];

  const [activeButtons, setActiveButtons] = useState(["All time"]);

  const handleButtonPress = (buttonText) => {
    const newActiveButtons = [...activeButtons];

    if (activeButtons.includes(buttonText)) {
      const index = activeButtons.indexOf(buttonText);
      newActiveButtons.splice(index, 1);
    } else {
      newActiveButtons.push(buttonText);
    }

    setActiveButtons(newActiveButtons);
  };

  return (
    <View style={styles.container}>
      {/* title */}
      <Text style={styles.text}>THE MARKET PREDICT</Text>

      {/* donut chart */}
      <View style={styles.chartContainer}>
        {/* donut chart */}
        <PieChart
          donut
          radius={80}
          data={pieData}
          innerRadius={70}
          backgroundColor="black"
        />

        {/* chart text */}
        <View>
          {pieData.map((item, index) => (
            <View key={index} style={styles.colorFlex}>
              {/* color box */}
              <View
                style={{ ...styles.colorBox, backgroundColor: item.color }}
              />

              <Text style={styles.chartText}>{item.text}</Text>

              {/* % text */}
              <Text style={styles.chartText}>{item.value} %</Text>
            </View>
          ))}
        </View>
      </View>

      {/* title */}
      <Text style={[styles.text, styles.text2]}>THE MARKET TREND / CHART</Text>

      {/* bar chart */}
      <View>
        {/* bar chart */}
        <BarChart
          data={barData}
          barWidth={21}
          initialSpacing={10}
          spacing={14}
          barBorderRadius={4}
          showGradient
          yAxisThickness={0.5}
          yAxisColor={"lightgray"}
          xAxisColor={"lightgray"}
          yAxisTextStyle={{ color: "lightgray" }}
          stepValue={1000}
          maxValue={6000}
          yAxisLabelTexts={[
            "10",
            "20",
            "30",
            "40",
            "50",
            "60",
            "70",
            "80",
            "90",
            "100",
          ]}
          labelWidth={40}
          xAxisLabelTextStyle={{ color: "lightgray", textAlign: "center" }}
          showLine
          lineConfig={{
            color: "#F29C6E",
            thickness: 3,
            curved: true,
            hideDataPoints: true,
            shiftY: 20,
            initialSpacing: -30,
          }}
        />

        {/* buttons */}
        <View style={styles.buttonContainer}>
          {["1 h", "3 h", "12 h", "All time"].map((buttonText) => (
            <TouchableOpacity
              key={buttonText}
              style={[
                styles.button,
                activeButtons.includes(buttonText) && styles.clickedButton,
              ]}
              onPress={() => handleButtonPress(buttonText)}
            >
              <Text
                style={[
                  styles.buttonText,
                  activeButtons.includes(buttonText) && styles.clickedText,
                ]}
              >
                {buttonText}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  text: {
    color: "#D2D2D2",
    letterSpacing: 1.5,
    fontWeight: "bold",
    fontSize: 16,
  },
  text2: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 30,
  },

  chartContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },

  chartText: {
    color: "white",
    fontSize: 22,
    width: 50,
  },

  colorBox: {
    width: 20,
    height: 20,
    borderRadius: 4,
  },

  colorFlex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  button: {
    width: 80,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    shadowColor: "#fff",
    elevation: 2,
  },
  clickedButton: {
    width: 80,
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    shadowColor: "#fff",
    elevation: 2,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  clickedText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default MarketPredict;
