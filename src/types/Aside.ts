import { DadosContatos, DadosEducacao } from '../../src/types/Dados'
  
export interface Contatos {
    dados: Dados
}

export interface Educacao {
    dados: Dados
}

export interface Dados{
    contatos: DadosContatos[]
    educacao: DadosEducacao[]
}