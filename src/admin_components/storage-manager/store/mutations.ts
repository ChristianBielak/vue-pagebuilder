import {reject, dropRight} from 'lodash'

import router from '../router'

export default {
    setDirectories(state:any, directories:Array<any>) { state.directories = directories },
    setFiles(state:any, files:Array<any>) { state.files = files },

    selectFile(state:any, file:object) { state.selected.push(file) },
    unselectFile(state: any, file:object) {
        state.selected = reject(state.selected, (item:object) => {
            return item == file
        });
    },

    selectAll(state: any) {
        state.selected = [];
        state.directories.forEach((dir:any) => {
            state.selected.push(dir)
        })
        state.files.forEach((file:any) => {
            state.selected.push(file)
        })
    }, 
    unselectAll(state: any) {
        state.selected = [];
    },
    directoryUp(state: any) {
        //@ts-ignore
        let { routes } = router.options

        if(routes && routes.length) {
            let newRoute = ''
        }

    },
    directoryRoot(state: any) {
        //@ts-ignore
        router.push({path: '/'})
    },

    updateRoutes(state:any, routes:any) {
        state.lastRoute = routes.last
        state.currentRoute = routes.current
    }
}
