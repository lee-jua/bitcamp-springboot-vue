import router from '@/router'
const state = {
    context : 'http://localhost:5000',
    soccers : [],
    movies : [],
    musics : [],
    pager :  {},
    pageNumber: 0,
    searchWord: 'null'
}
const actions = {
    async find({commit},searchWord) {
        commit('searchWord',searchWord)
        switch (searchWord) {
            case '영화' :
                router.push("/movie");
                break;
            case '음악' :
                router.push("/music");
                break;
            case '축구' :
                router.push("/soccer");
                break;
        }

    }

}
const mutations = {
    movie(state,data){
        state.movies=[]
        state.pager=data.pager
        data.list.forEach( (item)=>{
            state.movies.push({
                movieSeq: item.movieSeq, rank : item.rank, title : item.title,  rankDate : item.rankDate})
        })

    },
    searchWord(state,data){
        alert(`뮤테이션:: ${data}`)
        state.searchWord = data
    }
}
const getters ={}
export default {
    name : 'search',
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}