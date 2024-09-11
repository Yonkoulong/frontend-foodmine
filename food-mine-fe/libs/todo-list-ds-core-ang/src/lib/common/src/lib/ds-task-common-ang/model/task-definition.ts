export namespace Task {
    export enum Entities {
        TaskList = 'taskList'
    }

    export type TaskList = {
       totalPages?: number;
       totalItems?: number;
       items?: TaskItem[];
    };

    export type TaskItem = {
        id: string,
        title?: string,
        completed?: boolean,
        category?: number,
        startDate?: string,
        endDate?: string,
        subTasks?: SubTask[]
    }

    export type SubTask = {
        id?: string,
        title?: string,
        completed?: boolean
    };

    export type Category = {
        id?: string,
        name?: string
    }

    export type FilterParams = {
        keyword: string;
        from: number;
        size: number;
    }

    export type PaginationParams = Required<Pick<FilterParams, 'from' | 'size'>>
}