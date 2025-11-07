interface Navigation {
  canGoBack: boolean;
}

declare global {
  var navigation: Navigation;
}

export {};
