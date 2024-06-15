declare module 'react-native-config' {
  export interface NativeConfig {
    API_URL: string;
    API_URL: string;
    LIST_CATEGORIES: string;
    FILTER_BY_CATEGORY: string;
    LOOKUP_MEAL_BY_ID: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
