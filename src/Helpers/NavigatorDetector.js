export const Detector = (navigatorSelector) => {
  let navi = navigator.userAgent.toLowerCase().indexOf(navigatorSelector) > -1;
  return navi;
};
