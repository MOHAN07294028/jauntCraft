'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import {
  Alert,
  Button,
  Card,
  ConfigProvider,
  Spin,
  Table,
  Typography,
} from 'antd'
import { Highlight } from '@/components/site/primitives'

const { Paragraph, Title } = Typography

const RegistrationDetailsPage = () => {
  const router = useRouter()
  const [isReady, setIsReady] = useState(false)
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user')

      if (!storedUser || storedUser === 'undefined' || storedUser === 'null') {
        router.replace('/login')
        return
      }

      const parsedUser = JSON.parse(storedUser)

      if (!parsedUser || typeof parsedUser !== 'object') {
        localStorage.removeItem('user')
        router.replace('/login')
        return
      }

      if (parsedUser.role !== 'admin') {
        router.replace('/dashboard')
        return
      }

      setIsReady(true)
    } catch {
      localStorage.removeItem('user')
      router.replace('/login')
    }
  }, [router])

  useEffect(() => {
    if (!isReady) return

    const fetchUsers = async () => {
      setLoading(true)
      setErrorMessage('')
      try {
        const { data } = await axios.get('/api/users')
        setUsers(Array.isArray(data.users) ? data.users : [])
      } catch (error) {
        console.error('Failed to fetch users:', error)
        setErrorMessage(
          error?.response?.data?.message || 'Unable to fetch registration details.'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [isReady])

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value) => (value ? new Date(value).toLocaleString() : '-'),
    },
  ]

  if (!isReady) {
    return (
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-surface">
        <Spin size="large" />
      </div>
    )
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
      <div className="min-h-[calc(100vh-5rem)] bg-surface px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Title level={2} style={{ marginBottom: 0 }}>
                <span className="text-coral">Registration Details</span>
              </Title>
            </div>

            <Button className="bg-coral text-white hover:bg-coral-hover" onClick={() => router.push('/dashboard')}>
              Back to Dashboard
            </Button>
          </div>

          {errorMessage ? (
            <Alert
              type="error"
              showIcon
              message={errorMessage}
              style={{ marginBottom: 16 }}
            />
          ) : null}

          <Card className="shadow-soft" styles={{ body: { padding: 0 } }}>
            <Table
              rowKey="id"
              columns={columns}
              dataSource={users}
              loading={loading}
              pagination={{ pageSize: 10 }}
              scroll={{ x: true }}
            />
          </Card>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default RegistrationDetailsPage
