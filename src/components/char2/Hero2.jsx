import './Hero2.scss'
import {Strength} from "../strength/Strength"
import { Combat } from '../combat/Combat';
import { Power } from '../power/Power';
import { Intelligence } from '../intelligence/Intelligence';
import { Speed } from '../speed/Speed';
import {Durability} from '../durability/Durability'



const Hero = ({char2}) => {

    return (

        <div className='char2-wrapper'>
            <div className='char2'>
                <div className="image__container">
                <img className='char2__image' src={char2.image.url} alt="" />
                <p className='char2__name'>{char2.name}</p>
           </div>

           <div className="ability ability1">

                <div className='ability__strength'>
                    <p className='ability__name'> Strength</p>
                    <Strength char1={char2}/>
                  
                </div>

                <div className='ability__speed'>
                    <p className='ability__name'>Speed</p>
                    <Speed char1={char2}/>
                </div>

                <div className='ability__intelligence'>
                    <p className='ability__name'>Intelligence</p>
                    <Intelligence char1={char2}/>
                    
                </div>

                <div className='ability__durability'>
                    <p className='ability__name'>Durability</p>
                    <Durability char1={char2}/>
                    

                </div>

                <div className='ability__combat'>
                    <p className='ability__name'>Combat</p>
                    <Combat char1={char2}/>
                    
                </div>

                <div className='ability__power'>
                    <p className='ability__name'>Power</p>
                    <Power char1={char2}/>
                </div>
            
           </div>
        </div>
        </div>
    );
};

export default Hero;