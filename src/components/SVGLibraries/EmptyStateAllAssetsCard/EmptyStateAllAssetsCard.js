import React from "react";
import DownloadAssetCard from "../DownloadAssetCard";
import { useAssetQuery } from "../shared/utils/hooks/empty-state/bright-theme";
import resourceImages from "../shared/data/icons";

const EmptyStateAllAssetsCard = ({ title, image, alt, source, name }) => {
  /**
   * EmptyStateAllAssetsCard: 
   * This component requires a graphQL query to be called inside of it.  
   * The component requires files and site metadata to query the file intended for download. 
   * For reference look at the useAssetQuery hook.  
   * You can find the in the /shared/data/pages/empty-state/master-files/bright-theme/.
   */

  const { files, site } = useAssetQuery();

  // finds correct card image
  const findImage = resourceImages.find((image) => image.name === name);

  return (
    <DownloadAssetCard
      title={title}
      image={findImage.image}
      source={source}
      alt={alt}
      files={files}
      site={site}
    />
  );
};

export default EmptyStateAllAssetsCard;
