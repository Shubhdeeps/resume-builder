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
    primary: 'red',
    secondary: 'green',
    text: 'white',
    css: {},
    iconColor: 'white',
    iconSize: 1,
    


    setFont: (fonts) => set(() => ( {font: {family: fonts}} )),
    setPrimary: (color) => set(() => ( {primary: color} )),
    setSecondary: (color) => set(() => ( {secondary: color} )),
    setText: (color) => set(() => ( {text: color} )),
    setCss: (css) => set(() => ( {css: css} )),
    setIconColor: (color) => set(() => ( {iconColor: color})),
    setIconSize: (size) => set(() => ( {iconSize: size})),

})

const personalData = (set) => ({
    image: {},

    setImage: (image) => set(() => ( {image: image})),
})

// add persist method for the activeStore
//add persist method for the personal details
export const useActiveStore = create(activeStore)
export const useUserDataStore = create(userData)
export const usePesonalDataStore = create(personalData)
