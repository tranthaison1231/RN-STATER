/* eslint-disable no-undef */
declare module 'aws-amplify-react-native' {
  const Amplify: any
  export default Amplify

  interface ITheme {
    container: {}
    section: {}
    sectionHeader: {}
    sectionHeaderText: {}
    sectionFooter: {}
    sectionFooterLink: {}
    navBar: {}
    navButton: {}
    cell: {}
    errorRow: {}
    errorRowText: {}
    photo: {}
    album: {}
    button: {}
    buttonDisabled: {}
    buttonText: {}
    formField: {}
    input: {}
    inputLabel: {}
    phoneContainer: {}
    phoneInput: {}
    picker: {}
    pickerItem: {}
  }

  export const AmplifyTheme: ITheme

  export const AmplifyMessageMapEntries: (string | RegExp)[][]

  interface IUIProps {
    theme?: ITheme
  }

  interface IFormFieldProps extends IUIProps {
    [propName: string]: any
    label?: string
    required?: boolean
  }
  export const FormField: React.FC<IFormFieldProps>

  interface IPhoneFieldProps extends IUIProps {
    [propName: string]: any
    label?: string
    required?: boolean
    defaultDialCode?: string
    onChangeText: (phone: string) => void
  }
  export const PhoneField: React.ComponentClass<IPhoneFieldProps>

  // DON'T THINK THIS IS ACTUALLY USED
  export const SectionFooter: React.FC<IUIProps>

  interface ILinkCellProps extends IUIProps {
    onPress: () => void
  }
  export const LinkCell: React.FC<ILinkCellProps>

  export const Header: React.FC<IUIProps>

  export const ErrorRow: React.FC<IUIProps>

  interface IAmplifyButtonProps extends IUIProps {
    [propName: string]: any
    disabled?: boolean
    style?: any
    text?: string
  }
  export const AmplifyButton: React.FC<IAmplifyButtonProps>

  // *** AUTH ***
  interface ISignUpFields {
    label: string
    key: string
    required: boolean
    displayOrder: number
    type: string
    custom?: boolean
  }
  interface ISignUpConfig {
    header?: string
    hiddenDefaults?: string[]
    hideAllDefaults?: boolean
    defaultCountryCode?: string
    signUpFields?: ISignUpFields[]
  }
  interface IAuthConfig {
    includeGreetings?: boolean
    usernameAttributes?: string
    authenticatorComponents?: typeof AuthPiece[]
    signUpConfig?: ISignUpConfig
  }
  interface IWACompProps {
    authState: string
    authData: any
    onStateChange: (state: string, data: any) => void
  }
  interface IWithAuthenticatorProps {
    [propName: string]: any
    authState?: string
    onStateChange?: (state: string, data: any) => void
  }
  export function withAuthenticator(
    Comp: React.ComponentType<IWACompProps>,
    includeGreetings?: boolean | IAuthConfig,
    authenticatorComponents?: typeof AuthPiece[],
    federated?: any,
    theme?: ITheme,
    signUpConfig?: ISignUpConfig,
  ): React.ComponentClass<IWithAuthenticatorProps>

  interface IAuthenticatorProps {
    authState?: string
    authData?: any
    onStateChange?: (state: string, data: any) => void
    theme?: ITheme
    errorMessage?: (message: string) => string
    hideDefault?: boolean
    signUpConfig?: ISignUpConfig
    usernameAttributes?: string
  }
  export const Authenticator: React.ComponentClass<IAuthenticatorProps>

  interface IAuthPieceProps {
    usernameAttributes?: string
    onStateChange?: (state: string, data: any) => void
    errorMessage?: (message: string) => string
    messageMap?: (message: string) => string
    authState?: string
    track?: () => void
    theme?: ITheme
    authData?: any
  }
  export const AuthPiece: React.ComponentClass<IAuthPieceProps>

  export const Loading: typeof AuthPiece

  export const SignIn: typeof AuthPiece

  export const ConfirmSignIn: typeof AuthPiece

  interface ISignUpProps extends IAuthPieceProps {
    signUpConfig?: ISignUpConfig
  }
  export const SignUp: React.ComponentClass<ISignUpProps>

  export const ConfirmSignUp: typeof AuthPiece

  export const ForgotPassword: typeof AuthPiece

  export const RequireNewPassword: typeof AuthPiece

  export const VerifyContact: typeof AuthPiece

  interface IGreetingsProps extends IAuthPieceProps {
    signedInMessage?: string
    signedOutMessage?: string
  }
  export const Greetings: React.ComponentClass<IGreetingsProps>

  interface IWithOAuthProps {
    [propName: string]: any
    oauth_config?: any
  }
  interface IWOACompProps {
    loading: boolean
    oAuthUser: any
    oAuthError: any
    hostedUISignIn: () => void
    facebookSignIn: () => void
    amazonSignIn: () => void
    googleSignIn: () => void
    customProviderSignIn: (provider: string) => void
    signOut: () => void
  }
  export function withOAuth(
    Comp: React.ComponentType<IWOACompProps>,
  ): React.ComponentClass<IWithOAuthProps>

  // *** API ***
  interface IGraphQLOperation {
    query: any
    variables: {}
  }
  interface IConnectProps {
    query?: IGraphQLOperation
    mutation?: IGraphQLOperation
    subscription?: IGraphQLOperation
    onSubscriptionMsg?: (prevData: any, data: any) => any
  }
  export const Connect: React.ComponentClass<IConnectProps>

  // *** STORAGE ***
  interface IS3ImageProps extends IUIProps {
    imgKey?: string
    level?: string
    body?: any
    contentType?: string
    style?: string
    resizeMode?: string
  }
  export const S3Image: React.ComponentClass<IS3ImageProps>

  interface IS3AlbumProps extends IUIProps {
    [propName: string]: any
    path?: string
    level?: string
    filter?: (data: any) => boolean
  }
  export const S3Album: React.ComponentClass<IS3AlbumProps>

  // *** INTERACTIONS ***
  export const ChatBot: React.ComponentClass<any>
}
