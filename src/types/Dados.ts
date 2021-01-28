export interface DadosContatos{
    id: number
    tipo: string
    contato: string
}

export interface DadosEducacao{
    id: number
    instituicao: string
    curso: string
}

export interface DadosExperiencia{
    id: number
    cargo: string
    periodo: string
    empresa: string
    local: string
    conteudo: string
}

export interface Dados{
    nome: string
    ocupacao: string
    resumo: string
    perfilProfissional: string
    contatos: DadosContatos[]
    educacao: DadosEducacao[]
    experiencia: DadosExperiencia[]
}