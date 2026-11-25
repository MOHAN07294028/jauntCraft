
'use client'

import { Spin, ConfigProvider } from 'antd'

const GlobalSpin = ({ loading, children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#ef5a4c',
                },
            }}
        >
            <Spin
                spinning={loading}
                size="large"
            >
                {children}
            </Spin>
        </ConfigProvider>
    )
}

export default GlobalSpin
