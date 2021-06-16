import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import * as React from 'react'
import { Keyboard, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Portal, Snackbar, Text } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SIZES } from '../theme/Variables'

type ToastType = 'info' | 'normal' | 'success' | 'warning' | 'error'
type ToastPosition = 'top' | 'bottom' | 'middle'

interface ToastParams {
  message: string
  type: ToastType
  position: ToastPosition
  duration: number
  visibility: boolean
  action?: () => void
  actionLabel: string
}
type ToastIconType = Record<ToastType, string>

const icons: ToastIconType = {
  normal: 'information-outline',
  info: 'information-outline',
  warning: 'alert-circle-outline',
  success: 'check-circle-outline',
  error: 'close-circle-outline',
}

type ToastStyles = Record<ToastType, StyleProp<ViewStyle>>

export type ToastOptions = Partial<ToastParams>

export interface ToastMethods {
  show(options: ToastOptions): void
  hide(): void
}

export const ToastContext = createContext<ToastMethods | null>(null)

interface ToastProviderProps {
  overrides?: ToastOptions
}

const defaults: ToastParams = {
  message: 'Hello React Native Paper Toast!',
  type: 'normal',
  position: 'bottom',
  duration: 2000,
  visibility: false,
  actionLabel: 'DONE',
}

const reducer = (state: ToastParams, action: ToastOptions) => {
  const newState = { ...state, ...action }
  return newState
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  overrides,
}) => {
  const initialState = useMemo(
    () => ({ ...defaults, ...overrides }),
    [overrides],
  )
  const [state, dispatch] = useReducer(reducer, initialState)

  const insets = useSafeAreaInsets()

  const toast = useMemo(
    () => ({
      show(options: ToastOptions) {
        const newState: ToastParams = {
          ...initialState,
          ...options,
          visibility: true,
        }
        newState.position === 'bottom' && Keyboard.dismiss()
        dispatch(newState)
      },
      hide() {
        dispatch({ visibility: false })
      },
    }),
    [initialState],
  )

  const computedStyle = useMemo(() => {
    const ecommon: StyleProp<ViewStyle> = {
      position: 'absolute',
      left: insets.left,
      right: insets.right,
      alignItems: 'center',
    }
    let estyles: StyleProp<ViewStyle>
    if (state.position === 'bottom') {
      estyles = {
        ...ecommon,
        bottom: insets.bottom,
      }
    } else if (state.position === 'top') {
      estyles = {
        ...ecommon,
        top: insets.top,
      }
    } else {
      estyles = {
        ...ecommon,
        top: insets.top,
        bottom: insets.bottom,
        justifyContent: 'center',
      }
    }
    return estyles
  }, [insets, state.position])

  useEffect(() => {
    dispatch(initialState)
  }, [initialState])

  return (
    <ToastContext.Provider value={toast}>
      <Portal.Host>{children}</Portal.Host>
      <Portal>
        <Snackbar
          onDismiss={toast.hide}
          style={types[state.type]}
          wrapperStyle={computedStyle}
          duration={state.duration}
          visible={state.visibility}
          {...(state.action && {
            action: { label: state.actionLabel, onPress: state.action },
          })}
        >
          <Icon size={SIZES.md} name={icons[state.type]} color="#ffffff" />
          <Text style={styles.message}>{` ${state.message}`}</Text>
        </Snackbar>
      </Portal>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const toast = useContext(ToastContext)
  if (!toast) {
    throw new Error('useToast must be used within a ToastProvider.')
  }
  return toast
}

const common: ViewStyle = {
  borderRadius: 20,
}

const types: ToastStyles = {
  info: {
    ...common,
    backgroundColor: 'rgba(81,98,188,0.9)',
  },
  normal: {
    ...common,
    backgroundColor: 'rgba(72,77,81,0.9)',
  },
  success: {
    ...common,
    backgroundColor: 'rgba(75,153,79,0.9)',
  },
  warning: {
    ...common,
    backgroundColor: 'rgba(254,177,25,0.9)',
  },
  error: {
    ...common,
    backgroundColor: 'rgba(216,25,25,0.9)',
  },
}

const styles = StyleSheet.create({
  message: {
    fontSize: 20,
    color: '#ffffff',
  },
})
