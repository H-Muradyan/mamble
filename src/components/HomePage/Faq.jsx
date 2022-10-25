import React from 'react'
import Image from 'next/dist/client/image'
import Vector from '../../../public/images/Vector.svg'
import styles from '../../styles/Faq.module.scss'

function Faq({ faqData, handleChange }) {
  return (
    <div className="col-span-4 mt-[136px] md:col-span-8 lg:col-start-3">
      {faqData.map((elem) => {
        return (
          <React.Fragment key={elem.id}>
            <div
              onClick={() => handleChange({ ...elem, visible: !elem.visible })}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="font-semibold text-textColor">{elem.title}</p>
              <div
                className={`${
                  elem.visible && '-rotate-180'
                } duration-500 cursor-pointer`}
              >
                <Image src={Vector} alt="vector" />
              </div>
            </div>
            <p
              className={`${
                elem.visible ? styles.open : styles.close
              } text-textColor my-3`}
            >
              {elem.text}
            </p>
            <div className="border border-solid border-grey mb-9"></div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default React.memo(Faq)
