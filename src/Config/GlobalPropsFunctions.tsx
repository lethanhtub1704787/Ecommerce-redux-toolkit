import {Text, TextInput, TextInputProps, TextProps} from 'react-native';

export const setCustomText = (customProps: TextProps) => {
  // @ts-ignore
  const TextRender = Text.render;
  // @ts-ignore

  const initialDefaultProps = Text.defaultProps;
  // @ts-ignore
  Text.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  };
  // @ts-ignore
  Text.render = function render(props: TextProps) {
    let oldProps = props;
    props = {...props, style: [customProps.style, props.style]};
    try {
      return TextRender.apply(this, arguments);
    } finally {
      props = oldProps;
    }
  };
};

export const setCustomTextInput = (customProps: TextInputProps) => {
  // @ts-ignore
  const TextInputRender = TextInput.render;
  // @ts-ignore
  const initialDefaultProps = TextInput.defaultProps;
  // @ts-ignore
  TextInput.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  };
  // @ts-ignore
  TextInput.render = function render(props: TextInputProps) {
    let oldProps = props;
    props = {...props, style: [customProps.style, props.style]};
    try {
      return TextInputRender.apply(this, arguments);
    } finally {
      props = oldProps;
    }
  };
};
