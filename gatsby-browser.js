require('./src/styles/index.scss');

// Redirect the WalkMe, Getting started and
// Voice and tone guides to the guidance section
exports.onRouteUpdate = ({ location, prevLocation }) => {
  let pathName = location.pathname;
  if (pathName && (
        pathName.includes('/walkme-guide/') || 
        pathName.includes('/getting-started-guide/') ||
        pathName.includes('/voice-and-tone'))) {
    window.location.href = window.location.href.replace('/pal/', '/guidance/');
  }
}