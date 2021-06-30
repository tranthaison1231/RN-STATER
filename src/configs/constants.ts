import Images from '@/shared/theme/Images'

export const SLIDES = [
  {
    key: 'one',
    title: 'Mobile',
    text: 'Description.\nSay something cool',
    image: Images.slider_1,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Online Message',
    text: 'Other cool stuff',
    image: Images.slider_2,
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: Images.slider_3,
    backgroundColor: '#22bcb5',
  },
]

export type ItemSlide = typeof SLIDES[number]
