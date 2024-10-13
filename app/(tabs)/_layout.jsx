import { View, Text, Image, PixelRatio } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "../../constants/images";
import { s, vs, ms } from "react-native-size-matters";
import { Inventory, Store, Message, Manage, Explore } from "../../constants";

const TabIcon = ({ Icon, color, name, focused }) => {
    const scale = PixelRatio.getFontScale();

    return (
        <View
            className="items-center justify-between flex-1 flex-col mt-2"
            style={{
                width: s(70),
                height: s(50),
            }}
        >
            <View>
                <Icon width={s(18)} height={s(18)} stroke={color} />
            </View>
            <View>
                <Text
                    style={{
                        color: color,
                        fontSize: ms(12) / scale,
                    }}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {name}
                </Text>
            </View>
        </View>
    );
};

const _layout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#9559D8",
                    tabBarInactiveTintColor: "#061023",
                    tabBarStyle: {
                        backgroundColor: "#ffffff",
                        height: vs(70),
                        borderTopColor: "slategray",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: -3 },
                        shadowOpacity: 0.25,
                        shadowRadius: 2.2,
                        elevation: 5,
                    },
                }}
            >
                <Tabs.Screen
                    name="inventory"
                    options={{
                        title: "Inventory",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                Icon={Inventory}
                                color={color}
                                name="Inventory"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="store"
                    options={{
                        title: "Store",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                Icon={Store}
                                color={color}
                                name="Store"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="message"
                    options={{
                        title: "Message",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                Icon={Message}
                                color={color}
                                name="Message"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="manage"
                    options={{
                        title: "Manage",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                Icon={Manage}
                                color={color}
                                name="Manage"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="explore"
                    options={{
                        title: "Explore",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                Icon={Explore}
                                color={color}
                                name="Explore"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default _layout;
