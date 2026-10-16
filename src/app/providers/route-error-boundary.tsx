import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class RouteErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Route rendering error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section role="alert" className="route-error">
          <h1>Не удалось загрузить страницу</h1>
          <p>Попробуй обновить приложение.</p>
          <button onClick={() => window.location.reload()}>
            Перезагрузить
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}