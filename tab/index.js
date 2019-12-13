Vue.component('aaa',{
    template:'#aaa',
    props:['arr','bis'],
    data(){
        return{
            json:this.arr,
            ind:this.bis
        }
    },

})



