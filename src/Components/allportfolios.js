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
      category: 'E-Commerce',
      link1: 'www.zybershop.de',
      link2: 'https://github.com/lggg123/zybershop-commerce',
      icon1: 'Website',
      icon2: 'Code',
      image: zybershop,
      title: 'Zybershop',
      description: 'E-commerce website built on the shopify platform using Debutify with custom liquid code snippets for proper e-commerce optimization using help desk application, klavyio marketing optimization, currently building a Hydrogen rebuild that is currently open-source for anyone to collaborate on and learn how to use Hydrogen properly, checkout the button code when you hover over the picture for more information on how to collaborate.'
  },
  {
    id: 2,
    category: 'Business',
    link1: 'www.guildmortgage.com',
    icon1: 'Website',
    image: guildPhoto,
    title: 'Guild Mortgage',
    description: 'Worked on Loan information refactoring to a Laravel application from a monolithic PHP application, refactoring to a MVC framework methodology creating a specific service to access loan information in one of the many databases'
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    category: 'Business',
    link1: 'www.apple.com',
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
    link1: 'www.equitysmith.com',
    // link2: 'www.github.com',
    icon1: 'Website',
    // icon2: 'G',
    image: port5,
    title: 'Equitysmith',
    description:
      'Currently building a replacement for the Wordpress website with a MongoDB, Express.js, React.js, Node.js website using AWS Lambda in docker containers.',
  },
  {
    id: 6,
    category: 'E-Commerce',
    link1: 'www.gono2.com',
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
    id: 8,
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
    id: 9,
    category: 'e-commerce',
    link1: 'www.thenetoutlet.com',
    // link2: 'www.github.com',
    icon1: 'Website',
    // icon2: 'G',
    image: port9,
    title: 'The NetOutlet',
    description:
      'Built in Turbo theme customized for e-commerce functionality. A US dropshipping store coming soon!',
  },
];

export default portfolios;
