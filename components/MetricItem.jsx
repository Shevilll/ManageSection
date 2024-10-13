import { View, Text, Image, PixelRatio } from "react-native";
import React from "react";
import { images } from "../constants/images";
import { s, vs, ms } from "react-native-size-matters";
import { Arrowsvg, SvgComponent } from "../constants";

const MetricItem = ({
    logo,
    logobgcolor,
    title,
    desc,
    arrowcolor,
    arrowbgcolor,
}) => {
    const scale = PixelRatio.getFontScale();
    return (
        <View
            className="bg-white mt-4 rounded-xl p-3 "
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
                className="absolute rounded-xl"
                style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                    elevation: 3,
                    backgroundColor: logobgcolor,
                    width: ms(50),
                    height: ms(50),
                    margin: ms(16, 0.2),
                }}
            >
                {/* <Image
                    source={logo}
                    resizeMode="contain"
                    className="m-auto"
                    style={{
                        width: ms(25),
                        height: ms(25),
                    }}
                /> */}
                <View className="m-auto">
                    <SvgComponent
                        SvgIcon={logo}
                        width={ms(25)}
                        height={ms(25)}
                        stroke={arrowcolor}
                    />
                </View>
            </View>
            <Text
                className="font-[PoppinsMedium] text-[#0A162D] ml-20"
                style={{ fontSize: ms(24) / scale, marginLeft: ms(65) }}
            >
                {title}
            </Text>
            <Text
                className="text-[#6B7078] font-light ml-20 pr-2 "
                style={{
                    fontSize: ms(16) / scale,
                    lineHeight: ms(20) / scale,
                    marginLeft: ms(65),
                }}
            >
                {desc}
            </Text>
            <View
                style={{
                    height: ms(50),
                    width: "full",
                    marginTop: ms(20, 0.1),
                }}
                className="flex-row justify-between items-between"
            >
                <View
                    className=" w-[150px] h-[40px] bottom-0 left-0"
                    style={{
                        width: s(150),
                        height: ms(60),
                    }}
                >
                    <View
                        className=" absolute w-[40px] h-[40px] rounded-full"
                        style={{
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.4,
                            shadowRadius: 2,
                            elevation: 3,
                            width: ms(45),
                            height: ms(45),
                        }}
                    >
                        <Image
                            source={images.p1image}
                            resizeMode="cover"
                            className="w-[40px] h-[40px] rounded-full"
                            style={{
                                width: ms(45),
                                height: ms(45),
                            }}
                        />
                    </View>
                    <View
                        className=" absolute w-[40px] h-[40px] rounded-full ml-8"
                        style={{
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.4,
                            shadowRadius: 2,
                            elevation: 3,
                            width: ms(45),
                            height: ms(45),
                            marginLeft: ms(30, 0.75),
                        }}
                    >
                        <Image
                            source={images.p2image}
                            resizeMode="cover"
                            className="w-[40px] h-[40px] rounded-full"
                            style={{
                                width: ms(45),
                                height: ms(45),
                            }}
                        />
                    </View>
                    <View
                        className=" absolute w-[40px] h-[40px] rounded-full ml-16"
                        style={{
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.4,
                            shadowRadius: 2,
                            elevation: 3,
                            width: ms(45),
                            height: ms(45),
                            marginLeft: ms(60, 0.75),
                        }}
                    >
                        <Image
                            source={images.p3image}
                            resizeMode="cover"
                            className="w-[40px] h-[40px] rounded-full"
                            style={{
                                width: ms(45),
                                height: ms(45),
                            }}
                        />
                    </View>
                    <View
                        className="absolute w-[40px] h-[40px] rounded-full ml-24 bg-[#F9F9F9]"
                        style={{
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.4,
                            shadowRadius: 2,
                            elevation: 3,
                            width: ms(45),
                            height: ms(45),
                            marginLeft: ms(90, 0.75),
                        }}
                    >
                        <Text
                            className="text-[#6B7078] m-auto"
                            style={{
                                fontSize: ms(14) / scale,
                                lineHeight: ms(16) / scale,
                            }}
                        >
                            +10
                        </Text>
                    </View>
                </View>
                <View
                    className={`w-[40px] h-[40px] rounded-full bottom-0 right-0`}
                    style={{
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                        elevation: 3,
                        backgroundColor: arrowbgcolor,
                        width: ms(45),
                        height: ms(45),
                    }}
                >
                    {/* <Image
                        source={images.arrow}
                        resizeMode="contain"
                        className="m-auto "
                        style={{
                            tintColor: arrowcolor,
                            width: ms(20),
                            height: ms(20),
                        }}
                    /> */}
                    <View className="m-auto">
                        <Arrowsvg
                            width={ms(20)}
                            height={ms(20)}
                            stroke={arrowcolor}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default MetricItem;
