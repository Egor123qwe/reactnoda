export type UserDataType = {
        name: string | null,
        id: number,
        uniqueUrlName: null,
        photos: {
            small: string | null,
            large: string | null
        },
        status: string | null,
        followed: boolean,
        location?: string
}

export type DialogItemType = { NickName: string, id: number }
export type MessageType = { message : string, id : number }