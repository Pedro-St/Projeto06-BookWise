import Image from "next/image";
import Logo from "../../assets/Logo.svg"
import previewImage  from '../../assets/previa.svg';
import { BoxdeLogin, HomeContainer, LoginGroup, Preview } from "./styles";

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
               <h2>Boas Vindas!</h2>
                <p>Faça seu Login ou acesse como visitante.</p>
               </LoginGroup>
              
               
             
            </BoxdeLogin>
        </HomeContainer>
    )               
}