import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    PixelRatio,
} from "react-native";
import React from "react";
import Heading from "../../components/Heading";
import { images } from "../../constants/images";
import MetricItem from "../../components/MetricItem";
import { router } from "expo-router";
import { LineChart } from "react-native-gifted-charts";
import { s, vs, ms } from "react-native-size-matters";
import {
    Arrowsvg,
    Purchase,
    Order,
    Heart,
    Create,
    Connection,
    Permission,
    Visibility,
    SvgComponent,
} from "../../constants";

const manage = () => {
    const data = [
        { value: 10 },
        { value: 30 },
        { value: 25 },
        { value: 50 },
        { value: 40 },
    ];
    const scale = PixelRatio.getFontScale();
    return (
        <View>
            <Heading title="Manage" />
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: ms(100),
                }}
            >
                <View className="items-center justify-center">
                    <TouchableOpacity
                        onPress={() => router.push("../screens/analytics")}
                        activeOpacity={0.7}
                    >
                        <View
                            className="bg-white  h-[180px] mt-4 rounded-xl"
                            style={{
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.2,
                                shadowRadius: 2,
                                elevation: 3,
                                width: s(330),
                                height: "auto",
                                padding: ms(12),
                            }}
                        >
                            <View className="flex-1 justify-between flex-row items-start">
                                <View>
                                    <Text
                                        className=" font-[PoppinsMedium] text-[#0A162D]"
                                        style={{
                                            fontSize: ms(24) / scale,
                                        }}
                                    >
                                        Analytics
                                    </Text>
                                    <Text
                                        className=" text-[#6B7078] font-light"
                                        style={{
                                            fontSize: ms(16) / scale,
                                            width: ms(270),
                                        }}
                                    >
                                        Visitor Analytics for Mobile Store &
                                        Website
                                    </Text>
                                </View>
                                <View
                                    className="w-[40px] h-[40px] rounded-full bg-[#EEFFF7]"
                                    style={{
                                        shadowColor: "#000",
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 2,
                                        elevation: 3,
                                        width: ms(50),
                                        height: ms(50),
                                    }}
                                >
                                    {/* <Image
                                        source={images.arrow}
                                        resizeMode="contain"
                                        className="w-[18px] h-[18px] m-auto "
                                        style={{
                                            tintColor: "#17B26A",
                                            width: ms(18),
                                            height: ms(18),
                                        }}
                                    /> */}
                                    <View className="m-auto">
                                        <Arrowsvg
                                            width={ms(20)}
                                            height={ms(20)}
                                            stroke="#17B26A"
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                className="flex-1 flex-row justify-between items-end"
                                style={{ height: ms(150) }}
                            >
                                <View>
                                    <Text
                                        className="text-[#0A162D] font-semibold"
                                        style={{
                                            fontSize: ms(40) / scale,
                                        }}
                                    >
                                        20,420
                                    </Text>
                                </View>
                                <View
                                    className=" items-center justify-center"
                                    style={{
                                        shadowColor: "#000",
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 2,
                                        elevation: 3,
                                        bottom: ms(-26),
                                        right: ms(48),
                                    }}
                                >
                                    <LineChart
                                        data={data}
                                        thickness={ms(2)}
                                        color="green"
                                        curved
                                        showYAxisIndices={false}
                                        showXAxisIndices={false}
                                        showYAxisLabel={false}
                                        showXAxisLabel={false}
                                        startFillColor="transparent"
                                        endFillColor="transparent"
                                        isAnimated
                                        hideRules
                                        backgroundColor="transparent"
                                        initialSpacing={10}
                                        hideAxesAndRules
                                        adjustToWidth
                                        endSpacing={0}
                                        height={ms(150)}
                                        width={ms(150)}
                                        dataPointsRadius={ms(3)}
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <MetricItem
                        logo={Purchase}
                        logobgcolor="#E9E7FD"
                        title="Purchase Order"
                        desc="Track Your Purchase Order"
                        arrowcolor="#9559D8"
                        arrowbgcolor="#E9E7FD"
                    />
                    <MetricItem
                        logo={Order}
                        logobgcolor="#D6F4F8"
                        title="Order Received"
                        desc="Track and Manage Your Customer's Order"
                        arrowcolor="#10BED4"
                        arrowbgcolor="#D6F4F8"
                    />
                    <View
                        className=" mt-4 flex-1 flex-row justify-between"
                        style={{ width: s(330), height: "auto", gap: 10 }}
                    >
                        <View
                            className=" rounded-xl bg-white items-center pb-4"
                            style={{
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.2,
                                shadowRadius: 2,
                                elevation: 3,
                                width: s(160),
                                height: "auto",
                            }}
                        >
                            <View
                                className="w-[55px] h-[55px] rounded-xl mt-4 bg-[#FFE2E3]"
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 2,
                                    elevation: 3,
                                    width: ms(55),
                                    height: ms(55),
                                }}
                            >
                                {/* <Image
                                    source={Heart}
                                    resizeMode="contain"
                                    className="m-auto w-[30px] h-[30px]"
                                    style={{
                                        width: ms(30),
                                        height: ms(30),
                                    }}
                                /> */}
                                <View className="m-auto">
                                    <SvgComponent
                                        SvgIcon={Heart}
                                        width={ms(30)}
                                        height={ms(30)}
                                        stroke={"#FF555A"}
                                    />
                                </View>
                            </View>
                            <Text
                                className="text-center mt-5 font-[PoppinsMedium]"
                                style={{
                                    fontSize: ms(20) / scale,
                                }}
                            >
                                My Wish-list
                            </Text>
                            <Text
                                className="text-center mt-1 px-4 text-[#6B7078] font-light"
                                style={{
                                    fontSize: ms(14) / scale,
                                }}
                            >
                                View Products You Liked from Sellers
                            </Text>
                        </View>
                        <View
                            className=" w-[50%] h-[180px] rounded-xl bg-white items-center"
                            style={{
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.2,
                                shadowRadius: 2,
                                elevation: 3,
                                width: s(160),
                                height: "auto",
                            }}
                        >
                            <View
                                className="w-[55px] h-[55px] rounded-xl mt-4 bg-[#DDF6E8]"
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 2,
                                    elevation: 3,
                                    width: ms(55),
                                    height: ms(55),
                                }}
                            >
                                {/* <Image
                                    source={Create}
                                    resizeMode="contain"
                                    className="m-auto w-[30px] h-[30px]"
                                    style={{
                                        width: ms(30),
                                        height: ms(30),
                                    }}
                                /> */}
                                <View className="m-auto">
                                    <SvgComponent
                                        SvgIcon={Create}
                                        width={ms(30)}
                                        height={ms(30)}
                                        stroke={"#3ECD7E"}
                                    />
                                </View>
                            </View>
                            <Text
                                className="text-center mt-5 text-[20px] font-[PoppinsMedium]"
                                style={{
                                    fontSize: ms(20) / scale,
                                }}
                            >
                                Create Order
                            </Text>
                            <Text
                                className="text-center mt-1 px-4 text-[#6B7078] text-[14px] font-light"
                                style={{
                                    fontSize: ms(14) / scale,
                                }}
                            >
                                Add Items and Create Orders for Customers
                            </Text>
                        </View>
                    </View>
                    <MetricItem
                        logo={Connection}
                        logobgcolor="#F6ECDD"
                        title="Connection Request"
                        desc="Pending Connections: Who Wants to Connect?"
                        arrowcolor="#CD8A3E"
                        arrowbgcolor="#F6ECDD"
                    />
                    <MetricItem
                        logo={Permission}
                        logobgcolor="#F6DDEE"
                        title="Store Permission"
                        desc="Visitors Requesting Access to View Website Products and Catalogues"
                        arrowcolor="#CD3EBA"
                        arrowbgcolor="#F6DDEE"
                    />
                    <View
                        className="bg-white  mt-4 rounded-xl p-3"
                        style={{
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.2,
                            shadowRadius: 2,
                            elevation: 3,
                            width: s(330),
                            height: "auto",
                        }}
                    >
                        <View
                            className="w-[60px] h-[60px] absolute m-4 rounded-xl"
                            style={{
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.2,
                                shadowRadius: 2,
                                elevation: 3,
                                backgroundColor: "#F4F6DD",
                                width: ms(50),
                                height: ms(50),
                                margin: ms(16, 0.2),
                            }}
                        >
                            {/* <Image
                                source={images.key}
                                resizeMode="contain"
                                className="m-auto w-[30px] h-[30px]"
                                style={{
                                    height: ms(25),
                                    width: ms(25),
                                }}
                            /> */}
                            <View className="m-auto">
                                <SvgComponent
                                    SvgIcon={Visibility}
                                    width={ms(25)}
                                    height={ms(25)}
                                    stroke="#B4C210"
                                />
                            </View>
                        </View>
                        <Text
                            className=" font-[PoppinsMedium] text-[#0A162D] ml-20 pr-3"
                            style={{
                                fontSize: ms(24) / scale,
                                marginLeft: ms(65),
                            }}
                        >
                            Store Visibility
                        </Text>
                        <Text
                            className="text-[#6B7078] font-light py-1 ml-20 pr-2"
                            style={{
                                fontSize: ms(16) / scale,
                                lineHeight: ms(20) / scale,
                                marginLeft: ms(65),
                            }}
                        >
                            Private or Public
                        </Text>

                        <View
                            className={`w-[40px] h-[40px] rounded-full absolute m-4 bottom-0 right-0 mb-6`}
                            style={{
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.2,
                                shadowRadius: 2,
                                elevation: 3,
                                backgroundColor: "#F4F6DD",
                                width: ms(45),
                                height: ms(45),
                            }}
                        >
                            {/* <Image
                                source={images.arrow}
                                resizeMode="contain"
                                className="w-[18px] h-[18px] m-auto "
                                style={{
                                    tintColor: "#B4C210",
                                    width: ms(20),
                                    height: ms(20),
                                }}
                            /> */}
                            <View className="m-auto">
                                <Arrowsvg
                                    width={ms(20)}
                                    height={ms(20)}
                                    stroke="#B4C210"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default manage;
