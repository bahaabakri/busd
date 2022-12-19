import { faCoffee, IconDefinition } from "@fortawesome/free-solid-svg-icons"

export interface RecentActivites {
    icon:IconDefinition,
    id: number,
    time: string,
    message:string,
    category: string | null


}
export const recent:RecentActivites[]  = [
{
    icon:faCoffee,
    id: 882493,
    time: '1 minutes',
    message: 'activites',
    category: 'x3'
},
{
    icon:faCoffee,
    id: 735295,
    time: '1 minutes',
    message: '+ 5 BUSD in',
    category: 'xXx'
},
{
    icon:faCoffee,
    id: 663306,
    time: '3 minutes',
    message: '+ 5.6 BUSD in',
    category: 'x4',
},
{
    icon:faCoffee,
    id: 4642623,
    time: '5 minutes',
    message: '+ 9.3 BUSD in',
    category: 'xXx'
},
{
    icon:faCoffee,
    id: 548648,
    time: '15 minutes',
    message: '+ 2.5 BUSD in',
    category: 'x4'
},
{
    icon:faCoffee,
    id: 782165,
    time: '30 minutes',
    message: '+ 4.6 BUSD in',
    category: 'x3'
},
{
    icon:faCoffee,
    id: 653217,
    time: '35 minutes',
    message: 'new user added',
    category: null
},
{
    icon:faCoffee,
    id: 747477,
    time: '45 minutes',
    message: 'activites',
    category: 'x3'
},
{
    icon:faCoffee,
    id: 545454,
    time: '1 hour',
    message: '+ 9.6 BUSD in',
    category: 'xGold'
},{
    icon:faCoffee,
    id: 542165,
    time: '1 hour',
    message: '+ 3.6 BUSD in',
    category: 'xXx'
},
{
    icon:faCoffee,
    id: 747477,
    time: '1 hour',
    message: 'activates',
    category: 'xGold'
},
{
    icon:faCoffee,
    id: 329865,
    time: '1 hour',
    message: '+ 1.8 BUSD in',
    category: 'xGold'
},
{
    icon:faCoffee,
    id: 986544,
    time: '2 hours',
    message: '+5.6 BUSD in',
    category: 'xGold'
},
{
    icon:faCoffee,
    id: 777777,
    time: '2 hours',
    message: 'new user added',
    category: null
},
{
    icon:faCoffee,
    id: 882493,
    time: '2 hours',
    message: 'activates',
    category: 'xxx'
}

]