export interface Tarefa{
    check: boolean;
    task: string;
    priority?: Prioridade;
}

export enum Prioridade{
    baixa = 3,
    média = 2,
    alta = 1
}