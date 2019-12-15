Vue.component('no1', {
	template: "#no1",
	props:['box_arr'],
	data() {
		return {
			arr:this.box_arr,
			index:0,
			tran: 'l'
		}
	},
	methods: {
		l() {
			this.tran = 'l'
			this.index++
			if(this.index>=this.arr.length){
				this.index=0
			}
		},
		r() {
			this.tran = 'r'
			this.index--
			if(this.index<=-1){
				this.index=this.arr.length-1
			}
		}
	},
	mounted() {
		var img = this.$refs.img[0]
		img.onload = () => {
			var h = this.$refs.img[0].offsetHeight
			for(var i = 0; i < this.$refs.img.length; i++) {
				this.$refs.img[i].style.height = h + 'px'
			}
			this.$el.style.height = h + 'px'
		}
	}
})

new Vue({
	el: "#box",
	data:{
		arr: [
				'img/blog1.jpg',
				'img/blog2.jpg',
				'img/blog3.jpg',
				'img/blog4.jpg'
			]
	}
})