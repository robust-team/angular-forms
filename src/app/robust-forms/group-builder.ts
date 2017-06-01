import {
    Group,
    Question
} from '.';

export class GroupBuilder {

    protected questions : Question<any>[] = [];

    public constructor(
        protected code: string,
        protected description: string,
        protected groupType: string
    ) { }

    public addQuestion(question : Question<any>) : void {
        this.questions.push(question);
    }

    public build() : Group {
        return new Group(this.code, this.description, this.groupType, this.questions);
    }
}