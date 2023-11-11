import Demo5 from './Demo5';

//Function Component
function FormRepairDetail( { passDataToParent } ) {

    const updateWarranty = (value) => {
        passDataToParent(value); //Child1 (FormCourtesyPhone)
    } 

    //Component UI: HTML Rendering
    return(<>
        <h2>Repair Details</h2>
        <div class="row mt-1">
            <label class="col-12 col-md-12 col-lg-4">Purchase Date *</label>
            <input class="col-12 col-md-12 col-lg-7" type="date" id="purchaseDate" required/>
        </div>      
        <div class="row mt-1">
            <label class="col-12 col-md-12 col-lg-4">Repair Date *</label>
            <input class="col-12 col-md-12 col-lg-7" type="date" id="repairDate" required/>
        </div>  
        <div class="row mt-1">
            <label class="col-12 col-md-12 col-lg-4">Broken Phone</label>
            <Demo5 />
        </div>  
        {/*Under Warranty*/}
        <div class="row">
            <fieldset class="border border-primary col-12 col-lg-11 ms-1 me-4 mb-3">
                <legend class="col-11 float-none w-auto">Under Warranty</legend>
                <div>
                    <label class="col-12 col-md-12 col-lg-4">Warranty</label>
                    <input type="checkbox" id="warranty" onChange={(event) => updateWarranty(event.target.checked)}/>  {/*passDataToParent(event.target.checked). This is shared warranty need to pass upto parent Component "Home" */}                   
                </div>
            </fieldset>             
        </div>          
        {/*Other details*/}         
        <div class="row mt-1">
            <label class="col-12 col-md-12 col-lg-4">IMEI *</label>
            <input class="col-12 col-md-12 col-lg-7" type="number" id="imei" required />
        </div>  
        <div class="row mt-2">
            <label class="col-12 col-md-12 col-lg-4">Make *</label>                
            <select class="col-12 col-md-12 col-lg-7">                        
                <option value="apple" selected>Apple</option>
                <option value="lg">LG</option>
                <option value="motorola">Motorola</option>
                <option value="nokia">Nokia</option>
                <option value="samsung">Samsung</option>
                <option value="sony">Sony</option>
                <option value="other">Other</option>                   
            </select>   
        </div>  
        <div class="row mt-1">
            <label class="col-12 col-md-12 col-lg-4">Model Number</label>
            <input class="col-12 col-md-12 col-lg-7" type="number" id="imei" required />
        </div>  
        <div class="row mt-2">
            <label class="col-12 col-md-12 col-lg-4">Fault Category *</label>                
            <select class="col-12 col-md-12 col-lg-7">               
                <option value="battery" selected>Battery</option>
                <option value="charging">Charging</option>
                <option value="screen">Screen</option>
                <option value="sd-storage">SD Storage</option>
                <option value="software">Software</option>
                <option value="other">Other</option>                
            </select>   
        </div>  
        <div class="row mt-1">
            <label class="col-12 col-md-12 col-lg-4">Description *</label>
            <textarea class="col-12 col-md-12 col-lg-7" id="description" name="description" rows="7" required></textarea>            
        </div>  
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormRepairDetail;

