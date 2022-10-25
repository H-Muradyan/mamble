import React from 'react'
import Image from 'next/dist/client/image'
import OrangeRound from '../../../public/images/OrangeRound.svg'
import YellowRound from '../../../public/images/YellowRound.svg'
import { data } from '../consts'

function Members() {
  const { membersData } = data

  return (
    <>
      <div className="text-center mt-40 col-span-4 md:col-span-8 lg:col-start-3">
        <div>
          <h2 className="font-semibold text-5xl mb-4 text-textColor">
            Our team
          </h2>
          <p className="text-textColor mb-32">
            This website has been developed by a group of brilliant software
            engineering interns at Mamble Labs. During this internship, we are
            going to gain fundamental practical skills in coding and structured
            thinking, become constructive, proactive, enthusiastic and caring
            team-players, stay humble and always strive for professional
            advancement.
          </p>
        </div>
      </div>
      <div className="mb-48 col-span-4 md:col-span-8 md:col-start-1 lg:col-start-2 xl:col-start-1 lg:col-span-12">
        <div className="md:flex md:flex-wrap md:justify-center gap-x-20">
          {membersData.map((elem) => {
            return (
              <div
                key={elem.id}
                className="group relative flex flex-col text-center items-center"
              >
                <div className="translate-y-14 translate-x-24 duration-300 ease-out group-hover:translate-y-10 group-hover:translate-x-32">
                  <Image src={OrangeRound} alt="round" />
                </div>
                <div className="relative z-10">
                  <Image src={elem.image} alt="member" />
                </div>
                <div className="-translate-y-16 -translate-x-20 ease-out duration-300 group-hover:-translate-y-12 group-hover:-translate-x-28">
                  <Image src={YellowRound} alt="round" />
                </div>
                <div className="absolute bottom-0">
                  <h2 className="text-textColor font-medium text-xl">
                    {elem.name}
                  </h2>
                  <p>{elem.position}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default React.memo(Members)
