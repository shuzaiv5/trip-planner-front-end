import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface ReusableTextProps {
  text: string;
  family?: string;
  size?: number;
  color?: string;
  lineHeight?: 14|number;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

const ReusableText: React.FC<ReusableTextProps> = ({
  text,
  family,
  size,
  color,
  lineHeight,
  align,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: family,
      fontSize: size,
      color: color,
      textAlign: align,
      lineHeight: lineHeight,
    },
  });

  return <Text style={styles.text}>{text}</Text>;
};

export default ReusableText;