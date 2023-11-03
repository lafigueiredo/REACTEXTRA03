import { HomeBanner, HomePerfil, HomePerfilImg, HomePerfilName, HomePerfilRole } from "./style"

import perfil from "../../assets/perfil.jpg"
export const Home = () =>{
    return(
        <HomeBanner>
            <HomePerfil>
                <HomePerfilImg src={perfil}/>
                <HomePerfilName>Leonardo Figueiredo</HomePerfilName>
                <HomePerfilRole>Desenvolvedor Full Stack</HomePerfilRole>

            </HomePerfil>
           
        </HomeBanner>
    )
}