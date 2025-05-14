import Calculator from '@/view/Home.vue';
import About from '@/view/About.vue';

export default [
  {
    path: '/',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];