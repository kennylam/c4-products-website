import React, { useState, useEffect, useRef, useCallback } from 'react';
import { data, businessUnits } from './animation-data';
import { gsap } from "gsap";
import video from './background_high_res.mp4';
import './TooltipChart.scss';

const documentExists = typeof window !== `undefined` ? true : false;
const useActiveElement = () => {
  const [active, setActive] = useState(documentExists ? document.activeElement : null);
  const handleFocusIn = (e) => {
    setActive(document.activeElement);
  }

  useEffect(() => {
    if (documentExists) {
      document.addEventListener('focusin', handleFocusIn)
    }
    return () => {
      document.removeEventListener('focusin', handleFocusIn)
    };
  }, [])

  return active;
}

const TooltipChart = () => {
  const [numberOfComponents, setNumberOfComponents] = useState(0)
  const [productName, setProductName] = useState()
  const [businessUnit, setBusinessUnit] = useState('Dynamic Business Unit')
  const [isLoading, setIsLoading] = useState(true)
  const [mouseCoords, setMouseCoords] = useState({x:-1000, y:-1000})
  const [offsetY, setOffsetY] = useState();
  const [chartContainerHasFocus, setChartContainerHasFocus] = useState(false);
  const focusIndex = useRef(null);
  const focusedElement = useActiveElement();
  const timerRef = useRef(null);

  // The tooltip is moved off the visible canvas when mouse leave the bar
  const hideTooltip = useCallback(() => {
    let tooltip = document.getElementById('tooltip');
    if (!document.activeElement.classList.contains('line')) {
      timerRef.current = setTimeout(() => {
        tooltip.classList.add('hide-tooltip')
      }, 100);
    }
  }, [])

  // Reset everything when a bar loses focus
  useEffect(() => {
    if (!focusedElement.classList.contains('line')) {
      hideTooltip();
      focusIndex.current = null;
      setChartContainerHasFocus(false);
    }
    if (
      focusedElement.classList.contains('chart') ||
      focusedElement.classList.contains('line')) {
        setChartContainerHasFocus(true);
      }
  }, [focusedElement, hideTooltip]);

  const handleKeyboardTooltip = useCallback((bars, focusIndex) => {
    hideTooltip();
    showToolTip(bars[focusIndex].id, focusIndex, bars.length);
  }, [hideTooltip]);

    const moveToNextBar = useCallback((event) => {
      const bars = Array.from(document.querySelectorAll('.line'));
      const focusIndexValue = focusIndex.current;
      // Escape key
      if (event.keyCode === 27) {
        const chartFocusContainer = document.querySelector('.chart');
        bars[focusIndex.current].blur();
        chartFocusContainer.focus();
        hideTooltip();
      }
      // Right arrow key
      if (event.keyCode === 39) {
        if (focusIndexValue === 0 ) {
          focusIndex.current = bars.length - 1;
          bars[bars.length - 1].focus();
          handleKeyboardTooltip(bars, focusIndex.current);
        } else if (focusIndexValue === null) {
          focusIndex.current = 66;
          typeof focusIndex.current === 'number' &&
          bars[focusIndex.current].isConnected && bars[focusIndex.current].focus();
          handleKeyboardTooltip(bars, focusIndex.current);
        } else {
          focusIndex.current = focusIndexValue - 1;
          // Lets be sure to only focus an element if focusIndex.current is number
          // and bar[focusIndex.current] is a DOM node
          typeof focusIndex.current === 'number' &&
          bars[focusIndex.current].isConnected && bars[focusIndex.current].focus();
          handleKeyboardTooltip(bars, focusIndex.current);
        }
      }
      // Left arrow key
      if (event.keyCode === 37) {
        if (focusIndexValue === bars.length - 1) {
          focusIndex.current = 0;
          bars[0].focus();
          handleKeyboardTooltip(bars, focusIndex.current);
        } else if (focusIndexValue === null) {
          focusIndex.current = 0;
          typeof focusIndex.current === 'number' &&
          bars[focusIndex.current].isConnected && bars[focusIndex.current].focus();
          handleKeyboardTooltip(bars, focusIndex.current);
        } else {
          focusIndex.current = focusIndexValue + 1;
          // Lets be sure to only focus an element if focusIndex.current is number
          // and bar[focusIndex.current] is a DOM node
          typeof focusIndex.current === 'number' &&
          bars[focusIndex.current].isConnected && bars[focusIndex.current].focus();
          handleKeyboardTooltip(bars, focusIndex.current);
        }
      }
    }, [handleKeyboardTooltip, hideTooltip]);

    // Dynamically add the animation class to each bar. The length of the bar is based on the number of components/patterns used
    const getClasses = () => {
      if (documentExists) {
        Object.keys(data).map((unit, index) => {
            let bar = document.getElementById(unit);
            let components = data[unit].numberOfComponents;
            bar.dataset.length=components;
            bar.classList.add('line'); // add line class for gsap animation
            return null
        });
        setIsLoading(false)
      }
    }


    // Update tooltip positioning
    const updateTooltipPosition = (event) => {
      const parentCoords = document.querySelector(`.chart--container`).getBoundingClientRect();
      setMouseCoords({
        x: Math.round(event.pageX - parentCoords.left),
        y: Math.round(
          (
            event.pageY - parentCoords.top) +
            32 -
            offsetY -
            document.documentElement.scrollTop
          )
        });
    }

    // The tooltip is displayed when the mouse is over a bar
    // or when a bar receives focus
    const showToolTip = (bar, barIndex, barTotal) => {
      let barId = typeof bar === 'string' ? bar : bar.target.id;
      let targetId = '';
      const tooltip = document.getElementById('tooltip');
      if (timerRef.current) clearTimeout(timerRef.current);
      if (barId.includes('target')) {
        targetId = barId.substring(barId.indexOf('-') + 2)
      } else {
        targetId = barId
      }
      
      setBusinessUnit(data[targetId].businessUnit);
      setProductName(data[targetId].productName);
      setNumberOfComponents(data[targetId].numberOfComponents)

      tooltip.classList.remove('hide-tooltip');
      // Handle keyboard event displaying of tooltip
      // If bar is of type string, then we are passing the id
      // of the bar receiving focus via the keydown event
      if (typeof bar === 'string') {
        const barCoords = document.querySelector(`#${barId}`).getBoundingClientRect();
        const parentCoords = document.querySelector(`.chart--container`).getBoundingClientRect();
        const useRight = (barTotal / 2) < barIndex;
        const tooltipHeight = document.getElementById('tooltip').clientHeight + 60;
        setMouseCoords({
          x: useRight
            ? Math.round(barCoords.right - parentCoords.left)
            : Math.round(barCoords.left - parentCoords.left),
          y: Math.round(
              ((barCoords.top - parentCoords.top) +
              32 -
              tooltipHeight)
            )
        });
      } else {
        const parentCoords = document.querySelector(`.chart--container`).getBoundingClientRect();
        setMouseCoords({x: Math.round(bar.pageX - parentCoords.left), y: Math.round((bar.pageY - parentCoords.top) + 32)});
      }
    }

    useEffect(() => {
      setOffsetY(document.getElementById('tooltip').clientHeight + 60);
    }, []);

    useEffect(() => {
      setOffsetY(document.getElementById('tooltip').clientHeight + 60); 
    }, [productName]);

    // Bar graph animations
    const tooltipChart = useRef();
    const q = gsap.utils.selector(tooltipChart);

    const playTooltipChartAnimation = () => {
      if (documentExists) {
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
      }
    };

  setTimeout(() => {
    getClasses();
    playTooltipChartAnimation()
  }, 1000);

  const tooltipCoordinates = {
    left: mouseCoords.x - 25,
    top: mouseCoords.y
  }

  return (
    <div
      className="App chart--container"
      ref={tooltipChart}
      onKeyDown={moveToNextBar}
      role="presentation"
    >
      <div
        aria-hidden="true"
        className="tooltip"
        role="tooltip"
        id="tooltip"
        style={tooltipCoordinates}
      >
        <div className="tooltip--sub-title" style={{color: `${businessUnit.color}`}}>{ businessUnit.businessUnit }</div>
        <div className="tooltip--title">{ productName }</div>
        <div className="tooltip--count">{ numberOfComponents }</div>
        <div className="tooltip--label">Patterns</div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div className={`chart ${chartContainerHasFocus ? 'chart-with-focus' : ' '}`} tabIndex="0">
        <div role="presentation" className="chart--lottie">
          <video onLoadedData={getClasses} id="background-video" width="100%" autoPlay="autoplay" muted>
            <source src={video} type="video/mp4"/>
          </video>
        </div>
        <div className="chart--bars">
          <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="chart-title chart-desc" aria-details="det" viewBox="0 0 1300 800" className={isLoading ? 'barsLoading' : 'showBars'}>
            <title id="chart-title">655 Total instances of pattern adoption</title>
            <desc id="chart-desc">Bar graph depicting instances of pattern adoption for each product, grouped by business unit, animating in sequentially with an animated background.  There are 655 total instances of pattern adoption, with a range of 1 to 23 instances adpoted per product. Data for each product and business unit is availble in table format by clicking the next link, or by pressing left or right arrow keys to cycle through the bars.</desc>
            <g id="pink--automation" stroke={businessUnits['automation'].color}>
              <path tabIndex={focusIndex.current === 0 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 0 ? false : true } onKeyDown={(e) => hideTooltip(e)} onKeyUp={(e) => showToolTip(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} onMouseMove={(e) => updateTooltipPosition(e)} id="automation--workstreams" d="M1227.052 7.026 962.874 7.015"/>
              <path tabIndex={focusIndex.current === 1 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 1 ? false : true } onKeyDown={(e) => hideTooltip(e)} onKeyUp={(e) => showToolTip(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} onMouseMove={(e) => updateTooltipPosition(e)} id="automation--websphere" d="M1226.498 33.064 962.554 21.841"/>
              <path tabIndex={focusIndex.current === 2 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 2 ? false : true } onKeyDown={(e) => hideTooltip(e)} onKeyUp={(e) => showToolTip(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} onMouseMove={(e) => updateTooltipPosition(e)} id="automation--turbonomic" d="M1224.839 59.055 961.62 36.641"/>
              <path tabIndex={focusIndex.current === 3 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 3 ? false : true } onKeyDown={(e) => hideTooltip(e)} onKeyUp={(e) => showToolTip(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} onMouseMove={(e) => updateTooltipPosition(e)} id="automation--robotic-process" d="M1222.079 84.953 960.069 51.391"/>
              <path tabIndex={focusIndex.current === 4 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 4 ? false : true } onKeyDown={(e) => hideTooltip(e)} onKeyUp={(e) => showToolTip(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} onMouseMove={(e) => updateTooltipPosition(e)} id="automation--platform-navigator" d="M1218.223 110.71 957.883 66.06"/>
              <path tabIndex={focusIndex.current === 5 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 5 ? false : true } onKeyDown={(e) => hideTooltip(e)} onKeyUp={(e) => showToolTip(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} onMouseMove={(e) => updateTooltipPosition(e)} id="automation--no-investment" d="M1213.276 136.281 955.083 80.625"/>
              <path tabIndex={focusIndex.current === 6 ? 0 : -1} aria-describedby="tooltip" id="automation--myinvenio" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1207.249 161.618 951.664 95.058"/>
              <path tabIndex={focusIndex.current === 7 ? 0 : -1} aria-describedby="tooltip" id="automation--mono2micro" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1200.152 186.677 947.628 109.331"/>
              <path tabIndex={focusIndex.current === 8 ? 0 : -1} aria-describedby="tooltip" id="automation--workflow-designer" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1191.998 211.411 942.993 123.422"/>
              <path tabIndex={focusIndex.current === 9 ? 0 : -1} aria-describedby="tooltip" id="automation--edge-application" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1182.801 235.778 937.752 137.298"/>
              <path tabIndex={focusIndex.current === 10 ? 0 : -1} aria-describedby="tooltip" id="automation--decision-designer" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1172.579 259.732 931.933 150.943"/>
              <path tabIndex={focusIndex.current === 11 ? 0 : -1} aria-describedby="tooltip" id="automation--mq" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1161.349 283.231 925.527 164.322"/>
              <path tabIndex={focusIndex.current === 12 ? 0 : -1} aria-describedby="tooltip" id="automation--event-streams" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1149.132 306.232 918.569 177.421"/>
              <path tabIndex={focusIndex.current === 13 ? 0 : -1} aria-describedby="tooltip" id="automation--data-power" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1135.95 328.694 911.051 190.207"/>
              <path tabIndex={focusIndex.current === 14 ? 0 : -1} aria-describedby="tooltip" id="automation--app-connect" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1121.826 350.576 903.007 202.669"/>
              <path tabIndex={focusIndex.current === 15 ? 0 : -1} aria-describedby="tooltip" id="automation--api-connect-test" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1106.787 371.839 894.435 214.774"/>
              <path tabIndex={focusIndex.current === 16 ? 0 : -1} aria-describedby="tooltip" id="automation--api-connect" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1090.858 392.445 885.367 226.511"/>
              <path tabIndex={focusIndex.current === 17 ? 0 : -1} aria-describedby="tooltip" id="automation--content-designer" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1074.07 412.356 875.806 237.851"/>
              <path tabIndex={focusIndex.current === 18 ? 0 : -1} aria-describedby="tooltip" id="automation--cloud-pak-ai-ops" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1056.451 431.536 865.78 248.781"/>
              <path tabIndex={focusIndex.current === 19 ? 0 : -1} aria-describedby="tooltip" id="automation--cloud-pak-integration" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1038.035 449.952 855.299 259.277"/>
              <path tabIndex={focusIndex.current === 20 ? 0 : -1} aria-describedby="tooltip" id="automation--cloud-pak-business" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M1018.853 467.569 844.387 269.325"/>
              <path tabIndex={focusIndex.current === 21 ? 0 : -1} aria-describedby="tooltip" id="automation--cloud-pak-automation" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M998.941 484.356 833.059 278.904"/>
              <path tabIndex={focusIndex.current === 22 ? 0 : -1} aria-describedby="tooltip" id="automation--autopilot" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M978.334 500.284 821.337 287.996"/>
              <path tabIndex={focusIndex.current === 23 ? 0 : -1} aria-describedby="tooltip" id="automation--app-navigator" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M957.07 515.322 809.241 296.588"/>
              <path tabIndex={focusIndex.current === 24 ? 0 : -1} aria-describedby="tooltip" id="automation--app-designer" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M935.187 529.444 796.79 304.658"/>
              <path tabIndex={focusIndex.current === 25 ? 0 : -1} aria-describedby="tooltip" id="automation--content-navigator" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M912.724 542.625 784.009 312.198"/>
            </g>
            <g id="blue--ai" stroke={businessUnits['ai'].color}>
              <path tabIndex={focusIndex.current === 26 ? 0 : -1} aria-describedby="tooltip" id="ai--watson-discovery" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M842.268 576.29 743.895 331.459"/>
              <path tabIndex={focusIndex.current === 27 ? 0 : -1} aria-describedby="tooltip" id="ai--watson-assistant" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M817.901 585.485 730.015 336.723"/>
              <path tabIndex={focusIndex.current === 28 ? 0 : -1} aria-describedby="tooltip" id="ai--surveillance" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M793.166 593.637 715.922 341.387"/>
              <path tabIndex={focusIndex.current === 29 ? 0 : -1} aria-describedby="tooltip" id="ai--safer-payments" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M768.107 600.733 701.641 345.445"/>
              <path tabIndex={focusIndex.current === 30 ? 0 : -1} aria-describedby="tooltip" id="ai--planning-analytics" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M742.769 606.758 687.201 348.892"/>
              <path tabIndex={focusIndex.current === 31 ? 0 : -1} aria-describedby="tooltip" id="ai--open-pages" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M717.198 611.703 672.625 351.713"/>
              <path tabIndex={focusIndex.current === 32 ? 0 : -1} aria-describedby="tooltip" id="ai--investigative" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M691.441 615.558 657.943 353.919"/>
              <path tabIndex={focusIndex.current === 33 ? 0 : -1} aria-describedby="tooltip" id="ai--insurance-claim-fraud" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M665.543 618.317 643.18 355.494"/>
              <path tabIndex={focusIndex.current === 34 ? 0 : -1} aria-describedby="tooltip" id="ai--due-dilligence" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M639.552 619.973 628.363 356.446"/>
              <path tabIndex={focusIndex.current === 35 ? 0 : -1} aria-describedby="tooltip" id="ai--commercial-payments" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M613.513 620.526 613.519 356.783"/>
              <path tabIndex={focusIndex.current === 36 ? 0 : -1} aria-describedby="tooltip" id="ai--cognos" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M587.475 619.972 598.672 356.496"/>
              <path tabIndex={focusIndex.current === 37 ? 0 : -1} aria-describedby="tooltip" id="ai--alert-insights" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M561.483 618.314 583.85 355.586"/>
            </g>
            <g id="cloud--light-blue" stroke={businessUnits['cloud'].color}>
              <path tabIndex={focusIndex.current === 38 ? 0 : -1} id="public-cloud--platform" onMouseMove={(e) => updateTooltipPosition(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} d="M484.258 606.753 539.787 349.117"/>
            </g>
            <g id="information--green" stroke={businessUnits['information'].color}>
              <path tabIndex={focusIndex.current === 39 ? 0 : -1} aria-describedby="tooltip" id="information--watson-studio" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M409.127 585.476 496.896 337.077"/>
              <path tabIndex={focusIndex.current === 40 ? 0 : -1} aria-describedby="tooltip" id="information--watson-openscale" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M384.76 576.28 482.986 331.845"/>
              <path tabIndex={focusIndex.current === 41 ? 0 : -1} aria-describedby="tooltip" id="information--watson-machine-learning" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M360.806 566.058 469.308 326.032"/>
              <path tabIndex={focusIndex.current === 42 ? 0 : -1} aria-describedby="tooltip" id="information--watson-knowledge" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M337.306 554.829 455.894 319.633"/>
              <path tabIndex={focusIndex.current === 43 ? 0 : -1} aria-describedby="tooltip" id="information--uniscan" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M314.305 542.612 442.76 312.674"/>
              <path tabIndex={focusIndex.current === 44 ? 0 : -1} aria-describedby="tooltip" id="information--spss" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M291.843 529.431 429.938 305.156"/>
              <path tabIndex={focusIndex.current === 45 ? 0 : -1} aria-describedby="tooltip" id="information--match-360" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M269.96 515.307 417.442 297.108"/>
              <path tabIndex={focusIndex.current === 46 ? 0 : -1} aria-describedby="tooltip" id="information--decision-optimization" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M248.697 500.268 405.303 288.528"/>
              <path tabIndex={focusIndex.current === 47 ? 0 : -1} aria-describedby="tooltip" id="information--db2-oncloud" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M228.091 484.34 393.532 279.451"/>
              <path tabIndex={focusIndex.current === 48 ? 0 : -1} aria-describedby="tooltip" id="information--data-stage" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M208.18 467.552 382.161 269.876"/>
              <path tabIndex={focusIndex.current === 49 ? 0 : -1} aria-describedby="tooltip" id="information--data-warehouse" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M188.999 449.934 371.198 259.835"/>
              <path tabIndex={focusIndex.current === 50 ? 0 : -1} aria-describedby="tooltip" id="information--data-virtualization" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M170.583 431.518 360.674 249.334"/>
              <path tabIndex={focusIndex.current === 51 ? 0 : -1} aria-describedby="tooltip" id="information--data-quality" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M152.965 412.336 350.597 238.402"/>
              <path tabIndex={focusIndex.current === 52 ? 0 : -1} aria-describedby="tooltip" id="information--data-privacy" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M136.178 392.425 340.993 227.051"/>
              <path tabIndex={focusIndex.current === 53 ? 0 : -1} aria-describedby="tooltip" id="information--data-management-console" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M120.25 371.819 331.876 215.304"/>
              <path tabIndex={focusIndex.current === 54 ? 0 : -1} aria-describedby="tooltip" id="information--data-lineage" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M105.211 350.555 323.263 203.18"/>
              <path tabIndex={focusIndex.current === 55 ? 0 : -1} aria-describedby="tooltip" id="information--cloud-pak" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M91.089 328.672 315.173 190.7"/>
            </g>
            <g id="security--purple" stroke={businessUnits['security'].color}>
              <path tabIndex={focusIndex.current === 56 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 56 ? false : true } onKeyDown={hideTooltip} onKeyUp={showToolTip} id="security--verify" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M54.462 259.709 294.176 151.353"/>
              <path tabIndex={focusIndex.current === 57 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 57 ? false : true } onKeyDown={hideTooltip} onKeyUp={showToolTip} id="security--ucm" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M44.241 235.754 288.32 137.677"/>
              <path tabIndex={focusIndex.current === 58 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 58 ? false : true } onKeyDown={hideTooltip} onKeyUp={showToolTip} id="security--uba" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M35.046 211.387 283.049 123.763"/>
              <path tabIndex={focusIndex.current === 59 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 59 ? false : true } onKeyDown={hideTooltip} onKeyUp={showToolTip} id="security--threat-investigator" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M26.892 186.652 278.384 109.635"/>
              <path tabIndex={focusIndex.current === 60 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 60 ? false : true } onKeyDown={hideTooltip} onKeyUp={showToolTip} id="security--soar" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M19.796 161.593 274.325 95.32"/>
              <path tabIndex={focusIndex.current === 61 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 61 ? false : true } onKeyDown={hideTooltip} onKeyUp={showToolTip} id="security--risk-manager" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M13.77 136.255 270.883 80.844"/>
              <path tabIndex={focusIndex.current === 62 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 62 ? false : true } onKeyDown={hideTooltip} onKeyUp={showToolTip} id="security--qradar" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M8.825 110.685 268.067 66.234"/>
              <path tabIndex={focusIndex.current === 63 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 63 ? false : true } onKeyDown={hideTooltip} onKeyUp={showToolTip} id="security--guardium" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M4.969 84.928 265.868 51.519"/>
              <path tabIndex={focusIndex.current === 64 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 64 ? false : true } onKeyDown={hideTooltip} onKeyUp={showToolTip} id="security--data-explorer" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M2.21 59.03 264.307 36.723"/>
              <path tabIndex={focusIndex.current === 65 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 65 ? false : true } onKeyDown={hideTooltip} onKeyUp={showToolTip} id="security--cp4s" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M.553 33.038 263.368 21.874"/>
              <path tabIndex={focusIndex.current === 66 ? 0 : -1} aria-describedby="tooltip" aria-hidden={ focusIndex.current === 66 ? false : true } onKeyDown={hideTooltip} onKeyUp={showToolTip} id="security--case-management" onMouseMove={updateTooltipPosition} onMouseEnter={showToolTip} onMouseLeave={hideTooltip} d="M0 7 263.046 7"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TooltipChart