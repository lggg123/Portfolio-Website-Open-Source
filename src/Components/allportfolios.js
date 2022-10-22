import port1 from '../img/portImages/clean_coil_cable.jpeg';
import port2 from '../img/portImages/gono2.png';
import port3 from '../img/portImages/prolon.png';
import port4 from '../img/portImages/tailopez.png';
import port5 from '../img/portImages/equitysmith.png';
import port6 from '../img/portImages/port5.jpg';
import port7 from '../img/portImages/port6.jpg';
import port8 from '../img/portImages/fedes.jpeg';
import port9 from '../img/portImages/trendziehub.png';
import stacklrImg from '../img/portImages/stacklr.png';
import vonageImg from '../img/portImages/vonage.png';
import appleLogo from '../img/portImages/apple-logo.png';

const portfolios = [
  // {
  //     id: 1,
  //     category: 'E-Commerce',
  //     link1: 'www.cleancoilcable.com',
  //     link2: 'www.github.com',
  //     icon1: 'WS',
  //     icon2: 'G',
  //     image: port1,
  //     title: 'Clean Coil Cable',
  //     description: 'E-commerce website built on the shopify platform using Vuejs, HTML, SCSS, and Liquid'
  // },
  {
    id: 1,
    category: 'Business',
    link1: 'www.apple.com',
    // link2: 'www.github.com',
    icon1: 'WS',
    // icon2: 'G',
    image: appleLogo,
    title: 'Apple',
    description:
    'Used a linear sum assignment solver to create a matching algorithm for private data.'
      // 'Built an internal optimization Ruby gem for the internal team at Apple. Ruby 2.7.4 and used PyCall, JSON, and RSpec gems to build the foundation for the gem.',
  },
  {
    id: 2,
    category: 'Business',
    link1: 'www.developer.vonage.com',
    // link2: 'www.github.com',
    icon1: 'WS',
    // icon2: 'G',
    image: vonageImg,
    title: 'Vonage',
    description:
      'Refactoring and adding new features on a Ruby on Rails application with markdown renderers and yaml file parsers to use instead of html.erb files to give technical writers and easy template to build new features. I primarily work on the development side of things in regards to fixing bugs and adding new features to the frontend and backend.'
  },
  {
    id: 3,
    category: 'Business',
    link1: 'www.stacklr.com',
    // link2: 'www.github.com',
    icon1: 'WS',
    // icon2: 'G',
    image: stacklrImg,
    title: 'Stacklr',
    description:
    'Building out new features on the backend and fixing database changes and updates. Integrated redis and sidekiq to produce a background job to update an entry based on creation of another table. Working with Ruby on Rails 6.0 and Ruby 2.6.3. On the frontend built out new functionalities to update data and to make an http request. React 18 is being used as the front end framework.',
  },
  {
    id: 4,
    category: 'Business',
    link1: 'www.equitysmith.com',
    // link2: 'www.github.com',
    icon1: 'WS',
    // icon2: 'G',
    image: port5,
    title: 'Equitysmith',
    description:
      'Currently building a replacement for the Wordpress website with a MongoDB, Express.js, React.js, Node.js website using AWS Lambda in docker containers.',
  },
  {
    id: 5,
    category: 'E-Commerce',
    link1: 'www.gono2.com',
    link2: 'www.github.com',
    icon1: 'WS',
    icon2: 'G',
    image: port2,
    title: 'No.2',
    description:
      'E-Commerce website built on shopify redesigned with ReactJS and GraphQl',
  },
  {
    id: 6,
    category: 'E-Commerce',
    link1: 'www.prolonfmd.com',
    // link2: 'www.github.com',
    icon1: 'WS',
    // icon2: 'G',
    image: port3,
    title: 'Prolon',
    description:
      'Started with Brooklyn theme with customization, and ended with Next.js ReactJS and GraphQl ecommerce site with a Ruby on Rails/React subscription app',
  },
  // {
  //     id: 4,
  //     category: 'Education',
  //     link1: 'www.tailopez.com',
  //     link2: 'www.github.com',
  //     icon1: 'WS',
  //     icon2: 'G',
  //     image: port4,
  //     title: 'Tai Lopez',
  //     description: 'Refactored a custom PHP framework built from a Dolphin dating website fixing up SQL queries and running a front-end audit for bugs'
  // },
  {
    id: 7,
    category: 'Business',
    link1: 'www.ajla.com',
    // link2: 'www.github.com',
    icon1: 'WS',
    // icon2: 'G',
    image: port8,
    title: 'FEDES / AJLA State of Kansas',
    description:
      'Built and fixed the job board and unemployment site for the state of Kansas. Utilized React for the front-end and Ruby on Rails for backend using sidekiq and redis for boackground jobs and a PostgresQL Database.',
  },
  {
    id: 8,
    category: 'e-commerce',
    link1: 'www.trendziehub.com',
    // link2: 'www.github.com',
    icon1: 'WS',
    // icon2: 'G',
    image: port9,
    title: 'TrendzieHub e-commerce site',
    description:
      'Built frontend and backend for e-commerce site trendziehub.com. Site features inventory, subscription, checkout, and order tracking functionality.',
  },
];

export default portfolios;
