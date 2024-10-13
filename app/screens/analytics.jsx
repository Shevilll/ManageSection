import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    PixelRatio,
} from "react-native";
import React from "react";
import Heading from "../../components/Heading";
import { images } from "../../constants/images";
import { LineChart } from "react-native-gifted-charts";
import { s, vs, ms } from "react-native-size-matters";
import {
    Arrowsvg,
    SvgComponent,
    Heart,
    Globe,
    Users,
    Phone,
    Cart,
    Bag,
} from "../../constants";

const analytics = () => {
    const { width, height } = Dimensions.get("window");
    const scale = PixelRatio.getFontScale();
    const data = [
        { value: 10 },
        { value: 30 },
        { value: 25 },
        { value: 50 },
        { value: 40 },
    ];
    return (
        <View>
            <Heading title="Analytics" back={true} />
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: ms(100),
                }}
            >
                <View
                    className="items-center justify-center"
                    style={{
                        height: "auto",
                    }}
                >
                    <View
                        className="w-[95%] flex-1 flex-row justify-between items-end mt-4"
                        style={{
                            width: s(330),
                            height: ms(200),
                        }}
                    >
                        <View
                            className=" rounded-xl bg-white items-center"
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
                                className="justify-center items-start absolute w-full h-full"
                                style={{
                                    width: s(160),
                                    height: "auto",
                                }}
                            >
                                <View
                                    className=" items-center justify-center w-full right-4"
                                    style={{
                                        shadowColor: "#000",
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 2,
                                        elevation: 3,
                                    }}
                                >
                                    <LineChart
                                        data={data}
                                        thickness={2}
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
                                        width={s(135)}
                                        dataPointsRadius={ms(3)}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    alignItems: "flex-start",
                                    width: "100%",
                                    justifyContent: "flex-end",
                                }}
                                className="flex-1"
                            >
                                <Text
                                    className="mt-40 text-[16px] font-[PoppinsLight] px-4"
                                    style={{
                                        fontSize: ms(12) / scale,
                                    }}
                                >
                                    Total Visitors
                                </Text>
                                <Text
                                    className="px-4 text-[36px] font-[PoppinsMedium]"
                                    style={{
                                        fontSize: ms(24) / scale,
                                    }}
                                >
                                    20,420
                                </Text>
                            </View>
                        </View>
                        <View
                            className=""
                            style={{
                                width: s(160),
                            }}
                        >
                            <View className="flex-1 flex-col justify-between">
                                <View
                                    className="w-[50%] h-[150px] rounded-xl bg-white"
                                    style={{
                                        shadowColor: "#000",
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 2,
                                        elevation: 3,
                                        width: "full",
                                        height: ms(132),
                                    }}
                                >
                                    <View
                                        className=""
                                        style={{
                                            width: "full",
                                            height: ms(62),
                                        }}
                                    >
                                        <View
                                            className="flex-1 flex-row justify-between items-center"
                                            style={{
                                                padding: ms(8),
                                            }}
                                        >
                                            <View
                                                className={`w-[45px] h-[45px] rounded-xl`}
                                                style={{
                                                    shadowColor: "#000",
                                                    shadowOffset: {
                                                        width: 0,
                                                        height: 1,
                                                    },
                                                    shadowOpacity: 0.2,
                                                    shadowRadius: 2,
                                                    elevation: 3,
                                                    backgroundColor: "#E9E7FD",
                                                    width: ms(40),
                                                    height: ms(40),
                                                }}
                                            >
                                                {/* <Image
                                                    source={images.globe}
                                                    resizeMode="contain"
                                                    className="m-auto w-[30px] h-[30px]"
                                                    style={{
                                                        width: ms(25),
                                                        height: ms(25),
                                                    }}
                                                /> */}
                                                <View className="m-auto">
                                                    <SvgComponent
                                                        SvgIcon={Globe}
                                                        width={ms(30)}
                                                        height={ms(30)}
                                                        stroke={"#9559D8"}
                                                    />
                                                </View>
                                            </View>
                                            <View>
                                                <Text
                                                    className="w-full font-[PoppinsMedium] text-[24px] text-right"
                                                    style={{
                                                        fontSize:
                                                            ms(24) / scale,
                                                    }}
                                                >
                                                    656
                                                </Text>
                                                <Text
                                                    className="w-full font-[PoppinsLight] text-[12px] text-right"
                                                    style={{
                                                        fontSize:
                                                            ms(12) / scale,
                                                    }}
                                                >
                                                    Website Visitor
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View
                                        className="border-[0.4px] border-b-[#E4E7EC] w-[92%] m-auto mt-2"
                                        style={{
                                            width: s(130),
                                        }}
                                    ></View>
                                    <View
                                        className="w-full h-[75px]"
                                        style={{
                                            height: ms(62),
                                        }}
                                    >
                                        <View
                                            className="flex-1 flex-row justify-between items-center"
                                            style={{
                                                padding: ms(8),
                                            }}
                                        >
                                            <View
                                                className={`w-[45px] h-[45px] rounded-xl`}
                                                style={{
                                                    shadowColor: "#000",
                                                    shadowOffset: {
                                                        width: 0,
                                                        height: 1,
                                                    },
                                                    shadowOpacity: 0.2,
                                                    shadowRadius: 2,
                                                    elevation: 3,
                                                    backgroundColor: "#D6F4F8",
                                                    width: ms(40),
                                                    height: ms(40),
                                                }}
                                            >
                                                {/* <Image
                                                    source={images.users}
                                                    resizeMode="contain"
                                                    className="m-auto w-[30px] h-[30px]"
                                                    style={{
                                                        width: ms(25),
                                                        height: ms(25),
                                                    }}
                                                /> */}
                                                <View className="m-auto">
                                                    <SvgComponent
                                                        SvgIcon={Users}
                                                        width={ms(30)}
                                                        height={ms(30)}
                                                        stroke={"#FF555A"}
                                                    />
                                                </View>
                                            </View>
                                            <View>
                                                <Text
                                                    className=" w-full text-right font-[PoppinsMedium] text-[24px]"
                                                    style={{
                                                        fontSize:
                                                            ms(24) / scale,
                                                    }}
                                                >
                                                    160
                                                </Text>
                                                <Text
                                                    className=" w-full text-right  font-[PoppinsLight] text-[12px]"
                                                    style={{
                                                        fontSize:
                                                            ms(12) / scale,
                                                    }}
                                                >
                                                    Guest Visitor
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View
                                    className="w-[50%] h-[75px] rounded-xl bottom-0 right-0 bg-white"
                                    style={{
                                        shadowColor: "#000",
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 2,
                                        elevation: 3,
                                        width: "full",
                                        height: ms(62),
                                    }}
                                >
                                    <View
                                        className="flex-1 flex-row justify-between items-center"
                                        style={{
                                            padding: ms(8),
                                        }}
                                    >
                                        <View
                                            className={`w-[45px] h-[45px] rounded-xl`}
                                            style={{
                                                shadowColor: "#000",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 1,
                                                },
                                                shadowOpacity: 0.2,
                                                shadowRadius: 2,
                                                elevation: 3,
                                                backgroundColor: "#FFF1E2",
                                                width: ms(40),
                                                height: ms(40),
                                            }}
                                        >
                                            {/* <Image
                                                source={images.phone}
                                                resizeMode="contain"
                                                className="m-auto w-[30px] h-[30px]"
                                                style={{
                                                    width: ms(25),
                                                    height: ms(25),
                                                }}
                                            /> */}
                                            <View className="m-auto">
                                                <SvgComponent
                                                    SvgIcon={Phone}
                                                    width={ms(30)}
                                                    height={ms(30)}
                                                    stroke={"#FF555A"}
                                                />
                                            </View>
                                        </View>
                                        <View>
                                            <Text
                                                className="w-full text-right font-[PoppinsMedium] text-[24px]"
                                                style={{
                                                    fontSize: ms(24) / scale,
                                                }}
                                            >
                                                320
                                            </Text>
                                            <Text
                                                className="w-full text-right font-[PoppinsLight] text-[12px]"
                                                style={{
                                                    fontSize: ms(12) / scale,
                                                }}
                                            >
                                                App Visitor
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View
                        className="bg-white mt-4 rounded-xl p-3"
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
                            className="w-[60px] h-[60px] absolute rounded-xl"
                            style={{
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.2,
                                shadowRadius: 2,
                                elevation: 3,
                                backgroundColor: "#FFE2E3",
                                width: ms(50),
                                height: ms(50),
                                margin: ms(16, 0.2),
                            }}
                        >
                            {/* <Image
                                source={images.heart}
                                resizeMode="contain"
                                className="m-auto w-[30px] h-[30px]"
                                style={{
                                    width: ms(25),
                                    height: ms(25),
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
                            className=" font-[PoppinsMedium] text-[#0A162D] ml-20 mt-1"
                            style={{
                                fontSize: ms(20) / scale,
                                marginLeft: ms(65),
                            }}
                        >
                            Customer Liked Product
                        </Text>
                        <Text
                            className="text-[16px] text-[#6B7078] font-light py-1 ml-20 pr-2"
                            style={{
                                fontSize: ms(16) / scale,
                                lineHeight: ms(20) / scale,
                                marginLeft: ms(65),
                            }}
                        >
                            View All Customer-Liked Products
                        </Text>
                        <View className="flex-1 justify-between flex-row items-end mt-8">
                            <View>
                                <Text
                                    className="text-[16px] font-[PoppinsLight]"
                                    style={{
                                        fontSize: ms(12) / scale,
                                    }}
                                >
                                    Total Likes
                                </Text>
                                <Text
                                    className="text-[36px] font-[PoppinsMedium] "
                                    style={{
                                        fontSize: ms(24) / scale,
                                    }}
                                >
                                    20,420
                                </Text>
                            </View>
                            <View
                                className={`w-[40px] h-[40px] rounded-full`}
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 2,
                                    elevation: 3,
                                    backgroundColor: "#FFE2E3",
                                    width: ms(40),
                                    height: ms(40),
                                }}
                            >
                                {/* <Image
                                    source={images.arrow}
                                    resizeMode="contain"
                                    className="w-[18px] h-[18px] m-auto "
                                    style={{
                                        tintColor: "#FF555A",
                                        width: ms(16),
                                        height: ms(16),
                                    }} */}
                                <View className="m-auto">
                                    <Arrowsvg
                                        width={ms(18)}
                                        height={ms(18)}
                                        stroke="#FF555A"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View
                        className="w-[95%] h-[180px] mt-4 flex-1 flex-row justify-between items-end"
                        style={{
                            width: s(330),
                            height: "auto",
                        }}
                    >
                        <View
                            className=" w-[50%] h-[180px] rounded-xl bg-white pb-2"
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
                                className="w-[55px] h-[55px] rounded-xl mt-4 bg-[#E9E7FD] m-4"
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 2,
                                    elevation: 3,
                                    width: ms(50),
                                    height: ms(50),
                                    margin: ms(16, 0.2),
                                }}
                            >
                                {/* <Image
                                    source={images.cart}
                                    resizeMode="contain"
                                    className="m-auto w-[30px] h-[30px]"
                                    style={{
                                        width: ms(25),
                                        height: ms(25),
                                    }}
                                /> */}
                                <View className="m-auto">
                                    <SvgComponent
                                        SvgIcon={Cart}
                                        width={ms(30)}
                                        height={ms(30)}
                                        stroke={"#FF555A"}
                                    />
                                </View>
                            </View>
                            <Text
                                className="px-4  font-[PoppinsMedium]"
                                style={{ fontSize: ms(24) / scale }}
                            >
                                20,420
                            </Text>
                            <Text
                                className="px-4 text-[#6B7078] font-light"
                                style={{ fontSize: ms(12) / scale }}
                            >
                                Total Enquiries received
                            </Text>
                            <Text
                                className="mt-1 px-4 text-[#6B7078] text-[14px] font-[PoppinsSemiBold]"
                                style={{
                                    fontSize: ms(12) / scale,
                                }}
                            >
                                Enquiries Received
                            </Text>
                        </View>
                        <View
                            className=" w-[50%] h-[180px] top-0 right-0 rounded-xl bg-white pb-2"
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
                                className="w-[55px] h-[55px] rounded-xl mt-4 bg-[#D6F4F8] m-4"
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 2,
                                    elevation: 3,
                                    width: ms(50),
                                    height: ms(50),
                                    margin: ms(16, 0.2),
                                }}
                            >
                                {/* <Image
                                    source={images.bag}
                                    resizeMode="contain"
                                    className="m-auto w-[30px] h-[30px]"
                                    style={{
                                        width: ms(25),
                                        height: ms(25),
                                    }}
                                /> */}
                                <View className="m-auto">
                                    <SvgComponent
                                        SvgIcon={Bag}
                                        width={ms(30)}
                                        height={ms(30)}
                                        stroke={"#FF555A"}
                                    />
                                </View>
                            </View>
                            <Text
                                className="px-4  font-[PoppinsMedium]"
                                style={{ fontSize: ms(24) / scale }}
                            >
                                20,420
                            </Text>
                            <Text
                                className="px-4 text-[#6B7078] font-light"
                                style={{ fontSize: ms(12) / scale }}
                            >
                                Total Enquiries received
                            </Text>
                            <Text
                                className="mt-1 px-4 text-[#6B7078] text-[14px] font-[PoppinsSemiBold]"
                                style={{
                                    fontSize: ms(12) / scale,
                                }}
                            >
                                Enquiries Received
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default analytics;
