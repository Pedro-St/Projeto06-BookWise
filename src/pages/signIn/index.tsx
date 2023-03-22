import Image from "next/image";
import previewImage  from '../../assets/previa.svg';
import { HomeContainer, Preview } from "./styles";

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
        </HomeContainer>
    )               
}