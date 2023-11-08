import './Asset/Css/style.css'
import {Skull,Heart,Banana,BluetoothSearching,Bomb,Dog,Club,Signal,Crown,Frown,ScanSearch,Castle,Airplay,Laugh,WineOff,Gamepad2} from 'lucide-react'
export const App2=()=>{
  return (
    <>
    <body>
    <center>
     <table>
       <tr><td><Skull size={48} strokeWidth={3} /></td><td><Heart size={48} strokeWidth={3} /></td><td><Banana size={48} strokeWidth={3} /></td><td><BluetoothSearching size={36} strokeWidth={3} /></td></tr>
       <tr><td><Bomb size={48} strokeWidth={1.5} /></td><td><Dog size={48} strokeWidth={1.5} /></td><td><Club size={48} strokeWidth={1.5} /></td><td><Signal size={48} strokeWidth={1.5} /></td></tr>
       <tr><td><Crown size={48} strokeWidth={2.25} /></td><td><Frown size={48} strokeWidth={2.25} /></td><td><ScanSearch size={48} strokeWidth={2.25} /></td><td><Castle size={48} strokeWidth={2.25} /></td></tr>
       <tr><td><Airplay size={48} strokeWidth={2.25} /></td><td><Laugh size={48} strokeWidth={2.25} /></td><td><WineOff size={48} strokeWidth={2.25} /></td><td><Gamepad2 size={48} strokeWidth={2.25} /></td></tr>
       
     </table>
     </center>
     </body>
    </>
  )
  }
  