import { Modal, Form, Input, Button, Spin, } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";

const LoginModal = () => {
    const [open, setOpen] = useState(true); // modal open close
    const [step, setStep] = useState("profile"); // for render register modal otp modal
    const [otp, setOtp] = useState(null)
    const [loading, setLoading] = useState(false); // loader

    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log("Email", values.email);
        setStep("otp")
        //setOpen(false)
    };

    return (
        <>
            <Modal title={step == "email" ? "Signup With Email" : step == "otp" ? "Verify OTP" : "Complete Profle"}
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
            >
                {
                    step === "email" ? (
                        <Form form={form} layout="vertical" onFinish={handleSubmit}>
                            <Spin spinning={loading}>
                                <Form.Item label="Email"
                                    name="email"
                                    rules={[
                                        { required: true, message: "Enter Your Email" },
                                        { type: "email", message: "Enter Your Email" }
                                    ]}
                                >
                                    <Input size="large" placeholder="Enter Your Email" prefix={<MailOutlined />} />
                                </Form.Item>
                                <Form.Item>
                                    <Button size="large" htmlType="submit" block>
                                        Send OTP
                                    </Button>
                                </Form.Item>
                            </Spin>
                        </Form>

                    ) : step === "otp" ? (
                        <Form form={form} layout="vertical" onFinish={handleSubmit}>
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
                                        onChange={(otp) => {
                                            setStep("profile")
                                            console.log(otp)
                                        }}
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
                        // register name mobile
                        <Form form={form} layout="vertical" onFinish={handleSubmit}>
                            <Spin spinning={loading}>
                                <Form.Item
                                    label="Name"
                                    name="name"

                                    rules={[{
                                        required: true, message: "Enter Your Name"

                                    }]}
                                >
                                    <Input size="large" placeholder="Enter your name" />

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
                                            message:"Enter Valid 10 digit Mobile Number"
                                        }
                                    ]}
                                >
                                    <Input size="large" type="tel" maxLength={10} placeholder="Enter your Mobile" addonBefore="+91"/>

                                </Form.Item>
                                <Form.Item>
                                    <Button loading={loading} size="large" htmlType="submit" block>Complete Signup</Button>
                                </Form.Item>

                            </Spin>
                        </Form>
                    )
                }
            </Modal>
        </>
    );
};

export default LoginModal;