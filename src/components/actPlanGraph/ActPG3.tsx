import {Graph1} from "../Graphs/Graph1";
import { Engrenagem, GraphBox, GreenBubble, OrangeBubble , RedBubble, InfoLeft, MainContainer3, MainHeader, Txt1 , Txt2, InfoRight , InfoContainer, VisuDet, MainContainer2} from "./styles";


export default function ActionPlanGraph3(){

    return(
            <MainContainer2>
                <MainHeader>
                    <div>
                        <Txt1>Plano de ação</Txt1>
                        <Txt2>status do dia</Txt2>
                    </div>
                    <Engrenagem/>
                </MainHeader>
                <GraphBox><Graph1/></GraphBox>
                <InfoContainer>
                    <div style={{marginTop:'10px'}}>
                    <InfoLeft>
                        <GreenBubble/>Criados - 58.6%
                    </InfoLeft>
                    <InfoLeft>
                        <OrangeBubble/>Finalizados - 34.9%
                    </InfoLeft>
                    <InfoLeft>
                        <RedBubble/>Em Aberto - 6.5%
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
                <VisuDet>visualizar detalhes</VisuDet>
            </MainContainer2>
    )
}