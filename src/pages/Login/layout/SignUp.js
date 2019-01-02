import React, { Component } from 'react';
import './SignUp.scss';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';

const Item = Form.Item;

class SignUp extends Component {

    constructor (props) {
        super(props);
    }

    _handleSubmit = (e) => {

        e.preventDefault();
        const { form, setUserStatus } = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                setUserStatus({
                    userName: values.userName,
                    password: values.password
                });
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

        if (value && !flag) {
            callback("用户不存在");
        } else {
            callback();
        }

    };

    validatorPassword = (rule, value, callback) => {

        const { users, form } = this.props;
        let flag = false;
        users.every((item) => {
            if (form.getFieldValue("userName") === item.userName && item.password === value) {
                flag = true;
                return false;
            }
            return true;
        });

        if (value && !flag) {
            callback("用户名或密码错误");
        } else {
            callback();
        }

    };

    render () {

        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this._handleSubmit} className={`sign-up-form`}>
                <Item>
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
                <Item>
                    {
                        getFieldDecorator("password", {
                            rules: [
                                { required: true, message: "请输入您的密码" },
                                { validator: this.validatorPassword }
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
                <Item>
                    <Button type="primary" htmlType="submit" className={`sign-up-form-btn`} >
                        登录
                    </Button>
                </Item>
            </Form>
        );

    }

}

const WrappedSignUp = Form.create()(SignUp);

export default WrappedSignUp;
