import styled from "styled-components";

export const GridContainer = styled.div`
display: grid;
grid-template-columns: 0.1fr 1fr 1fr 1fr ;
grid-template-rows: 0.8fr 1fr 1fr;
grid-template-areas: 
                    "nav barGraph barGraph apg1"
                    "nav apg2 apg3 apComp"
                    "nav inspAgendaComp inspAgendaComp apComp";
;
grid-gap: 3px;

@media only screen and (max-width: 1053px) {
    grid-template-columns: 1fr 0.5fr 1fr;
      grid-template-rows: 0.1fr 0.5fr repeat(4,0.6fr); 
      grid-template-areas: 
                            "nav nav nav"
                            "barGraph barGraph barGraph"
                            "apg3 apg3 apg3"
                            "apg1 apg1 apg2"
                            "inspAgendaComp inspAgendaComp inspAgendaComp "
                            "apComp apComp apComp"

 }

 @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
      grid-template-rows: 0.1fr .5fr .5fr .5fr .5fr .7fr 1fr;
      grid-template-areas: 
                            "nav"
                            "barGraph "
                            "apg3"
                            "apg2"
                            "apg1"
                            "inspAgendaComp"
                            "apComp"

 }


`

export const MainText = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 25px;
margin-top: 10px;

color: #333333;
`

