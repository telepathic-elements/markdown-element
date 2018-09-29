import {TelepathicElement} from "../telepathic-element/telepathic-element.js";
export default class MarkdownElement extends TelepathicElement{
    static describe(){return `MarkdownElement provides a quick example of how easy it is to create a new element using telepathy with a markdown template.`};
    constructor(){
        super();
        this.window = {};
        this.window.location = window.location;
        this.says = "";
    }
}