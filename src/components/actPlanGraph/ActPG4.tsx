import styled from "styled-components";
import {FiSettings} from 'react-icons/fi'
import { Seletor } from "../inspAgen/styles";
import { BarGraphContainer, BarHeader, GraphBox2, GreenBubbleSmall, BarInfo, OrangeBubbleSmall } from "./styles";
import { Graph2 } from "../Graphs/Graph2";

export const Engrenagem = styled(FiSettings)`
height: 24px;
width: 24px;
:hover{cursor: pointer}

`

export default function BarGraph(){

    return(
        <BarGraphContainer>
            <BarHeader>
                <div style={{marginRight:'60px', marginLeft:'2px'}}>Histórico de eventos</div>
                <Seletor>
                        <option value="1">diário</option>
                        <option value="2">semanal</option>
                        <option value="3">mensal</option>
                        <option value="4">anual</option>
                </Seletor>
                <Engrenagem/>
            </BarHeader>
            <GraphBox2>
                <Graph2/>
            </GraphBox2>
                <BarInfo>
                    <GreenBubbleSmall/>Realizados - 58.6%
                </BarInfo>
                <BarInfo>
                    <OrangeBubbleSmall/>Em Aberto - 34.9%
                </BarInfo>
        </BarGraphContainer>

    )
}