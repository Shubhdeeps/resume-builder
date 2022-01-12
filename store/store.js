import create from 'zustand'

const activeStore = (set) => ({
    active: "home",
    setActive: (status) =>
    set(() => ({ active: status  
    }))
})

const userData = (set) => ({
    font: {
        family: "'The Nautigal', cursive",
    },
    fontUrl: "https://fonts.googleapis.com/css2?family=Amatic+SC&family=Bad+Script&family=Bebas+Neue&family=Comfortaa:wght@300&family=Kaushan+Script&family=Luxurious+Roman&family=Mea+Culpa&family=Orbitron&family=Pacifico&family=Roboto+Condensed&family=Roboto+Mono:wght@200&family=Roboto:wght@300&family=Ruluko&family=Special+Elite&family=Syncopate&display=swap",
    primary: 'green',
    secondary: 'grey',
    text: 'white',
    


    setFont: (fonts) => set(() => ( {font: {family: fonts}} )),
    setPrimary: (color) => set(() => ( {primary: color} )),
    setSecondary: (color) => set(() => ( {secondary: color} )),
    setText: (color) => set(() => ( {text: color} )),

})

// add persist method for the activeStore
//add persist method for the personal details
export const useActiveStore = create(activeStore)
export const useUserDataStore = create(userData)