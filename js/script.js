const app = new Vue({
    el: '#root',
    data: {
        arrImages: [
            {
                image: '01.webp',
                title: "Marvel's Spiderman Miles Morale",
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                counter: 0,
            },
            {
                image: '02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                counter: 1,
            },
            {
                image: '03.webp',
                title: 'Fortnite',
                text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
                counter: 2,
            },
            {
                image: '04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                counter: 3,
            },
            {
                image: '05.webp',
                title: "Marvel's Avengers",
                text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                counter: 4,
            },
        ],
        activeIndex: 0,
    },
    methods: {
        increaseActiveIndex() {
            if(this.activeIndex === this.arrImages.length - 1){
                this.activeIndex = -1;
            }
            this.activeIndex++;
        },
        decreaseActiveIndex(){
            if(this.activeIndex === 0){
                this.activeIndex = this.arrImages.length;
            }
            this.activeIndex--;
        },
    }
})