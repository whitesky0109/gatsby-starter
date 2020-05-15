module.exports = ({ config, mode }) => {
  // Transpile Gatsby module because Gastby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [require.resolve('awesome-typescript-loader')]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  // Patch the built-in css-loader configuration to enable CSS modules.
  config.module.rules[2].use[1].options = {
    ...config.module.rules[2].use[1].options,
    modules: true,
    camelCase: true,
    sourceMap: true
  };

  // https://github.com/gatsbyjs/gatsby/issues/10662:
  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ["browser", "module", "main"]

  return config
}