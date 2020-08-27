export const handleDownload = (files, site, source) => {
  const foundFile = files.edges.find(({ node }) => node.publicURL === source);

  const a = document.body.appendChild(document.createElement('a'));
  a.href = `${source}`;
  a.download = `${foundFile.node.name}${foundFile.node.ext}`;
  a.click();
  document.body.removeChild(a);
}