import port2 from '../img/portImages/gono2.png';
import port3 from '../img/portImages/prolon.png';
import port5 from '../img/portImages/equitysmith.png';
import port8 from '../img/portImages/fedes.jpeg';
import port9 from '../img/portImages/trendziehub.png';
import guildPhoto from '../img/portImages/guild_mortgage.png';
import zybershop from '../img/portImages/zybershop.png';
import stacklrImg from '../img/portImages/stacklr.png';
import vonageImg from '../img/portImages/vonage.png';
import appleLogo from '../img/portImages/apple-logo.png';

const portfolios = [
  {
    id: 1,
    category: 'Business',
    link1: 'https://www.guildmortgage.com',
    icon1: 'Website',
    image: guildPhoto,
    title: 'Guild Mortgage',
    description: 'I refactored loan information in a Laravel app from monolithic PHP, adopting MVC and creating Laravel packages for efficient access across databases and loan data formatting. Additionally, I implemented an escrow analysis PDF creator with implicit scope models, enhancing system efficiency.'
  },
  {
    id: 2,
    category: 'E-Commerce',
    link1: 'https://www.zybershop.de',
    link2: 'https://github.com/lggg123/zybercommerce',
    icon1: 'Website',
    icon2: 'Code',
    image: zybershop,
    title: 'Zybershop',
    description: 'E-commerce website built on the Shopify platform using a custom liquid theme for proper e-commerce optimization using Help Desk Application, Klavyio Marketing Optimization, Trafficly, Ryviu.'
},
  {
    id: 3,
    category: 'Business',
    link1: 'https://developer.vonage.com',
    // link2: 'www.github.com',
    icon1: 'Website',
    // icon2: 'G',
    image: vonageImg,
    title: 'Vonage',
    description:
      'Refactoring and adding new features on a Ruby on Rails application with markdown renderers and yaml file parsers to use instead of html.erb files to give technical writers and easy template to build new features. I primarily work on the development side of things in regards to fixing bugs and adding new features to the frontend and backend.'
  },
  {
    id: 4,
    category: 'Business',
    link1: 'https://www.stacklr.com',
    // link2: 'www.github.com',
    icon1: 'WS',
    // icon2: 'G',
    image: stacklrImg,
    title: 'Stacklr',
    description:
    'Building out new features on the backend and fixing database changes and updates. Integrated redis and sidekiq to produce a background job to update an entry based on creation of another table. Working with Ruby on Rails 6.0 and Ruby 2.6.3. On the frontend built out new functionalities to update data and to make an http request. React 18 is being used as the front end framework.',
  },
  {
    id: 5,
    category: 'Business',
    link1: 'https://www.apple.com',
    // link2: 'www.github.com',
    icon1: 'Website',
    // icon2: 'G',
    image: appleLogo,
    title: 'Apple',
    description:
      'Built an internal machine learning optimization Ruby gem for the internal team at Apple. Ruby 2.7.4 and used PyCall, JSON, and RSpec gems to build the foundation for the gem.',
  },
  {
    id: 4,
    category: 'Business',
    link1: 'https://www.equitysmith.com',
    // link2: 'www.github.com',
    icon1: 'Website',
    // icon2: 'G',
    image: port5,
    title: 'Equitysmith',
    description:
      'Implemented custom Wordpress development and refactored the UI to make it mobile responsive and integrated proper design fundamentals as well as built a custom plugin for admin to manage sitemaps and email campaign management',
  },
  {
    id: 6,
    category: 'E-Commerce',
    link1: 'https://www.gono2.com',
    //link2: 'www.github.com',
    icon1: 'Website',
    icon2: '',
    image: port2,
    title: 'No.2',
    description:
      'E-Commerce website built on shopify redesigned with ReactJS and GraphQl',
  },
  {
    id: 7,
    category: 'E-Commerce',
    link1: 'https://www.prolonfmd.com',
    // link2: 'www.github.com',
    icon1: 'Website',
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
    id: 8,
    category: 'Business',
    link1: 'https://www.ajla.com',
    // link2: 'www.github.com',
    icon1: 'Website',
    // icon2: 'G',
    image: port8,
    title: 'FEDES / AJLA State of Kansas',
    description:
      'Built and fixed the job board and unemployment site for the state of Kansas. Utilized React for the front-end and Ruby on Rails for backend using sidekiq and redis for boackground jobs and a PostgresQL Database.',
  },
  // {
  //   id: 9,
  //   category: 'e-commerce',
  //   link1: 'https://www.thenetoutlet.com',
  //   // link2: 'www.github.com',
  //   icon1: 'Website',
  //   // icon2: 'G',
  //   image: port9,
  //   title: 'The NetOutlet',
  //   description:
  //     'Built in Turbo theme customized for e-commerce functionality. A US dropshipping store coming soon!',
  // },
];

export default portfolios;
