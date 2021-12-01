import { ResponsiveBar } from '@nivo/bar'

export const Graph2 =() => (

<ResponsiveBar
    data={[    
       {
        group: 'A',
        realizadas: 10,
        naoRealizadas: 20,
        emAndamento: 30,
      },
      {
        group: 'B',
        realizadas: 160,
        naoRealizadas: 190,
        emAndamento: 20,
      },
      {
        group: 'C',
        realizadas: 60,
        naoRealizadas: 190,
        emAndamento: 80,
      },
      {
        group: 'D',
        realizadas: 160,
        naoRealizadas: 190,
        emAndamento: 80,
      },
      {
        group: 'E',
        realizadas: 150,
        naoRealizadas: 58,
        emAndamento: 17,
      },
      {
        group: 'F',
        realizadas: 123,
        naoRealizadas: 65,
        emAndamento: 50,
      },
      {
        group: 'G',
        realizadas: 150,
        naoRealizadas: 21,
        emAndamento: 164,
      },
      {
        group: 'H',
        realizadas: 132,
        naoRealizadas: 89,
        emAndamento: 156,
      },
      {
        group: 'I',
        realizadas: 134,
        naoRealizadas: 121,
        emAndamento: 99,
      },
      {
        group: 'J',
        realizadas: 70,
        naoRealizadas: 169,
        emAndamento: 108,
      }]}
    keys={['realizadas', 'naoRealizadas', 'emAndamento']}
    indexBy="group"
    margin={{ top: 20, right: 40, bottom: 10, left: 60 }}
    padding={0.15}
    innerPadding={4}
    groupMode="grouped"
    isInteractive={false}
    axisBottom={null}
    axisTop={null}
    axisLeft={null}
    axisRight={null}
    enableLabel={false}
    enableGridY={false}

    colors={['#4B9EEA', '#C00808', '#A91B79']}
    />




)