import { Modal, Form, Input, Button, Spin, message, Typography } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, verifyOtp, loginUser } from "../../features/auth/authThunk.js";
const {Text} = Typography;

const LoginModal = () => {

    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => state.auth);
    const [open, setOpen] = useState(true); // modal open close
    const [step, setStep] = useState(!"email"); // for render register modal otp modal
    const [userData, setUserData] = useState(null); // handle otp data send into verify otp 


    const [form] = Form.useForm();

    // sent otp handle
    const handleSendOtp = async (values) => {
        try {
            const response = await dispatch(sendOtp({ email: values.email })).unwrap();
            message.success(response.message || "otp sent successfully")
            setStep("otp");
            setUserData(values);
            //setOpen(false)
        } catch (err) {
            message.error(err)
        }
    };

    // verify otp handle

    const handleVerifyOtp = async (values) => {
        try {
            const response = await dispatch(verifyOtp({ ...userData, otp: values.otp })).unwrap();
            message.success(response.message || "verify email");
            setStep(!"otp")
        } catch (err) {
            message.error(err)
        }
    };

    // handle login 

    const handleLogin = async (values) => {
        try {
            const response = await dispatch(loginUser(values)).unwrap();
            message.success(response.message || "User Login successfull");
            setOpen(false)
        } catch (err) {
            message.error(err);
        }
    };



    return (
        <>
            <Modal title={step == "email" ? "Signup Form" : step == "otp" ? "Verify OTP" : "Login Form"}
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
            >
                {
                    step === "email" ? (

                        /* send otp form */
                        <Form form={form} layout="vertical" onFinish={handleSendOtp}>
                            <Spin spinning={loading}>
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[{
                                        required: true, message: "Enter Your Name"
                                    }]}
                                >
                                    <Input size="large" prefix={<UserOutlined />} placeholder="Enter your name" />
                                </Form.Item>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        { required: true, message: "Enter Your Email" },
                                        { type: "email", message: "Enter Your valid Email" }
                                    ]}
                                >
                                    <Input size="large" placeholder="Enter Your Email" prefix={<MailOutlined />} />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"

                                    rules={[
                                        {
                                            required: true, message: "Enter Your Password"
                                        },

                                    ]}
                                >
                                    <Input.Password size="large" prefix={<LockOutlined />} placeholder="Enter your password" />

                                </Form.Item>
                                <Form.Item
                                    label="Mobile Number"
                                    name="mobile"

                                    rules={[
                                        {
                                            required: true, message: "Enter Mobile Number"
                                        },
                                        {
                                            pattern: /^[0-9]{10}$/,
                                            message: "Enter Valid 10 digit Mobile Number"
                                        }
                                    ]}
                                >
                                    <Input size="large" type="tel" maxLength={10} placeholder="Enter your Mobile" addonBefore="+91" />

                                </Form.Item>
                                <Form.Item>
                                    <Button loading={loading} size="large" htmlType="submit" block>Register Now</Button>
                                </Form.Item>
                            </Spin>
                            <div style={{ textAlign: "center" }}>
                                    <Text>
                                        Already have an account?{" "}
                                        <span
                                            style={{
                                                color: "#1677ff",
                                                cursor: "pointer",
                                                fontWeight: "500"
                                            }}
                                            onClick={()=>setStep(!"email")}
                                        >
                                            Login
                                        </span>
                                    </Text>
                                </div>
                        </Form>

                    ) : step === "otp" ? (
                        /* verify otp form */
                        <Form form={form} layout="vertical" onFinish={handleVerifyOtp}>
                            <Spin spinning={loading}>
                                <Form.Item label="Enter OTP"
                                    name="otp"
                                    rules={[
                                        { required: true, message: "Enter Your OTP" },
                                    ]}

                                >
                                    <Input.OTP
                                        length={4}
                                        size="large"
                                        className="w-full justify-center"

                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button loading={loading} size="large" htmlType="submit" block>
                                        Verify OTP
                                    </Button>
                                </Form.Item>
                            </Spin>
                        </Form>

                    ) : (

                        // login form
                        <Form form={form} layout="vertical" onFinish={handleLogin}>
                            <Spin spinning={loading}>

                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        { required: true, message: "Enter Your Email" },
                                        { type: "email", message: "Enter Valid Email" }
                                    ]}
                                >
                                    <Input
                                        size="large"
                                        placeholder="Enter Your Email"
                                        prefix={<MailOutlined />}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Enter Your Password"
                                        }
                                    ]}
                                >
                                    <Input.Password
                                        size="large"
                                        placeholder="Enter your password"
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        loading={loading}
                                        size="large"
                                        htmlType="submit"
                                        block
                                        
                                    >
                                        Login
                                    </Button>
                                </Form.Item>

                                {/* Create Account Link */}
                                <div style={{ textAlign: "center" }}>
                                    <Text>
                                        Don’t have an account?{" "}
                                        <span
                                            style={{
                                                color: "#1677ff",
                                                cursor: "pointer",
                                                fontWeight: "500"
                                            }}
                                            onClick={()=>setStep("email")}
                                        >
                                            Create Account
                                        </span>
                                    </Text>
                                </div>

                            </Spin>
                        </Form>
                    )
                }
            </Modal>
        </>
    );
};

export default LoginModal;