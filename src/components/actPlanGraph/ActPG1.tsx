import React from 'react';
import {Graph1} from "../Graphs/Graph1";
import { Engrenagem, GraphBox, MainContainer2, MainHeader, Txt1 , Txt2} from "./styles";

export default function ActionPlanGraph1(){

    return(
            <MainContainer2>
                <MainHeader>
                    <div>
                        <Txt1>Planos de Ação</Txt1>
                        <Txt2>visão geral</Txt2>
                    </div>
                    <Engrenagem/>
                </MainHeader>
                <GraphBox><Graph1/></GraphBox>
            </MainContainer2>
    )
}