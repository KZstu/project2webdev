//Import all dependencies, other Components
import { useState } from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import Demo5 from './Demo5';

//Function Component
function AdvancedJS() {    
    //State
    const [clickedButton, setClickedButton] = useState(0);
    const toggleDemo = (index) => {
        setClickedButton(index);
    }
    //Component UI: HTML Rendering
    return(<>
        <div style={{minHeight: '60vh'}}>            
            {/*BUTTONS AND DEMOS*/}
            <div class="row mt-2 p-0">
                {/*Column 1 */}
                <div class="col-12 col-md-2 bg-primary ">
                    <div class="row">
                        <button class="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(1)}>DEMO-1 </button>
                        <button class="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(2)}>DEMO-2 </button>     
                        <button class="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(3)}>DEMO-3 </button>
                        <button class="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(4)}>DEMO-4 </button>                  
                        <button class="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(5)}>DEMO-5 </button>
                    </div>
                </div>
               {/*Column 2*/}
                <div class="col-12 col-md-10 bg-secondary ">
                    <div class="row" style={{minHeight: '50vh'}}>                        
                        <div class="col-12" style={{display: clickedButton===1 ?'block': 'none'}}><Demo1 /><h3>This Demo is an automatic slideshow of 5 phone images, this demo also appears at the top of FAQ page</h3></div> {/*Demo 1 */}                   
                        <div class="col-12" style={{display: clickedButton===2 ?'block': 'none'}}><Demo2 /><h3>This Demo allows you to change the component to either a background color or background image. Your preference is remembered as long as your app is running in a browser that supports local storage, your preference is saved in \AppData\Local\Google\Chrome\UserData\Default\LocalStorage\</h3></div> {/*Demo 2 */}
                        <div class="col-12" style={{display: clickedButton===3 ?'block': 'none'}}><Demo3 /><h3>Click and drag to rotate. This is a 3D model of a phone made using React Three Fiber.<br/>I used this tutorial: https://www.youtube.com/watch?v=F5XFId3oZh4<br/>and I used this model: https://sketchfab.com/3d-models/samsung-phone-030019d343df47e598e929a785d1e749</h3></div> {/*Demo 3 */}
                        <div class="col-12" style={{display: clickedButton===4 ?'block': 'none'}}><Demo4 /><h3>This is a Scalable Vector Graphic with added mouse hover functionality, it tells you some store locations in each region of new zealand<br/>I used this SVG map: https://mapsvg.com/maps/new-zealand </h3></div> {/*Demo 4 */}
                        <div class="col-12" style={{display: clickedButton===5 ?'block': 'none'}}><Demo5 /><h3>This demo is a file upload button, it uploads and displays an image file, this demo also appears in the Repair Details Form on the home page</h3></div> {/*Demo 5 */}
                    </div>
                </div>
            </div>            
        </div>        
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default AdvancedJS;

