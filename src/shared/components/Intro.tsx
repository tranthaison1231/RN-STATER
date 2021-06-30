import { ItemSlide, SLIDES } from '@/configs/constants'
import { View } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import FastImage from 'react-native-fast-image'
import { Text, IconButton } from 'react-native-paper'
import Common from '../theme/Common'
import Fonts from '../theme/Fonts'
import Gutters from '../theme/Gutters'
import Layout from '../theme/Layout'
import { DEFAULT_THEME } from '../theme/Variables'

const ItemIntro = ({ item }: { item: ItemSlide }) => {
  return (
    <View style={[Layout.fill, Layout.center]}>
      <Text style={[Fonts.txtCenter, Fonts.titleSmall]}>{item.title}</Text>
      <FastImage
        style={[Common.introImage, Gutters.xlVMargin]}
        source={item.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={[Fonts.txtCenter]}>{item.text}</Text>
    </View>
  )
}

const Intro = ({ onDone }: { onDone: () => void }) => (
  <AppIntroSlider
    renderItem={ItemIntro}
    data={SLIDES}
    onDone={onDone}
    activeDotStyle={Common.bgPrimary}
    centerContent
    showSkipButton
    renderNextButton={() => (
      <IconButton
        icon="arrow-right-bold"
        color={DEFAULT_THEME.colors.primary}
        size={24}
      />
    )}
    renderDoneButton={() => (
      <IconButton
        icon="check-bold"
        color={DEFAULT_THEME.colors.primary}
        size={24}
      />
    )}
  />
)

export default Intro
