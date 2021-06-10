import InitStartup from '@/Store/Startup/Init'
import Fonts from '@/Theme/Fonts'
import Layout from '@/Theme/Layout'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

const IndexStartupContainer = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <ActivityIndicator size="large" />
      <Text style={[Fonts.txtCenter, Fonts.txtLarge]}>{t('welcome')}</Text>
    </View>
  )
}

export default IndexStartupContainer
