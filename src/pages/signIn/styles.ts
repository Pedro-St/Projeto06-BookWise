import { styled } from "@stitches/react"
import { globalCss } from "@/styles" 

export const HomeContainer = styled('div', {
    display: 'grid',
    gridGap: 5,
    gridTamplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',

    padding: '1rem',

})

export const Preview = styled('div', {
    position: 'absolute',
    width: 598,
    height: 932,
    backdropFilter: 'blur(1)',

    img:{
        borderRadius: 10,
    },
})

export const BoxdeLogin = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    gap: 40, 
    marginTop: 250,

}) 

export const LoginGroup = styled('div', {
    display: "flex",
    flexDirection: "column",
    gap: '1rem',

    
    position: 'relative',
    overflow: 'hidden',

    maxWidth: 372,
    maxHeight: 420,
    height: '100%',
    width: '100%',
    
})


export const WelcomeText = styled('div', {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'flex-start',
    padding: 0,
    gap: 2,
    width: 372,
    height: 62,
    
    h2: {

        width: 372,
        height: 34,


        fontWeight: 700,
        fontSize: 24,
        lineHeight: 34,
        color: '$gray100',
        
    },


})


