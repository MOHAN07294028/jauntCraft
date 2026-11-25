'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, Col, ConfigProvider, Row, Spin, Typography } from 'antd'
import { Highlight } from '@/components/site/primitives'

const { Paragraph, Title } = Typography

const FEATURE_CARDS = [
  {
    key: 'bookings',
    title: 'Bookings',
    description: 'Manage and track customer bookings in one place.',
  },
  {
    key: 'experience',
    title: 'Experience',
    description: 'Create and manage customer experiences.',
  },
  {
    key: 'registration-details',
    title: 'Registration Details',
    description: 'View and manage registered user details.',
    path: '/dashboard/registration-details',
    adminOnly: true,
  },
]

const DashboardPage = () => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isReady, setIsReady] = useState(false)

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

      setUser(parsedUser)
      setIsReady(true)
    } catch {
      localStorage.removeItem('user')
      router.replace('/login')
    }
  }, [router])

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
      <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-surface px-4 py-10">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-coral/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-coral/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 animate-[dashboardFadeIn_0.5s_ease-out_both]">
            <Title level={2} style={{ marginBottom: 0 }}>
              Project <span className="text-coral">Features</span>
            </Title>
            <Paragraph style={{ marginBottom: 0, marginTop: 8, color: '#5f6368' }}>
              {user?.fullName ? `Welcome, ${user.fullName}.` : 'Welcome.'} Select a
              feature to get started.
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {FEATURE_CARDS.filter(
              (feature) => !feature.adminOnly || user?.role === 'admin'
            ).map((feature, index) => (
              <Col xs={24} sm={12} lg={8} key={feature.key}>
                <Card
                  hoverable
                  className="dashboard-feature-card h-full shadow-soft"
                  onClick={() => feature.path && router.push(feature.path)}
                  title={
                    <span className="flex items-center gap-2">
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-coral" />
                      {feature.title}
                    </span>
                  }
                  style={{
                    borderTop: '3px solid #ef5a4c',
                    cursor: feature.path ? 'pointer' : 'default',
                    animation: `dashboardFadeUp 0.45s ease-out ${index * 0.12}s both`,
                  }}
                >
                  <Paragraph style={{ marginBottom: 0, color: '#4b5563' }}>
                    {feature.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <style>{`
          @keyframes dashboardFadeUp {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes dashboardFadeIn {
            from {
              opacity: 0;
              transform: translateY(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .dashboard-feature-card {
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }

          .dashboard-feature-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 30px rgba(239, 90, 76, 0.16);
          }
        `}</style>
      </div>
    </ConfigProvider>
  )
}

export default DashboardPage
