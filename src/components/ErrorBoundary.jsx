import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const isWebGLError = this.state.error?.message?.includes("WebGL") || this.state.error?.message?.includes("Context");

      if (isWebGLError) {
        return (
          <div className="w-full h-full flex items-center justify-center text-white p-4 text-center">
            <p>3D content is disabled due to a graphics error.</p>
          </div>
        );
      }

      return this.props.fallback || null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
