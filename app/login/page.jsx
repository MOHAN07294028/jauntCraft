'use client'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Button, Card, Col, ConfigProvider, Form, Input, Row } from 'antd'
import GlobalSpin from '../customcomponents/spinner/page.jsx'
import useGlobalModal from '../customcomponents/modal/page.jsx'
import { Highlight } from '@/components/site/primitives'

const LoginPage = () => {
  const [submitting, setSubmitting] = useState(false)
  const [form] = Form.useForm()
  const router = useRouter()
  const { contextHolder, showModal } = useGlobalModal()

  const handleLogin = async (values) => {
    setSubmitting(true)

    try {
      const { data } = await axios.post('/api/login', values)

      if (data?.user) {
        localStorage.setItem('user', JSON.stringify(data.user))
      }

      showModal('success', 'Success', data.message || 'Login successful.', () =>
        router.push('/dashboard')
      )
    } catch (error) {
      console.error('Login error:', error)

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
            className="w-[500px] max-w-6xl shadow-soft"
            styles={{ body: { padding: 20 } }}
          >
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-foreground">
                <span className="text-coral">Login</span>
              </h1>
            </div>

            <Form
              layout="vertical"
              size="large"
              requiredMark="optional"
              onFinish={handleLogin}
              form={form}
            >
              <Row gutter={[16, 8]}>
                <Col xs={24} md={24}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: 'Please enter your email.' },
                      {
                        type: 'email',
                        message: 'Please enter a valid email address.',
                      },
                    ]}
                  >
                    <Input autoComplete="email" placeholder="you@example.com" />
                  </Form.Item>
                </Col>

                <Col xs={24} md={24}>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      { required: true, message: 'Please enter your password.' },
                    ]}
                  >
                    <Input.Password
                      autoComplete="current-password"
                      placeholder="Enter your password"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row className="mt-8" gutter={[16, 8]} justify="center">
                <Col xs={24} md={8}>
                  <Form.Item className="mb-0">
                    <Button
                      type="default"
                      block
                      onClick={() => router.push('/register')}
                    >
                      Sign Up
                    </Button>
                  </Form.Item>
                </Col>

                <Col xs={24} md={8}>
                  <Form.Item className="mb-0">
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      loading={submitting}
                    >
                      Sign In
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </GlobalSpin>
    </ConfigProvider>
  )
}

export default LoginPage
