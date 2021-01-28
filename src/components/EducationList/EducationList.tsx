import { EducationList2 } from '../../types/EducationList'

const EducationList = (props: EducationList2) => {

    const {instituicao, curso} = props.educationList

    return (
        <div className="lista-de-formacao">
            <li>
                <h4>{instituicao}</h4>
                <p>{curso}</p>
            </li>
        </div>
    )
}

export default EducationList