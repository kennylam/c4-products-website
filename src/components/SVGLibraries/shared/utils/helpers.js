export const handleDownload = (files, site, source) => {
  // if (process.env.NODE_ENV === "dev") {
  //   console.log("To download the assets make sure you are in production mode");
  //   return;
  // }
  const foundFile = files.edges.find(({ node }) => node.publicURL === source);

  const a = document.body.appendChild(document.createElement("a"));
  a.href = `${source}`;
  a.download = `${foundFile.node.name}${foundFile.node.ext}`;
  a.click();
  document.body.removeChild(a);
};

export const handleAllAssetsDownload = (files, site, source) => {
  if (process.env.NODE_ENV === "dev") {
    console.log("To download the assets make sure you are in production mode");
    return;
  }
  // when downloading all assest from a resource card the prefixPath
  // must be set on the source
  const foundFile = files.edges.find(
    ({ node }) => node.publicURL === `${site.pathPrefix}${source}`
  );
  const a = document.body.appendChild(document.createElement("a"));
  a.href = `${site.pathPrefix}${source}`;
  a.download = `${foundFile.node.name}${foundFile.node.ext}`;
  a.click();
  document.body.removeChild(a);
};
