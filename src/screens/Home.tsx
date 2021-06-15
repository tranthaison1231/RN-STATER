import { navigate } from '@/shared/navigators/root'
import Layout from '@/shared/theme/Layout'
import { ThemeContext } from '@/shared/theme/ThemeProvider'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, TouchableOpacity, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

export default function Home() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  return (
    <SafeAreaView style={[Layout.fill]}>
      <View style={[Layout.rowHCenter, Layout.justifyBetween]}>
        <Button onPress={toggleTheme} color={theme.colors.primary}>
          Change Theme
        </Button>
        <Button onPress={() => navigate('Users')}>Go to Users</Button>
      </View>
      <TouchableOpacity style={[Layout.center]}>
        <Text> {t('welcome')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
