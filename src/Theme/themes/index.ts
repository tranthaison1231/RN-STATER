import { Theme } from '@/Theme/theme.type'
import * as default_dark from './default_dark'

type Themes = { [key: string]: Partial<Theme> }

export default {
  default_dark,
} as Themes
