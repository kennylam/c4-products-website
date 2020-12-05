export const handleDownload = (files, site, source) => {
  let foundFile = files.edges.find(({ node }) => node.publicURL === source);
 
  const a = document.body.appendChild(document.createElement("a"));
  a.href = `${source}`;
  a.download = `${foundFile.node.name}${foundFile.node.ext}`;
  a.click();
  document.body.removeChild(a);
};

export const handleAllAssetsDownload = (files, site, source) => {
  let foundFile; 

  if (process.env.NODE_ENV === "dev") {
    // console.log("To download the assets make sure you are in production mode");
    // return;
  foundFile = files.edges.find(
    ({ node }) => {
      console.log('NODE:', node)
      console.log('SITE:', site)
      console.log('SOURCE :', source)
      console.log('EQUAL? :', node.publicURL)
      return node.publicURL === `${source}`
    }
  );
  console.log('foundFile', foundFile);
    // const a = document.body.appendChild(document.createElement("a"));
    // a.href = `${site.pathPrefix}${source}`;
    // a.download = `${foundFile.node.name}${foundFile.node.ext}`;
    // a.click();
    // document.body.removeChild(a);

  } else {
    // when downloading all assest from a resource card the prefixPath
    // must be set on the source
    foundFile = files.edges.find(
      ({ node }) => node.publicURL === `${site.pathPrefix}${source}`
    );
  }
  
  const a = document.body.appendChild(document.createElement("a"));
  a.href = `${site.pathPrefix}${source}`;
  a.download = `${foundFile.node.name}${foundFile.node.ext}`;
  a.click();
  document.body.removeChild(a);
};
