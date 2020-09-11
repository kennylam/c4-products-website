import React from "react";
import { Download16 } from "@carbon/icons-react";
import { handleAllAssetsDownload } from "../shared/utils/helpers";
import {
  assetCardIconSmall,
  assetCardIconLarge,
  assetCardButton,
  assetCardTitle,
} from "./DownloadAssetCard.module.scss";
import classNames from "classnames";

const DownloadAssetCard = ({
  title,
  image,
  iconSize,
  alt,
  source,
  files,
  site,
  color,
}) => {
  return (
    <div
      className={classNames("bx--resource-card", {
        "bx--resource-card--dark": color,
      })}
    >
      <div className="bx--aspect-ratio bx--aspect-ratio--2x1">
        <div className={`bx--aspect-ratio--object`}>
          <button
            onClick={() => handleAllAssetsDownload(files, site, source)}
            className={`bx--tile bx--tile--clickable ${assetCardButton}`}
          >
            <h5 className="bx--resource-card__subtitle">Download</h5>
            <h4 className={`bx--resource-card__title ${assetCardTitle}`}>
              {title}
            </h4>
            <div className="bx--resource-card__icon--img">
              <img
                className={
                  iconSize === "large" ? assetCardIconLarge : assetCardIconSmall
                }
                src={image}
                alt={alt}
              />
            </div>
            <div className="bx--resource-card__icon--action">
              <Download16 />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadAssetCard;
