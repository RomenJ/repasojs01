//Manera obsoleta

const chanchosfelices=['Fefo Feliz 0 ','Fefo Feliz 1 ','Fefo Feliz 2 ']

const gentesTristes=['Toto Triston 0 ','Toto Triston 1 ','Toto Triston ']
//ojo que exports en este tercera persona 
//exportación individual:
//module.exports=chanchosfelices;


const fn3=()=>{

    console.log('activada fn3')
}
//exportación colectiva:
module.exports={chanchosfelices,gentesTristes,fn3};
fn3();

