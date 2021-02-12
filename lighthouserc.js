module.exports = {
  upload: {
    target: 'temporary-public-storage',
  },
  ci: {
    assert: {
      assertions: {
        'apple-touch-icon': 'off',
        'html-has-lang': 'off',
        'installable-manifest': 'off',
        'maskable-icon-audit': 'off',
        'meta-description': 'off',
        'offline-start-url': 'off',
        'service-worker': 'off',
        'splash-screen': 'off',
        'themed-omnibox': 'off',
        'works-offline': 'off',
      },
    },
  },
};