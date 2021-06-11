import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native-paper'

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <Text> {t('welcome')}</Text>
    </>
  )
}
