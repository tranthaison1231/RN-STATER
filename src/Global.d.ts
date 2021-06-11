declare module 'react-native-config' {
  export interface NativeConfig {
    API_URL: string
    SENTRY_URL: string
  }
  export const Config: NativeConfig
  export default Config
}
