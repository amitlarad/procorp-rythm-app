import React from "react";
import { View } from "react-native";
import { Card, Button, Paragraph } from "react-native-paper";
import ItemsGrid from "./ItemsGrid";
import {
  width95,
  alignSelfCenter,
  elevated3,
  lightGrayBgBox,
  VERTICAL_LIST_SIZE,
  marginVertical5,
  alignSelfEnd,
  cardIconSize,
  viewCol,
  viewColFull,
} from "../Configs/StyleConstants";
import Layout from "./Layout";
import { RenderIcon } from "./Shared";
import theme from "../Configs/ThemeConfig";

const TabLandingPage = (props) => {
  const pageCards = props.pageCards;
  const colType = VERTICAL_LIST_SIZE <= 2 ? viewColFull : viewCol;
  return (
    <Layout showAppbar={true} {...props}>
      <ItemsGrid cls={{ ...width95, ...alignSelfCenter, marginBottom:60 }}>
        {pageCards.map((card) => {
          return (
            <View
            key={card.icon}
              style={{
                ...colType,
                ...elevated3,
                ...lightGrayBgBox,
                ...marginVertical5,
              }}
            >
              <Card>
                <Card.Title title={card.label} />
                <Card.Content>
                  <RenderIcon
                    name={card.icon}
                    icon={card.iconFamily}
                    size={cardIconSize}
                    color={theme.colors.accent}
                  />
                  <Paragraph>{card.desc}</Paragraph>
                </Card.Content>
                <Card.Actions style={{ ...alignSelfEnd }}>
                  <Button
                    icon="arrow-right-circle-outline"
                    contentStyle={{ flexDirection: "row-reverse" }}
                    mode="contained"
                  >
                    Proceed
                  </Button>
                </Card.Actions>
              </Card>
            </View>
          );
        })}
      </ItemsGrid>
    </Layout>
  );
};

export default TabLandingPage;
