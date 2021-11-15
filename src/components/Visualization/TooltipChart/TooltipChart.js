import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { data, businessUnits } from './animation-data';
import './TooltipChart.scss';
import video from './background_high_res.mp4';
import { gsap } from "gsap";



const TooltipChart = () => {
    const [numberOfComponents, setNumberOfComponents] = useState(0)
    const [productName, setProductName] = useState()
    const [businessUnit, setBusinessUnit] = useState('Dynamic Business Unit')
    const [isLoading, setIsLoading] = useState(true)
    const [mouseCoords, setMouseCoords] = useState({x:-1000, y:-1000})
    const [offsetY, setOffsetY] = useState(0);

    let timer;

    //dynamically add the animation class to each bar. The length of the bar is based on the number of components/patterns used
    const getClasses = () => {
      Object.keys(data).map((unit, index) => {
          let bar = document.getElementById(unit);
          let components = data[unit].numberOfComponents;
          bar.dataset.length=components;
          
          bar.classList.add('line'); // add line class for gsap animation
          return null
      })
      setIsLoading(false)
    }

    const updateTooltipPosition = (bar) => {
      setMouseCoords({x: bar.pageX, y: bar.pageY})
    }

    //the tooltip is show when the mouse is over a bar
    const showToolTip = (bar) => {
      let barId = bar.target.id;
      let targetId = '';
      let tooltip = document.getElementById('tooltip');
      clearTimeout(timer);
      if (barId.includes('target')) {
        targetId = barId.substring(barId.indexOf('-') + 2)
      } else {
        targetId = barId
      }
      
      setBusinessUnit(data[targetId].businessUnit);
      setProductName(data[targetId].productName);
      setNumberOfComponents(data[targetId].numberOfComponents)

      tooltip.classList.remove('hide-tooltip')
      setMouseCoords({x: bar.pageX, y: bar.clientY});
    }

    //the tooltip is moved off the visible canvas when mouse leave the bar
    const hideTooltip = (bar) => {
      let tooltip = document.getElementById('tooltip');
      timer = setTimeout(() => {
        tooltip.classList.add('hide-tooltip')
      }, 100)        
    }

    useEffect(() => {
      setOffsetY(document.getElementById('tooltip').clientHeight + 60); 
    }, [productName])  
    

    const tooltipChart = useRef();
    const q = gsap.utils.selector(tooltipChart);

    const playTooltipChartAnimation = () => {
      gsap.to(
        q(".line"),
        {
          strokeDashoffset: function (index, target) {
            return ( -1 * (265 - (100 * (target.dataset.length / 25)) * 2.65));         
          },
          opacity: 1,
          stagger: {
            amount: -2
          }
        }
      );
    };

    setTimeout(() => {
      getClasses();
      playTooltipChartAnimation();
    }, 1000)

    

    return (
    <div className="App" ref={tooltipChart}>      
      <div className="tooltip" id="tooltip" style={{left:mouseCoords.x - 25, top:mouseCoords.y - offsetY}}>
        <div className="tooltip--sub-title" style={{color: `${businessUnit.color}`}}>{ businessUnit.businessUnit }</div>
        <div className="tooltip--title">{ productName }</div>
        <div className="tooltip--count">{ numberOfComponents }</div>
        <div className="tooltip--label">Patterns</div>
      </div>
      <div className="chart"> 
        <div className="chart--lottie">
          <video onLoadedData={getClasses} id="background-video" width="100%" autoPlay="autoplay" muted>
            <source src={video} type="video/mp4"/>
          </video>
        </div>
        <div className="chart--bars">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 800" className={isLoading ? 'barsLoading' : 'showBars'}>
            <title>Total instances of universal pattern adoption</title>
            <g id="pink--automation" stroke={businessUnits['automation'].color}>
              <path id="automation--workstreams" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1227.052 7.026 962.874 7.015"/>
              <path id="automation--websphere" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1226.498 33.064 962.554 21.841"/>
              <path id="automation--turbonomic" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1224.839 59.055 961.62 36.641"/>
              <path id="automation--robotic-process" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1222.079 84.953 960.069 51.391"/>
              <path id="automation--platform-navigator" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1218.223 110.71 957.883 66.06"/>
              <path id="automation--no-investment" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1213.276 136.281 955.083 80.625"/>
              <path id="automation--myinvenio" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1207.249 161.618 951.664 95.058"/>
              <path id="automation--mono2micro" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1200.152 186.677 947.628 109.331"/>
              <path id="automation--workflow-designer" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1191.998 211.411 942.993 123.422"/>
              <path id="automation--edge-application" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1182.801 235.778 937.752 137.298"/>
              <path id="automation--decision-designer" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1172.579 259.732 931.933 150.943"/>
              <path id="automation--mq" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1161.349 283.231 925.527 164.322"/>
              <path id="automation--event-streams" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1149.132 306.232 918.569 177.421"/>
              <path id="automation--data-power" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1135.95 328.694 911.051 190.207"/>
              <path id="automation--app-connect" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1121.826 350.576 903.007 202.669"/>
              <path id="automation--api-connect-test" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1106.787 371.839 894.435 214.774"/>
              <path id="automation--api-connect" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1090.858 392.445 885.367 226.511"/>
              <path id="automation--content-designer" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1074.07 412.356 875.806 237.851"/>
              <path id="automation--cloud-pak-ai-ops" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1056.451 431.536 865.78 248.781"/>
              <path id="automation--cloud-pak-integration" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1038.035 449.952 855.299 259.277"/>
              <path id="automation--cloud-pak-business" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1018.853 467.569 844.387 269.325"/>
              <path id="automation--cloud-pak-automation" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M998.941 484.356 833.059 278.904"/>
              <path id="automation--autopilot" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M978.334 500.284 821.337 287.996"/>
              <path id="automation--app-navigator" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M957.07 515.322 809.241 296.588"/>
              <path id="automation--app-designer" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M935.187 529.444 796.79 304.658"/>
              <path id="automation--content-navigator" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M912.724 542.625 784.009 312.198"/>
            </g>
            <g id="blue--ai" stroke={businessUnits['ai'].color}>
              <path id="ai--watson-discovery" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M842.268 576.29 743.895 331.459"/>
              <path id="ai--watson-assistant" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M817.901 585.485 730.015 336.723"/>
              <path id="ai--surveillance" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M793.166 593.637 715.922 341.387"/>
              <path id="ai--safer-payments" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M768.107 600.733 701.641 345.445"/>
              <path id="ai--planning-analytics" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M742.769 606.758 687.201 348.892"/>
              <path id="ai--open-pages" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M717.198 611.703 672.625 351.713"/>
              <path id="ai--investigative" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M691.441 615.558 657.943 353.919"/>
              <path id="ai--insurance-claim-fraud" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M665.543 618.317 643.18 355.494"/>
              <path id="ai--due-dilligence" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M639.552 619.973 628.363 356.446"/>
              <path id="ai--commercial-payments" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M613.513 620.526 613.519 356.783"/>
              <path id="ai--cognos" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M587.475 619.972 598.672 356.496"/>
              <path id="ai--alert-insights" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M561.483 618.314 583.85 355.586"/>
            </g>
            <g id="cloud--light-blue" stroke={businessUnits['cloud'].color}>
              <path id="public-cloud--platform" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M484.258 606.753 539.787 349.117"/>
            </g>
            <g id="information--green" stroke={businessUnits['information'].color}>
              <path id="information--watson-studio" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M409.127 585.476 496.896 337.077"/>
              <path id="information--watson-openscale" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M384.76 576.28 482.986 331.845"/>
              <path id="information--watson-machine-learning" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M360.806 566.058 469.308 326.032"/>
              <path id="information--watson-knowledge" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M337.306 554.829 455.894 319.633"/>
              <path id="information--uniscan" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M314.305 542.612 442.76 312.674"/>
              <path id="information--spss" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M291.843 529.431 429.938 305.156"/>
              <path id="information--match-360" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M269.96 515.307 417.442 297.108"/>
              <path id="information--decision-optimization" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M248.697 500.268 405.303 288.528"/>
              <path id="information--db2-oncloud" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M228.091 484.34 393.532 279.451"/>
              <path id="information--data-stage" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M208.18 467.552 382.161 269.876"/>
              <path id="information--data-warehouse" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M188.999 449.934 371.198 259.835"/>
              <path id="information--data-virtualization" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M170.583 431.518 360.674 249.334"/>
              <path id="information--data-quality" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M152.965 412.336 350.597 238.402"/>
              <path id="information--data-privacy" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M136.178 392.425 340.993 227.051"/>
              <path id="information--data-management-console" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M120.25 371.819 331.876 215.304"/>
              <path id="information--data-lineage" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M105.211 350.555 323.263 203.18"/>
              <path id="information--cloud-pak" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M91.089 328.672 315.173 190.7"/>
            </g>
            <g id="security--purple" stroke={businessUnits['security'].color}>
              <path id="security--verify" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M54.462 259.709 294.176 151.353"/>
              <path id="security--ucm" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M44.241 235.754 288.32 137.677"/>
              <path id="security--uba" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M35.046 211.387 283.049 123.763"/>
              <path id="security--threat-investigator" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M26.892 186.652 278.384 109.635"/>
              <path id="security--soar" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M19.796 161.593 274.325 95.32"/>
              <path id="security--risk-manager" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M13.77 136.255 270.883 80.844"/>
              <path id="security--qradar" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M8.825 110.685 268.067 66.234"/>
              <path id="security--guardium" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M4.969 84.928 265.868 51.519"/>
              <path id="security--data-explorer" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M2.21 59.03 264.307 36.723"/>
              <path id="security--cp4s" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M.553 33.038 263.368 21.874"/>
              <path id="security--case-management" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M0 7 263.046 7"/>
            </g>
          </svg>
        </div>
      </div>   
    </div>
  );
}

export default TooltipChart