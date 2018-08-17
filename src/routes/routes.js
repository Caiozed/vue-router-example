/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';


export default [
  { path: '/', component: Home },
  { path: '/contact', component: Contact }
];
