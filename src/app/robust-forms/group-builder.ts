import {
    Group,
    Question
} from '.';

export class GroupBuilder {

    private questions : Array<Question> = [];

    public constructor(
        private code: string,
        private description: string,
        private groupType: string
    ) { }

    public addQuestion(question : Question) : void {
        this.questions.push(question);
    }

    public build() : Group {
        return new Group(this.code, this.description, this.groupType, this.questions);
    }
}