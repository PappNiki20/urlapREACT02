import {useState} from "react"
export default function FromKomponens(props){
   
    const [obj, setObj] = useState({
        nev:"",
        szulev:2000
    })
    function valtozaskezeles(event){
        console.log(event.target.value)
        let a = {...obj}
        a[event.target.id]=event.target.value
        setObj ({...a})
    }
    function adatKuld(event){
        event.preventDefault()
        console.log(obj)
       props.adatKuld(obj)
    }
    return(
        
        <form onSubmit={adatKuld}> 
            <div>
        <label htmlFor="nev">Név: </label>
        <input type="text" id="nev" value = {obj.nev} placholder="Vnév Knév" onChange={valtozaskezeles} name="nev" />
        </div>
        <div>
        <label htmlFor="szulev">Születési év</label>
        <input type="text" id="szulev" value = {obj.szulev} placholder="2002" onChange={valtozaskezeles} name="szulev" min ="1000" max ="2024"/>
        </div>
        <input type="submit" value="Küld"></input>
        </form>
       
    );
}