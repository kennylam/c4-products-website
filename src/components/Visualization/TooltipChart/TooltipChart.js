import React, { useState, useEffect, useRef, useCallback } from 'react';
import { businessUnits } from './animation-data';
import Lottie from 'react-lottie';
import combinedSVG from './combined-no-padding.json'
import './TooltipChart.scss';
import mobile from './static_mobile.svg';

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
  const [unit, setUnit] = useState('Automation Foundation')
  const [isLoading, setIsLoading] = useState(true)
  const [mouseCoords, setMouseCoords] = useState({x:-1000, y:-1000})
  const [offsetY, setOffsetY] = useState();
  const [chartContainerHasFocus, setChartContainerHasFocus] = useState(false);
  const [currentProductKey, setCurrentProductKey] = useState('')
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
          setCurrentProductKey(bars[focusIndex.current].id)
        } else if (focusIndexValue === null) {
          focusIndex.current = 66;
          typeof focusIndex.current === 'number' &&
          bars[focusIndex.current].isConnected && bars[focusIndex.current].focus();
          handleKeyboardTooltip(bars, focusIndex.current);
          setCurrentProductKey(bars[focusIndex.current].id)
        } else {
          focusIndex.current = focusIndexValue - 1;
          // Lets be sure to only focus an element if focusIndex.current is number
          // and bar[focusIndex.current] is a DOM node
          typeof focusIndex.current === 'number' &&
          bars[focusIndex.current].isConnected && bars[focusIndex.current].focus();
          handleKeyboardTooltip(bars, focusIndex.current);
          setCurrentProductKey(bars[focusIndex.current].id)
        }
      }
      // Left arrow key
      if (event.keyCode === 37) {
        if (focusIndexValue === bars.length - 1) {
          focusIndex.current = 0;
          bars[0].focus();
          handleKeyboardTooltip(bars, focusIndex.current);
          setCurrentProductKey(bars[focusIndex.current].id)
        } else if (focusIndexValue === null) {
          focusIndex.current = 0;
          typeof focusIndex.current === 'number' &&
          bars[focusIndex.current].isConnected && bars[focusIndex.current].focus();
          handleKeyboardTooltip(bars, focusIndex.current);
          setCurrentProductKey(bars[focusIndex.current].id)
        } else {
          focusIndex.current = focusIndexValue + 1;
          // Lets be sure to only focus an element if focusIndex.current is number
          // and bar[focusIndex.current] is a DOM node
          typeof focusIndex.current === 'number' &&
          bars[focusIndex.current].isConnected && bars[focusIndex.current].focus();
          handleKeyboardTooltip(bars, focusIndex.current);
          setCurrentProductKey(bars[focusIndex.current].id)
        }
      }
    }, [handleKeyboardTooltip, hideTooltip]);

    // Dynamically add the animation class to each bar. The length of the bar is based on the number of components/patterns used
    const getClasses = () => {
      if (documentExists) {
        Object.keys(businessUnits).map(unit => {
          Object.keys(businessUnits[unit]["products"]).map(product => {
            let bar = document.getElementById(product);
            let components = businessUnits[unit]["products"][product].numberOfComponents;
            bar.dataset.length=components;
            bar.classList.add('line', `components--${components}`); // add line class for gsap animation
            return null
          })  
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
      const tooltip = document.getElementById('tooltip');
      tooltip.classList.remove('hide-tooltip');
      let unit = ''
      let barId = ''
      let targetId = '';
      if (typeof  bar === 'string') {
        unit = document.getElementById(bar).getAttribute('data-unit')
        barId = bar

        // Handle keyboard event displaying of tooltips
        // If bar is of type string, then we are passing the id
        // of the bar receiving focus via the keydown event
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
        unit = bar.target.dataset.unit
        barId = bar.target.id

        const parentCoords = document.querySelector(`.chart--container`).getBoundingClientRect();
        setMouseCoords({x: Math.round(bar.pageX - parentCoords.left), y: Math.round((bar.pageY - parentCoords.top) + 32)});
      }      

      if (timerRef.current) clearTimeout(timerRef.current);
      if (barId.includes('target')) {
        targetId = barId.substring(barId.indexOf('-') + 2)
      } else {
        targetId = barId
      }

      setUnit(unit)
      setProductName(businessUnits[unit]["products"][targetId].productName);
      setNumberOfComponents(businessUnits[unit]["products"][targetId].numberOfComponents)
    }

    useEffect(() => {
      setOffsetY(document.getElementById('tooltip').clientHeight + 60); 
    }, [productName]);

  const defaultOptions = {
    renderer: 'svg',
    loop: false,
    autplay: true,
    animationData: combinedSVG,
  }

  const lottieListeners = [
    {
      eventName: 'complete',
      callback: () => {
        getClasses();
      }
    }
  ]

  const tooltipCoordinates = {
    left: mouseCoords.x - 26,
    top: mouseCoords.y + 14
  }

  // Calculate total pattern adoption count, min and max instances per product
  var totalPatternAdoption=0,minInstancesAdoptedPerProduct=Infinity,maxInstancesAdoptedPerProduct=0;
  Object.keys(businessUnits).map(function(unit) {
    Object.keys(businessUnits[unit]["products"]).map(function(product, productIndex) {
      totalPatternAdoption += businessUnits[unit]["products"][product].numberOfComponents;
      minInstancesAdoptedPerProduct = Math.min(minInstancesAdoptedPerProduct, productIndex+1);
      maxInstancesAdoptedPerProduct = Math.max(maxInstancesAdoptedPerProduct, productIndex+1);
    })  
  });

  var chartTitle = `${totalPatternAdoption} Total instances of pattern adoption`;
  var chartDescription = `Bar graph depicting instances of pattern adoption for each product, grouped by business unit, animating in sequentially with an animated background. There are ${totalPatternAdoption} total instances of pattern adoption, with a range of ${minInstancesAdoptedPerProduct} to ${maxInstancesAdoptedPerProduct} instances adopted per product. Data for each product and business unit is available in table format by clicking the previous link, or by pressing left or right arrow keys to cycle through the bars.`;
  const tooltipChart = useRef();

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
        <div className="tooltip--sub-title" style={{color: `${businessUnits[unit].color}`}}>{ unit }</div>
        <div className="tooltip--title">{ productName }</div>
        <div className="tooltip--count">{ numberOfComponents }</div>
        <div className="tooltip--label">Patterns</div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div className={`chart ${chartContainerHasFocus ? 'chart-with-focus' : ' '}`} tabIndex="0">
        <img className="mobile" src={mobile} alt="static animation" />
        <div role="presentation" className="chart--lottie">
          <Lottie options={defaultOptions} eventListeners={lottieListeners} />
        </div>
        <div className="chart--bars">
          <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="chart-title" aria-describedby="chart-desc" viewBox="0 0 1248 758" className={isLoading ? 'barsLoading' : 'showBars'}>
            <title id="chart-title">{chartTitle}</title>
            <desc id="chart-desc">{chartDescription}</desc>
            {
              Object.keys(businessUnits).map((unit) => (                
                  <g id={businessUnits[unit].id} stroke={businessUnits[unit].color}>
                    {
                      Object.keys(businessUnits[unit].products).map((product) => (
                          <path data-unit={unit} tabIndex={focusIndex.current === 0 ? 0 : -1} aria-hidden={ product === currentProductKey ? false : true } onKeyDown={(e) => hideTooltip(e)} onKeyUp={(e) => showToolTip(e)} onMouseEnter={(e) => showToolTip(e)} onMouseLeave={(e) => hideTooltip(e)} onMouseMove={(e) => updateTooltipPosition(e)} id={product} d={businessUnits[unit].products[product].d}/>
                      ))
                    }
                  </g>                
              ))
            }
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TooltipChart