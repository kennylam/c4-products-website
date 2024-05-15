import React from "react";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
import { Column } from "gatsby-theme-carbon";
import { leadspaceText } from "./Homepage.module.scss";
import { ArrowDown32 } from "@carbon/icons-react";

const LeadSpaceText = () => (
  <p className={leadspaceText}>
    Find the essential assets and guidance to create consistent experiences and
    accelerate delivery across IBM products.
    <ArrowDown32 />
  </p>
);

const customProps = {
  Banner: (
    <>
      <span className="homepage--dots" />
      <section>
        <div className="bx--grid">
          <div className="bx--row">
            <Column colLg={11} colMd={8}>
              {LeadSpaceText()}
            </Column>
          </div>
        </div>
      </section>
    </>
  ),
};

function ShadowedHomepage(props) {
  return (
    <>
      <HomepageTemplate {...props} {...customProps} />
    </>
  );
}

export default ShadowedHomepage;
