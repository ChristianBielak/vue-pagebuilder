import router from '../router'

export default {
    directories(state:any) { return state.directories },
    selected(state:any) { return state.selected },
    allSelected(state:any) {
        return state.selected.length == state.directories.length + state.files.length
    },
    files(state:any) { return state.files },
    isLoading(state:any) { return state.isLoading },
    lastRoute(state:any) { return state.lastRoute },
    currentRoute(state:any) { return state.currentRoute },
    prevRoute(state:any) {
        return state.currentRoute.path.substring(0, state.currentRoute.path.lastIndexOf("/") );
    }
}
