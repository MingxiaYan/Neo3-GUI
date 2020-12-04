const {
  override,
  addWebpackAlias,
  addWebpackModuleRule,
  adjustStyleLoaders,
  addDecoratorsLegacy,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackModuleRule({ test: /\.md$/, use: "raw-loader" }),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
  }),
  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes("scss")) {
      rule.use.push({
        loader: require.resolve("sass-loader"),
        //引入全局样式文件
        options: {
          resources: "./src/styles/index.scss",
        },
      });
    }
  })
);
