import axios from 'axios';

import router from '../router'

export default {
    getFiles({state, commit}:any) {
        let $router = router.app.$router;
        let $route = router.app.$route;

        let request:object = {}

        if($route.name !== 'root') {
            request = {params: {directory: $route.path}}
        }

        state.isLoading = true;

        axios.get('/admin/get-files', request).then(response => {
            commit('setDirectories', response.data.directories)
            commit('setFiles', response.data.files)

            let paths = [] as Array<any>;
            response.data.directories.forEach((dir:any) => {
                paths.push({
                    path: dir.path
                })
            })

            router.addRoutes(paths);
 
            state.isLoading = false;

        })
    },

    changeDirectory({state, dispatch, commit}:any, dir:any) {
        let $router = router.app.$router;
        
        $router.push(dir)
        dispatch('getFiles');
    }
}
