import { styled } from "@stitches/react"

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
    }
})



