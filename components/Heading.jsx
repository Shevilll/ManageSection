import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    PixelRatio,
} from "react-native";
import React from "react";
import { images } from "../constants/images";
import { router } from "expo-router";
import { s, vs, ms } from "react-native-size-matters";
import { SvgComponent, Back } from "../constants";

const Heading = ({ title, back }) => {
    const scale = PixelRatio.getFontScale();
    return (
        <View>
            <View
                style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "slategray",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.25,
                    shadowRadius: 2.2,
                    elevation: 5,
                    backgroundColor: "white",
                    height: vs(70),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 16,
                    paddingTop: ms(40, 0.12),
                }}
            >
                {back && (
                    <TouchableOpacity
                        onPress={() => router.back()}
                        style={{ padding: 8 }}
                    >
                        {/* <Image
                            source={images.backarrow}
                            style={{
                                width: ms(20),
                                height: ms(20),
                            }}
                        /> */}
                        <View>
                            <SvgComponent
                                SvgIcon={Back}
                                width={ms(24)}
                                height={ms(24)}
                                stroke="#000"
                            />
                        </View>
                    </TouchableOpacity>
                )}

                <Text
                    className=" text-black font-[PoppinsMedium]"
                    style={{
                        flex: 1,
                        textAlign: "center",
                        fontSize: s(20) / scale,
                    }}
                >
                    {title}
                </Text>

                {back ? <View style={{ width: 40 }} /> : null}
            </View>
        </View>
    );
};

export default Heading;
