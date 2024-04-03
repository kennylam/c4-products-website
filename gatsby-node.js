exports.onCreateWebpackConfig = ({
  actions: { setWebpackConfig },
  plugins: { provide },
}) => {
  setWebpackConfig({
    node: {
      fs: 'empty',
    },
    plugins: [
      provide({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      }),
    ],
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
        buffer: require.resolve("buffer"),
      },
    },
  });
};

const { spawn } = require('child_process');
const getDate = path => new Promise((res) => {
  const git = spawn('git', ['log', '-1', '--format="%ad"', '--', path]);
  git.stdout.on("data", data => res(
    new Date(data.toString().replace(/"/g, ''))
    .toISOString()));
  git.on("close", () => res('NOT FOUND'));
});

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);
    if (parent.internal.type === 'File')
      getDate(parent.absolutePath).then(date =>
        createNodeField({ name: 'gitDate', node, value: date, }))
  }
};