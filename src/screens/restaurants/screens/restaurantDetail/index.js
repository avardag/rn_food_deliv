import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import RestaurantInfoCard from "../../RestaurantInfoCard";
import { SafeAreaContainer } from "../../../../components/utility/safeAreaContainer";

export default function RestaurantDetail({ route }) {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeAreaContainer>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menu">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Egg Scrambled by Roger" />
            <List.Item title="Mu¨ßli" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Single Burger" />
            <List.Item title="Double Burger" />
            <List.Item title="Tripple Burger" />
            <List.Item title="Beast Burger" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Plov" />
            <List.Item title="Grechka" />
            <List.Item title="Borshch" />
            <List.Item title="Steak" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Tea" />
            <List.Item title="Coffee" />
            <List.Item title="Cappuccino" />
            <List.Item title="Cola" />
            <List.Item title="Beer" />
            <List.Item title="Mirinda" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeAreaContainer>
  );
}
