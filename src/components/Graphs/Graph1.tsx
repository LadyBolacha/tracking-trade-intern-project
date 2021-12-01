import { ResponsivePie } from '@nivo/pie'

    
export const Graph1 = () => (
    <ResponsivePie
        data={[
            {
              "id": "Não Realizadas",
              "label": "Não Realizadas",
              "value": 6.5,
              "color": "#EB5757"
            },
            {
              "id": "Realizados",
              "label": "Realizados",
              "value": 58.6,
              "color": 'black'
            },
            {
              "id": "Em Aberto",
              "label": "Em Aberto",
              "value": 34.9,
              "color": "#fafa"
            },
      
          ]}
        
        startAngle={-37}
        colors={['#7FC008', '#DB8C28', '#EB5757']}

        innerRadius={0.8}
        enableArcLinkLabels={false}
 
        enableArcLabels={false}
        isInteractive={false}
        
        

    />
)
      