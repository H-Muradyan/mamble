import email from '../../public/images/email.svg'
import phone from '../../public/images/phone.svg'
import location from '../../public/images/location.svg'
import fb from '../../public/images/fb.svg'
import insta from '../../public/images/insta.svg'
import linkedin from '../../public/images/linkedin.svg'
import StickyPicture1 from '../../public/images/StickyPicture1.png'
import StickyPicture2 from '../../public/images/StickyPicture2.png'
import StickyPicture3 from '../../public/images/StickyPicture3.png'
import HeroImage from '../../public/images/HeroImage.png'
import Member1 from '../../public/images/Member1.png'
import Member2 from '../../public/images/Member2.png'
import Member3 from '../../public/images/Member3.png'
import Member4 from '../../public/images/Member4.png'
import Member5 from '../../public/images/Member5.png'
import usFlag from '../../public/images/usFlag.svg'
import amFlag from '../../public/images/amFlag.svg'

export const mapLocation =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6096.7244678304005!2d44.4892689!3d40.1787514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdabf7ba76c5%3A0x6cb3f58bb7e50dc8!2sMamble%20LLC!5e0!3m2!1sru!2s!4v1654083571083!5m2!1sru!2s'

export const data = {
  headerData: {
    nav: [
      {
        id: 0,
        text: 'Blog',
        path: '/blog',
      },
      {
        id: 1,
        text: 'Contact us',
        path: '/contact-us',
      },
      {
        id: 2,
        text: 'Sign in',
        path: '/sign-in',
      },
    ],
  },
  footerData: {
    pages: [
      {
        id: 0,
        text: 'Home',
        path: '/',
      },
      {
        id: 1,
        text: 'Blog',
        path: '/blog',
      },
      {
        id: 2,
        text: 'Contact us',
        path: '/contact-us',
      },
      {
        id: 3,
        text: 'Sign in',
        path: '/sign-in',
      },
    ],
    contacts: [
      {
        id: 0,
        text: 'Info@mamble.co',
        link: 'mailto:Info@mamble.co',
        image: email,
      },
      {
        id: 1,
        text: '+374 55 553 210',
        link: 'tel:+37455553210',
        image: phone,
      },
      {
        id: 2,
        text: '1/2 Tsitsernakaberd Hwy, 4th entrance, 2nd floor',
        link: 'https://www.google.com/maps/dir/ /Mamble+LLC+2nd+floor+1%2F2+Tsitsernakaberd+Highway+4th+entrance+Yerevan+0082/@40.1787514,44.4892689,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x406abdabf7ba76c5:0x6cb3f58bb7e50dc8!2m2!1d44.4892689!2d40.1787514',
        image: location,
      },
    ],
    socialPages: [
      {
        id: 0,
        link: 'https://www.facebook.com/mambleLLC',
        image: fb,
      },
      {
        id: 1,
        link: 'https://www.instagram.com/mamble_llc/',
        image: insta,
      },
      {
        id: 2,
        link: 'https://am.linkedin.com/company/mamble',
        image: linkedin,
      },
    ],
  },
  heroData: [
    {
      id: 0,
      title: 'Hero section',
      text: '“You are not done when it works, you are done when it’s right.” Keep this in mind now and forever.',
      image: HeroImage,
    },
  ],
  stickyData: [
    {
      id: 0,
      title: 'First rule of clean code',
      text: 'Keep it simple stupid. Simpler is always better. Reduce complexity as much as possible.',
      image: StickyPicture1,
    },
    {
      id: 1,
      title: 'Second rule of clean code',
      text: 'Boy scout rule. Leave the campground cleaner than you found it.',
      image: StickyPicture2,
    },
    {
      id: 2,
      title: 'Third rule of clean code',
      text: 'Always find the root cause. Always look for the root cause of a problem: even if it works, find out why.',
      image: StickyPicture3,
    },
  ],
  slidingData: [
    {
      id: 0,
      title: 'Design rules',
      text: [
        'Keep configurable data at high levels.',
        'Prefer polymorphism to if/else or switch/case.',
        'Prevent over-configurability.',
        'Use dependency injection.',
        'Follow the Law of Demeter. A class should know only its direct dependencies.',
      ],
    },
    {
      id: 1,
      title: 'Understandability tips',
      text: [
        'Be consistent. If you do something a certain way, do all similar things in the same way.',
        'Always try to explain yourself in code: use comments for explanation of intent, clarification of code or warning of consequences.',
        'Use explanatory variables.',
        'Use dependency injection.',
        `Avoid logical dependency. Don't write methods which work correctly depending on   something else in the same class.`,
      ],
    },
    {
      id: 2,
      title: 'Functions rules',
      text: [
        'Small.',
        'Do one thing, have no side effects.',
        'Use descriptive names.',
        'Prefer fewer arguments.',
        `Don't use flag arguments. Split method into several independent methods that can be called from the client without the flag.`,
      ],
    },
    {
      id: 3,
      title: 'Code smells',
      text: [
        'Rigidity. The software is difficult to change. A small change causes a cascade of subsequent changes.',
        'Fragility. The software breaks in many places due to a single change.',
        'Immobility. You cannot reuse parts of the code in other projects because of involved risks and high effort.',
        'Needless Complexity.',
        'Needless Repetition.',
        'Opacity. The code is hard to understand.',
      ],
    },
  ],
  faqData: [
    {
      id: 0,
      title: 'What are deployment and release?',
      text: 'This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens.This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) desiThis term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) desi',
      visible: false,
    },

    {
      id: 1,
      title: 'What is the environment?',
      text: 'This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens.',
      visible: false,
    },
    {
      id: 2,
      title: 'What are commit, push, pull request, merge?',
      text: 'This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens.',
      visible: false,
    },
    {
      id: 3,
      title: 'What is a merge conflict?',
      text: 'This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens.',
      visible: false,
    },
    {
      id: 4,
      title: 'What is the difference between fetch and pull?',
      text: 'This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens.',
      visible: false,
    },
    {
      id: 5,
      title: 'What is code review?',
      text: 'This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens.',
      visible: false,
    },
    {
      id: 6,
      title: 'What is Software Development Life Cycle (SDLC)?',
      text: 'This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens.',
      visible: false,
    },
    {
      id: 7,
      title: 'What is the difference between front-end and back-end?',
      text: 'This term refers to how a website responds to the user according to the device, orientation, and screen size. The graphic user interface (GUI) design approach is used to create content that adjusts to various screens.',
      visible: false,
    },
  ],
  membersData: [
    {
      id: 0,
      name: 'John. S',
      position: 'Software engineering intern',
      image: Member1,
    },
    {
      id: 1,
      name: 'John. S',
      position: 'Software engineering intern',
      image: Member2,
    },
    {
      id: 2,
      name: 'John. S',
      position: 'Software engineering intern',
      image: Member3,
    },
    {
      id: 3,
      name: 'John. S',
      position: 'Software engineering intern',
      image: Member4,
    },
    {
      id: 4,
      name: 'John. S',
      position: 'Software engineering intern',
      image: Member5,
    },
  ],
}
