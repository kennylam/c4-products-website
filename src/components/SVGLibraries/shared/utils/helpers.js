export const checkProd = (env, pathPrefix, data) => {
  return env === 'production' ? `${pathPrefix}${data}` : `${data}`;
}

export const handleDownload = (files, site, source) => {
  const foundFile = files.edges.find(({ node }) => {
    const isProd = checkProd(process.env.NODE_ENV, site.pathPrefix, node.publicURL);
    return isProd === source;
  });

  const a = document.body.appendChild(document.createElement('a'));
  a.href = `${foundFile.node.publicURL}`;
  a.download = `${foundFile.node.name}${foundFile.node.ext}`;
  a.click();
  document.body.removeChild(a);
}