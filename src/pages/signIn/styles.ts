import { styled } from "@stitches/react"
import { globalCss } from "@/styles" 

export const HomeContainer = styled('div', {
    display: 'grid',
    gridGap: 5,
    gridTamplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
   
    position: 'absolute',
    width: 1065,
    height: 50,
    left: 'calc(50% - 1220px/2)',
    marginTop: 25,
    
  
    padding: '1rem',

    '@media(max-width: 600px)': {
		padding: '1rem 0',
	},

})

export const Preview = styled('div', {
    position: 'absolute',
    width: 598,
    height: 932,
    backdropFilter: 'blur(1)',

    img:{
        borderRadius: 10,
    },

    '@media(max-width: 600px)': {
		display: 'none',
	},
})

export const BoxdeLogin = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    gap: 40, 
    marginTop: 250,
    marginLeft: 812,

    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '20px 24px',
        gap: 20,
    
        width: 372,
        height: 72,
        
        color: '$gray-100',
        background: '#252D4A',
        border: 'none',
        borderRadius: 8,

        cursor: 'pointer',

        '@media(max-width: 600px)': {
            maxWidth: 272,
        },
    }


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

    '.header': {
		display: 'flex',
		flexDirection: 'column',
		gap: 6,
	},

	'.header p': {
		color: '$gray300',
	},

	'@media(max-width: 600px)': {
		maxWidth: 272,
	},
    
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
        color: '$gray100',
         },


})

export const loginOptions = styled('div', {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'flex-start',
    padding: 0,
    gap: 40,

    width: 372,
    height: 420,

    lineHeight: 29,


 
})
