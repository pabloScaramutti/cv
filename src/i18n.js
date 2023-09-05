import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          bio: "Hi! I’m a web developer based in La Plata, Argentina. I’ve started my journey on development 6 years ago creating an interesting toolbox that helps me to ideate, design and deploy solutions to facilitate people’s daily tasks. <br /> I’ve learnt a lot of things in my 3 years working as a front-end developer full time on all sizes teams. I enjoy working in teams, learning from my pairs and sharing experiences with them. I’m very curious and proactive, I really like to take responsability of the task and take them to the users in the more effective and efficient way. <br /> I love taking new challenges, problem solving and improving people's lives with tech. <br /> I’m currently working on a well known tech consultant provider called Globant and I’m searching new experiences to keep learning and provide new ideas and value.",
          workExperience: {
            title: "Work Experience",
            content: [
              {
                company: "Globant",
                jobPosition: "Web UI Developer",
                description: "I mantained and developed new features for different products based on React web apps. Also mantained a React Native mobile app product for the healthcare industry. <br /> Earned some experience on CI tools like Jenkins, gitlab webhooks. <br /> Worked with AWS infrastructure learning basic concepts and services."
              },
              {
                company: "Cheers smart contracts",
                jobPosition: "Front-end developer",
                description: "I participated with the elicitation of requirements, the app design and the development of the front end of the MVP app with ReactJS and Tailwind"
              },
              {
                company: "DevGoblins",
                jobPosition: "Front-end developer",
                description: "Made a landing page for the startup company with ReactJS"
              },
              {
                company: "Panorama - Digital agency",
                jobPosition: "Visual designer",
                description: "Gained experience about digital marketing, graphic design, web design, event photography and videography."
              },
            ]
          },
          education: {
            title: "Education",
            content: [
              {
                title: "Degree on Multimedia Design",
                status: undefined,
                university: "National University of La Plata",
                faculty: "Faculty of Arts",
                location: "La Plata, Buenos Aires, Argentina"
              },
              {
                title: "Teaching Degree in Multimedia Design",
                status: "(Ongoing - 95.65%)",
                university: "National University of La Plata",
                faculty: "Faculty of Arts",
                location: "La Plata, Buenos Aires, Argentina"
              },
              {
                title: "University Programmer Analyst",
                status: "(Ongoing - 52.17%)",
                university: "National University of La Plata",
                faculty: "Computer Science Faculty",
                location: "La Plata, Buenos Aires, Argentina"
              }
            ]
          },
          contact: "Contact",
          toolbox: "Toolbox",
          languages: {
            sectionTitle: "Languages",
            content: [
              {
                language: "Spanish",
                level: "Native"
              },
              {
                language: "English",
                level: "Intermediate"
              }
            ]
          }
        }
      },
      es: {
        translation: {
          bio: "Hola! Soy desarollador web localizado en La Plata, Argentina. Empecé en el mundo del desarrollo hace 6 años adquiriendo habilidades que me permiten idear, diseñar y desplegar soluciones que faciliten la vida cotidiana de las personas. <br /> Aprendí muchas cosas en los 3 años trabajando en tiempo completo en el área, trabajando con equipos de todos los tamaños. Disfruto de trabajar en equipo, aprendiendo de mis pares y compartiendo experiencias. Soy curioso y proactivo, me siento comodo tomando responsabilidades y comprometiendo a lo largo de todo el flujo del desarrollo hasta la llegada de las funcionalidades a los usuarios. <br /> Amo los nuevos desafios, pensar soluciones y mejorar la vida de las personas con tecnologia. <br /> Actualmente estoy trabajando en una gran consultora de tecnologia llamada Globant y estoy abierto a nuevas experiencias para seguir aprendiendo y dando valor.",
          workExperience: {
            title: "Experiencia laboral",
            content: [
              {
                company: "Globant",
                jobPosition: "Web UI Developer",
                description: "Mantenimiento y desarrollo de nuevas funcionalidades para diferentes productos basados en Web React Apps. También trabajé con una App móvil con React Native relacionado con la industria de la salud. <br /> Aprendí sobre procesos de CI y webhooks. <br /> Trabaje con infrastructura de AWS, conociendo los servicios basicos."
              },
              {
                company: "Cheers smart contracts",
                jobPosition: "Front-end developer",
                description: "Participé de la elicitacion de requerimientos, el diseño de la aplicación y el desarrollo front end del MVP con ReactJS y Tailwind"
              },
              {
                company: "DevGoblins",
                jobPosition: "Front-end developer",
                description: "Realice la pagina principal de la startup con ReactJS"
              },
              {
                company: "Panorama - Agencia digital",
                jobPosition: "Diseñador visual",
                description: "Realicé tareas vinculadas con el marketing digital, community managment, diseño gráfico, diseño web, fotografía de eventos y videografía."
              },
            ]
          },
          education: {
            title: "Educación",
            content: [
              {
                title: "Lic. Diseño Multimedial",
                status: undefined,
                university: "Universidad Nacional de La Plata",
                faculty: "Facultad de Artes",
                location: "La Plata, Buenos Aires, Argentina"
              },
              {
                title: "Prof. Diseño Multimedial",
                status: "(En curso - 95.65%)",
                university: "Universidad Nacional de La Plata",
                faculty: "Facultad de Artes",
                location: "La Plata, Buenos Aires, Argentina"
              },
              {
                title: "Analista Programador Universitario",
                status: "(En curso - 52.17%)",
                university: "Universidad Nacional de La Plata",
                faculty: "Facultad de Informática",
                location: "La Plata, Buenos Aires, Argentina"
              }
            ]
          },
          contact: "Contacto",
          toolbox: "Herramientas",
          languages: {
            sectionTitle: "Idiomas",
            content: [
              {
                language: "Español",
                level: "Nativo"
              },
              {
                language: "Ingles",
                level: "Intermedio"
              }
            ]
          }
        }
      }
    }
  });

export default i18n;