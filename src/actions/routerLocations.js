// map paths to readable link text
export function mapRoutesToNames(route) {
  const preText = 'Go back';
  switch (route) {
    case '/results':
      return `${preText} to search results`;
    case '/':
      return `${preText} to the home page`;
    case '/details':
      return `${preText} to position details`;
    case '/post':
      return `${preText} to post details`;
    case '/profile':
      return `${preText} to your profile`;
    case '/compare':
      return `${preText} to the comparison`;
    default: // else, just return generic "Go back" text
      return preText;
  }
}

// get the full object for the most recently visited route
export function getLastRoute(routerLocations) {
  if (!routerLocations || routerLocations.length <= 1) {
    return false;
  }
  // Else, return the pathname...
  // by first getting the current route (will be the most recent)
  const currentRoute = routerLocations[routerLocations.length - 1];
  // Then find out the first time the route was visited via its key.
  // The key prop is unique to an explicit navigation to a page.
  // In other words, navigating to a single page via 'Link's will return a new key,
  // but using back/forward won't affect the key
  const lastVisitedIndex = routerLocations.indexOf(currentRoute);
  const previousRoute = routerLocations[lastVisitedIndex - 1];
  // was there a previous route within this session?
  if (previousRoute && previousRoute.pathname) {
    // then use -1 to get the previous route
    return routerLocations[lastVisitedIndex - 1];
  }
  // this must have been the page the user initially landed on
  return false;
}

// return just the name of that route, using the mapping
export function getLastRouteName(routerLocations) {
  const path = getLastRoute(routerLocations).pathname;
  if (path) { return mapRoutesToNames(path); }
  return false;
}

// return the full route, including the pathname and any search parameters
export function getLastRouteLink(routerLocations) {
  const text = getLastRouteName(routerLocations);
  const lastLocation = getLastRoute(routerLocations);
  if (!text || !lastLocation) {
    return {};
  }
  const navigateTo = `${lastLocation.pathname}${lastLocation.search}`;
  return { text, link: navigateTo };
}
