
let initialState = {
    
        NavData: [
            {

                id: Math.random(100),
                name: "Profile",
                route: "profile"
            },
            {
                id: Math.random(100),
                name: "Messages",
                route: "dialogs"
            },
            {
                id: Math.random(100),
                name: "News",
                route: "news"
            },
            {
                id: Math.random(100),
                name: "Music",
                route: "music"
            },
            {
                id: Math.random(100),
                name: "Settings",
                route: "settings"
            }
        ]
    
}


const sitebarReducer = (state = initialState) => {

    return state;
}
export default sitebarReducer