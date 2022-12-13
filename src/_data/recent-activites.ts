import { faCoffee, IconDefinition } from "@fortawesome/free-solid-svg-icons"

export interface RecentActivites {
    icon:IconDefinition,
    id: number,
    time: string,
    status:string,
    category: string | null,
    busd: number | null


}
export const recent:RecentActivites[]  = [
{
    icon:faCoffee,
    id: 882493,
    time: '1 minutes',
    status: 'activites',
    category: 'xXx',
    busd: null
},
{
    icon:faCoffee,
    id: 735295,
    time: '1 minutes',
    status: 'addition',
    category: 'xXx',
    busd: 2.4
},
{
    icon:faCoffee,
    id: 663306,
    time: '3 minutes',
    status: 'addition',
    category: 'xXx',
    busd: 5.6
},
{
    icon:faCoffee,
    id: 4642623,
    time: '5 minutes',
    status: 'addition',
    category: 'xXx',
    busd: 9.3
},
{
    icon:faCoffee,
    id: 548648,
    time: '15 minutes',
    status: 'addition',
    category: 'x4',
    busd: 2.5
},
{
    icon:faCoffee,
    id: 782165,
    time: '30 minutes',
    status: 'addition',
    category: 'x3',
    busd: 4.6
},
{
    icon:faCoffee,
    id: 653217,
    time: '35 minutes',
    status: 'newUser',
    category: null,
    busd: null
},
{
    icon:faCoffee,
    id: 747477,
    time: '45 minutes',
    status: 'activites',
    category: 'x3',
    busd: null
},
{
    icon:faCoffee,
    id: 545454,
    time: '1 hour',
    status: 'addition',
    category: 'xGold',
    busd: 9.6
},{
    icon:faCoffee,
    id: 542165,
    time: '1 hour',
    status: 'addition',
    category: 'xxx',
    busd: 3.6
},
{
    icon:faCoffee,
    id: 747477,
    time: '1 hour',
    status: 'activites',
    category: 'xGold',
    busd: null
},
{
    icon:faCoffee,
    id: 329865,
    time: '1 hour',
    status: 'addition',
    category: 'xGold',
    busd: 1.8
},
{
    icon:faCoffee,
    id: 986544,
    time: '2 hours',
    status: 'addition',
    category: 'xGold',
    busd: 5.6
},
{
    icon:faCoffee,
    id: 777777,
    time: '2 hours',
    status: 'newUser',
    category: null,
    busd: null
},
{
    icon:faCoffee,
    id: 882493,
    time: '2 hours',
    status: 'activites',
    category: 'xxx',
    busd: null
}

]