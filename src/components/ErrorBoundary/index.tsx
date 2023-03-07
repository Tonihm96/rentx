import React, { Component, ReactNode, ErrorInfo } from 'react';
import { Text } from 'react-native';

class ErrorBoundary extends Component<{ children: ReactNode }> {
  state = { hasError: false };

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('ErrorBoundary caught an error:', error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <Text>Oops, ocorreu um erro.</Text>;
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
