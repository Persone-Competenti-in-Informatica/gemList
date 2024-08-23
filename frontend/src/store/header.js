import {defineStore} from 'pinia'

export const useHeaderStore = defineStore('header', {
    state: () => {
        /** @type {{
         * expanded: boolean,
         * backgroundImage: string,
         * title: string,
         * description: string,
         * type: string,
         * content: () => void
         }} */
        return {
            expanded: false,
            backgroundImage: '',
            type: '',
            content: () => null,
        }
    },

    actions: {
        setHeader(header) {
            this.expanded = header.expanded;
            this.backgroundImage = header.backgroundImage;
            this.type = header.type;
            this.content = header.content;
        },
        setExpanded(expanded) {
            this.expanded = expanded;
        }
    }

})
