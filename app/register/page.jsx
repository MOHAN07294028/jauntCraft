
'use client'

import { useState } from 'react'
import axios from 'axios'
import GlobalSpin from '../customcomponents/spinner/page.jsx'
import useGlobalModal from '../customcomponents/modal/page.jsx'
import { useRouter } from 'next/navigation'


import {
  Button,
  Card,
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Select,
} from 'antd'

const RegisterPage = () => {
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const [form] = Form.useForm()
  const { contextHolder, showModal } = useGlobalModal()

  const handleRegister = async (values) => {
    setSubmitting(true)

    try {
      const { data } = await axios.post('/api/register', values)

      form.resetFields()
      showModal(
        'success',
        'Success',
        data.message || 'Your account has been created successfully.',
        () => router.push('/login')
      )
    } catch (error) {
      console.error('Registration error:', error)

      showModal(
        'error',
        'Error',
        error?.response?.data?.message ||
          'Unable to connect to the server. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ef5a4c',
          borderRadius: 12,
        },
      }}
    >
      {contextHolder}

      <GlobalSpin loading={submitting}>
        <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-surface px-4 py-4">

          <Card
            className="w-full max-w-6xl shadow-soft"
            styles={{ body: { padding: 20 } }}
          >
            <div>
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-foreground">
                  Create your <span className="text-coral">Account.</span >
                </h1>
              </div>

              <Form
                layout="vertical"
                size="large"
                requiredMark="optional"
                onFinish={handleRegister}
                form={form}
              >
                <Row gutter={[16, 8]}>

                  <Col xs={24} sm={12} md={8}>
                    <Form.Item
                      label="Full Name"
                      name="fullName"
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: 'Please enter your full name.',
                        },
                      ]}
                    >
                      <Input
                        autoComplete="name"
                        placeholder="Your full name"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={12} md={8}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your email.',
                        },
                        {
                          type: 'email',
                          message: 'Please enter a valid email address.',
                        },
                      ]}
                    >
                      <Input
                        autoComplete="email"
                        placeholder="you@example.com"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={12} md={8}>
                    <Form.Item
                      label="Phone Number"
                      name="phoneNumber"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your phone number.',
                        },
                      ]}
                    >
                      <Input
                        type="tel"
                        autoComplete="tel"
                        placeholder="Your phone number"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={12} md={8}>
                    <Form.Item
                      label="Gender"
                      name="gender"
                      rules={[
                        {
                          required: true,
                          message: 'Please select your gender.',
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select your gender"
                        options={[
                          { value: 'female', label: 'Female' },
                          { value: 'male', label: 'Male' },
                          {
                            value: 'prefer-not-to-say',
                            label: 'Prefer not to say',
                          },
                        ]}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={12} md={8}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter a password.',
                        },
                        {
                          min: 6,
                          message: 'Password must be at least 6 characters.',
                        },
                      ]}
                      extra="Use at least 6 characters. Letters, digits, and special characters are allowed."
                    >
                      <Input.Password
                        autoComplete="new-password"
                        placeholder="Create a password"
                      />
                    </Form.Item>
                  </Col>

                </Row>

                <Row
                  className="mt-8"
                  gutter={[16, 8]}
                  justify="center"
                >
                  <Col xs={24} sm={12} md={8}>
                    <Form.Item className="mb-0">
                      <Button
                        type="default"
                        block
                        onClick={() => {
                          window.location.href = '/login'
                        }}
                      >
                        Back to login
                      </Button>
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={12} md={8}>
                    <Form.Item className="mb-0">
                      <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={submitting}
                      >
                        Create account
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>

              </Form>
            </div>
          </Card>

        </div>
      </GlobalSpin>
    </ConfigProvider>
  )
}

export default RegisterPage
