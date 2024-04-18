const path = require("path");

const { spawn } = require("child_process");
const getDate = (path) =>
  new Promise((res) => {
    const git = spawn("git", ["log", "-1", '--format="%ad"', "--", path]);
    git.stdout.on("data", (data) =>
      res(new Date(data.toString().replace(/"/g, "")).toISOString())
    );
    git.on("close", () => res("NOT FOUND"));
  });

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const parent = getNode(node.parent);
    if (parent.internal.type === "File")
      getDate(parent.absolutePath).then((date) =>
        createNodeField({ name: "gitDate", node, value: date })
      );
  }
};

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Allows importing html files for component code examples
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          use: ["html-loader", "markdown-loader"],
        },
        {
          test: /\.html$/,
          loader: "html-loader",
          options: {
            minimize: false,
          },
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        // light-weight fork of buble compiler from react-live team
        buble: path.resolve(__dirname, "node_modules", "@philpl/buble"),
      },
    },
  });

  // Disable sourcemaps in production
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
