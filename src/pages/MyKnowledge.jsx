import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

const MyKnowledge = () => {
  const formaciones= [
    {
      id: 1,
      name: "Universidad Nacional Autónoma de Honduras",
      url: "personalContent/unah.webp",
      descripcion: "Bachelor of Computer Science Engineering",
      fecha: "2018-2023"
    },
    {
      id: 2,
      name: "Oracle Next Education",
      url: "personalContent/one.webp",
      descripcion: "Frontend Specialization - Oracle Partnership with Alura",
      fecha: "2023; Feb-Oct"
    },
    {
      id: 3,
      name: "Udemy Definitive Courses",
      url: "personalContent/udemy.webp",
      descripcion: "Ultimate Guides - React and Javascript",
      fecha: "2023; Mar-Dic"
    }
  ]

  const proyectos= [
    {
      id: 1,
      name: "Encrypter - ONE Challenge",
      descripcion: "Webpage aimed to translate and create text based on a secret encripting logic",
      link: "https://rublox99.github.io/encriptador-challenge/",
      tecnologias: "HTML, CSS & JS"
    },
    {
      id: 2,
      name: "VLSM Calculator",
      descripcion: "Automated and simplified VLSM calculation process by finding ip addresses, number of hosts, mask, etc",
      link: "https://rublox99.github.io/calculadora-vlsm/",
      tecnologias: "HTML, CSS & JS"
    },
    {
      id: 3,
      name: "Pacient Appointment Tracker",
      descripcion: "React app which permits to give  follow-up pacient registered through a interactive table",
      link: "https://ruben-citas-medicas.netlify.app",
      tecnologias: "React, JS, Tailwind & LocalStorage"
    },
    {
      id: 4,
      name: "Budget Controller (In process)",
      descripcion: "React app that create a financial tracker for a base budget according the incomes and outputs",
      link: "https://github.com/Rublox99/control-presupuesto-react",
      tecnologias: "React, JS & LocalStorage"
    },
    {
      id: 5,
      name: "Runnin Bolt (Discontinued)",
      descripcion: "Java project for a 2D  infinite running game in the Pokemon universe",
      link: "https://github.com/Rublox99/runnin-bolt",
      tecnologias: "Java & JavaAWT"
    }
  ]

  return (
    <section className='bg-gray-900 flex flex-col h-full'>
      <Header/>

      <section className='mb-auto'>
        <div className='w-full text-center mt-20'>
          <p className='text-white text-2xl font-semibold'>Education Walkthrough</p>
          <div className='w-full flex flex-wrap justify-center'>
            {Object.values(formaciones).map( (formacion) => (
              <Card
                key={formacion.id}
                name={formacion.name}
                url={formacion.url}
                descripcion={formacion.descripcion}
                fecha={formacion.fecha}
              />
              )
            )}
          </div>

        </div>

        <div className='w-full text-center mt-10'>
          <p className='text-white text-2xl font-semibold'>Projects I have made</p>
          <p className='text-white text-sm'>(with incremental experience from left to right)</p>
          <div className='w-full flex flex-wrap justify-center'>
            {Object.values(proyectos).map( (proyecto) => (
              <Card
                key={proyecto.id}
                name={proyecto.name}
                descripcion={proyecto.descripcion}
                link={proyecto.link}
                tecnologias={proyecto.tecnologias}
              />
              )
            )}
          </div>

        </div>
      </section>

      <Footer/>
    </section>
  )
}

export default MyKnowledge
