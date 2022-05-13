export const Pagetransition = {
    hidden:{
        opacity:0,
        y:300
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
            when:"beforeChildren",
            staggerChildren:0.35
        }
    },
    exit:{
        opacity:0,
        transition:{
            duration:1
        }
    }
}

export const imageanim = {
    hidden:{scale:1.3,opacity:0},
    show:{scale:1,transition:{duration:1,ease:'easeOut'},opacity:1}

}

export const titleanim = {
    hidden:{
        opacity:0,
        x:-100
    },
    show:{
        opacity:1,
        x:0,
        transition:{
            duration:1,
            ease:'easeOut'
        }
    },
}

export const Fancypages = {
    hidden:{x:'-120%'},
    show:{x:'100%',transition:{duration:1}}
}

export const Fancypagescontainer = {
    hidden:{opacity:1},
    show:{opacity:1, transition:{staggerChildren:0.1,ease:'easeOut'}}
}

export const simple = {
    hidden:{opacity:0},
    show:{opacity:1,transition:{duration:0.5}}
}

export const simplescale = {
    hidden:{opacity:0,scale:1.2,transition:{duration:0.8}},
    show:{opacity:1,transition:{duration:0.8},scale:1}
}