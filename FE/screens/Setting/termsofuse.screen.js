import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Modal,
    ScrollView
} from "react-native";
import React from "react";
import Themes from "../../config/theme";
import Button from "../../components/Button.component";

import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Avatar from "./../../assets/images/avatar.png";
import FIcon from "react-native-vector-icons/FontAwesome";
import F5Icon from "react-native-vector-icons/FontAwesome5";
import IconM from "react-native-vector-icons/MaterialIcons";

const Terms = ({ navigation }) => {
    return (
        <View style={[Themes.container, { backgroundColor: "#eee" }]}>
            <View
                style={{
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    height:70,
                    backgroundColor: Themes.color.primary + "aa",
                    opacity: 1,
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    alignItems: "center",
                    elevation: 1000,
                }}
            >
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View style={{ width: "20%" }}>
                        <Button
                            title=""
                            style={[Themes.buttonTransparent, { height: 30 }]}
                            onPress={() => {
                                navigation.navigate("index");
                            }}
                            icon="chevron-circle-left"
                            size={30}
                        />
                    </View>
                    <View
                        style={{
                            width: "60%",
                            height: 50,
                        }}
                    >
                        <Text
                            style={{
                                color: Themes.color.light,
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Terms of use
                        </Text>
                    </View>
                    <View style={{ width: "20%" }}></View>
                    {/* <View
                        style={{
                            height: 60,
                            position: "absolute",
                            top: 0,
                            right: -10,
                        }}
                    >
                        <TouchableOpacity>
                            <Image
                                source={Avatar}
                                style={{
                                    height: 70,
                                    width: 70,
                                }}
                            />
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>


            <ScrollView
                style={{
                    height: 400,
                    width: 400,
                    borderRadius: 10,
                    marginTop: 80,
                    // alignItems: "center",
                    // justifyContent: "center",
                    
                }}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 24,
                            color: Themes.color.primary,
                            fontWeight: "bold",
                            marginBottom: 20,
                        }}
                    >
                        Easy Park Terms Of Use
                    </Text>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 18,
                            color: Themes.color.gray,
                            fontWeight: "bold",
                            marginBottom: 20,
                        }}
                    >
                        Please read these licence term carefully
                    </Text>
                </View>

                <View
                    style={{
                        width: 400,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: Themes.color.gray,
                            fontWeight: "bold",
                        }}
                    >
                        Phạm vi sử dụng thông tin
                    </Text>

                    <Text
                        style={{
                            fontSize: 14,
                            color: Themes.color.gray,
                            marginBottom: 20,
                        }}
                    >
                        Chúng tôi cam kết chỉ sử dụng thông tin trong nội bộ
                        theo đúng như những mục đích đã đề ra.
                    </Text>
                </View>

                <View
                    style={{
                        width: 400,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: Themes.color.gray,
                            fontWeight: "bold",
                        }}
                    >
                        Thời gian lưu trữ thông tin
                    </Text>

                    <Text
                        style={{
                            fontSize: 14,
                            color: Themes.color.gray,
                            marginBottom: 20,
                        }}
                    >
                        Chúng tôi sẽ lưu trữ các Thông tin cá nhân do Khách hàng
                        cung cấp trên các hệ thống nội bộ của chúng tôi trong
                        quá trình cung cấp dịch vụ cho Khách hàng hoặc cho đến
                        khi hoàn thành mục đích thu thập hoặc khi Khách hàng có
                        yêu cầu hủy các thông tin đã cung cấp.
                    </Text>
                </View>

                <View
                    style={{
                        width: 400,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: Themes.color.gray,
                            fontWeight: "bold",
                        }}
                    >
                        Cam kết bảo mật thông tin cá nhân khách hàng
                    </Text>

                    <Text
                        style={{
                            fontSize: 14,
                            color: Themes.color.gray,
                            marginBottom: 20,
                        }}
                    >
                        Thông tin của khách hàng được cam kết bảo mật tuyệt đối
                        theo chính sách bảo vệ thông tin cá nhân . Việc thu thập
                        và sử dụng thông tin của mỗi khách hàng chỉ được thực
                        hiện khi có sự đồng ý của khách hàng đó , trừ trường hợp
                        buộc phải cung cấp khi Cơ quan chức năng yêu cầu.Không
                        sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên
                        thứ 3 nào về thông tin cá nhân của thành viên khi không
                        có sự cho phép đồng ý từ thành viên. Trong trường hợp
                        máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất
                        mát dữ liệu cá nhân thành viên, ban quản trị website sẽ
                        có trách nhiệm thông báo vụ việc cho cơ quan chức năng
                        điều tra xử lý kịp thời và thông báo cho thành viên được
                        biết. Trong trường hợp khách hàng phát hiện thông tin cá
                        nhân bị sử dụng sai mục đích hoặc bị xâm phạm thì khách
                        hàng có thể gửi khiếu nại thông qua kênh chăm sóc khách
                        hàng của chúng tôi, khi nhận được các thông tin khiếu
                        nại của thành viên, chúng tôi sẽ dùng mọi biện pháp cần
                        thiết để ngăn chặng không cho thông tin cá nhân đó bị
                        tiếp tục xâm phạm, đồng thời có các biện pháp hỗ trợ để
                        bảo vệ quyền và lợi ích hợp pháp của khách hàng.Khách
                        hàng có quyền gửi khiếu nại về việc lộ thông tin cá nhân
                        cho bên thứ 3 đến Ban quản trị của website. Khi tiếp
                        nhận những phản hồi này, chúng tôi sẽ xác nhận lại thông
                        tin, phải có trách nhiệm trả lời lý do và hướng dẫn
                        thành viên khôi phục và bảo mật lại thông tin.
                    </Text>
                </View>

                <View
                    style={{
                        width: 400,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: Themes.color.gray,
                            fontWeight: "bold",
                        }}
                    >
                        Sử dụng Dịch vụ của chúng tôi
                    </Text>

                    <Text
                        style={{
                            fontSize: 14,
                            color: Themes.color.gray,
                            marginBottom: 20,
                        }}
                    >
                        Bạn phải tuân thủ mọi chính sách đã cung cấp cho bạn
                        trong phạm vi Dịch vụ. Không được sử dụng trái phép Dịch
                        vụ của chúng tôi. Ví dụ: không được gây trở ngại cho
                        Dịch vụ của chúng tôi hoặc tìm cách truy cập chúng bằng
                        phương pháp nào đó không thông qua giao diện và hướng
                        dẫn mà chúng tôi cung cấp. Bạn chỉ có thể sử dụng Dịch
                        vụ của chúng tôi theo như được luật pháp cho phép, bao
                        gồm cả các luật và quy định hiện hành về quản lý xuất
                        khẩu và tái xuất khẩu. Chúng tôi có thể tạm ngừng hoặc
                        ngừng cung cấp Dịch vụ của chúng tôi cho bạn nếu bạn
                        không tuân thủ các điều khoản hoặc chính sách của chúng
                        tôi hoặc nếu chúng tôi đang điều tra hành vi bị nghi ngờ
                        là sai phạm. Việc bạn sử dụng Dịch vụ của chúng tôi
                        không có nghĩa là bạn được sở hữu bất cứ các quyền sở
                        hữu trí tuệ nào đối với Dịch vụ của chúng tôi hoặc nội
                        dung mà bạn truy cập. Bạn không được sử dụng nội dung từ
                        Dịch vụ của chúng tôi trừ khi bạn được chủ sở hữu nội
                        dung đó cho phép hoặc được luật pháp cho phép. Các điều
                        khoản này không cấp cho bạn quyền sử dụng bất kỳ thương
                        hiệu hoặc lôgô nào được sử dụng trong Dịch vụ của chúng
                        tôi. Không được xóa, che khuất hoặc thay đổi bất kỳ
                        thông báo pháp lý nào được hiển thị trong hoặc kèm theo
                        Dịch vụ của chúng tôi.
                    </Text>
                </View>

                <View
                    style={{
                        width: 400,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: Themes.color.gray,
                            fontWeight: "bold",
                        }}
                    >
                        Bảo vệ sự riêng tư và bản quyền
                    </Text>

                    <Text
                        style={{
                            fontSize: 14,
                            color: Themes.color.gray,
                            marginBottom: 20,
                        }}
                    >
                        Chính sách của Mona Media về sự riêng tư giải thích cách
                        chúng tôi xử lý dữ liệu cá nhân của bạn và bảo vệ sự
                        riêng tư của bạn khi bạn sử dụng Dịch vụ của chúng tôi.
                        Bằng việc sử dụng Dịch vụ của chúng tôi, bạn đang đồng ý
                        rằng Mona Mediacó thể những sử dụng dữ liệu đó theo
                        chính sách của chúng tôi về sự riêng tư. Chúng tôi phúc
                        đáp các thông báo cáo buộc về vi phạm bản quyền và chấm
                        dứt tài khoản của người tái phạm theo quy trình nêu
                        trong Đạo luật bản quyền kỹ thuật số thiên niên kỷ của
                        Việt Nam. Chúng tôi cung cấp thông tin giúp chủ sở hữu
                        bản quyền quản lý các sở hữu trí tuệ của họ trên mạng.
                        Nếu bạn cho rằng ai đó đang vi phạm bản quyền của bạn và
                        bạn muốn thông báo cho chúng tôi, bạn có thể tìm thông
                        tin về cách gửi thông báo và chính sách của Mona về việc
                        phúc đáp thông báo tại Trung tâm trợ giúp của chúng tôi.
                    </Text>
                </View>

                <View
                    style={{
                        width: 400,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: Themes.color.gray,
                            fontWeight: "bold",
                        }}
                    >
                        Sửa đổi và chấm dứt Dịch vụ của chúng tôi
                    </Text>

                    <Text
                        style={{
                            fontSize: 14,
                            color: Themes.color.gray,
                            marginBottom: 20,
                        }}
                    >
                        Chúng tôi không ngừng thay đổi và cải tiến Dịch vụ của
                        mình. Chúng tôi có thể thêm hoặc xóa các chức năng hoặc
                        tính năng và chúng tôi cũng có thể tạm ngừng hoặc ngừng
                        hoàn toàn một Dịch vụ. Bạn có thể ngừng sử dụng Dịch vụ
                        của chúng tôi bất kỳ lúc nào, mặc dù chúng tôi sẽ rất
                        tiếc khi bạn không còn sử dụng Dịch vụ của chúng tôi
                        nữa. Mona Media cũng có thể ngừng cung cấp Dịch vụ cho
                        bạn hay thêm hoặc tạo ra những giới hạn mới cho Dịch vụ
                        của chúng tôi bất kỳ lúc nào. Chúng tôi tin rằng bạn sở
                        hữu dữ liệu của bạn và việc bảo toàn quyền truy cập của
                        bạn đối với dữ liệu đó là điều quan trọng. Nếu chúng tôi
                        ngừng một Dịch vụ nào đó, khi khả thi và hợp lý, chúng
                        tôi sẽ cung cấp cho bạn thông báo trước hợp lý và cơ hội
                        để đưa thông tin ra khỏi Dịch vụ đó.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Terms;
