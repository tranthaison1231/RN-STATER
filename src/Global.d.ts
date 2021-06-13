declare module 'react-native-config' {
  export interface NativeConfig {
    API_URL: string
    SENTRY_URL: string
    AWS_COGNITO_IDENTITY_POOL_ID: string
    AWS_USER_POOL_ID: string
    AWS_USER_POOL_WEB_CLIENT_ID: string
  }
  export const Config: NativeConfig
  export default Config
}
