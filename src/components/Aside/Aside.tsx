import React from 'react'
import { Contatos } from '../../types/Aside'
import { DadosContatos, DadosEducacao } from '../../types/Dados'

import ContactList from '../../components/ContactList/ContactList'

import EducationList from '../../components/EducationList/EducationList'

const Aside = (props: Contatos) => {

    return (
        <aside>
            <div className="sidebar">
                <h3>Contatos</h3>
                

                {props.dados.contatos.map((item: DadosContatos) => (
                    <ContactList key={item.id} contactList={item} />
                ))}
            </div>

            <div className="sidebar">
                <h3>Educação</h3>

                {props.dados.educacao.map((item: DadosEducacao) => (
                    <EducationList key={item.id} educationList={item} />
                ))} 
            </div>
        </aside>
    )
}

export default Aside




