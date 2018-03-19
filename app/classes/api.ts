export class RegisterData {
    username: string;
    password: string;
}

export class LoginData {
    username: string;
    password: string;
}

export class SocialTokenRequest {
    provider: string;
    code: string;
}

export class SocialTokenResponse {
    username: string;
    email: string;
    token: string;
}

// Types
export class TypesRequest {
    offset: number;
    size: number;
}
export interface Type {
    id: number;
    typeName: string;
}
export interface TypeList {
    success: boolean;
    types: Type[];
}

// Tags
export class ConditionRequest {
    offset: number;
    size: number;
}
export interface Condition {
    id: number;
    conditionName: string;
}
export interface ConditionList {
    success: boolean;
    tags: Condition[];
}

// Events
export class EventListRequest {
    offset: number;
    size: number;
}

export class ModifyEventInfo {
    title: string;
    location: string;
    description: string;
    conditions: number[];
    type: number[];
    date: string;
    withConfirmation: boolean;
    private: boolean;
    cost: number;
}

export interface EventInfo {
    id: number;
    title: string;
    location: string;
    description: string;
    date: string;
    likes: number;
    withConfirmation: boolean;
    private: boolean;
    cost: number;
    type: number;
    tags: number[];
}

export interface EventList {
    events: EventInfo[];
}

// Other
export class BlockRequest {
    offset: number;
    size: number;
}
