import 'dart:html';

var DEBUG = false;

var routeMapping = {
  'events': 'Page-Events',
  'hub': 'Page-Hub',
  'techheaven': 'Page-TechHeaven',
  'organizace': 'Page-Organization',
};

var defaultPage = 'events';

void main() {
  initializeLocation();
}

String parsePageFromLocation() {
  debugPrint('parsePageFromLocation()');

  var currentLocation = window.location;

  debugPrint('parsePageFromLocation() - currentLocation = ${currentLocation}');

  if (currentLocation.hash.length > 0) {
    var pageKey = currentLocation.hash.substring(1);

    debugPrint('parsePageFromLocation() - pageKey = ${pageKey}');

    return pageKey;
  } else {
    return null;
  }
}

void initializeLocation() {
  debugPrint('initializeLocation()');

  updateRoute();

  window.onHashChange.listen(hashChangeEvent);
}

void hashChangeEvent(Event event) {
  debugPrint('hashChangeEvent()');

  updateRoute();
}

void updateRoute() {
  debugPrint('updateRoute()');

  var pageKey = parsePageFromLocation();

  debugPrint('updateRoute() - pageKey = ${pageKey}');

  if (routeMapping.containsKey(pageKey)) {
    for (var navItem in querySelectorAll('.Nav-element')) {
      navItem.attributes.remove('selected');
    }

    var targetOfNavBar = querySelector('[data-route=${pageKey}]');

    if (targetOfNavBar != null) {
      targetOfNavBar.setAttribute('selected', null);
    }

    showPage(pageKey);

    debugPrint('updateRoute() - targetOfNawBar = ${targetOfNavBar}');
  } else {
    showPage(defaultPage);
  }
}

void showPage(String routeMappingKey) {
  hideAll();

  debugPrint('showPage($routeMappingKey)');

  var pageClass = routeMapping[routeMappingKey];

  debugPrint('showPage - pageClass = ${pageClass}');

  querySelector('.' + pageClass).style.display = 'flex';
}

void hideAll() {
  debugPrint('hideAll()');

  querySelectorAll('.Page').style.display = 'none';
}

void debugPrint(String message) {
  if (DEBUG) {
    print(message);
  }
}