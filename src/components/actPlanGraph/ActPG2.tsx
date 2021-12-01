import {Graph1} from "../Graphs/Graph1";
import { Engrenagem, GraphBox, GreenBubble, OrangeBubble , RedBubble, InfoLeft, MainContainer2, MainHeader, Txt1 , Txt2, InfoRight , InfoContainer} from "./styles";


export default function ActionPlanGraph2(){

    return(
        
            <MainContainer2>
                <MainHeader>
                    <div>
                        <Txt1>Inspeções</Txt1>
                        <Txt2>status do dia</Txt2>
                    </div>
                    <Engrenagem/>
                </MainHeader>
                <GraphBox><Graph1/></GraphBox>
                <InfoContainer>
                    <div style={{marginTop:'10px'}}>
                    <InfoLeft>
                        <GreenBubble/>Realizados - 58.6%
                    </InfoLeft>
                    <InfoLeft>
                        <OrangeBubble/>Em Aberto - 34.9%
                    </InfoLeft>
                    <InfoLeft>
                        <RedBubble/>Não Realizadas - 6.5%
                    </InfoLeft>
                    </div>
                    <InfoRight>
                        <tr>
                            <th>Média de tempo</th>
                        </tr>
                        <tr>
                            <td>Hoje</td>
                            <td>10 min</td>
                        </tr>
                        <tr>
                            <td>Últimos 7 dias</td>
                            <td>10 min</td>
                        </tr>
                        <tr>
                            <td>Últimos 30 dias</td>
                            <td>10 min</td>
                        </tr>


                    </InfoRight>
                </InfoContainer>
            </MainContainer2>
        
    )
}