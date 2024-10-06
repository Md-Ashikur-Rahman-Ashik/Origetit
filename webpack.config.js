module.exports = {
    // ... other configurations
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: 'json-loader',
          type: 'javascript/auto',
        },
        // other loaders...
      ],
    },
  };
  