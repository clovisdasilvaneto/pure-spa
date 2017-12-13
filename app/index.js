/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// My SPA Here
// ================================

import Route from 'Route';

let myRouteSPA = new Route('my-view', {
	defaultUrl: '/contact'
});

myRouteSPA.processTemplate('/', '/templates/home.html');
myRouteSPA.processTemplate('/about', '/templates/about.html');
myRouteSPA.processTemplate('/contact', '/templates/contact.html');
