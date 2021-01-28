import React from 'react'
import ExperienceList from '../ExperienceList/ExperienceList'

import { Experience2 } from '../../types/Experience'
import { DadosExperiencia } from '../../types/Dados'

const Experience = (props: Experience2) => {

    return (
        <div className="experience">
            <h2>Experiência Profissional</h2>

            {props.dados.map((item: DadosExperiencia) => (
                    <ExperienceList key={item.id} experienceList={item} />
            ))}
            
      </div>
    )
}

export default Experience
