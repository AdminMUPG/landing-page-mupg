// Minimal shim to satisfy react-bits' import of the legacy registry path.
// Provides a no-op resolve to avoid build failures in web-only usage.
const StyleRegistry = {
  resolve: () => ({}),
};

export default StyleRegistry;
