import React, { Component } from 'react';
import './SignIn.scss';

import {
    Form, Icon, Input, Button, Checkbox, Row, Col
} from 'antd';
import {setUserStatus} from "../../../Layout/action";

const Item = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

class SignIn extends Component {

    constructor (props) {
        super(props);
    }

    _handleSubmit = (e) => {

        e.preventDefault();
        const { setUserStatus, setUsers, form } = this.props;
        form.validateFields((err, values) => {

            if (!err) {
                const payload = {
                    userName: values.userName,
                    password: values.password
                };
                setUserStatus(payload);
                setUsers(payload);
                this.props.history.push("/");
            }

        });

    };

    validatorUserName = (rule, value, callback) => {

        const { users } = this.props;
        let flag = false;
        users.every((item) => {
            if (item.userName === value) {
                flag = true;
                return false;
            }
            return true;
        });

        if (value && flag) {
            callback("当前用户名已存在");
        } else {
            callback();
        }

    };

    handleConfirmBlur = (e) => {

        const { confirmDirty, setConfirmDirty } = this.props, { value } = e.target;
        setConfirmDirty({ confirmDirty: confirmDirty || !!value });

    };

    compareToFirstPassword = (rule, value, callback) => {

        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback("请确保两次输入的密码一致!");
        } else {
            callback();
        }

    };

    validatorToNextPassword = (rule, value, callback) => {

        const { form, confirmDirty } = this.props;
        if (value && confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();

    };

    validatorCode = (rule, value, callback) => {

        const { randomCode } = this.props;
        if (value && randomCode !== value) {
            callback("验证码输入错误");
        } else {
            callback();
        }

    };

    render () {

        const { getFieldDecorator } = this.props.form;
        const { getCord } = this.props;

        return (
            <Form onSubmit={this._handleSubmit} className={`sign-in-form`}>
                <Item
                    {...formItemLayout}
                    label="用户名"
                >
                    {
                        getFieldDecorator("userName", {
                            rules: [
                                { required: true, message: "请输入您的用户名" },
                                { validator: this.validatorUserName }
                            ],
                            validateTrigger: "onSubmit"
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        )
                    }
                </Item>
                <Item
                    {...formItemLayout}
                    label="密码"
                >
                    {
                        getFieldDecorator("password", {
                            rules: [
                                { required: true, message: "请输入密码" },
                                { validator: this.validatorToNextPassword }
                            ],
                            validateTrigger: "onSubmit"
                        })(
                            <Input
                                type="password"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Password"
                            />
                        )
                    }
                </Item>
                <Item
                    {...formItemLayout}
                    label="确认密码"
                >
                    {
                        getFieldDecorator("confirm", {
                            rules: [
                                { required: true, message: "请再次输入密码" },
                                { validator: this.compareToFirstPassword }
                            ],
                            validateTrigger: "onBlur"
                        })(
                            <Input
                                type="password"
                                onBlur={this.handleConfirmBlur}
                            />
                        )
                    }
                </Item>
                <Item
                    {...formItemLayout}
                    label="验证码"
                >
                    <Row gutter={8}>
                        <Col span={12}>
                            {
                                getFieldDecorator("code", {
                                    rules: [
                                        { required: true, message: "请输入您的验证码" },
                                        { validator: this.validatorCode }
                                    ],
                                    validateTrigger: "onSubmit"
                                })(
                                    <Input
                                        placeholder="验证码"
                                    />
                                )
                            }
                        </Col>
                        <Col span={12}>
                            <Button onClick={getCord}>获取验证码</Button>
                        </Col>
                    </Row>
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit" className={`sign-in-form-btn`} >
                        注册
                    </Button>
                </Item>
            </Form>
        );

    }

}

const WrappedSignIn = Form.create()(SignIn);

export default WrappedSignIn;
