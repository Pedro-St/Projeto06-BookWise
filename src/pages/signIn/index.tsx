import Image from "next/image";
import previewImage  from '../../assets/previa.svg';
import googleLogo from '../../assets/google.png'
import githubLogo from '../../assets/github.png'
import rocketLogo from '../../assets/RocketLaunch.png'
import { BoxdeLogin, HomeContainer, LoginGroup, Preview, WelcomeText } from "./styles";

export default function SigIn() {
    return(
        <HomeContainer>
            <Preview>
                <Image
                    src={previewImage}
                    quality={100}
                    height={930}
                    alt="preview"
                />
            </Preview>
            <BoxdeLogin>
               <LoginGroup>
                <WelcomeText>
                    <h2>Boas Vindas!</h2>
                    <p>Faça seu Login ou acesse como visitante.</p>
                </WelcomeText>

                   
                    <button>
                        <Image  
                            src={googleLogo}
                            alt="logo"
                            quality={100}
                            height={32}
                        />
                         Entar com Google
                    </button>

                    <button>
                        <Image  
                            src={githubLogo}
                            alt="logo"
                            quality={100}
                            height={32}
                        />
                         Entrar com GitHub
                    </button>

                    <button>
                        <Image  
                            src={rocketLogo}
                            alt="logo"
                            quality={100}
                            height={32}
                        />
                        Acessar como visititante 
                    </button>



               </LoginGroup>
              
               
             
            </BoxdeLogin>
        </HomeContainer>
    )               
}