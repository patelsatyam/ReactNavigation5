import React from "react";
import PropTypes from "prop-types";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import {
  bgDrawerHeader,
  drawerLogoColor,
  drawerInactiveItemColor,
  bgDrawerInactiveItem,
  bgDrawerActiveItem,
  drawerHeaderColor
} from "./style";
import { Icon } from "react-native-elements";

export default DrawerContent = ({ navigation }) => (
    <View style={{ flex:1, backgroundColor: '#f2f2f2'  }}>
    <View style={styles.header}>
      <View style={styles.headerLogo}>
        <Icon name="person" type="materialcommunity" size={50} color={drawerLogoColor} />
      </View>
      <View style={styles.subTitle}>
        <Text style={styles.drawerTitle}>Satyam Patel</Text>
        <Text style={styles.drawerEmail}>patel.satyam147@gmail.com</Text>
      </View>
      </View>
      
      <View style={{ alignItems: 'center', paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: 'gray'  }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Dummy1")}
          >
              <Text>Dummy 1</Text>
          </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: 'gray'   }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Dummy2")}
          >
              <Text>Dummy 2</Text>
          </TouchableOpacity>
      </View>

    {/* {routes.map(route => (
      <TouchableOpacity
        key={route.screen}
        onPress={() => {
          closeDrawer();
          navigateTo(route.name);
        }}
        style={
          activeRoute.name === route.name
            ? [styles.drawerItem, styles.activeDrawerItem]
            : styles.drawerItem
        }
      >
        {route.icon && (
          <View style={styles.drawerItemLogo}>
            <Icon
              name={route.icon}
              size={30}
              color={activeRoute.name === route.name ? "#fff" : "#000"}
            />
          </View>
        )}
        <Text
          style={
            activeRoute.name === route.name
              ? { color: "#fff" }
              : { color: "#000" }
          }
        >
          {route.name}
        </Text> */}
      {/* </TouchableOpacity>
    ))} */}
        </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    paddingTop: 40, // 24dp (Space for the translucent StatusBar) plus 16dp Android Header paddingTop
    paddingLeft: 16,
    height: 170,
    backgroundColor: bgDrawerHeader
  },
  headerLogo: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: "#fff"
  },
  subTitle: {
    height: 56,
    paddingTop: 8
  },
  drawerTitle: {
    color: drawerHeaderColor,
    fontWeight: "500",
    fontSize: 14
  },
  drawerEmail: {
    color: drawerHeaderColor,
    // fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14
  },
  activeDrawerItem: {
    backgroundColor: bgDrawerActiveItem
  },
  drawerItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: bgDrawerInactiveItem,
    color: drawerInactiveItemColor,
    height: 50,
    paddingLeft: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#fff"
  },
  drawerItemLogo: {
    paddingRight: 16
  }
});