export interface IProps {
  children: React.ReactNode;
}

export interface InputProps {
  onChangeText: (text: string) => void;
  IsSecureText?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  placeholder?: string | undefined;
  style?: any;
  value?: string;
}

export interface CustomButtonProps {
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  buttonText: string;
  isSelected?: string;
  disabled?: boolean;
  type?: string;
  style?: any;
}
