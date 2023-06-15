import { Tab } from "@headlessui/react";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Tabs = () => {

  const [experiencias]= useState({
    "HTML + JS": [
      {
        id: 1,
        nombreProyecto: "Experimental page - Oracle Next Education",
        fechaCreacion: "2023: February",
        tecnologiasUsadas: "Used: HTML, CSS & Javascript"
      },
      {
        id: 2,
        nombreProyecto: "Encrypter Challenge - Oracle Next Education",
        fechaCreacion: "2023: March",
        tecnologiasUsadas: "Used: HTML, CSS & Javascript"
      },
      {
        id: 3,
        nombreProyecto: "VLSM Calculator",
        fechaCreacion: "2023: March",
        tecnologiasUsadas: "Used: HTML, CSS & Javascript"
      }
    ],

    "React.js": [
      {
        id: 1,
        nombreProyecto: "Medical Appointment Tracker",
        fechaCreacion: "2023: March",
        tecnologiasUsadas: "Used: React, Vite, Tailwind & LocalStorage"
      },
      {
        id: 2,
        nombreProyecto: "Personal Portfolio",
        fechaCreacion: "2023: June",
        tecnologiasUsadas: "Used: React, Vite & Tailwind"
      },
      {
        id: 3,
        nombreProyecto: "Budget Controller",
        fechaCreacion: "2023: Jule",
        tecnologiasUsadas: "Used: React, Vite & LocalStorage"
      }
    ],

    "Next.js": [
      {
        id: 1,
        nombreProyecto: "Future Proyect",
        fechaCreacion: "2023: Soon",
        tecnologiasUsadas: "Probably React, Next & Node"
      },
      {
        id: 2,
        nombreProyecto: "Future Proyect",
        fechaCreacion: "2023: Soon",
        tecnologiasUsadas: "Probably React, Next & Node"
      },
      {
        id: 3,
        nombreProyecto: "Future Proyect",
        fechaCreacion: "2023: Soon",
        tecnologiasUsadas: "Probably React, Next & Node"
      }
    ]
  })

  return (
    <>
      <div className="w-9/12 phone:w-full phone:px-2 h-2/3 flex flex-col mx-auto">
        <Tab.Group>
          <Tab.List className="mb-1 p-1 w-full rounded-md bg-black text-white font-semibold flex justify-evenly">
            {Object.keys(experiencias).map( (experiencia) => (
              <Tab
                key={experiencia} className={({selected}) => classNames(
                  'w-full mx-1 hover:bg-red-500 hover:px-5 rounded-md transition-all',
                  selected
                    && 'bg-red-800 rounded-md px-5 phone:px-0'
                )}
              >
                {experiencia}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="py-1 px-5 rounded-md text-white bg-black flex justify-start">
            {Object.values(experiencias).map( (objetosCategoria, id) => (
                <Tab.Panel key={id} className={classNames("rounded-sm")}>
                  <ul>
                    {objetosCategoria.map( (objeto) => (
                      <li key={objeto.id} className="text-white p-1 text-lg phone:text-base">
                        <span className="italic font-semibold">{objeto.nombreProyecto}</span>
                        <ul className="text-gray-400 text-sm phone:text-xs">
                          <li>{objeto.fechaCreacion} &middot; {objeto.tecnologiasUsadas}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  )
}

export default Tabs