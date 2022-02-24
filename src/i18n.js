import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          bio: "I’m 27 years old based in La Plata, Argentina. I've lernt a lot of tools and skills in my years as student and expanded this knowledge working in startups and as a freelancer. I love new challenges, finding solutions for problems and helping others to have a better life. With my background on multimedia design and programming, I can ideate solutions and bring them to life. <br/> I’m currently searching new experiences to apply and develope my skills and learn from team work.",
          workExperience: {
            title: "Work Experience",
            content: [
              {
                company: "Panorama - Digital agency",
                jobPosition: "Visual designer",
                description: "Gained experience about digital marketing, graphic design, web design, event photography and videography."
              },
              {
                company: "DevGoblins",
                jobPosition: "Front-end developer",
                description: "Made a landing page for the startup company with ReactJS"
              },
              {
                company: "Cheers smart contracts",
                jobPosition: "Front-end developer",
                description: "I participate with the elicitation of requirements, the app design and develop the front end of the MVP app with ReactJS and Tailwind"
              }
            ]
          },
          education: {
            title: "Education",
            content: [
              {
                title: "Degree on Multimedia Design",
                status: undefined,
                university: "National University of La Plata",
                faculty: "Faculty of arts",
                location: "La Plata, Buenos Aires, Argentina"
              },
              {
                title: "Professorship in Multimedia Design",
                status: "(Ongoing - 95.65%)",
                university: "National University of La Plata",
                faculty: "Faculty of arts",
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
          }
        }
      },
      es: {
        translation: {
          bio: "Tengo 27 años y vivo en La Plata, Argentina. Aprendí muchas habilidades en mi carrera universitaria y expandí mi conocimiento trabajando en startups y como freelancer. Me gustan los desafios y ayudar a las personas buscando soluciones a distintos problemas. Con mis conocimientos en diseño multimedia y programación, puedo idear soluciones y luego llevarlas a cabo. <br/> Actualmente estoy buscando nuevas experiencias para aplicar y desarrollar todos los conocimientos que fui aprendiendo a lo largo de los años y seguir aprendiendo y formarmandome.",
          workExperience: {
            title: "Experiencia laboral",
            content: [
              {
                company: "Panorama - Agencia digital",
                jobPosition: "Diseñador visual",
                description: "Realicé tareas vinculadas con el marketing digital, community managment, diseño gráfico, diseño web, fotografía de eventos y videografía."
              },
              {
                company: "DevGoblins",
                jobPosition: "Front-end developer",
                description: "Realice la pagina principal de la startup con ReactJS"
              },
              {
                company: "Cheers smart contracts",
                jobPosition: "Front-end developer",
                description: "Participé de la elicitacion de requerimientos, el diseño de la aplicación y el desarrollo front end del MVP con ReactJS y Tailwind"
              }
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
          }
        }
      }
    }
  });

export default i18n;