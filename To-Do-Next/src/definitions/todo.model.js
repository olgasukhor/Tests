import { generateId } from "../utils/id.utils";

export class Todo {
    constructor(
        text,
    ) {
        this.text = text;
        this.id = generateId();
    }

    id = '';
    text = '';

    isCompleted = false;
}