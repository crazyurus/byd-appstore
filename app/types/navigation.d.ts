interface Navigation {
  canGoBack: boolean;
  addEventListener: (event: string, callback: () => void) => void;
  removeEventListener: (event: string, callback: () => void) => void;
}

declare global {
  var navigation: Navigation;
}

export {};
