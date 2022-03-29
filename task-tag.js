class TaskList extends HTMLLIElement{

    htmlTemplate = `
    <span>Name: #NAME,</span>
    <span>Priority: #PRIORITY,</span>
    <span>ID: #ID</span>
    `

    constructor() {
        super();

    }

    attributeChangedCallback() {
        this.getAttributes();
        this.initTag();
    }

    static get observedAttributes() {
        return ['task']; 
    }

    getAttributes() {
        if (this.getAttribute('task')) {
            this.data = JSON.parse(this.getAttribute('task'));
        }
    }

    initTag(){
        if (this.data) {
            this.htmlTemplate = this.htmlTemplate.replace('#NAME', this.data.name);
            this.htmlTemplate = this.htmlTemplate.replace('#PRIORITY', this.data.priority);
            this.htmlTemplate = this.htmlTemplate.replace('#ID', this.data.id)
        }
        this.innerHTML = this.htmlTemplate;
    }

    
}

window.customElements.define('list-tag', TaskList, {extends: 'li'})
